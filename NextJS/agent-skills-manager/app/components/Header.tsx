"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2 font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white shadow">
            A
          </span>
          <span className="hidden sm:inline">Agent Skills</span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/skills/create"
            className="ml-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow transition-colors hover:bg-indigo-500"
          >
            + New Skill
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white lg:hidden"
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/70 lg:hidden"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div
            id="mobile-nav"
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col border-l border-zinc-800 bg-zinc-900 shadow-2xl lg:hidden"
          >
            <div className="flex h-14 items-center border-b border-zinc-800 px-5 sm:h-16">
              <Link href="/" onClick={closeMenu} className="flex items-center gap-2 font-semibold text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold">A</span>
                Agent Skills
              </Link>
            </div>
            <nav id="mobile-nav" className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobile navigation">
              {NAV_ITEMS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                >
                  {label}
                </Link>
              ))}
              <div className="mt-4 border-t border-zinc-800 pt-4">
                <Link
                  href="/skills/create"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
                >
                  + New Skill
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

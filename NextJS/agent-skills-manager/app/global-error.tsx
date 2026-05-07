"use client";

import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en" data-theme="dark" className="dark min-h-screen">
      <body className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 text-zinc-100 antialiased">
        <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center shadow-2xl">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-3xl">
            ⚠️
          </span>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Something went wrong
            </h2>
            <p className="text-sm text-zinc-400">{error.message}</p>
          </div>
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-indigo-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

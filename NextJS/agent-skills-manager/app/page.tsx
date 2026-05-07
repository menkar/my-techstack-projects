import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-zinc-950">
      {/* Gradient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-14 sm:px-6 sm:py-20 lg:gap-24 lg:px-8 lg:py-28">

        {/* Hero */}
        <section className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:gap-16 lg:text-left">
          <div className="flex flex-1 flex-col gap-6">
            <div className="inline-flex self-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-400 lg:self-start">
              Agent Skills Manager
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Manage your agent{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                skills
              </span>{" "}
              with ease
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-zinc-400">
              A focused workspace to browse, inspect, and add the capabilities
              your agents rely on — styled for clarity, built for speed.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/skills"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-600 px-6 text-sm font-semibold text-white shadow transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Browse skills
              </Link>
              <Link
                href="/skills/create"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 px-6 text-sm font-semibold text-zinc-200 shadow transition-colors hover:border-zinc-600 hover:bg-zinc-700 hover:text-white"
              >
                Create a skill
              </Link>
            </div>
          </div>

          {/* Info card */}
          <div className="w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl ring-1 ring-white/5 lg:max-w-xs">
            <div className="border-b border-zinc-800 bg-zinc-900 px-5 py-4">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
            </div>
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">Stack</p>
                <span className="rounded-full bg-indigo-500/15 px-2.5 py-0.5 text-xs font-medium text-indigo-400">
                  Next.js 16
                </span>
              </div>
              {[
                { label: "Framework", value: "Next.js App Router" },
                { label: "Styling", value: "Tailwind CSS v4 + DaisyUI" },
                { label: "Language", value: "TypeScript" },
                { label: "State", value: "React Server Actions" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-zinc-500">{row.label}</span>
                  <span className="font-medium text-zinc-300">{row.value}</span>
                </div>
              ))}
              <div className="pt-2">
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
                >
                  Documentation →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section>
          <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-zinc-600 lg:text-left">
            What&apos;s included
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {[
              {
                icon: "⚡",
                title: "Fast by default",
                body: "Server components fetch and stream data with zero client-side overhead.",
              },
              {
                icon: "🎨",
                title: "Dark-first design",
                body: "Tailwind dark: classes + DaisyUI dark theme — consistent on every screen.",
              },
              {
                icon: "📐",
                title: "Fully responsive",
                body: "Mobile drawer navigation, fluid grids, and readable typography from 320 px up.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 shadow transition-colors hover:border-indigo-500/40 hover:bg-zinc-900"
              >
                <div className="mb-3 text-2xl">{f.icon}</div>
                <h3 className="mb-1.5 font-semibold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{f.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

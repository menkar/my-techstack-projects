import Link from "next/link";
import PageShell from "../../components/PageShell";

export default function NotFound() {
  return (
    <PageShell className="max-w-lg">
      <div className="flex flex-col items-center gap-6 rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center shadow-xl">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800 text-3xl">
          🔍
        </span>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">404</p>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Skill not found
          </h1>
          <p className="text-zinc-400">
            That skill does not exist or the link may be incorrect.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/skills"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow transition-colors hover:bg-indigo-500"
          >
            Browse skills
          </Link>
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 px-5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

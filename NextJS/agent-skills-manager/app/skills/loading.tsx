import PageShell from "../components/PageShell";

export default function SkillsLoading() {
  return (
    <PageShell>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="h-3 w-20 animate-pulse rounded bg-zinc-800" />
            <div className="h-9 w-32 animate-pulse rounded-lg bg-zinc-800" />
            <div className="h-4 w-40 animate-pulse rounded bg-zinc-800" />
          </div>
          <div className="h-10 w-40 animate-pulse rounded-lg bg-zinc-800" />
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <li key={i} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <div className="flex flex-col gap-3">
                <div className="h-5 w-20 animate-pulse rounded-full bg-zinc-800" />
                <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-800" />
                <div className="h-3 w-full animate-pulse rounded bg-zinc-800" />
                <div className="h-3 w-4/5 animate-pulse rounded bg-zinc-800" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}

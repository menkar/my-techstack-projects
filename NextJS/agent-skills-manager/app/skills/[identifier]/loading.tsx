import PageShell from "../../components/PageShell";

export default function SkillLoading() {
  return (
    <PageShell className="max-w-3xl">
      <div className="flex flex-col gap-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-12 animate-pulse rounded bg-zinc-800" />
          <div className="h-4 w-3 animate-pulse rounded bg-zinc-800" />
          <div className="h-4 w-40 animate-pulse rounded bg-zinc-800" />
        </div>
        {/* Header */}
        <div className="space-y-4 border-b border-zinc-800 pb-8">
          <div className="h-6 w-24 animate-pulse rounded-full bg-zinc-800" />
          <div className="h-9 w-3/4 animate-pulse rounded-lg bg-zinc-800" />
          <div className="space-y-2">
            <div className="h-5 w-full animate-pulse rounded bg-zinc-800" />
            <div className="h-5 w-5/6 animate-pulse rounded bg-zinc-800" />
          </div>
        </div>
        {/* Metadata */}
        <div className="grid overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col gap-2 p-5 sm:p-6">
              <div className="h-3 w-20 animate-pulse rounded bg-zinc-800" />
              <div className="h-4 w-32 animate-pulse rounded bg-zinc-800" />
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

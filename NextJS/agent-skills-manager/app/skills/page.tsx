import Link from "next/link";
import PageShell from "../components/PageShell";
import { getSkills } from "./SKILLS";

export default async function SkillsPage() {
  const skills = await getSkills();

  return (
    <PageShell>
      <div className="flex flex-col gap-8">

        {/* Page header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Directory
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Skills
            </h1>
            <p className="text-zinc-400">
              {skills.length === 0
                ? "No skills yet — add your first one."
                : `${skills.length} skill${skills.length === 1 ? "" : "s"} available.`}
            </p>
          </div>
          <Link
            href="/skills/create"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-indigo-500"
          >
            + Create new skill
          </Link>
        </div>

        {/* Empty state */}
        {skills.length === 0 ? (
          <div className="flex flex-col items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 py-16 text-center">
            <p className="text-zinc-500">Nothing here yet.</p>
            <Link
              href="/skills/create"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Add your first skill
            </Link>
          </div>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {skills.map((skill) => (
              <li key={skill.id}>
                <Link
                  href={`/skills/${skill.id}`}
                  className="group flex flex-col gap-2.5 rounded-xl border border-zinc-800 bg-zinc-900 p-5 shadow transition-all hover:border-indigo-500/50 hover:bg-zinc-800/80"
                >
                  <span className="inline-block self-start rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-400">
                    {skill.category}
                  </span>
                  <span className="font-semibold text-zinc-100 transition-colors group-hover:text-white">
                    {skill.name}
                  </span>
                  <span className="line-clamp-2 text-sm leading-relaxed text-zinc-500">
                    {skill.description}
                  </span>
                  <span className="mt-auto self-end text-xs text-indigo-500 opacity-0 transition-opacity group-hover:opacity-100">
                    View details →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageShell>
  );
}

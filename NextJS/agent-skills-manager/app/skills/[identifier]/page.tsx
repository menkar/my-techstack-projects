import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "../../components/PageShell";
import { getSkills } from "../SKILLS";

type SkillPageProps = {
  params: Promise<{ identifier: string }>;
};

export default async function SkillDetailsPage({ params }: SkillPageProps) {
  const skills = await getSkills();
  const { identifier } = await params;
  const skill = skills.find((s) => s.id === identifier);
  if (!skill) notFound();

  return (
    <PageShell className="max-w-3xl">
      <article className="flex flex-col gap-8">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/skills" className="transition-colors hover:text-zinc-300">
            Skills
          </Link>
          <span aria-hidden>/</span>
          <span className="max-w-[14rem] truncate text-zinc-300 sm:max-w-none">
            {skill.name}
          </span>
        </nav>

        {/* Hero block */}
        <header className="space-y-4 border-b border-zinc-800 pb-8">
          <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            {skill.category}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {skill.name}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
            {skill.description}
          </p>
        </header>

        {/* Metadata grid */}
        <dl className="grid overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 sm:grid-cols-2">
          {[
            { label: "Skill ID", value: skill.id, mono: true },
            { label: "Category", value: skill.category, mono: false },
            { label: "Created at", value: skill.createdAt, mono: true },
            { label: "Updated at", value: skill.updatedAt, mono: true },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-1 p-5 sm:p-6 ${
                i < 2 ? "border-b border-zinc-800 sm:border-b sm:last:border-b-0" : ""
              } ${i % 2 === 0 ? "sm:border-r sm:border-zinc-800" : ""}`}
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
                {item.label}
              </dt>
              <dd className={`text-sm text-zinc-300 ${item.mono ? "font-mono" : ""}`}>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/skills"
            className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 px-5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white sm:flex-none"
          >
            ← Back to list
          </Link>
          <Link
            href="/skills/create"
            className="inline-flex h-10 flex-1 items-center justify-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow transition-colors hover:bg-indigo-500 sm:flex-none"
          >
            Add another skill
          </Link>
        </div>
      </article>
    </PageShell>
  );
}

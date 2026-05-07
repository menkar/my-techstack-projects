import Link from "next/link";
import PageShell from "../../components/PageShell";

export default function RegisterPage() {
  return (
    <PageShell className="max-w-md">
      <div className="flex flex-col gap-8">

        <header className="space-y-1.5 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Account
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Create account
          </h1>
          <p className="text-zinc-400">
            Registration is not yet implemented. This is a styled placeholder.
          </p>
        </header>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl sm:p-8">
          <div className="flex flex-col gap-5">
            {[
              { label: "Full name", type: "text", placeholder: "Jane Smith" },
              { label: "Email", type: "email", placeholder: "jane@example.com" },
              { label: "Password", type: "password", placeholder: "••••••••" },
              { label: "Confirm password", type: "password", placeholder: "••••••••" },
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-zinc-300">{field.label}</label>
                <input
                  type={field.type}
                  disabled
                  placeholder={field.placeholder}
                  className="w-full cursor-not-allowed rounded-lg border border-zinc-700 bg-zinc-800/50 px-3.5 py-2.5 text-sm text-zinc-500 outline-none"
                />
              </div>
            ))}
            <button
              type="button"
              disabled
              className="mt-1 inline-flex h-10 w-full cursor-not-allowed items-center justify-center rounded-lg bg-indigo-600/50 text-sm font-semibold text-white/50"
            >
              Create account (not implemented)
            </button>
            <p className="text-center text-sm text-zinc-600">
              Already have an account?{" "}
              <Link href="/login" className="text-indigo-400 hover:text-indigo-300">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

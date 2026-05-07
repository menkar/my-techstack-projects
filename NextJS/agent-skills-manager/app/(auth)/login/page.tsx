import Link from "next/link";
import PageShell from "../../components/PageShell";

export default function LoginPage() {
  return (
    <PageShell className="max-w-md">
      <div className="flex flex-col gap-8">

        <header className="space-y-1.5 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Account
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sign in
          </h1>
          <p className="text-zinc-400">
            Authentication is not yet wired. This is a styled placeholder.
          </p>
        </header>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl sm:p-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-zinc-300">Email</label>
              <input
                type="email"
                disabled
                placeholder="you@example.com"
                className="w-full cursor-not-allowed rounded-lg border border-zinc-700 bg-zinc-800/50 px-3.5 py-2.5 text-sm text-zinc-500 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-zinc-300">Password</label>
              <input
                type="password"
                disabled
                placeholder="••••••••"
                className="w-full cursor-not-allowed rounded-lg border border-zinc-700 bg-zinc-800/50 px-3.5 py-2.5 text-sm text-zinc-500 outline-none"
              />
            </div>
            <button
              type="button"
              disabled
              className="mt-1 inline-flex h-10 w-full cursor-not-allowed items-center justify-center rounded-lg bg-indigo-600/50 text-sm font-semibold text-white/50"
            >
              Sign in (not implemented)
            </button>
            <p className="text-center text-sm text-zinc-600">
              No account?{" "}
              <Link href="/register" className="text-indigo-400 hover:text-indigo-300">
                Register
              </Link>
            </p>
          </div>
        </div>

        <Link
          href="/skills"
          className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 px-5 text-sm font-medium text-zinc-300 text-center transition-colors hover:bg-zinc-700 hover:text-white"
        >
          Continue without signing in →
        </Link>
      </div>
    </PageShell>
  );
}

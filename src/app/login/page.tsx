export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-20">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-950">Client Login</h1>
        <p className="mt-3 text-slate-600">
          Sign in to access your account, shipment updates, and client tools.
        </p>

        <form className="mt-8 grid gap-4">
          <input className="rounded-xl border border-slate-300 px-4 py-3" type="email" placeholder="Email address" />
          <input className="rounded-xl border border-slate-300 px-4 py-3" type="password" placeholder="Password" />
          <button className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

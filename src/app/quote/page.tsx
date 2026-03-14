export default function QuotePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-slate-950">Request Quote</h1>
      <p className="mt-4 text-slate-600">
        Submit your cargo and route requirements for customs clearing, freight forwarding, or regional logistics support.
      </p>

      <form className="mt-10 grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
        <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Company name" />
        <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Contact person" />
        <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Email address" />
        <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Phone number" />
        <input className="rounded-xl border border-slate-300 px-4 py-3 md:col-span-2" placeholder="Origin and destination" />
        <textarea className="min-h-36 rounded-xl border border-slate-300 px-4 py-3 md:col-span-2" placeholder="Cargo details, weight, volume, mode, timing, and special requirements" />
        <button className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 md:w-fit">
          Submit Quote Request
        </button>
      </form>
    </main>
  );
}

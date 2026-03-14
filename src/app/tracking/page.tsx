export default function TrackingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-slate-950">Tracking</h1>
      <p className="mt-4 text-slate-600">
        Shipment tracking portal placeholder. Connect your live tracking engine or customer status API here.
      </p>

      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <label className="block text-sm font-semibold text-slate-900">Tracking Reference</label>
        <input
          type="text"
          placeholder="Enter shipment, container, or reference number"
          className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
        />
        <button className="mt-4 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950">
          Track Shipment
        </button>
      </div>
    </main>
  );
}

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-slate-950">Services</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        AfriBridge provides customs clearing, freight forwarding, cross-border logistics,
        trade documentation, and compliance support for enterprise cargo movement.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          ["customs", "Customs Clearing", "Import, export, transit and bonded cargo clearance support."],
          ["freight", "Freight Forwarding", "Road, sea, air and multimodal freight coordination."],
          ["cross-border", "Cross-Border Logistics", "Border process execution and corridor movement support."],
          ["compliance", "Trade Compliance", "Documents, permits, classification, and readiness support."],
        ].map(([id, title, text]) => (
          <section key={id} id={id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
            <p className="mt-3 text-slate-600">{text}</p>
          </section>
        ))}
      </div>
    </main>
  );
}

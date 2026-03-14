export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-slate-950">Resources</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Operational reference material for certificates, documents, compliance requirements, and regional corridor readiness.
      </p>

      <div className="mt-12 grid gap-6">
        <section id="certificates" className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Certificates</h2>
          <p className="mt-3 text-slate-600">Business registration, tax clearance, and supporting operational certificates.</p>
        </section>

        <section id="documents" className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Documents</h2>
          <p className="mt-3 text-slate-600">Commercial invoices, packing lists, bills of lading, customs forms, and shipment paperwork.</p>
        </section>

        <section id="compliance" className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Compliance Requirements</h2>
          <p className="mt-3 text-slate-600">Permit readiness, product compliance, classification support, and border process preparation.</p>
        </section>

        <section id="corridors" className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Trade Corridors</h2>
          <p className="mt-3 text-slate-600">North–South, Walvis Bay, Dar es Salaam, and Beira corridor operational references.</p>
        </section>
      </div>
    </main>
  );
}

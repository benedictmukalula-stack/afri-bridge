export default function IndustriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-slate-950">Industries</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Sector-aligned logistics support for commercial, industrial, and project-driven cargo environments.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          ["mining", "Mining & Industrial"],
          ["retail", "Retail & FMCG"],
          ["automotive", "Automotive"],
          ["project-cargo", "Project Cargo"],
        ].map(([id, title]) => (
          <section key={id} id={id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
            <p className="mt-3 text-slate-600">
              Dedicated logistics coordination and compliance support tailored to {title.toLowerCase()} operations.
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}

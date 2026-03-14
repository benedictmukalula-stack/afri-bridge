import Link from "next/link";

const services = [
  {
    title: "Customs Clearing",
    text: "Fast, compliant customs clearing support for imports, exports, and cross-border cargo across key African trade routes.",
  },
  {
    title: "Freight Forwarding",
    text: "Road, sea, and multimodal freight coordination with dependable movement planning and shipment visibility.",
  },
  {
    title: "Trade Compliance",
    text: "Documentation, permits, tariff support, and border process coordination for smoother cargo movement.",
  },
  {
    title: "Vehicle Export Support",
    text: "End-to-end export coordination for vehicles, including documentation and logistics execution.",
  },
];

const corridors = [
  "North–South Corridor",
  "Walvis Bay Corridor",
  "Dar es Salaam Corridor",
  "Beira Corridor",
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              AfriBridge Clearing & Logistics
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Enterprise logistics and cross-border trade execution for Africa.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We help importers, exporters, distributors, and project cargo clients
              move goods efficiently through customs, corridors, and regional supply
              chains with confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Request Quote
              </Link>
              <Link
                href="/tracking"
                className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Track Shipment
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-950">
              Core operational strengths
            </h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">
                  Cross-border clearing
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Customs processing and document flow support across regional trade lanes.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">
                  Freight coordination
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  End-to-end movement planning for commercial cargo and priority consignments.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">
                  Documentation readiness
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Compliance-focused handling of shipment paperwork and trade support requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            Logistics services designed for reliability and regional scale.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Trade Corridors
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Supporting cargo movement across strategic African routes.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Our logistics model is aligned to regional corridor execution, border
                process efficiency, and dependable cargo movement for commercial clients.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {corridors.map((corridor) => (
                <div
                  key={corridor}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="text-base font-semibold text-slate-900">
                    {corridor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 px-8 py-12 text-white">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to move cargo with confidence?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Speak to AfriBridge about customs clearing, freight execution, trade compliance,
            and regional logistics support.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Request Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

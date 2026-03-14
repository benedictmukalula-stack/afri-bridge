import Link from "next/link";

const serviceCards = [
  {
    title: "Customs Clearing",
    text: "Reliable customs processing for imports, exports, and transit cargo across regional border posts.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Freight Forwarding",
    text: "Coordinated road, sea, and multimodal freight solutions for enterprise cargo movement.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Trade Compliance",
    text: "Documentation, permits, and operational compliance support for smooth cargo execution.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
];

const stats = [
  { value: "Cross-Border", label: "Regional corridor execution" },
  { value: "Enterprise", label: "Corporate logistics support" },
  { value: "Compliance", label: "Document readiness and process control" },
];

export default function HomePage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">
              AfriBridge Clearing & Logistics
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Premium African logistics, customs clearing, and freight execution.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Built for importers, exporters, distributors, project cargo operators,
              and enterprise clients that need dependable movement across African trade corridors.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Request Quote
              </Link>
              <Link
                href="/tracking"
                className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Track Shipment
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-base font-semibold text-slate-950">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=80"
              alt="Premium logistics operations environment"
              className="h-[540px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">
            Core Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            Logistics services designed for scale, compliance, and execution.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {serviceCards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <img src={card.image} alt={card.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=1400&q=80"
              alt="Trade corridor freight operations"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">
              Regional Capability
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Corridor-focused execution across African supply chains.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              AfriBridge is positioned for customs coordination, freight management,
              shipment visibility, and client support across strategic trade corridors and border environments.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["North–South Corridor", "Walvis Bay Corridor", "Dar es Salaam Corridor", "Beira Corridor"].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-semibold text-slate-900">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-12 text-white">
          <h2 className="text-3xl font-semibold tracking-tight">
            Move cargo with confidence.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Engage AfriBridge for customs clearing, freight execution, vehicle export support,
            trade documentation, and regional logistics coordination.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Request Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
import CTAStrip from '@/components/CTAStrip';

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Mining & Minerals',
      cargo: 'Ore, concentrates, diamonds, precious metals',
      compliance: 'Conflict mineral compliance, export licenses, heavy equipment',
      icon: '⛏️',
    },
    {
      name: 'Oil & Gas / Energy',
      cargo: 'Equipment, pipe, turbines, drilling materials',
      compliance: 'ITAR controls, pressure vessel certification, hazmat protocols',
      icon: '🛢️',
    },
    {
      name: 'FMCG & Retail',
      cargo: 'Consumer goods, packaged food, apparel, electronics',
      compliance: 'Tariff classification, anti-counterfeiting, duty optimization',
      icon: '🛍️',
    },
    {
      name: 'Automotive & Parts',
      cargo: 'Vehicles, engines, spare parts, components',
      compliance: 'Rules of origin (SADC), HS coding, regulatory standards',
      icon: '🚗',
    },
    {
      name: 'Agriculture',
      cargo: 'Grains, seeds, produce, fertilizer, animal feed',
      compliance: 'Phytosanitary certificates, quarantine, food safety',
      icon: '🌾',
    },
    {
      name: 'Manufacturing & Machinery',
      cargo: 'Industrial equipment, CNC machines, textile machinery',
      compliance: 'CE marking, technical documentation, tariff codes',
      icon: '🏭',
    },
    {
      name: 'Pharmaceutical & Medical',
      cargo: 'Medicines, vaccines, medical devices, lab equipment',
      compliance: 'Pharmaceutical licensing, cold chain, temperature control',
      icon: '💊',
    },
    {
      name: 'Construction & Infrastructure',
      cargo: 'Steel, cement, construction equipment, materials',
      compliance: 'Project permits, invoice verification, tariff optimization',
      icon: '🏗️',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1f2937 100%)', color: 'white' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Specialized clearing and forwarding expertise across Africa's key sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Featured Image */}
          <img
            src="https://images.pexels.com/photos/13961752/pexels-photo-13961752.jpeg"
            alt="Logistics industry overview"
            className="w-full h-80 object-cover rounded-lg mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {industries.map((industry, i) => (
              <div key={i} className="card premium-card">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#0f172a' }}>
                  {industry.name}
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-600 mb-1 uppercase tracking-wide">Typical Cargo</h4>
                  <p className="text-gray-700 mb-4">{industry.cargo}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-gray-600 mb-1 uppercase tracking-wide">Compliance Notes</h4>
                  <p className="text-gray-700 text-sm">{industry.compliance}</p>
                </div>
                <Link href="/quote" className="text-emerald-600 font-semibold hover:text-emerald-700">
                  Get a Quote →
                </Link>
              </div>
            ))}
          </div>

          {/* Case Study Strip */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card premium-card">
              <h4 className="font-bold text-sm mb-2 text-emerald-600 uppercase tracking-wide">Case Study</h4>
              <h3 className="font-bold text-lg mb-2">Mining Concentrate Export</h3>
              <p className="text-sm text-gray-600 mb-4">
                Zambia-based mining company shipped 50 containers of copper concentrate to China in 48 hours with full compliance clearance.
              </p>
              <a href="#" className="text-emerald-600 font-semibold text-sm">
                Read More →
              </a>
            </div>

            <div className="card premium-card">
              <h4 className="font-bold text-sm mb-2 text-emerald-600 uppercase tracking-wide">Case Study</h4>
              <h3 className="font-bold text-lg mb-2">Pharma Cold Chain</h3>
              <p className="text-sm text-gray-600 mb-4">
                Temperature-controlled vaccine shipment from South Africa to 5 SADC countries maintained 2-8°C throughout transit.
              </p>
              <a href="#" className="text-emerald-600 font-semibold text-sm">
                Read More →
              </a>
            </div>

            <div className="card premium-card">
              <h4 className="font-bold text-sm mb-2 text-emerald-600 uppercase tracking-wide">Case Study</h4>
              <h3 className="font-bold text-lg mb-2">FMCG Regional Distribution</h3>
              <p className="text-sm text-gray-600 mb-4">
                Consumer goods consolidation across 4 SADC borders cleared in 36 hours with optimized tariff classification.
              </p>
              <a href="#" className="text-emerald-600 font-semibold text-sm">
                Read More →
              </a>
            </div>
          </div>

          {/* Why AfriBridge */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sector Expertise',
                desc: 'Deep knowledge of compliance, tariffs, and logistics for each industry vertical',
              },
              {
                title: 'Pre-Compliance',
                desc: 'HS coding, duty analysis, and documentation reviewed before shipment submission',
              },
              {
                title: 'Cost Optimization',
                desc: 'Tariff strategy and consolidation options to minimize landed costs',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-4xl mb-4" style={{ color: '#10b981' }}>
                  ✓
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Need Specialized Industry Expertise?"
        subheadline="Tell us about your shipment. We have solutions for every sector."
        buttonText="Request a Quote"
        buttonLink="/quote"
      />
    </>
  );
}

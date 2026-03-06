import Link from 'next/link';
import CTAStrip from '@/components/CTAStrip';
import ImagePlaceholder from '@/components/ImagePlaceholder';

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
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
            letterSpacing: '-0.02em'
          }}>
            Industries We Serve
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{
            color: '#E5E7EB',
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.8'
          }}>
            Specialized clearing and forwarding expertise across Africa's key sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container-max">
          {/* Featured Image */}
          <ImagePlaceholder
            type="section"
            alt="Logistics industry overview"
            className="fade-in-up"
            style={{ marginBottom: '2.5rem', height: '260px' }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {industries.map((industry, i) => (
              <div key={i} className="card-premium fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{industry.icon}</div>
                <h3 style={{ fontSize: '1.375rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>
                  {industry.name}
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    Typical Cargo
                  </h4>
                  <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.9375rem' }}>{industry.cargo}</p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    Compliance Notes
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{industry.compliance}</p>
                </div>
                <Link href="/quote" className="premium-link">
                  Get a Quote →
                </Link>
              </div>
            ))}
          </div>

          {/* Case Study Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[
              {
                title: 'Mining Concentrate Export',
                desc: 'Zambia-based mining company shipped 50 containers of copper concentrate to China in 48 hours with full compliance clearance.',
              },
              {
                title: 'Pharma Cold Chain',
                desc: 'Temperature-controlled vaccine shipment from South Africa to 5 SADC countries maintained 2-8°C throughout transit.',
              },
              {
                title: 'FMCG Regional Distribution',
                desc: 'Consumer goods consolidation across 4 SADC borders cleared in 36 hours with optimized tariff classification.',
              },
            ].map((study, i) => (
              <div key={i} className="card-premium">
                <div className="badge badge-secondary" style={{ marginBottom: '1rem' }}>
                  Case Study
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.75rem', color: '#111827' }}>
                  {study.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                  {study.desc}
                </p>
                <a href="#" className="premium-link" style={{ fontSize: '0.875rem' }}>
                  Read More →
                </a>
              </div>
            ))}
          </div>

          {/* Why AfriBridge */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
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
              <div key={i} className="card-premium">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--emerald)' }}>
                  ✓
                </div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.75rem', color: '#111827' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.9375rem', color: '#6b7280' }}>{item.desc}</p>
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

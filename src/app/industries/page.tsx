import Link from 'next/link';
import CTAStrip from '@/components/CTAStrip';

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Mining & Minerals',
      cargo: 'Ore, concentrates, diamonds, precious metals',
      compliance: 'Conflict mineral compliance, export licenses, heavy equipment',
      icon: () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 19.5 7 19.5 17 12 22 4.5 17 4.5 7 12 2"></polygon><path d="M12 22v-10M12 12L4.5 7M12 12l7.5-5M12 12l-7.5 5M12 12l7.5 5"></path></svg>,
    },
    {
      name: 'Oil & Gas / Energy',
      cargo: 'Equipment, pipe, turbines, drilling materials',
      compliance: 'ITAR controls, pressure vessel certification, hazmat protocols',
      icon: () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6m0 4v6M8 8v8m8-8v8M4 12h16M3 6h18M3 18h18"></path></svg>,
    },
    {
      name: 'FMCG & Retail',
      cargo: 'Consumer goods, packaged food, apparel, electronics',
      compliance: 'Tariff classification, anti-counterfeiting, duty optimization',
      icon: () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>,
    },
    {
      name: 'Automotive & Parts',
      cargo: 'Vehicles, engines, spare parts, components',
      compliance: 'Rules of origin (SADC), HS coding, regulatory standards',
      icon: () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="9" cy="18" r="3"></circle><path d="M5 12H1v6h22v-6h-4m0-2V8h-8V6m-2 0H3v6h2m0 0V8"></path></svg>,
    },
    {
      name: 'Agriculture',
      cargo: 'Grains, seeds, produce, fertilizer, animal feed',
      compliance: 'Phytosanitary certificates, quarantine, food safety',
      icon: () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><path d="M12 6v6m0 4v2M6 12h12"></path></svg>,
    },
    {
      name: 'Manufacturing & Machinery',
      cargo: 'Industrial equipment, CNC machines, textile machinery',
      compliance: 'CE marking, technical documentation, tariff codes',
      icon: () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><path d="M12 1v6m0 6v4M6 12h5m7 0h5M4.22 4.22l4.24 4.24m5.08 0l4.24-4.24M4.22 19.78l4.24-4.24m5.08 0l4.24 4.24"></path></svg>,
    },
    {
      name: 'Pharmaceutical & Medical',
      cargo: 'Medicines, vaccines, medical devices, lab equipment',
      compliance: 'Pharmaceutical licensing, cold chain, temperature control',
      icon: () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"></path><path d="M21 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM8 9h8M8 13h4"></path></svg>,
    },
    {
      name: 'Construction & Infrastructure',
      cargo: 'Steel, cement, construction equipment, materials',
      compliance: 'Project permits, invoice verification, tariff optimization',
      icon: () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h2m2 0h2m2 0h2m2 0h2m2 0h2M3 4h2m2 0h2m2 0h2m2 0h2m2 0h2M3 20h2m2 0h2m2 0h2m2 0h2m2 0h2"></path><line x1="12" y1="2" x2="12" y2="22"></line></svg>,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1f2937 100%)', color: 'white' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-3" style={{
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
            letterSpacing: '-0.02em',
            fontWeight: '800'
          }}>
            Industries We Serve
          </h1>
          <p className="text-sm md:text-base max-w-2xl" style={{
            color: '#E5E7EB',
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.65',
            fontSize: '0.875rem'
          }}>
            Specialized clearing and forwarding expertise across Africa's key sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container-max">
          {/* Featured Image */}
          <img
            src="https://images.pexels.com/photos/17765440/pexels-photo-17765440.jpeg"
            alt="Logistics industry overview"
            className="fade-in-up"
            style={{ marginBottom: '2.5rem', height: '260px', width: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {industries.map((industry, i) => (
              <div key={i} className="card-premium fade-in-up" style={{ animationDelay: `${i * 0.05}s`, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ marginBottom: '1rem', width: '100%', textAlign: 'center', color: 'var(--emerald)' }}>{industry.icon()}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>
                  {industry.name}
                </h3>
                <div style={{ marginBottom: '1rem', width: '100%' }}>
                  <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    Typical Cargo
                  </h4>
                  <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.9375rem' }}>{industry.cargo}</p>
                </div>
                <div style={{ marginBottom: '1.5rem', width: '100%' }}>
                  <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    Compliance Notes
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{industry.compliance}</p>
                </div>
                <Link href="/quote" className="premium-link" style={{ marginTop: 'auto' }}>
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

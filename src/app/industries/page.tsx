import Link from 'next/link';
import CTAStrip from '@/components/CTAStrip';

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Mining & Minerals',
      cargo: 'Ore, concentrates, diamonds, precious metals',
      compliance: 'Conflict mineral compliance, export licenses, heavy equipment',
      icon: () => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M11 21h2v-2h-2v2zm6-4h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2V7h-2v2zM7 21h2v-2H7v2zm0-4h2v-2H7v2zm0-4h2v-2H7v2zM3 5v14h18V5H3zm4-2h10v2H7V3z"/></svg>,
    },
    {
      name: 'Oil & Gas / Energy',
      cargo: 'Equipment, pipe, turbines, drilling materials',
      compliance: 'ITAR controls, pressure vessel certification, hazmat protocols',
      icon: () => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M11 3h2v8h-2V3zm0 10h2v8h-2v-8zm-6-5h2v13H5V8zm12 0h2v13h-2V8zm-6 3h2v10h-2v-10z"/></svg>,
    },
    {
      name: 'FMCG & Retail',
      cargo: 'Consumer goods, packaged food, apparel, electronics',
      compliance: 'Tariff classification, anti-counterfeiting, duty optimization',
      icon: () => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M7 4V3h2v1h6V3h2v1h4.8L20 9v11c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V9l.2-5H7zm13 14V9h-1v9h1zM6 9v9h12V9H6zm6 4h2v-2h-2v2z"/></svg>,
    },
    {
      name: 'Automotive & Parts',
      cargo: 'Vehicles, engines, spare parts, components',
      compliance: 'Rules of origin (SADC), HS coding, regulatory standards',
      icon: () => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 11l1.5-4.5h11L19 11H5z"/></svg>,
    },
    {
      name: 'Agriculture',
      cargo: 'Grains, seeds, produce, fertilizer, animal feed',
      compliance: 'Phytosanitary certificates, quarantine, food safety',
      icon: () => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M6 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm14-4v2h2V8h-2zm-2-4h2V2h-2v2zM6 2v2h2V2H6zm12 6h2V6h-2v2zm2 12v-2h-2v2h2zM6 20v2h2v-2H6zm6-12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>,
    },
    {
      name: 'Manufacturing & Machinery',
      cargo: 'Industrial equipment, CNC machines, textile machinery',
      compliance: 'CE marking, technical documentation, tariff codes',
      icon: () => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8h-1V7c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-3.5-5h-3V9.5h3V15z"/></svg>,
    },
    {
      name: 'Pharmaceutical & Medical',
      cargo: 'Medicines, vaccines, medical devices, lab equipment',
      compliance: 'Pharmaceutical licensing, cold chain, temperature control',
      icon: () => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9h-3v-3.5h-1V11h-3v1h3v3.5h1V12h3v-1z"/></svg>,
    },
    {
      name: 'Construction & Infrastructure',
      cargo: 'Steel, cement, construction equipment, materials',
      compliance: 'Project permits, invoice verification, tariff optimization',
      icon: () => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M13 13.5h2v2h-2zm0-4h2v2h-2zm4 4h2v2h-2zm0-4h2v2h-2zm-8 4h2v2H9zm0-4h2v2H9zm-4 8h18v-2H1v2zm2-8h2v2H3zm4 0h2v2H7z"/></svg>,
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

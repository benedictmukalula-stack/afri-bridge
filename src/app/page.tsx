import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import CTAStrip from '@/components/CTAStrip';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/15346128/pexels-photo-15346128.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'left center', backgroundAttachment: 'fixed' }}>
        {/* Premium Dark Overlay - Enhanced for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/50"></div>
        {/* Bottom Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/45"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div style={{ maxWidth: '800px' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight hero-fade-in gold-underline" style={{
              color: '#F5B041',
              letterSpacing: '-0.02em',
              textShadow: '0 6px 16px rgba(0, 0, 0, 0.8), 0 3px 6px rgba(0, 0, 0, 0.7)'
            }}>
              Premium Clearing & Logistics Across Africa
            </h1>
            <p className="text-lg text-white mb-8 hero-fade-in" style={{
              lineHeight: '1.8',
              textShadow: '0 4px 10px rgba(0, 0, 0, 0.7), 0 2px 4px rgba(0, 0, 0, 0.6)',
              animationDelay: '0.1s'
            }}>
              Customs compliance, freight forwarding, and cross-border logistics built for SADC trade corridors.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link href="/quote" className="btn btn-gradient" style={{ boxShadow: '0 8px 24px rgba(30, 107, 76, 0.4)' }}>
                Request a Quote
              </Link>
              <Link href="/tracking" className="btn" style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                backdropFilter: 'blur(12px)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>
                Track Shipment
              </Link>
            </div>

            {/* Value Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '3rem' }}>
              {[
                '✓ Customs Compliance',
                '✓ End-to-End Visibility',
                '✓ SADC Expertise',
              ].map((chip, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(11, 31, 58, 0.75)',
                    backdropFilter: 'blur(16px)',
                    color: 'white',
                    padding: '0.875rem 1.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {chip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Certifications & Trust Badges */}
      <section style={{ padding: '3rem 2rem', background: '#F9FAFB' }}>
        <div className="container-max">
          <p style={{ textAlign: 'center', color: '#6b7280', fontWeight: '600', marginBottom: '2rem', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.8px' }}>
            Industry Certifications & Memberships
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🏛️', title: 'Customs Clearing License', subtitle: 'SADC Certified' },
              { icon: '📦', title: 'Freight Forwarder', subtitle: 'IATA & FIATA Member' },
              { icon: '✓', title: 'ISO 9001:2015', subtitle: 'Quality Assured' },
              { icon: '🔒', title: 'Compliance First', subtitle: 'Full Regulatory Compliance' },
            ].map((cert, i) => (
              <div key={i} className="card-premium" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{cert.icon}</div>
                <p style={{ fontSize: '15px', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>{cert.title}</p>
                <p style={{ fontSize: '13px', color: '#6b7280' }}>{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container-max">
          <img
            src="https://images.pexels.com/photos/4487363/pexels-photo-4487363.jpeg"
            alt="Warehouse logistics and cargo storage facility"
            className="fade-in-up"
            style={{ marginBottom: '2.5rem', height: '240px', width: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
          />
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '0.75rem', color: '#111827' }}>
            Our Services
          </h2>
          <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto', fontSize: '0.875rem' }}>
            Comprehensive logistics solutions across all modes and corridors
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: (svg) => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>, title: 'Customs Clearing', desc: 'Expert HS coding, documentation, duty & VAT guidance' },
              { icon: (svg) => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.3 13.61a4 4 0 0 0-5.66 0"></path><path d="M9.59 9.59a8 8 0 0 1 11.31 0"></path><path d="M7.97 7.97a12.04 12.04 0 0 1 16.97 0"></path><path d="M2.05 2.05a16 16 0 0 1 22.63 0"></path><circle cx="12" cy="12" r="2"></circle></svg>, title: 'Air Freight', desc: 'Urgent shipments, consolidation, real-time tracking' },
              { icon: (svg) => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 14c0-1 .895-3 7-5 6.025-1.999 8.983-2 10-1 .983.997.983 3-3 5-3.982 2-9 2.997-9 3.5 0 .553 4.018 1.5 9 3.5 3.983 2 3.983 4.003 3 5-1.017 1-3.975 1.001-10-1-6.105-1.999-7-4-7-5"></path><ellipse cx="12" cy="8" rx="7" ry="3"></ellipse></svg>, title: 'Ocean Freight', desc: 'FCL/LCL solutions, carrier management, cost optimization' },
              { icon: (svg) => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"></circle><circle cx="9" cy="15" r="3"></circle><path d="M5 8h14M7 8V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2m6 0V6a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v2M3 16h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>, title: 'Road & Cross-Border', desc: 'SADC corridor expertise, border processing, compliance' },
              { icon: (svg) => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8m-6.85.15V4m0 10.854V20"></path><path d="M12 2v2M2 12h2m18 0h2"></path></svg>, title: 'Warehousing', desc: 'Bonded storage, pick & pack, last-mile delivery' },
              { icon: (svg) => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M3.51 6.63l13.86-2M3.51 17.37l13.86 2M6.5 5.5L4.5 20m13 0l-2-14.5"></path></svg>, title: 'Project Cargo', desc: 'Oversized shipments, mining, energy sector solutions' },
            ].map((service, i) => (
              <div key={i} className="card-premium fade-in-up" style={{ animationDelay: `${i * 0.1}s`, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ marginBottom: '1rem', width: '100%', textAlign: 'center', color: 'var(--emerald)' }}>{service.icon()}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#111827' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.9375rem', flex: '1' }}>{service.desc}</p>
                <Link href="/quote" className="premium-link" style={{ marginTop: 'auto' }}>
                  Get a Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '4rem 2rem', background: '#F9FAFB' }}>
        <div className="container-max">
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '2.5rem', color: '#111827' }}>
            How It Works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { step: '01', title: 'Quote & Request', desc: 'Submit your shipment details and get a custom quote' },
              { step: '02', title: 'Ship & Track', desc: 'We handle all logistics with real-time visibility' },
              { step: '03', title: 'Deliver & Compliance', desc: 'Cargo cleared and delivered to destination' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative', paddingTop: '2rem' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--emerald)', position: 'relative', zIndex: '1' }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: '#111827' }}>{item.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9375rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Corridors Preview */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container-max">
          <img
            src="https://images.pexels.com/photos/6680149/pexels-photo-6680149.jpeg"
            alt="African trade corridors and regional logistics network map"
            className="fade-in-up"
            style={{ marginBottom: '2.5rem', height: '240px', width: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
          />
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '2.5rem', color: '#111827' }}>
            Africa Trade Corridors
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'SADC', countries: 'SA, Zambia, DRC, Botswana, Namibia, Mozambique, Zimbabwe' },
              { name: 'East Africa', countries: 'Kenya, Tanzania, Uganda, Ethiopia' },
              { name: 'West Africa', countries: 'Ghana, Nigeria, Ivory Coast, Senegal' },
            ].map((corridor, i) => (
              <Link href="/trade-corridors" key={i} className="card-premium" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: '#111827' }}>
                  {corridor.name}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.9375rem', flex: '1' }}>{corridor.countries}</p>
                <span className="premium-link" style={{ marginTop: 'auto' }}>Explore Corridor →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Stats */}
      <section style={{ padding: '4rem 2rem', background: 'var(--gradient-primary)', color: 'white' }}>
        <div className="container-max">
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '0.75rem', color: 'white' }}>
            Trusted by African Logistics Leaders
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto', fontSize: '0.875rem' }}>
            Our track record speaks for itself. Built on years of regional expertise and regional partnerships.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { stat: '98%', label: 'On-time Delivery', desc: 'Across all corridors' },
              { stat: '12K+', label: 'Shipments Handled', desc: 'Successfully cleared' },
              { stat: '25+', label: 'Countries Served', desc: 'Across Africa' },
              { stat: '24/7', label: 'Operations Support', desc: 'Always available' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '2rem',
                  borderRadius: '0.875rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2.75rem', fontWeight: '700', marginBottom: '0.5rem', color: '#F5B041' }}>
                  {item.stat}
                </div>
                <p style={{ fontSize: '0.9375rem', fontWeight: '600', color: 'white', marginBottom: '0.375rem', margin: '0 0 0.375rem 0' }}>{item.label}</p>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.7)', margin: '0' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTAStrip
        headline="Ready to Move Cargo with Confidence?"
        subheadline="Get a custom quote from our SADC logistics experts in under 24 hours."
        buttonText="Request a Quote"
        buttonLink="/quote"
      />
    </>
  );
}

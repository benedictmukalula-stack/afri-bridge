import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import CTAStrip from '@/components/CTAStrip';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center" style={{ backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fdc61da1f09234263a84e25f305acc6be%2F478a2d42a1c94c47b6ab76c57a333b69?format=webp&width=800&height=1200')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        {/* Enhanced Dark Overlay - Left to Right for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/45 to-black/25"></div>
        {/* Bottom Gradient to ensure text area visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div style={{ position: 'relative' }}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight" style={{
                textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.4)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                letterSpacing: '-0.02em'
              }}>
                Premium Clearing & Logistics Across Africa
              </h1>
              <p className="text-lg text-white mb-8" style={{
                textShadow: '0 3px 8px rgba(0, 0, 0, 0.45), 0 1px 3px rgba(0, 0, 0, 0.3)',
                lineHeight: '1.8'
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
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/36060451/pexels-photo-36060451.jpeg"
                alt="African port with container cranes at sunset"
                className="shadow-2xl"
                style={{ width: '100%', height: 'auto', borderRadius: '0.5rem', objectFit: 'cover' }}
              />
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
              { icon: (svg) => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>, title: 'Customs Clearing', desc: 'Expert HS coding, documentation, duty & VAT guidance' },
              { icon: (svg) => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0 2.5c2.33 0 4.31 1.46 5.11 3.5H8.89c.8-2.04 2.78-3.5 5.11-3.5z"/></svg>, title: 'Air Freight', desc: 'Urgent shipments, consolidation, real-time tracking' },
              { icon: (svg) => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v11h2V4h14v11h2V4c0-1.1-.9-2-2-2zm-7 7h-2V4h2v5zm7 6H2v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-3zm-7 2.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>, title: 'Ocean Freight', desc: 'FCL/LCL solutions, carrier management, cost optimization' },
              { icon: (svg) => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M18 18.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM4 6h12V4H4c-1.1 0-2 .9-2 2v11h2V6zm15.5 1.5L23 9.5V6h-3.5zM6 18.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm13-5h4V9h-4V8h-2v10h2v-4z"/></svg>, title: 'Road & Cross-Border', desc: 'SADC corridor expertise, border processing, compliance' },
              { icon: (svg) => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V7c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H4V10h16v10zM7 7h10V4H7v3zm5.5 4.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"/></svg>, title: 'Warehousing', desc: 'Bonded storage, pick & pack, last-mile delivery' },
              { icon: (svg) => <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>, title: 'Project Cargo', desc: 'Oversized shipments, mining, energy sector solutions' },
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

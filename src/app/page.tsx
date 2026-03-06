import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import CTAStrip from '@/components/CTAStrip';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center" style={{ backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fdc61da1f09234263a84e25f305acc6be%2F478a2d42a1c94c47b6ab76c57a333b69?format=webp&width=800&height=1200')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        {/* Enhanced Dark Overlay - Left to Right for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/45 to-black/25"></div>
        {/* Bottom Gradient to ensure text area visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div style={{ position: 'relative' }}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{
                textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.4)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                letterSpacing: '-0.02em'
              }}>
                Premium Clearing & Logistics Across Africa
              </h1>
              <p className="text-xl text-white mb-8" style={{
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
              <ImagePlaceholder
                type="hero"
                alt="African port with container cranes at sunset"
                className="shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Certifications & Trust Badges */}
      <section style={{ padding: '4rem 2rem', background: '#F9FAFB' }}>
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
      <section style={{ padding: '5rem 2rem' }}>
        <div className="container-max">
          <ImagePlaceholder
            type="section"
            alt="Warehouse logistics and cargo storage facility"
            className="fade-in-up"
            style={{ marginBottom: '3rem', height: '280px' }}
          />
          <h2 style={{ fontSize: '2.25rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem', color: '#111827' }}>
            Our Services
          </h2>
          <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto', fontSize: '1.0625rem' }}>
            Comprehensive logistics solutions across all modes and corridors
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: '🧾', title: 'Customs Clearing', desc: 'Expert HS coding, documentation, duty & VAT guidance' },
              { icon: '✈️', title: 'Air Freight', desc: 'Urgent shipments, consolidation, real-time tracking' },
              { icon: '🚢', title: 'Ocean Freight', desc: 'FCL/LCL solutions, carrier management, cost optimization' },
              { icon: '🚚', title: 'Road & Cross-Border', desc: 'SADC corridor expertise, border processing, compliance' },
              { icon: '📦', title: 'Warehousing', desc: 'Bonded storage, pick & pack, last-mile delivery' },
              { icon: '⚙️', title: 'Project Cargo', desc: 'Oversized shipments, mining, energy sector solutions' },
            ].map((service, i) => (
              <div key={i} className="card-premium fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: '#111827' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>{service.desc}</p>
                <Link href="/quote" className="premium-link">
                  Get a Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '5rem 2rem', background: '#F9FAFB' }}>
        <div className="container-max">
          <h2 style={{ fontSize: '2.25rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
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
      <section style={{ padding: '5rem 2rem' }}>
        <div className="container-max">
          <ImagePlaceholder
            type="map"
            alt="African trade corridors and regional logistics network map"
            className="fade-in-up"
            style={{ marginBottom: '3rem', height: '280px' }}
          />
          <h2 style={{ fontSize: '2.25rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
            Africa Trade Corridors
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'SADC', countries: 'SA, Zambia, DRC, Botswana, Namibia, Mozambique, Zimbabwe' },
              { name: 'East Africa', countries: 'Kenya, Tanzania, Uganda, Ethiopia' },
              { name: 'West Africa', countries: 'Ghana, Nigeria, Ivory Coast, Senegal' },
            ].map((corridor, i) => (
              <Link href="/trade-corridors" key={i} className="card-premium">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem', color: '#111827' }}>
                  {corridor.name}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.9375rem' }}>{corridor.countries}</p>
                <span className="premium-link">Explore Corridor →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Stats */}
      <section style={{ padding: '5rem 2rem', background: 'var(--gradient-primary)', color: 'white' }}>
        <div className="container-max">
          <h2 style={{ fontSize: '2.25rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem', color: 'white' }}>
            Trusted by African Logistics Leaders
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto', fontSize: '1rem' }}>
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
                }}
              >
                <div style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '0.75rem', color: '#F5B041' }}>
                  {item.stat}
                </div>
                <p style={{ fontSize: '1rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>{item.label}</p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>{item.desc}</p>
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

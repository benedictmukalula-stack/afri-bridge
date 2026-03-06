'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import CTAStrip from '@/components/CTAStrip';
import TrustSignals from '@/components/TrustSignals';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import SocialProof from '@/components/SocialProof';
import { useAssistant } from '@/contexts/AssistantContext';

export default function Home() {
  const { setCurrentPage } = useAssistant();

  useEffect(() => {
    setCurrentPage('home');
  }, [setCurrentPage]);
  return (
    <>
      {/* Premium Hero Section - Enterprise Logistics Design */}
      <section className="relative py-20 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0B1F3A 0%, #1e3a5f 100%)' }}>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url('/afribridge-hero-pan-african-trade.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div style={{ maxWidth: '600px', animation: 'fadeInUp 0.8s ease-out' }}>
            <p style={{
              color: '#C8A74E',
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              🌍 Pan-African Logistics Network
            </p>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: '#F5B041',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              textShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
              letterSpacing: '-0.02em'
            }}>
              Trade Infrastructure for Africa
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#E5E7EB',
              lineHeight: '1.8',
              marginBottom: '2.5rem',
              maxWidth: '500px'
            }}>
              Reliable freight forwarding, customs clearing, and cross-border logistics connecting Africa's major trade corridors. Enterprise-grade solutions with 24/7 operations support.
            </p>

            {/* Key Features */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {[
                { icon: '✓', text: 'Customs Expertise', color: '#1E6B4C' },
                { icon: '✓', text: '25+ Countries', color: '#1E6B4C' },
                { icon: '✓', text: '24/7 Support', color: '#1E6B4C' },
                { icon: '✓', text: 'Real-Time Tracking', color: '#1E6B4C' },
              ].map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '20px', color: feature.color, fontWeight: '900' }}>{feature.icon}</span>
                  <span style={{ color: '#E5E7EB', fontSize: '15px', fontWeight: '600' }}>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/quote" style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '10px',
                fontWeight: '800',
                fontSize: '15px',
                boxShadow: '0 12px 32px rgba(30, 107, 76, 0.4)',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(30, 107, 76, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(30, 107, 76, 0.4)';
              }}>
                Get Freight Quote
              </Link>
              <Link href="/tracking" style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '10px',
                fontWeight: '800',
                fontSize: '15px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}>
                Track Shipment
              </Link>
            </div>
          </div>

          {/* Right: Stats/Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', animation: 'slideInRight 0.8s ease-out 0.2s backwards' }}>
            {[
              { stat: '98.5%', label: 'On-Time Delivery', subtitle: 'Across all corridors' },
              { stat: '25+', label: 'Countries', subtitle: 'Active presence' },
              { stat: '40+', label: 'Trade Routes', subtitle: 'Pan-African' },
              { stat: '24/7', label: 'Operations', subtitle: 'Round-the-clock support' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(30, 107, 76, 0.3)',
                borderRadius: '12px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#C8A74E', marginBottom: '0.5rem' }}>
                  {item.stat}
                </div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '0.35rem' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
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

      {/* Services Overview - Enterprise Grid */}
      <section style={{ padding: '4rem 2rem', background: '#fafbfc' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{
              color: '#1E6B4C',
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              INTEGRATED SERVICES
            </p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#0B1F3A', letterSpacing: '-0.01em' }}>
              Complete Logistics Solutions
            </h2>
            <p style={{ textAlign: 'center', color: '#6b7280', maxWidth: '600px', margin: '0 auto', fontSize: '16px', lineHeight: '1.6' }}>
              Enterprise-grade services covering all modes of transport and African trade corridors
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              { icon: '📋', title: 'Customs Clearing', desc: 'Expert HS coding, documentation, duty & VAT guidance', color: '#1E6B4C', image: '/afribridge-customs-clearing.webp' },
              { icon: '✈️', title: 'Air Freight', desc: 'Urgent shipments, consolidation, real-time tracking', color: '#0F5132', image: '/afribridge-air-freight.webp' },
              { icon: '🚢', title: 'Ocean Freight', desc: 'FCL/LCL solutions, carrier management, cost optimization', color: '#1E6B4C', image: '/afribridge-ocean-freight.webp' },
              { icon: '🚚', title: 'Road & Cross-Border', desc: 'SADC corridor expertise, border processing, compliance', color: '#0F5132', image: '/afribridge-road-freight.webp' },
              { icon: '🏭', title: 'Warehousing', desc: 'Bonded storage, pick & pack, last-mile delivery', color: '#1E6B4C', image: '/afribridge-warehouse.webp' },
              { icon: '⚙️', title: 'Project Cargo', desc: 'Oversized shipments, mining, energy sector solutions', color: '#0F5132', image: '/afribridge-trade-corridor.webp' },
            ].map((service, i) => (
              <div key={i} style={{
                background: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.6s ease-out backwards`,
                animationDelay: `${i * 0.08}s`,
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = service.color;
                e.currentTarget.style.boxShadow = `0 16px 32px ${service.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  width: '100%',
                  height: '200px',
                  backgroundImage: `url('${service.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    background: `linear-gradient(135deg, rgba(11, 31, 58, 0.4) 0%, rgba(30, 107, 76, 0.2) 100%)`
                  }}></div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: `${service.color}15`,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    marginBottom: '1.5rem'
                  }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '0.75rem', color: '#0B1F3A', margin: '0 0 0.75rem 0' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '15px', flex: '1', lineHeight: '1.6' }}>
                    {service.desc}
                  </p>
                  <Link href="/quote" style={{
                    color: service.color,
                    fontWeight: '700',
                    fontSize: '14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'gap 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = '0.75rem';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = '0.5rem';
                  }}>
                    Get Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(30, 107, 76, 0.05) 0%, rgba(245, 176, 65, 0.03) 100%)' }}>
        <div className="container-max">
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '2.5rem', color: '#111827' }}>
            How It Works
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(10px)',
            padding: '3rem 2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(30, 107, 76, 0.1)',
            boxShadow: '0 8px 32px rgba(30, 107, 76, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
          }}>
            {[
              { step: '01', title: 'Quote & Request', desc: 'Submit your shipment details and get a custom quote' },
              { step: '02', title: 'Ship & Track', desc: 'We handle all logistics with real-time visibility' },
              { step: '03', title: 'Deliver & Compliance', desc: 'Cargo cleared and delivered to destination' },
            ].map((item, i) => (
              <div key={i} style={{
                textAlign: 'center',
                position: 'relative',
                paddingTop: '2rem',
                transition: 'all 0.3s ease',
                borderRadius: '0.75rem',
                padding: '1.5rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(30, 107, 76, 0.05)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 107, 76, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
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

      {/* Trade Corridors Preview - Enterprise Design */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #f0fdf4 0%, #f8fafc 100%)' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{
              color: '#1E6B4C',
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              REGIONAL EXPERTISE
            </p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#0B1F3A', letterSpacing: '-0.01em' }}>
              Africa Trade Corridors
            </h2>
            <p style={{ textAlign: 'center', color: '#6b7280', maxWidth: '600px', margin: '0 auto', fontSize: '16px', lineHeight: '1.6' }}>
              Strategic logistics networks across major African trade routes with established relationships and regulatory expertise
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              { name: '🌍 SADC Region', countries: 'South Africa • Zambia • Zimbabwe • Botswana • Namibia • Mozambique • Malawi', routes: '15+ active routes', icon: '🔗', image: '/afribridge-trade-corridor.webp' },
              { name: '🌍 East Africa', countries: 'Kenya • Tanzania • Uganda • Ethiopia • Rwanda', routes: '8+ active routes', icon: '🔗', image: '/afribridge-pan-african-ports.webp' },
              { name: '🌍 West Africa', countries: 'Nigeria • Ghana • Ivory Coast • Senegal • Benin', routes: '6+ active routes', icon: '🔗', image: '/afribridge-road-freight.webp' },
            ].map((corridor, i) => (
              <Link href="/coverage" key={i} style={{
                background: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.6s ease-out backwards`,
                animationDelay: `${i * 0.1}s`,
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#1E6B4C';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(30, 107, 76, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {/* Corridor Image */}
                <div style={{
                  width: '100%',
                  height: '180px',
                  backgroundImage: `url('${corridor.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    background: `linear-gradient(135deg, rgba(11, 31, 58, 0.5) 0%, rgba(30, 107, 76, 0.3) 100%)`
                  }}></div>
                </div>

                <div style={{ padding: '2.5rem', position: 'relative' }}>
                  {/* Accent bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #1E6B4C 0%, #0B1F3A 100%)'
                  }}></div>

                  <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '1rem', color: '#0B1F3A', marginTop: '0.5rem' }}>
                    {corridor.name}
                  </h3>

                  <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '15px', lineHeight: '1.6', flex: '1' }}>
                    {corridor.countries}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: '#f0fdf4',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    borderLeft: '4px solid #1E6B4C'
                  }}>
                    <span style={{ fontSize: '16px' }}>🛣️</span>
                    <span style={{ color: '#166534', fontWeight: '700', fontSize: '14px' }}>
                      {corridor.routes}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1E6B4C',
                    fontWeight: '700',
                    fontSize: '14px',
                    transition: 'gap 0.2s ease'
                  }}>
                    Explore Corridor →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
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

      {/* Premium Trust Signals & Certifications */}
      <TrustSignals />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Premium Tools Section */}
      <section style={{ padding: '3rem 2rem', background: 'white' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 style={{ textAlign: 'center', color: '#0B1F3A', fontSize: '24px', fontWeight: '800', marginBottom: '1rem' }}>
            🛠️ Premium Tools & Resources
          </h2>
          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '15px', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Free tools to optimize your logistics. Calculate duties, get HS codes validated, find best trade corridors, and ensure compliance.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: '🔍', title: 'HS Code Validator', desc: 'AI-powered product classification', link: '/tools/hs-code-validator' },
              { icon: '💰', title: 'Duty Calculator', desc: 'Calculate taxes and fees', link: '/tools/duty-calculator' },
              { icon: '📊', title: 'Rate Estimator', desc: 'Compare shipping costs', link: '/tools/rate-estimator' },
            ].map((tool, i) => (
              <Link href={tool.link} key={i} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1E6B4C';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(30, 107, 76, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ fontSize: '32px', marginBottom: '0.75rem' }}>{tool.icon}</div>
                  <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '14px', marginBottom: '0.5rem', margin: '0 0 0.5rem 0' }}>
                    {tool.title}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>
                    {tool.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/tools" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: '#1E6B4C',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '14px'
            }}>
              View All Tools →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Notifications */}
      <SocialProof />

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

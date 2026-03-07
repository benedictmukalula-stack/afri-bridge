'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import CTAStrip from '@/components/CTAStrip';
import { useAssistant } from '@/contexts/AssistantContext';

export default function ServicesPage() {
  const { setCurrentPage } = useAssistant();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setCurrentPage('services');
  }, [setCurrentPage]);

  const services = [
    {
      title: 'Customs Clearing & Compliance',
      desc: 'Expert HS coding, tariff classification, documentation management, and duty/VAT guidance. We ensure full regulatory compliance across all SADC borders.',
      details: ['HS Code expertise', 'Tariff optimization', 'VAT & duty guidance', 'Documentation review'],
      image: 'https://images.pexels.com/photos/34570226/pexels-photo-34570226.jpeg',
    },
    {
      title: 'Air Freight',
      desc: 'Fast international shipments with full consolidation capabilities. Real-time tracking from origin to destination with customs pre-clearance.',
      details: ['Urgent shipments (24-48h)', 'Air consolidation', 'Dangerous goods handling', 'Express tracking'],
      image: 'https://images.pexels.com/photos/11146455/pexels-photo-11146455.jpeg',
    },
    {
      title: 'Ocean Freight',
      desc: 'Full Container (FCL) and Less Container (LCL) solutions. Carrier negotiations, booking management, and port coordination.',
      details: ['FCL / LCL optimization', 'Carrier partnerships', 'Port operations', 'Incoterm expertise'],
      image: 'https://images.pexels.com/photos/93106/pexels-photo-93106.jpeg',
    },
    {
      title: 'Road & Cross-Border',
      desc: 'Specialist SADC corridor services. Border post coordination, road freight consolidation, and compliance with regional trade rules.',
      details: ['SADC corridor expertise', 'Border processing', 'Road consolidation', 'Regional compliance'],
      image: 'https://images.pexels.com/photos/13961752/pexels-photo-13961752.jpeg',
    },
    {
      title: 'Warehousing & Distribution',
      desc: 'Bonded warehouse storage, pick & pack services, and last-mile delivery partnerships across the region.',
      details: ['Bonded storage', 'Pick & pack', 'Last-mile delivery', 'Inventory management'],
      image: 'https://images.pexels.com/photos/8760709/pexels-photo-8760709.jpeg',
    },
    {
      title: 'Project Cargo',
      desc: 'Oversized and heavy equipment shipments for mining, energy, and infrastructure sectors. Specialized handling and routing.',
      details: ['Oversized handling', 'Mining solutions', 'Energy sector', 'Infrastructure projects'],
      image: 'https://images.pexels.com/photos/29899416/pexels-photo-29899416.jpeg',
    },
    {
      title: 'Vehicle Export',
      desc: 'End-to-end vehicle export solutions from South Africa. Dealership coordination, documentation handling, multiple freight options, and insurance included.',
      details: ['Dealership network', 'CIF quotations', 'Export permits', 'Multi-modal shipping', 'Insurance coverage', 'Real-time tracking'],
      image: 'https://images.pexels.com/photos/3803932/pexels-photo-3803932.jpeg',
    },
  ];

  const faqs = [
    {
      q: 'How long does customs clearance typically take?',
      a: 'Most shipments clear within 24-48 hours of arrival. Complex shipments may take 3-5 days depending on documentation completeness and inspection requirements.',
    },
    {
      q: 'What documentation do I need for a quote?',
      a: 'Basic shipment details: origin, destination, weight, dimensions, and commodity type. For air freight, commercial invoice and packing list are helpful.',
    },
    {
      q: 'Do you handle dangerous goods?',
      a: 'Yes, we are fully certified for hazmat, chemicals, and restricted goods. We manage all IATA and IMDG compliance.',
    },
    {
      q: 'What are your payment terms?',
      a: 'We offer flexible terms: prepayment, net 30, or on-account arrangements for regular customers. WhatsApp for credit discussions.',
    },
    {
      q: 'Can you provide a tracking link for my shipment?',
      a: 'Yes, every shipment gets real-time tracking via our portal. You can share the link with your customers.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-80 flex items-center" style={{ backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fdc61da1f09234263a84e25f305acc6be%2F2c8b8193cfb641b0971c02d22466e48c?format=webp&width=800&height=1200')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        {/* Enhanced Dark Gradient Overlay - Left to Right for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/45 to-black/25"></div>
        {/* Enhanced Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.4)',
            letterSpacing: '-0.02em',
            fontWeight: '800'
          }}>
            Our Services
          </h1>
          <p className="text-sm md:text-base text-white max-w-2xl" style={{
            textShadow: '0 3px 8px rgba(0, 0, 0, 0.45), 0 1px 3px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.65',
            fontSize: '0.875rem'
          }}>
            Comprehensive clearing, forwarding, and logistics solutions across Africa
          </p>
        </div>
      </section>

      {/* Services - Alternating Layout */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container-max" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {services.map((service, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#111827' }}>
                    {service.title}
                  </h2>
                  <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '1.0625rem', lineHeight: '1.7' }}>
                    {service.desc}
                  </p>
                  <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.details.map((detail, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#4b5563', fontSize: '0.9375rem' }}>
                        <span style={{ color: 'var(--emerald)', fontWeight: '700', marginTop: '0.25rem', flexShrink: 0 }}>✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/quote" className="btn btn-primary">
                  Get a Quote
                </Link>
              </div>
              <div className="hidden md:block">
                <img
                  src={service.image}
                  alt={service.title}
                  className="fade-in-up"
                  style={{ height: '280px', width: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicle Experts Section */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #f0fdf4 0%, #e8f8f5 100%)', borderTop: '2px solid #d1fae5', borderBottom: '2px solid #d1fae5' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{
              color: '#1E6B4C',
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              🚗 VEHICLE LOGISTICS SPECIALISTS
            </p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', color: '#0B1F3A', letterSpacing: '-0.01em' }}>
              Africa's Vehicle Export Experts
            </h2>
            <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
              From dealership networks to final destination delivery. We specialize in end-to-end vehicle logistics across Africa with transparent CIF pricing and expert handling.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { icon: '🤝', title: 'Dealership Networks', desc: 'Direct partnerships with SA dealerships for vehicle sourcing and competitive pricing' },
              { icon: '📋', title: 'CIF Quotations', desc: 'Transparent all-inclusive pricing covering cost, insurance, and freight' },
              { icon: '✈️', title: 'Multi-Modal Shipping', desc: 'RoRo vessels, containers, and air freight options based on your timeline' },
              { icon: '📦', title: 'Export Permits', desc: 'Complete handling of SA export permits and customs documentation' },
              { icon: '🛡️', title: 'Insurance Coverage', desc: 'Motor and marine insurance included in all export packages' },
              { icon: '📍', title: 'Real-Time Tracking', desc: 'Live shipment visibility from dealership to final destination' },
            ].map((expert, i) => (
              <div key={i} style={{
                background: 'white',
                border: '2px solid #d1fae5',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.6s ease-out backwards`,
                animationDelay: `${i * 0.08}s`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#1E6B4C';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(30, 107, 76, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#d1fae5';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{expert.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '0.75rem', color: '#0B1F3A' }}>
                  {expert.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
                  {expert.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/vehicle-export" style={{
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
              Explore Vehicle Export Services →
            </Link>
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

      {/* FAQ */}
      <section style={{ padding: '4rem 2rem', background: '#F9FAFB' }}>
        <div className="container-sm">
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '2.5rem', color: '#111827' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card-premium fade-in-up"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  padding: '0',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '1.5rem',
                    fontWeight: '600',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    color: '#111827',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(30, 107, 76, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {faq.q}
                  <span
                    style={{
                      color: 'var(--emerald)',
                      fontWeight: '700',
                      fontSize: '1.25rem',
                      transition: 'transform 0.3s ease',
                      transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                      flexShrink: 0,
                    }}
                  >
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      color: '#6b7280',
                      borderTop: '1px solid var(--border-color)',
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      animation: 'fadeIn 0.3s ease',
                    }}
                    className="fade-in"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Ready to Streamline Your Logistics?"
        subheadline="Get a competitive quote from AfriBridge specialists."
        buttonText="Request a Quote"
        buttonLink="/quote"
      />
    </>
  );
}

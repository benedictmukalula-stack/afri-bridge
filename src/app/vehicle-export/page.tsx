'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function VehicleExportPage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const exportSteps = [
    {
      step: 1,
      title: 'Select Your Vehicle',
      description: 'Choose a new or used vehicle from South African dealerships',
      details: [
        'Browse vehicles from our dealership network',
        'Negotiate pricing directly with dealers',
        'Confirm vehicle specifications and condition',
        'Submit selection for quotation'
      ],
      icon: '🚗'
    },
    {
      step: 2,
      title: 'Receive CIF Quote',
      description: 'Get comprehensive Cost, Insurance & Freight pricing',
      details: [
        'Full CIF quotation including all costs',
        'Transparent pricing breakdown',
        'VAT refund as upfront discount',
        'Valid for 7 days'
      ],
      icon: '📋'
    },
    {
      step: 3,
      title: 'Proforma Invoice & Payment',
      description: 'Receive official invoice and secure the vehicle',
      details: [
        'Detailed Proforma Invoice with all logistics info',
        'Safe for bank Forex payments',
        'Holding deposit placed with dealership',
        'Payment via bank transfer, card, or deposit scheme'
      ],
      icon: '💳'
    },
    {
      step: 4,
      title: 'Dealership Coordination',
      description: 'Official purchase offer from dealership',
      details: [
        'Submit required documents to dealer',
        'Receive official purchase offer and invoice',
        'Confirm vehicle delivery schedule',
        'Coordinate with sales team'
      ],
      icon: '🤝'
    },
    {
      step: 5,
      title: 'Insurance & Documentation',
      description: 'Comprehensive coverage until delivery',
      details: [
        'Vehicle insured under Motor Policy',
        'Marine Insurance quoted separately (if applicable)',
        'Collect original documents from dealership',
        'Coverage maintained until containerisation'
      ],
      icon: '🛡️'
    },
    {
      step: 6,
      title: 'Export Preparation',
      description: 'Inspections, permits, and documentation',
      details: [
        'Full vehicle inspection and documentation',
        'Export permit processing',
        'Customs clearance preparation',
        'Special handling requests arranged'
      ],
      icon: '✓'
    },
    {
      step: 7,
      title: 'Logistics & Dispatch',
      description: 'Booking and document delivery',
      details: [
        'Vehicle booked on selected carrier',
        'Booking confirmation with tracking details',
        'Export documents emailed to you & clearing agent',
        'Original docs + valuables couriered with tracking'
      ],
      icon: '📦'
    },
    {
      step: 8,
      title: 'Delivery & Clearance',
      description: 'Final delivery to destination',
      details: [
        'Coordination with local clearing agent',
        'Pre-arrival documentation processed',
        'Real-time tracking provided',
        'Smooth delivery confirmed'
      ],
      icon: '🎉'
    }
  ];

  const freightOptions = [
    {
      name: 'Self-Drive',
      description: 'Drive the vehicle yourself to port or destination',
      ideal: 'Local transport, short distances',
      icon: '🚙',
      cost: 'Low'
    },
    {
      name: 'Car Carrier Freight',
      description: 'Dedicated car carrier transportation to port',
      ideal: 'Safe, secure professional handling',
      icon: '🚚',
      cost: 'Medium'
    },
    {
      name: 'Air Freight',
      description: 'Fast air transport for urgent shipments',
      ideal: 'Premium vehicles, time-critical shipments',
      icon: '✈️',
      cost: 'High'
    },
    {
      name: 'Ocean Freight - Container',
      description: 'Standard container shipment worldwide',
      ideal: 'Cost-effective, worldwide reach',
      icon: '🚢',
      cost: 'Low-Medium'
    },
    {
      name: 'Ocean Freight - RORO',
      description: 'Roll-on/Roll-off vessel transport',
      ideal: 'Fast ocean shipping, economical',
      icon: '⛴️',
      cost: 'Medium'
    }
  ];

  const requiredDocs = [
    'Vehicle registration documents',
    'Proof of ownership',
    'Vehicle identification number (VIN) verification',
    'Insurance documentation',
    'Export permit from SARS',
    'Customs clearance forms',
    'Bill of lading',
    'Invoice and payment proof',
    'Proforma invoice',
    'Vehicle condition report',
    'Keys and remote documentation'
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .section-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #1E6B4C 0%, transparent 100%);
          margin: 1.5rem 0;
        }

        .premium-step {
          position: relative;
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .premium-step:nth-child(1) { animation-delay: 0.1s; }
        .premium-step:nth-child(2) { animation-delay: 0.2s; }
        .premium-step:nth-child(3) { animation-delay: 0.3s; }
        .premium-step:nth-child(4) { animation-delay: 0.4s; }
        .premium-step:nth-child(5) { animation-delay: 0.5s; }
        .premium-step:nth-child(6) { animation-delay: 0.6s; }
        .premium-step:nth-child(7) { animation-delay: 0.7s; }
        .premium-step:nth-child(8) { animation-delay: 0.8s; }

        .premium-card {
          transition: all 0.3s ease;
        }

        .premium-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(30, 107, 76, 0.15);
        }

        .step-connector {
          position: absolute;
          left: 22px;
          top: 50px;
          width: 2px;
          height: calc(100% + 24px);
          background: linear-gradient(180deg, #1E6B4C 0%, rgba(30, 107, 76, 0) 100%);
          z-index: 0;
        }
      `}</style>

      {/* Premium Hero */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1e3a5f 100%)' }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url('/afribridge-vehicle-export.webp')`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2), transparent)' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <p style={{
              color: '#F5B041',
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              🚗 Professional Vehicle Export
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{
              color: '#F5B041',
              textShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
              letterSpacing: '-0.02em',
              fontWeight: '800',
              lineHeight: '1.15'
            }}>
              End-to-End Vehicle Export Solutions
            </h1>
            <div className="section-divider"></div>
            <p className="text-lg md:text-xl max-w-3xl" style={{
              color: '#E5E7EB',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              lineHeight: '1.8',
              fontWeight: '400'
            }}>
              From South Africa to the world. Professional handling, transparent CIF pricing, multiple freight options, and expert customs clearance for confident vehicle exports.
            </p>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section style={{
        padding: '3rem 2rem',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #e8f8f5 100%)',
        borderBottom: '2px solid #d1fae5',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '50%', right: 0, width: '300px', height: '300px', background: 'linear-gradient(135deg, rgba(30, 107, 76, 0.1) 0%, transparent 100%)', borderRadius: '50%', transform: 'translate(50%, -50%)' }}></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p style={{ color: '#0B1F3A', fontSize: '14px', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            ⚡ Get started in minutes
          </p>
          <Link
            href="/quote"
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: '800',
              fontSize: '15px',
              boxShadow: '0 8px 20px rgba(30, 107, 76, 0.3)',
              transition: 'all 0.3s ease',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(30, 107, 76, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 107, 76, 0.3)';
            }}
          >
            📋 Get Vehicle Export Quote
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '3rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Service Overview */}
          <div className="mb-16">
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#0B1F3A', fontWeight: '800' }}>
                🌍 Complete Vehicle Export Solution
              </h2>
              <div className="section-divider"></div>
              <p style={{ color: '#6b7280', fontSize: '16px', marginTop: '1rem', lineHeight: '1.6' }}>
                Everything you need for a seamless vehicle export experience
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🚗', title: 'Vehicle Selection', desc: 'Access to dealership network' },
                { icon: '📋', title: 'Full Documentation', desc: 'All permits and customs forms' },
                { icon: '🛡️', title: 'Insurance Included', desc: 'Motor & Marine coverage' },
                { icon: '🚢', title: 'Multi-Modal Shipping', desc: '5 freight options' },
                { icon: '✓', title: 'Expert Clearance', desc: 'SARS & customs specialists' },
                { icon: '📱', title: 'Real-Time Tracking', desc: 'Live shipment updates' }
              ].map((item, i) => (
                <div key={i} className="premium-card" style={{
                  background: 'white',
                  border: '2px solid #f0fdf4',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(30, 107, 76, 0.08)'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '1rem' }}>{item.icon}</div>
                  <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '16px', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Export Procedure Timeline */}
          <div className="mb-16">
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#0B1F3A', fontWeight: '800' }}>
                📍 8-Step Export Procedure
              </h2>
              <div className="section-divider"></div>
              <p style={{ color: '#6b7280', fontSize: '16px', marginTop: '1rem', lineHeight: '1.6' }}>
                A streamlined, professional process from selection to delivery
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              {exportSteps.map((item, idx) => (
                <div key={item.step} className="premium-step" style={{ position: 'relative', marginBottom: '1.5rem' }}>
                  {idx < exportSteps.length - 1 && <div className="step-connector"></div>}
                  <button
                    onClick={() => setExpandedStep(expandedStep === item.step ? null : item.step)}
                    style={{
                      width: '100%',
                      padding: '1.75rem',
                      background: expandedStep === item.step ? 'linear-gradient(135deg, #f0fdf4 0%, #e8f8f5 100%)' : 'white',
                      border: expandedStep === item.step ? '2px solid #1E6B4C' : '2px solid #e5e7eb',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      transition: 'all 0.3s ease',
                      borderRadius: '12px',
                      boxShadow: expandedStep === item.step ? '0 8px 20px rgba(30, 107, 76, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
                      position: 'relative',
                      zIndex: 1
                    }}
                    onMouseEnter={(e) => {
                      if (expandedStep !== item.step) {
                        e.currentTarget.style.borderColor = '#1E6B4C';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (expandedStep !== item.step) {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                      }
                    }}
                  >
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '900',
                      fontSize: '20px',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(30, 107, 76, 0.3)'
                    }}>
                      {item.step}
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '16px', margin: '0 0 0.35rem 0' }}>
                        {item.icon} {item.title}
                      </h4>
                      <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                    <div style={{ fontSize: '24px', color: expandedStep === item.step ? '#1E6B4C' : '#d1d5db' }}>
                      {expandedStep === item.step ? '▼' : '▶'}
                    </div>
                  </button>

                  {expandedStep === item.step && (
                    <div style={{
                      padding: '2rem',
                      background: '#f9fafb',
                      borderTop: '2px solid #1E6B4C',
                      borderRadius: '0 0 12px 12px',
                      marginTop: '-1px'
                    }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {item.details.map((detail, idx) => (
                          <li key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <span style={{ color: '#1E6B4C', fontWeight: '800', fontSize: '18px', flexShrink: 0 }}>✓</span>
                            <span style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Freight Options */}
          <div className="mb-16">
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#0B1F3A', fontWeight: '800' }}>
                🚢 Flexible Freight Options
              </h2>
              <div className="section-divider"></div>
              <p style={{ color: '#6b7280', fontSize: '16px', marginTop: '1rem', lineHeight: '1.6' }}>
                Choose the shipping method that best fits your timeline and budget
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freightOptions.map((option, i) => (
                <div key={i} className="premium-card" style={{
                  background: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '2rem',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '40px' }}>{option.icon}</span>
                    <div>
                      <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '16px', margin: '0 0 0.25rem 0' }}>
                        {option.name}
                      </h4>
                      <p style={{ color: '#9ca3af', fontSize: '12px', margin: 0, fontWeight: '600' }}>
                        {option.cost}
                      </p>
                    </div>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                    {option.description}
                  </p>
                  <div style={{
                    padding: '1rem',
                    background: '#f0fdf4',
                    borderRadius: '8px',
                    borderLeft: '3px solid #1E6B4C'
                  }}>
                    <p style={{ color: '#166534', fontSize: '13px', fontWeight: '600', margin: 0 }}>
                      ✓ {option.ideal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="mb-16">
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#0B1F3A', fontWeight: '800' }}>
                📄 Required Documentation
              </h2>
              <div className="section-divider"></div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #f0fdf4 100%)',
              border: '2px solid #e2e8f0',
              borderRadius: '12px',
              padding: '3rem'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {requiredDocs.map((doc, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#1E6B4C', fontWeight: '800', fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>✓</span>
                    <span style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.5', fontWeight: '500' }}>{doc}</span>
                  </div>
                ))}
              </div>
              <div style={{
                padding: '1.5rem',
                background: 'white',
                border: '2px solid #dcfce7',
                borderRadius: '10px',
                borderLeft: '4px solid #1E6B4C'
              }}>
                <p style={{
                  color: '#166534',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  ℹ️ <strong>Additional country-specific documents</strong> may be required based on destination. Our team will advise during the quotation process and guide you through the requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose AfriBridge */}
          <div className="mb-16">
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#0B1F3A', fontWeight: '800' }}>
                🌟 Why Choose AfriBridge?
              </h2>
              <div className="section-divider"></div>
              <p style={{ color: '#6b7280', fontSize: '16px', marginTop: '1rem', lineHeight: '1.6' }}>
                Premium vehicle export services backed by expertise, transparency, and 24/7 support
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Expert Customs Clearance', desc: 'SARS-certified specialists with 15+ years in automotive logistics' },
                { title: 'Transparent All-In Pricing', desc: 'No hidden fees. CIF quotes include all costs upfront' },
                { title: '5 Freight Options', desc: 'From self-drive to RORO vessels - choose what works for you' },
                { title: 'Insurance Coverage', desc: 'Motor & Marine insurance included in quote' },
                { title: 'Real-Time Tracking', desc: 'AI-powered tracking with predictive delivery times' },
                { title: '24/7 Support', desc: 'WhatsApp, email, or phone support throughout the process' },
                { title: 'Dealership Network', desc: 'Access to verified dealers across South Africa' },
                { title: 'Trusted Courier Partners', desc: 'Safe delivery of originals and valuables with tracking' }
              ].map((item, i) => (
                <div key={i} className="premium-card" style={{
                  background: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #1E6B4C 0%, #0B1F3A 100%)'
                  }}></div>
                  <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '16px', marginBottom: '0.75rem', paddingLeft: '0.5rem' }}>
                    ✓ {item.title}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0, lineHeight: '1.6', paddingLeft: '0.5rem' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#0B1F3A', fontWeight: '800' }}>
                ❓ Frequently Asked Questions
              </h2>
              <div className="section-divider"></div>
            </div>
            <div className="space-y-3">
              {[
                { q: 'How long does the export process take?', a: 'Typically 4-6 weeks from vehicle selection to dispatch, depending on freight option and destination.' },
                { q: 'What is CIF pricing?', a: 'Cost, Insurance & Freight - all-inclusive pricing covering vehicle purchase, insurance, and freight to your destination.' },
                { q: 'Do you handle VAT refunds?', a: 'Yes, VAT refunds are applied as an upfront discount in your CIF quote for export vehicles.' },
                { q: 'Which countries do you ship to?', a: 'We ship worldwide, with special expertise in SADC, East Africa, West Africa, and beyond.' },
                { q: 'What if customs delays my shipment?', a: 'Our team monitors all shipments 24/7. We proactively handle delays and keep you informed via email and WhatsApp.' },
                { q: 'Can I track my vehicle in real-time?', a: 'Yes, all shipments have AI-powered real-time tracking with predictive arrival estimates.' }
              ].map((item, i) => (
                <div key={i} className="premium-card" style={{
                  background: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '2rem',
                  transition: 'all 0.3s ease'
                }}>
                  <h4 style={{ color: '#1E6B4C', fontWeight: '700', fontSize: '15px', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span>❓</span>
                    {item.q}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0, lineHeight: '1.7', paddingLeft: '1.75rem' }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
            borderRadius: '16px',
            padding: '4rem 3rem',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(30, 107, 76, 0.3)'
          }}>
            <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '400px', height: '400px', background: 'rgba(245, 176, 65, 0.1)', borderRadius: '50%' }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '1.5rem', margin: '0 0 1.5rem 0', lineHeight: '1.3' }}>
                Ready to Export Your Vehicle?
              </h2>
              <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "500px", margin: "0 auto 2.5rem auto" }}>
                Get a transparent CIF quote in minutes. Our expert team handles everything from vehicle selection to delivery with precision and care.
              </p>
              <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/quote" style={{
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  background: '#F5B041',
                  color: '#0B1F3A',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  fontWeight: '800',
                  fontSize: '15px',
                  boxShadow: '0 8px 20px rgba(245, 176, 65, 0.4)',
                  transition: 'all 0.3s ease',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(245, 176, 65, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(245, 176, 65, 0.4)';
                }}>
                  📋 Get Quote Now
                </Link>
                <Link href="/contact" style={{
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  fontWeight: '800',
                  fontSize: '15px',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  💬 Contact Us
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

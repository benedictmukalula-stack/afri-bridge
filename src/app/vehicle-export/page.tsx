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
      {/* Premium Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1e3a5f 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#F5B041',
            textShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
            letterSpacing: '-0.02em',
            fontWeight: '800',
            lineHeight: '1.2'
          }}>
            Vehicle Export Services
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{
            color: '#E5E7EB',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.7',
            fontWeight: '500'
          }}>
            End-to-end vehicle export solutions from South Africa. Professional handling, multiple freight options, and transparent pricing for African and international buyers.
          </p>
        </div>
      </section>

      {/* Quick CTA */}
      <section style={{ padding: '2.5rem 2rem', background: 'white', borderBottom: '1px solid #e5e7eb' }}>
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/quote" className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold rounded-lg hover:shadow-lg transition-all" style={{ textDecoration: 'none', boxShadow: '0 4px 12px rgba(30, 107, 76, 0.2)' }}>
            📋 Get Vehicle Export Quote
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '3rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Service Overview */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#0B1F3A', fontWeight: '800' }}>
              🌍 Complete Vehicle Export Solution
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: '🚗', title: 'Vehicle Selection', desc: 'Access to dealership network' },
                { icon: '📋', title: 'Full Documentation', desc: 'All permits and customs forms' },
                { icon: '🛡️', title: 'Insurance Included', desc: 'Motor & Marine coverage' },
                { icon: '🚢', title: 'Multi-Modal Shipping', desc: '5 freight options' },
                { icon: '✓', title: 'Expert Clearance', desc: 'SARS & customs specialists' },
                { icon: '📱', title: 'Real-Time Tracking', desc: 'Live shipment updates' }
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '32px', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '14px', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Export Procedure Timeline */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#0B1F3A', fontWeight: '800' }}>
              📍 8-Step Export Procedure
            </h2>
            <div className="space-y-3">
              {exportSteps.map((item) => (
                <div key={item.step} style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <button
                    onClick={() => setExpandedStep(expandedStep === item.step ? null : item.step)}
                    style={{
                      width: '100%',
                      padding: '1.5rem',
                      background: expandedStep === item.step ? '#f0fdf4' : 'white',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      background: '#1E6B4C',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '18px',
                      flexShrink: 0
                    }}>
                      {item.step}
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '15px', margin: '0 0 0.25rem 0' }}>
                        {item.icon} {item.title}
                      </h4>
                      <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                    <div style={{ fontSize: '20px', color: '#1E6B4C' }}>
                      {expandedStep === item.step ? '▼' : '▶'}
                    </div>
                  </button>

                  {expandedStep === item.step && (
                    <div style={{
                      padding: '1.5rem',
                      background: '#f9fafb',
                      borderTop: '1px solid #e5e7eb'
                    }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {item.details.map((detail, idx) => (
                          <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <span style={{ color: '#1E6B4C', fontWeight: '700', flexShrink: 0 }}>✓</span>
                            <span style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.5' }}>{detail}</span>
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
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#0B1F3A', fontWeight: '800' }}>
              🚢 Freight Options
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {freightOptions.map((option, i) => (
                <div key={i} style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  padding: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '32px' }}>{option.icon}</span>
                    <div>
                      <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '15px', margin: 0 }}>
                        {option.name}
                      </h4>
                      <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>
                        Cost: {option.cost}
                      </p>
                    </div>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '0.75rem' }}>
                    {option.description}
                  </p>
                  <p style={{ color: '#1E6B4C', fontSize: '12px', fontWeight: '600', margin: 0 }}>
                    Best for: {option.ideal}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#0B1F3A', fontWeight: '800' }}>
              📄 Required Documentation
            </h2>
            <div style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '10px',
              padding: '2rem'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                {requiredDocs.map((doc, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: '#1E6B4C', fontWeight: '700', fontSize: '16px' }}>✓</span>
                    <span style={{ color: '#4b5563', fontSize: '14px' }}>{doc}</span>
                  </div>
                ))}
              </div>
              <p style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: '#f0fdf4',
                border: '1px solid #dcfce7',
                borderRadius: '8px',
                color: '#166534',
                fontSize: '13px',
                margin: '0'
              }}>
                ℹ️ Additional country-specific documents may be required based on destination. Our team will advise during the quotation process.
              </p>
            </div>
          </div>

          {/* Why Choose AfriBridge */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#0B1F3A', fontWeight: '800' }}>
              🌟 Why Choose AfriBridge for Vehicle Export?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
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
                <div key={i} style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  padding: '1.5rem'
                }}>
                  <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '14px', marginBottom: '0.5rem' }}>
                    ✓ {item.title}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#0B1F3A', fontWeight: '800' }}>
              ❓ Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                { q: 'How long does the export process take?', a: 'Typically 4-6 weeks from vehicle selection to dispatch, depending on freight option and destination.' },
                { q: 'What is CIF pricing?', a: 'Cost, Insurance & Freight - all-inclusive pricing covering vehicle purchase, insurance, and freight to your destination.' },
                { q: 'Do you handle VAT refunds?', a: 'Yes, VAT refunds are applied as an upfront discount in your CIF quote for export vehicles.' },
                { q: 'Which countries do you ship to?', a: 'We ship worldwide, with special expertise in SADC, East Africa, West Africa, and beyond.' },
                { q: 'What if customs delays my shipment?', a: 'Our team monitors all shipments 24/7. We proactively handle delays and keep you informed via email and WhatsApp.' },
                { q: 'Can I track my vehicle in real-time?', a: 'Yes, all shipments have AI-powered real-time tracking with predictive arrival estimates.' }
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  padding: '1.5rem'
                }}>
                  <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '14px', marginBottom: '0.75rem' }}>
                    Q: {item.q}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                    A: {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
            borderRadius: '12px',
            padding: '2.5rem',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '1rem', margin: '0 0 1rem 0' }}>
              Ready to Export Your Vehicle?
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '1.5rem', margin: '0 0 1.5rem 0', lineHeight: '1.6' }}>
              Get a transparent CIF quote in minutes. Our experts handle everything from vehicle selection to delivery.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/quote" style={{
                display: 'inline-block',
                padding: '0.875rem 2rem',
                background: '#F5B041',
                color: '#0B1F3A',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '14px'
              }}>
                📋 Get Quote Now
              </Link>
              <Link href="/contact" style={{
                display: 'inline-block',
                padding: '0.875rem 2rem',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '14px',
                border: '2px solid white'
              }}>
                💬 Contact Us
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

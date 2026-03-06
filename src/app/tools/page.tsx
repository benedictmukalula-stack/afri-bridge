'use client';

import Link from 'next/link';

export default function ToolsHub() {
  const tools = [
    {
      icon: '🔍',
      title: 'HS Code Validator',
      desc: 'AI-powered product classification. Get accurate HS codes in seconds.',
      features: ['Instant classification', 'Duty rate estimates', 'Compliance notes'],
      href: '/tools/hs-code-validator',
      color: '#1E6B4C'
    },
    {
      icon: '💰',
      title: 'Duty Calculator',
      desc: 'Calculate exact duties, taxes, and fees for any destination.',
      features: ['Multi-country support', 'Trade agreement benefits', 'Export estimator'],
      href: '/tools/duty-calculator',
      color: '#0B1F3A'
    },
    {
      icon: '📊',
      title: 'Shipping Rate Estimator',
      desc: 'Compare air, sea, and road freight costs in real-time.',
      features: ['5 shipping modes', 'Volume discounts', 'Consolidation savings'],
      href: '/tools/rate-estimator',
      color: '#F5B041'
    },
    {
      icon: '📋',
      title: 'Compliance Checklist',
      desc: 'Country-specific export requirements and documentation.',
      features: ['All corridors', 'Custom downloads', 'Regulatory alerts'],
      href: '/tools/compliance-checklist',
      color: '#1E6B4C'
    },
    {
      icon: '📚',
      title: 'Resource Library',
      desc: 'Free guides, templates, checklists, and industry resources.',
      features: ['12+ guides', 'Download templates', 'Best practices'],
      href: '/resources',
      color: '#0B1F3A'
    },
    {
      icon: '🎓',
      title: 'Learning Center',
      desc: 'Video tutorials on customs, compliance, and international logistics.',
      features: ['40+ videos', 'Expert instructors', 'Case studies'],
      href: '/learn',
      color: '#F5B041'
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1e3a5f 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#F5B041',
            textShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
            fontWeight: '800',
          }}>
            🛠️ Premium Logistics Tools
          </h1>
          <p style={{
            color: '#E5E7EB',
            fontSize: '16px',
            lineHeight: '1.7',
            fontWeight: '500',
            maxWidth: '600px'
          }}>
            Free tools to optimize your logistics operations. Get instant quotes, calculate duties, find the best trade corridors, and ensure compliance across Africa.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section style={{ padding: '4rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <Link href={tool.href} key={i} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tool.color;
                  e.currentTarget.style.boxShadow = `0 12px 32px rgba(30, 107, 76, 0.1)`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '1rem' }}>{tool.icon}</div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: '#0B1F3A',
                    marginBottom: '0.5rem',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {tool.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: '#6b7280',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6',
                    flex: 1
                  }}>
                    {tool.desc}
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    {tool.features.map((feature, idx) => (
                      <li key={idx} style={{
                        fontSize: '12px',
                        color: '#4b5563',
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'center'
                      }}>
                        <span style={{ color: tool.color, fontWeight: '700' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section style={{ padding: '3rem 2rem', background: 'white' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ color: '#0B1F3A', fontSize: '20px', fontWeight: '800', marginBottom: '1.5rem' }}>
            🚀 Coming Soon
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'ERP Integration API', desc: 'Connect with SAP, NetSuite, QuickBooks' },
              { title: 'Supplier Scorecard', desc: 'Rate and compare carriers and ports' },
              { title: 'Carbon Footprint', desc: 'Measure shipping environmental impact' },
              { title: 'Webinar Library', desc: 'Free training on customs and logistics' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '1.5rem',
                background: '#f9fafb',
                borderRadius: '10px',
                border: '1px solid #e5e7eb'
              }}>
                <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '14px', marginBottom: '0.5rem', margin: '0 0 0.5rem 0' }}>
                  {item.title}
                </h4>
                <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

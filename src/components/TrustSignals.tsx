'use client';

export default function TrustSignals() {
  const signals = [
    { icon: '✓', stat: '98.5%', label: 'On-Time Delivery', sub: 'SADC average' },
    { icon: '🚢', stat: '1,000+', label: 'Shipments Monthly', sub: 'All corridors' },
    { icon: '🌍', stat: '25+', label: 'Countries Served', sub: 'Pan-African reach' },
    { icon: '⏰', stat: '24/7', label: 'Real-Time Support', sub: 'WhatsApp, Email, Phone' },
  ];

  const certifications = [
    { name: 'SARS Certified', desc: 'Export/Import Licensed', icon: '📋' },
    { name: 'ISO 9001:2015', desc: 'Quality Management', icon: '✓' },
    { name: 'IATA Approved', desc: 'Air Freight Specialist', icon: '✈️' },
    { name: 'Customs Broker', desc: 'Licensed in SADC', icon: '🔐' },
  ];

  const slas = [
    { title: 'Quote Response', time: '< 2 hours', icon: '⚡' },
    { title: 'Customs Clearance', time: '24-48 hours', icon: '✓' },
    { title: 'Document Delivery', time: 'Next business day', icon: '📄' },
    { title: 'Customer Support', time: '24/7 availability', icon: '💬' },
  ];

  return (
    <section style={{ padding: '4rem 2rem', background: 'white' }} className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Performance Metrics */}
        <div className="mb-10">
          <h2 style={{ textAlign: 'center', color: '#0B1F3A', fontSize: '24px', fontWeight: '800', marginBottom: '3rem' }}>
            Trusted by African Logistics Leaders
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {signals.map((signal, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #f9fafb 100%)',
                border: '2px solid #dcfce7',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '1rem' }}>{signal.icon}</div>
                <div style={{ fontSize: '32px', fontWeight: '800', color: '#1E6B4C', marginBottom: '0.5rem' }}>
                  {signal.stat}
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0B1F3A', marginBottom: '0.25rem' }}>
                  {signal.label}
                </div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>
                  {signal.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SLA Commitments */}
        <div className="mb-10">
          <h3 style={{ color: '#0B1F3A', fontSize: '20px', fontWeight: '800', marginBottom: '2rem', textAlign: 'center' }}>
            🎯 Our SLA Commitments
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {slas.map((sla, i) => (
              <div key={i} style={{
                background: 'white',
                border: '2px solid #1E6B4C',
                borderRadius: '10px',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem'
              }}>
                <div style={{ fontSize: '36px', flexShrink: 0 }}>{sla.icon}</div>
                <div>
                  <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '14px', margin: '0 0 0.25rem 0' }}>
                    {sla.title}
                  </h4>
                  <p style={{ color: '#1E6B4C', fontWeight: '800', fontSize: '16px', margin: 0 }}>
                    {sla.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 style={{ color: '#0B1F3A', fontSize: '20px', fontWeight: '800', marginBottom: '2rem', textAlign: 'center' }}>
            🏆 Certifications & Compliance
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '10px',
                padding: '1.5rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '36px', marginBottom: '0.75rem' }}>{cert.icon}</div>
                <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '14px', marginBottom: '0.25rem', margin: '0 0 0.25rem 0' }}>
                  {cert.name}
                </h4>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

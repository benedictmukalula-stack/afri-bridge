'use client';

import { useState } from 'react';

interface Region {
  name: string;
  countries: string[];
  coverage: number;
  color: string;
}

export default function RegionalCoverageMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions: Region[] = [
    {
      name: 'SADC',
      countries: ['South Africa', 'Botswana', 'Zimbabwe', 'Zambia', 'Namibia', 'Mozambique', 'Malawi'],
      coverage: 95,
      color: '#1E6B4C'
    },
    {
      name: 'East Africa',
      countries: ['Kenya', 'Tanzania', 'Uganda', 'Ethiopia', 'Rwanda'],
      coverage: 85,
      color: '#10b981'
    },
    {
      name: 'West Africa',
      countries: ['Nigeria', 'Ghana', 'Ivory Coast', 'Senegal', 'Benin'],
      coverage: 78,
      color: '#34d399'
    },
    {
      name: 'Central Africa',
      countries: ['DRC', 'Cameroon', 'Chad'],
      coverage: 65,
      color: '#6ee7b7'
    },
  ];

  const metrics = [
    { label: 'Countries Served', value: '25+' },
    { label: 'Trade Routes', value: '40+' },
    { label: 'Ports & Terminals', value: '30+' },
    { label: 'Border Crossings', value: '50+' },
  ];

  return (
    <section style={{ padding: '4rem 2rem', background: 'white' }} className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 style={{ textAlign: 'center', color: '#0B1F3A', fontSize: '24px', fontWeight: '800', marginBottom: '1rem' }}>
          🌍 African Coverage Map
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          AfriBridge operates across 25+ countries with established networks, verified partners, and regulatory expertise.
        </p>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {metrics.map((metric, i) => (
            <div key={i} style={{
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '10px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: '800', color: '#1E6B4C', marginBottom: '0.5rem' }}>
                {metric.value}
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Map Area */}
          <div style={{
            background: '#f9fafb',
            borderRadius: '12px',
            padding: '2rem',
            border: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', marginBottom: '1rem' }}>🗺️</div>
              <p style={{ color: '#6b7280', margin: 0 }}>
                Interactive Map<br />
                <span style={{ fontSize: '12px' }}>Select a region to view details</span>
              </p>
              {selectedRegion && (
                <div style={{
                  marginTop: '2rem',
                  padding: '1rem',
                  background: '#f0fdf4',
                  borderRadius: '8px',
                  borderLeft: `4px solid ${regions.find(r => r.name === selectedRegion)?.color}`
                }}>
                  <p style={{ color: '#166534', fontWeight: '700', margin: '0 0 0.5rem 0' }}>
                    {selectedRegion}
                  </p>
                  <p style={{ color: '#166534', fontSize: '12px', margin: 0, lineHeight: '1.5' }}>
                    {regions.find(r => r.name === selectedRegion)?.countries.join(', ')}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Regions List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {regions.map((region, i) => (
              <div
                key={i}
                onClick={() => setSelectedRegion(region.name)}
                style={{
                  background: 'white',
                  border: selectedRegion === region.name ? `2px solid ${region.color}` : '1px solid #e5e7eb',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: selectedRegion === region.name ? '#f0fdf4' : 'white'
                }}
                onMouseEnter={(e) => {
                  if (selectedRegion !== region.name) {
                    e.currentTarget.style.borderColor = region.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedRegion !== region.name) {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h4 style={{
                    color: '#0B1F3A',
                    fontWeight: '800',
                    fontSize: '16px',
                    margin: 0
                  }}>
                    {region.name}
                  </h4>
                  <span style={{
                    background: region.color,
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700'
                  }}>
                    {region.coverage}%
                  </span>
                </div>

                <p style={{
                  color: '#6b7280',
                  fontSize: '12px',
                  margin: '0 0 0.75rem 0',
                  lineHeight: '1.5'
                }}>
                  {region.countries.join(', ')}
                </p>

                {/* Coverage Bar */}
                <div style={{
                  width: '100%',
                  height: '6px',
                  background: '#e5e7eb',
                  borderRadius: '3px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${region.coverage}%`,
                    height: '100%',
                    background: region.color,
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '3rem',
          background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '1rem', margin: '0 0 1rem 0' }}>
            Need Coverage in Your Region?
          </h3>
          <p style={{ fontSize: '14px', marginBottom: '1.5rem', margin: '0 0 1.5rem 0' }}>
            We're expanding to new regions constantly. Reach out to discuss your logistics needs.
          </p>
          <button style={{
            padding: '0.75rem 2rem',
            background: '#F5B041',
            color: '#0B1F3A',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '700',
            cursor: 'pointer'
          }}>
            Explore Coverage
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

interface Port {
  name: string;
  country: string;
  type: string;
}

interface Route {
  from: string;
  to: string;
  days: number;
  frequency: string;
}

interface Region {
  name: string;
  countries: string[];
  coverage: number;
  color: string;
  ports: Port[];
  routes: Route[];
  borderCrossings: string[];
}

export default function RegionalCoverageMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

  const regions: Region[] = [
    {
      name: 'SADC',
      countries: ['South Africa', 'Botswana', 'Zimbabwe', 'Zambia', 'Namibia', 'Mozambique', 'Malawi'],
      coverage: 95,
      color: '#1E6B4C',
      ports: [
        { name: 'Port of Durban', country: 'South Africa', type: 'Deep Water' },
        { name: 'Port of Cape Town', country: 'South Africa', type: 'Deep Water' },
        { name: 'Port of Maputo', country: 'Mozambique', type: 'Regional Hub' },
        { name: 'Port of Beira', country: 'Mozambique', type: 'Regional' },
      ],
      routes: [
        { from: 'South Africa', to: 'Zimbabwe', days: 8, frequency: 'Daily' },
        { from: 'South Africa', to: 'Botswana', days: 5, frequency: 'Daily' },
        { from: 'South Africa', to: 'Zambia', days: 12, frequency: 'Twice Weekly' },
        { from: 'Mozambique', to: 'Malawi', days: 6, frequency: 'Weekly' },
      ],
      borderCrossings: ['Beitbridge (SA-ZW)', 'Chirundu (ZA-ZM)', 'Kazungula (Botswana-Zambia)', 'Lebombo (SA-Mozambique)']
    },
    {
      name: 'East Africa',
      countries: ['Kenya', 'Tanzania', 'Uganda', 'Ethiopia', 'Rwanda'],
      coverage: 85,
      color: '#10b981',
      ports: [
        { name: 'Port of Mombasa', country: 'Kenya', type: 'Deep Water' },
        { name: 'Port of Dar es Salaam', country: 'Tanzania', type: 'Deep Water' },
        { name: 'Port of Aden', country: 'Yemen', type: 'Regional Hub' },
      ],
      routes: [
        { from: 'Kenya', to: 'Uganda', days: 7, frequency: 'Daily' },
        { from: 'Tanzania', to: 'Rwanda', days: 10, frequency: 'Twice Weekly' },
        { from: 'Kenya', to: 'Ethiopia', days: 6, frequency: 'Daily' },
      ],
      borderCrossings: ['Malaba (Kenya-Uganda)', 'Taveta (Kenya-Tanzania)', 'Namanga (Kenya-Tanzania)']
    },
    {
      name: 'West Africa',
      countries: ['Nigeria', 'Ghana', 'Ivory Coast', 'Senegal', 'Benin'],
      coverage: 78,
      color: '#34d399',
      ports: [
        { name: 'Port of Lagos', country: 'Nigeria', type: 'Deep Water' },
        { name: 'Port of Tema', country: 'Ghana', type: 'Deep Water' },
        { name: 'Port of Abidjan', country: 'Ivory Coast', type: 'Deep Water' },
      ],
      routes: [
        { from: 'Nigeria', to: 'Ghana', days: 9, frequency: 'Daily' },
        { from: 'Ghana', to: 'Senegal', days: 12, frequency: 'Twice Weekly' },
        { from: 'Nigeria', to: 'Benin', days: 4, frequency: 'Daily' },
      ],
      borderCrossings: ['Aflao (Ghana-Togo)', 'Ouagadougou (Mali border)', 'Seme (Nigeria-Benin)']
    },
    {
      name: 'Central Africa',
      countries: ['DRC', 'Cameroon', 'Chad'],
      coverage: 65,
      color: '#6ee7b7',
      ports: [
        { name: 'Port of Kinshasa', country: 'DRC', type: 'River Port' },
        { name: 'Port of Douala', country: 'Cameroon', type: 'Deep Water' },
      ],
      routes: [
        { from: 'Cameroon', to: 'DRC', days: 15, frequency: 'Weekly' },
        { from: 'DRC', to: 'Chad', days: 14, frequency: 'Bi-weekly' },
      ],
      borderCrossings: ['Kasumbalesa (DRC-Zambia)', 'Bangui (CAR border)']
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

        {/* Enhanced Regions Display */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {regions.map((region, i) => (
            <div
              key={i}
              onClick={() => setSelectedRegion(region.name)}
              style={{
                background: 'white',
                border: selectedRegion === region.name ? `3px solid ${region.color}` : '2px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.75rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: selectedRegion === region.name ? `0 12px 24px ${region.color}20` : '0 2px 8px rgba(0, 0, 0, 0.05)',
              }}
              onMouseEnter={(e) => {
                if (selectedRegion !== region.name) {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 8px 16px ${region.color}20`;
                }
              }}
              onMouseLeave={(e) => {
                if (selectedRegion !== region.name) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h4 style={{
                  color: '#0B1F3A',
                  fontWeight: '800',
                  fontSize: '18px',
                  margin: 0
                }}>
                  {region.name}
                </h4>
                <span style={{
                  background: region.color,
                  color: 'white',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '700'
                }}>
                  {region.coverage}%
                </span>
              </div>

              {/* Coverage Bar */}
              <div style={{
                width: '100%',
                height: '8px',
                background: '#e5e7eb',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: `${region.coverage}%`,
                  height: '100%',
                  background: region.color,
                  transition: 'width 0.3s ease'
                }}></div>
              </div>

              <p style={{
                color: '#6b7280',
                fontSize: '13px',
                margin: '0 0 1rem 0',
                lineHeight: '1.5'
              }}>
                <strong>{region.countries.length} countries:</strong> {region.countries.join(', ')}
              </p>

              {/* Quick Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ padding: '0.75rem', background: '#f9fafb', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: region.color }}>
                    {region.ports.length}
                  </div>
                  <div style={{ fontSize: '11px', color: '#6b7280', fontWeight: '600' }}>Ports</div>
                </div>
                <div style={{ padding: '0.75rem', background: '#f9fafb', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: region.color }}>
                    {region.routes.length}
                  </div>
                  <div style={{ fontSize: '11px', color: '#6b7280', fontWeight: '600' }}>Trade Routes</div>
                </div>
              </div>

              {/* Expand Button */}
              <button
                onClick={() => setExpandedRegion(expandedRegion === region.name ? null : region.name)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: selectedRegion === region.name ? region.color : '#f9fafb',
                  color: selectedRegion === region.name ? 'white' : region.color,
                  border: `1px solid ${region.color}`,
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {expandedRegion === region.name ? '▼ Hide Details' : '▶ View Details'}
              </button>
            </div>
          ))}
        </div>

        {/* Expanded Region Details */}
        {expandedRegion && (
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #e8f8f5 100%)',
            border: `3px solid ${regions.find(r => r.name === expandedRegion)?.color}`,
            borderRadius: '16px',
            padding: '2.5rem',
            marginBottom: '2rem'
          }}>
            {regions.map((region) => {
              if (region.name !== expandedRegion) return null;
              return (
                <div key={region.name}>
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#0B1F3A', fontSize: '22px', fontWeight: '800', marginBottom: '1rem', margin: '0 0 1rem 0' }}>
                      {region.name} Network Details
                    </h3>

                    {/* Ports */}
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '16px', marginBottom: '1rem', marginTop: 0 }}>
                        🏪 Key Ports & Terminals ({region.ports.length})
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        {region.ports.map((port, i) => (
                          <div key={i} style={{
                            background: 'white',
                            border: `2px solid ${region.color}`,
                            borderRadius: '10px',
                            padding: '1rem'
                          }}>
                            <div style={{ fontWeight: '700', color: '#0B1F3A', marginBottom: '0.35rem' }}>
                              {port.name}
                            </div>
                            <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '0.35rem' }}>
                              {port.country}
                            </div>
                            <div style={{
                              fontSize: '12px',
                              fontWeight: '600',
                              color: region.color,
                              background: `${region.color}15`,
                              padding: '0.35rem 0.75rem',
                              borderRadius: '6px',
                              display: 'inline-block'
                            }}>
                              {port.type}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Trade Routes */}
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '16px', marginBottom: '1rem', marginTop: 0 }}>
                        🛣️ Active Trade Routes ({region.routes.length})
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        {region.routes.map((route, i) => (
                          <div key={i} style={{
                            background: 'white',
                            border: `2px solid ${region.color}`,
                            borderRadius: '10px',
                            padding: '1rem'
                          }}>
                            <div style={{ fontSize: '14px', fontWeight: '700', color: '#0B1F3A', marginBottom: '0.5rem' }}>
                              {route.from} → {route.to}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6b7280' }}>
                              <span>⏱️ {route.days} days</span>
                              <span style={{ fontWeight: '600', color: region.color }}>📅 {route.frequency}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Border Crossings */}
                    <div>
                      <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '16px', marginBottom: '1rem', marginTop: 0 }}>
                        🚪 Border Crossing Points ({region.borderCrossings.length})
                      </h4>
                      <div style={{
                        background: 'white',
                        border: `2px solid ${region.color}`,
                        borderRadius: '10px',
                        padding: '1.5rem'
                      }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                          {region.borderCrossings.map((crossing, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                              <span style={{ fontSize: '16px' }}>✓</span>
                              <span style={{ color: '#4b5563', fontSize: '14px' }}>
                                {crossing}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

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

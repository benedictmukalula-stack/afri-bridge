'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LearnHub() {
  const [selectedPlaylist, setSelectedPlaylist] = useState('getting-started');

  const playlists: { [key: string]: any[] } = {
    'getting-started': [
      { id: 1, title: 'What is Customs Clearing?', duration: '4:32', desc: 'Understanding the customs process' },
      { id: 2, title: 'How to Get a Logistics Quote', duration: '3:15', desc: 'Step-by-step quote guide' },
      { id: 3, title: 'HS Codes Explained', duration: '5:48', desc: 'Product classification basics' },
      { id: 4, title: 'Incoterms Simplified', duration: '6:20', desc: 'EXW, FOB, CIF, DDP explained' },
    ],
    'advanced': [
      { id: 5, title: 'Trade Agreement Benefits', duration: '7:12', desc: 'SADC preferential tariffs' },
      { id: 6, title: 'Duty Optimization Strategies', duration: '8:45', desc: 'Legal ways to minimize taxes' },
      { id: 7, title: 'Supply Chain Risk Management', duration: '9:30', desc: 'Protecting your shipments' },
      { id: 8, title: 'Corridor-Specific Requirements', duration: '10:15', desc: 'SA-ZW-KE routes deep dive' },
    ],
    'case-studies': [
      { id: 9, title: 'Mining Equipment Export Case', duration: '12:40', desc: 'How we cleared 50-ton shipment' },
      { id: 10, title: 'FMCG Consolidation Strategy', duration: '8:20', desc: 'Saving 30% through smart routing' },
      { id: 11, title: 'Emergency Customs Clearance', duration: '6:50', desc: 'Real story: 24-hour urgent delivery' },
      { id: 12, title: 'Cross-Border Vehicle Export', duration: '11:30', desc: '7-step vehicle export process' },
    ]
  };

  const currentPlaylist = playlists[selectedPlaylist] || [];

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1e3a5f 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#F5B041',
            fontWeight: '800',
          }}>
            🎓 Learning Center
          </h1>
          <p style={{
            color: '#E5E7EB',
            fontSize: '16px',
            lineHeight: '1.7',
          }}>
            Free video tutorials on customs, compliance, and international logistics.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '3rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Playlists */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {Object.keys(playlists).map(key => (
                <button
                  key={key}
                  onClick={() => setSelectedPlaylist(key)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: selectedPlaylist === key ? '#1E6B4C' : 'white',
                    color: selectedPlaylist === key ? 'white' : '#6b7280',
                    border: selectedPlaylist === key ? 'none' : '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textTransform: 'capitalize'
                  }}
                >
                  {key.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {currentPlaylist.map(video => (
              <div key={video.id} style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1E6B4C';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(30, 107, 76, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {/* Thumbnail */}
                <div style={{
                  background: '#f9fafb',
                  height: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  position: 'relative'
                }}>
                  ▶️
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    background: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {video.duration}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{
                    color: '#0B1F3A',
                    fontSize: '14px',
                    fontWeight: '800',
                    marginBottom: '0.5rem',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {video.title}
                  </h4>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '12px',
                    margin: 0
                  }}>
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
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
              Want Personalized Training?
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '1.5rem', margin: '0 0 1.5rem 0' }}>
              Schedule a webinar with our logistics experts for your team.
            </p>
            <Link href="/contact" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: '#F5B041',
              color: '#0B1F3A',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '14px'
            }}>
              Book Webinar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

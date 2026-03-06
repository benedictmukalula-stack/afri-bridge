'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AccountDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <>
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1e3a5f 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#F5B041',
            fontWeight: '800',
          }}>
            📊 Account Dashboard
          </h1>
          <p style={{ color: '#E5E7EB', fontSize: '16px' }}>
            Manage your shipments, quotes, and account preferences (Coming Soon)
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #e5e7eb' }}>
            {['dashboard', 'shipments', 'quotes', 'settings'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '1rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === tab ? '2px solid #1E6B4C' : 'none',
                  color: activeTab === tab ? '#1E6B4C' : '#6b7280',
                  fontWeight: activeTab === tab ? '700' : '500',
                  cursor: 'pointer',
                  textTransform: 'capitalize'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '3rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '1rem' }}>🚀</div>
            <h3 style={{ color: '#0B1F3A', fontSize: '20px', fontWeight: '800', marginBottom: '1rem' }}>
              Premium Account Hub
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
              We're building a powerful account dashboard where you can manage all your shipments, quotes, documents, and preferences in one place.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-2rem">
              {[
                { icon: '📦', title: 'Shipment Tracker', desc: 'Real-time tracking of all your shipments' },
                { icon: '💰', title: 'Quote History', desc: 'View and manage past quotes' },
                { icon: '📄', title: 'Documents', desc: 'Access all shipping documents' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '32px', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <h4 style={{ color: '#0B1F3A', fontWeight: '700', margin: '0 0 0.5rem 0' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/contact" style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'linear-gradient(135deg, #1E6B4C 0%, #10b981 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '700'
              }}>
                Get Early Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

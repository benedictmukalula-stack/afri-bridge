'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ResourcesHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: 1,
      category: 'guide',
      title: 'Complete Guide to SADC Trade Corridors',
      desc: 'Everything you need to know about trading across Southern Africa - tariffs, regulations, and best practices.',
      icon: '🗺️',
      readTime: '12 min',
      featured: true
    },
    {
      id: 2,
      category: 'guide',
      title: 'HS Code Classification Explained',
      desc: 'Master product classification with our comprehensive HS code guide. Learn how to avoid tariff misclassification.',
      icon: '📚',
      readTime: '8 min',
      featured: true
    },
    {
      id: 3,
      category: 'template',
      title: 'Export Documentation Template Pack',
      desc: 'Download ready-to-use templates for commercial invoices, packing lists, and customs forms.',
      icon: '📄',
      readTime: 'Download',
      featured: false
    },
    {
      id: 4,
      category: 'guide',
      title: 'Customs Compliance Handbook',
      desc: 'Your go-to reference for staying compliant across all SADC borders. Updated quarterly with regulation changes.',
      icon: '✓',
      readTime: '15 min',
      featured: false
    },
    {
      id: 5,
      category: 'video',
      title: 'How Customs Clearance Works',
      desc: 'Video walkthrough of the customs clearance process from documentation to delivery.',
      icon: '▶️',
      readTime: '6 min video',
      featured: false
    },
    {
      id: 6,
      category: 'guide',
      title: 'Incoterms Explained',
      desc: 'Understanding EXW, FOB, CIF, DDP and more. Learn which incoterm is right for your shipment.',
      icon: '⚖️',
      readTime: '10 min',
      featured: false
    },
    {
      id: 7,
      category: 'checklist',
      title: 'Pre-Shipment Inspection Checklist',
      desc: 'Verify everything before your shipment leaves. Prevent delays and rejections with this detailed checklist.',
      icon: '☑️',
      readTime: 'Checklist',
      featured: false
    },
    {
      id: 8,
      category: 'guide',
      title: 'Duty Optimization Strategies',
      desc: 'Legal ways to minimize import duties and taxes on your shipments using trade agreements and classifications.',
      icon: '💰',
      readTime: '9 min',
      featured: false
    },
    {
      id: 9,
      category: 'video',
      title: 'Vehicle Export Walkthrough',
      desc: '7-step vehicle export process explained with real examples from our recent shipments.',
      icon: '🚗',
      readTime: '10 min video',
      featured: false
    },
    {
      id: 10,
      category: 'template',
      title: 'Master Shipment Tracking Template',
      desc: 'Excel template to track all your shipments, costs, and performance metrics in one place.',
      icon: '📊',
      readTime: 'Download',
      featured: false
    },
    {
      id: 11,
      category: 'guide',
      title: 'Insurance Guide for International Shipments',
      desc: 'When you need insurance, what to insure, and how to file claims. Complete insurance handbook.',
      icon: '🛡️',
      readTime: '11 min',
      featured: false
    },
    {
      id: 12,
      category: 'checklist',
      title: 'Country-Specific Requirements Matrix',
      desc: 'Quick reference table comparing requirements across 15+ African countries and trade blocs.',
      icon: '🌍',
      readTime: 'Reference',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Resources', count: resources.length },
    { id: 'guide', label: 'Guides & Articles', count: resources.filter(r => r.category === 'guide').length },
    { id: 'video', label: 'Videos', count: resources.filter(r => r.category === 'video').length },
    { id: 'template', label: 'Templates', count: resources.filter(r => r.category === 'template').length },
    { id: 'checklist', label: 'Checklists', count: resources.filter(r => r.category === 'checklist').length },
  ];

  const filtered = selectedCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

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
            📚 Resource Library
          </h1>
          <p style={{
            color: '#E5E7EB',
            fontSize: '16px',
            lineHeight: '1.7',
          }}>
            Free guides, templates, videos, and checklists to master international logistics and customs compliance.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '3rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: selectedCategory === cat.id ? '#1E6B4C' : 'white',
                    color: selectedCategory === cat.id ? 'white' : '#6b7280',
                    border: selectedCategory === cat.id ? 'none' : '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label} <span style={{ opacity: 0.7, marginLeft: '0.5rem' }}>({cat.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Resources */}
          {selectedCategory === 'all' && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ color: '#0B1F3A', fontSize: '20px', fontWeight: '800', marginBottom: '1.5rem' }}>
                ⭐ Featured Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {resources.filter(r => r.featured).map(resource => (
                  <div key={resource.id} style={{
                    background: 'white',
                    border: '2px solid #1E6B4C',
                    borderRadius: '12px',
                    padding: '2rem',
                    boxShadow: '0 4px 12px rgba(30, 107, 76, 0.1)',
                  }}>
                    <div style={{ fontSize: '40px', marginBottom: '1rem' }}>{resource.icon}</div>
                    <h3 style={{
                      color: '#0B1F3A',
                      fontSize: '16px',
                      fontWeight: '800',
                      marginBottom: '0.75rem',
                      margin: '0 0 0.75rem 0'
                    }}>
                      {resource.title}
                    </h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '13px',
                      marginBottom: '1rem',
                      lineHeight: '1.6'
                    }}>
                      {resource.desc}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '1rem',
                      borderTop: '1px solid #e5e7eb'
                    }}>
                      <span style={{ fontSize: '12px', color: '#9ca3af' }}>⏱️ {resource.readTime}</span>
                      <Link href="#" style={{
                        color: '#1E6B4C',
                        fontWeight: '700',
                        textDecoration: 'none',
                        fontSize: '13px'
                      }}>
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Resources Grid */}
          <h2 style={{ color: '#0B1F3A', fontSize: '20px', fontWeight: '800', marginBottom: '1.5rem' }}>
            {selectedCategory === 'all' ? 'All Resources' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(resource => (
              <div key={resource.id} style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '10px',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1E6B4C';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(30, 107, 76, 0.08)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ fontSize: '32px', marginBottom: '0.75rem' }}>{resource.icon}</div>
                <h4 style={{
                  color: '#0B1F3A',
                  fontSize: '14px',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  margin: '0 0 0.5rem 0',
                  lineHeight: '1.4'
                }}>
                  {resource.title}
                </h4>
                <p style={{
                  color: '#6b7280',
                  fontSize: '12px',
                  marginBottom: '1rem',
                  lineHeight: '1.5',
                  margin: '0.5rem 0 1rem 0'
                }}>
                  {resource.desc}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid #e5e7eb',
                  fontSize: '12px',
                  color: '#9ca3af'
                }}>
                  <span>{resource.readTime}</span>
                  <span style={{ color: '#1E6B4C', fontWeight: '700' }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ padding: '3rem 2rem', background: 'white' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 style={{ color: '#0B1F3A', fontSize: '24px', fontWeight: '800', marginBottom: '1rem' }}>
            📧 Get Monthly Logistics Tips
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
            Subscribe to our newsletter for new guides, regulation updates, and insider tips on saving money on international shipping.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '0.875rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
            <button
              style={{
                padding: '0.875rem 2rem',
                background: 'linear-gradient(135deg, #1E6B4C 0%, #10b981 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </div>
          <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>
            ✓ No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}

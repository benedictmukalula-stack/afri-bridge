'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HSResult {
  code: string;
  description: string;
  category: string;
  dutyRate: string;
  notes: string;
}

export default function HSCodeValidator() {
  const [productDesc, setProductDesc] = useState('');
  const [results, setResults] = useState<HSResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  // Simulated HS Code database
  const hsDatabase: { [key: string]: HSResult } = {
    'clothing': {
      code: '6204.62',
      description: 'Women\'s cotton trousers',
      category: 'Textiles & Apparel',
      dutyRate: '12-15%',
      notes: 'Subject to SADC tariff preferences. Check RoO certification.'
    },
    'electronics': {
      code: '8517.62',
      description: 'Mobile phones & smartphones',
      category: 'Electrical Machinery',
      dutyRate: '8-10%',
      notes: 'May require import license. Check your destination regulations.'
    },
    'machinery': {
      code: '8437.80',
      description: 'Agricultural machinery & equipment',
      category: 'Machinery',
      dutyRate: '5-8%',
      notes: 'Possible exemption for developing countries. Verify destination.'
    },
    'vehicles': {
      code: '8704.21',
      description: 'Trucks & commercial vehicles',
      category: 'Vehicles',
      dutyRate: '15-25%',
      notes: 'Vehicle import may require additional permits. High duty rate.'
    },
    'food': {
      code: '0803.00',
      description: 'Bananas & plantains',
      category: 'Food Products',
      dutyRate: '10-15%',
      notes: 'Perishable - requires temperature-controlled transport. SPS requirements apply.'
    },
    'chemicals': {
      code: '2905.11',
      description: 'Ethanol & denatured alcohol',
      category: 'Chemicals',
      dutyRate: '5%',
      notes: 'Hazmat classification required. Requires dangerous goods certification.'
    },
    'furniture': {
      code: '9403.60',
      description: 'Wooden furniture',
      category: 'Furniture',
      dutyRate: '12-15%',
      notes: 'May require phytosanitary certificate. Check destination timber regulations.'
    },
    'plastic': {
      code: '3920.20',
      description: 'Plastic sheets & films',
      category: 'Plastics',
      dutyRate: '8-12%',
      notes: 'Recyclable materials may have preferential treatment. Check eco-labeling rules.'
    },
  };

  const handleSearch = () => {
    if (!productDesc.trim()) return;

    setIsSearching(true);

    // Simulate API call delay
    setTimeout(() => {
      const key = productDesc.toLowerCase();
      let found: HSResult | null = null;

      // Check for exact match or close match
      for (const [k, v] of Object.entries(hsDatabase)) {
        if (key.includes(k) || k.includes(key)) {
          found = v;
          break;
        }
      }

      if (!found) {
        found = {
          code: '9999.99',
          description: `${productDesc} - Unable to classify`,
          category: 'Unknown',
          dutyRate: 'Contact expert',
          notes: '⚠️ This product requires expert review. Contact AfriBridge customs specialist for accurate HS coding.',
        };
      }

      setResults(found);
      setIsSearching(false);
    }, 1000);
  };

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
            🔍 HS Code Validator
          </h1>
          <p style={{
            color: '#E5E7EB',
            fontSize: '16px',
            lineHeight: '1.7',
            fontWeight: '500'
          }}>
            AI-powered product classification. Get accurate HS codes in seconds to avoid customs delays and duty errors.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section style={{ padding: '3rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Search Box */}
          <div style={{
            background: 'white',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
          }}>
            <label style={{
              display: 'block',
              color: '#0B1F3A',
              fontWeight: '700',
              marginBottom: '0.75rem',
              fontSize: '14px'
            }}>
              Describe your product:
            </label>
            <textarea
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
              placeholder="e.g., Cotton T-shirts, Electronic components, Agricultural machinery..."
              style={{
                width: '100%',
                padding: '1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontFamily: 'inherit',
                fontSize: '14px',
                marginBottom: '1rem',
                resize: 'vertical',
                minHeight: '100px'
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.ctrlKey) {
                  handleSearch();
                }
              }}
            />
            <button
              onClick={handleSearch}
              disabled={isSearching || !productDesc.trim()}
              style={{
                width: '100%',
                padding: '0.875rem',
                background: isSearching ? '#9ca3af' : 'linear-gradient(135deg, #1E6B4C 0%, #10b981 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                cursor: isSearching ? 'wait' : 'pointer',
                fontSize: '16px',
              }}
            >
              {isSearching ? '⏳ Classifying...' : '🔍 Find HS Code'}
            </button>
          </div>

          {/* Results */}
          {results && (
            <div style={{
              background: 'white',
              border: `2px solid ${results.code === '9999.99' ? '#f59e0b' : '#1E6B4C'}`,
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2rem',
            }}>
              <h3 style={{ color: '#0B1F3A', fontSize: '18px', fontWeight: '800', marginBottom: '1.5rem' }}>
                Classification Result
              </h3>

              <div className="space-y-4">
                <div>
                  <p style={{ color: '#6b7280', fontSize: '12px', fontWeight: '700', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                    HS Code
                  </p>
                  <p style={{ color: '#0B1F3A', fontSize: '24px', fontWeight: '800', margin: 0 }}>
                    {results.code}
                  </p>
                </div>

                <div>
                  <p style={{ color: '#6b7280', fontSize: '12px', fontWeight: '700', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                    Description
                  </p>
                  <p style={{ color: '#4b5563', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>
                    {results.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p style={{ color: '#6b7280', fontSize: '12px', fontWeight: '700', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                      Category
                    </p>
                    <p style={{ color: '#1E6B4C', fontSize: '14px', fontWeight: '700', margin: 0 }}>
                      {results.category}
                    </p>
                  </div>
                  <div>
                    <p style={{ color: '#6b7280', fontSize: '12px', fontWeight: '700', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                      Typical Duty Rate
                    </p>
                    <p style={{ color: '#1E6B4C', fontSize: '14px', fontWeight: '700', margin: 0 }}>
                      {results.dutyRate}
                    </p>
                  </div>
                </div>

                <div style={{
                  background: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '1rem'
                }}>
                  <p style={{ color: '#6b7280', fontSize: '12px', fontWeight: '700', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    Important Notes
                  </p>
                  <p style={{ color: '#4b5563', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                    {results.notes}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
                <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '1rem' }}>
                  💡 <strong>Tip:</strong> This is a general classification. Actual duties vary by destination country and trade agreements. Always verify with our customs experts before shipping.
                </p>
              </div>
            </div>
          )}

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            color: 'white'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '1rem', margin: '0 0 1rem 0' }}>
              Need Expert HS Code Review?
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '1.5rem', margin: '0 0 1.5rem 0', lineHeight: '1.6' }}>
              Our customs specialists verify all HS codes and provide duty estimates for your specific destination.
            </p>
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
              📋 Get Compliance Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

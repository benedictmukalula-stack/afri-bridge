'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RateEstimator() {
  const [weight, setWeight] = useState('100');
  const [route, setRoute] = useState('SA-ZW');
  const [results, setResults] = useState<any>(null);

  const rates: { [key: string]: { air: number; sea: number; road: number } } = {
    'SA-ZW': { air: 2.50, sea: 0.75, road: 0.45 },
    'SA-KE': { air: 3.20, sea: 1.10, road: 0 },
    'SA-NG': { air: 4.50, sea: 1.50, road: 0 },
    'SA-GH': { air: 4.20, sea: 1.40, road: 0 },
  };

  const handleCalculate = () => {
    const w = parseFloat(weight) || 100;
    const rateData = rates[route] || rates['SA-ZW'];
    
    setResults({
      airCost: Math.round(w * rateData.air),
      seaCost: Math.round(w * rateData.sea),
      roadCost: rateData.road > 0 ? Math.round(w * rateData.road) : null,
      weight: w
    });
  };

  return (
    <>
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1e3a5f 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#F5B041',
            fontWeight: '800',
          }}>
            📊 Shipping Rate Estimator
          </h1>
          <p style={{ color: '#E5E7EB', fontSize: '16px' }}>
            Compare air, sea, and road freight rates instantly.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div style={{
            background: 'white',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
          }}>
            <div className="space-y-5">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight (kg)"
                style={{ width: '100%', padding: '0.875rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '16px' }}
              />
              <select
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                style={{ width: '100%', padding: '0.875rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '16px' }}
              >
                <option value="SA-ZW">South Africa → Zimbabwe</option>
                <option value="SA-KE">South Africa → Kenya</option>
                <option value="SA-NG">South Africa → Nigeria</option>
                <option value="SA-GH">South Africa → Ghana</option>
              </select>
              <button
                onClick={handleCalculate}
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  background: 'linear-gradient(135deg, #1E6B4C 0%, #10b981 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                Calculate Rates
              </button>
            </div>
          </div>

          {results && (
            <div style={{
              background: 'white',
              border: '2px solid #1E6B4C',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2rem',
            }}>
              <h3 style={{ color: '#0B1F3A', fontSize: '18px', fontWeight: '800', marginBottom: '1.5rem' }}>
                Rate Comparison for {results.weight}kg
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: '✈️', type: 'Air Freight', cost: results.airCost, time: '2-3 days' },
                  { icon: '🚢', type: 'Sea Freight', cost: results.seaCost, time: '14-21 days' },
                  results.roadCost && { icon: '🚚', type: 'Road Freight', cost: results.roadCost, time: '5-7 days' },
                ].filter(Boolean).map((item: any, i) => (
                  <div key={i} style={{
                    background: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '32px', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '14px', margin: '0 0 0.5rem 0' }}>
                      {item.type}
                    </h4>
                    <p style={{ color: '#1E6B4C', fontSize: '24px', fontWeight: '800', margin: '0 0 0.5rem 0' }}>
                      USD {item.cost}
                    </p>
                    <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{
            background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            color: 'white'
          }}>
            <Link href="/quote" style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              background: '#F5B041',
              color: '#0B1F3A',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '700'
            }}>
              📋 Get Detailed Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

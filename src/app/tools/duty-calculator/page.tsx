'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DutyBreakdown {
  subtotal: number;
  dutyRate: number;
  dutyAmount: number;
  vat: number;
  otherFees: number;
  total: number;
  savings?: number;
}

export default function DutyCalculator() {
  const [productValue, setProductValue] = useState('1000');
  const [destination, setDestination] = useState('South Africa');
  const [shipmentType, setShipmentType] = useState('Sea');
  const [breakdown, setBreakdown] = useState<DutyBreakdown | null>(null);

  const destinations: { [key: string]: number } = {
    'South Africa': 0.12,
    'Zimbabwe': 0.15,
    'Zambia': 0.14,
    'Botswana': 0.13,
    'Namibia': 0.12,
    'Mozambique': 0.16,
    'Malawi': 0.15,
    'Kenya': 0.14,
    'Nigeria': 0.20,
    'Ghana': 0.15,
  };

  const shipmentFees: { [key: string]: number } = {
    'Air': 150,
    'Sea': 75,
    'Road': 50,
    'Consolidation': 100,
  };

  const handleCalculate = () => {
    const value = parseFloat(productValue) || 0;
    const dutyRate = destinations[destination] || 0.12;
    const dutyAmount = value * dutyRate;
    const vat = (value + dutyAmount) * 0.15; // 15% VAT
    const otherFees = shipmentFees[shipmentType] || 75;
    const total = value + dutyAmount + vat + otherFees;

    setBreakdown({
      subtotal: value,
      dutyRate: dutyRate * 100,
      dutyAmount: Math.round(dutyAmount),
      vat: Math.round(vat),
      otherFees: otherFees,
      total: Math.round(total),
      savings: Math.round((value * 0.15)), // Potential savings
    });
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
            💰 Duty & Tax Calculator
          </h1>
          <p style={{
            color: '#E5E7EB',
            fontSize: '16px',
            lineHeight: '1.7',
            fontWeight: '500'
          }}>
            Calculate exact customs duties, VAT, and fees for your shipment to any SADC destination.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section style={{ padding: '3rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Input Form */}
          <div style={{
            background: 'white',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
          }}>
            <div className="space-y-5">
              <div>
                <label style={{
                  display: 'block',
                  color: '#0B1F3A',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  fontSize: '14px'
                }}>
                  Product Value (USD)
                </label>
                <input
                  type="number"
                  value={productValue}
                  onChange={(e) => setProductValue(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  color: '#0B1F3A',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  fontSize: '14px'
                }}>
                  Destination Country
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                >
                  {Object.keys(destinations).map((dest) => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  color: '#0B1F3A',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  fontSize: '14px'
                }}>
                  Shipment Type
                </label>
                <select
                  value={shipmentType}
                  onChange={(e) => setShipmentType(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                >
                  {Object.keys(shipmentFees).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

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
                💰 Calculate Duty
              </button>
            </div>
          </div>

          {/* Results */}
          {breakdown && (
            <div style={{
              background: 'white',
              border: '2px solid #1E6B4C',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2rem',
            }}>
              <h3 style={{ color: '#0B1F3A', fontSize: '18px', fontWeight: '800', marginBottom: '1.5rem' }}>
                Duty Breakdown
              </h3>

              <div className="space-y-3 mb-5">
                {[
                  { label: 'Product Value', value: `$${breakdown.subtotal.toLocaleString()}` },
                  { label: `Duty (${breakdown.dutyRate}%)`, value: `$${breakdown.dutyAmount.toLocaleString()}`, highlight: true },
                  { label: 'VAT (15%)', value: `$${breakdown.vat.toLocaleString()}`, highlight: true },
                  { label: `Shipping & Fees`, value: `$${breakdown.otherFees.toLocaleString()}` },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: item.highlight ? '0.75rem' : '0',
                    borderBottom: item.highlight ? '1px solid #e5e7eb' : 'none',
                  }}>
                    <span style={{ color: '#4b5563', fontSize: '14px', fontWeight: item.highlight ? '700' : '500' }}>
                      {item.label}
                    </span>
                    <span style={{ color: '#0B1F3A', fontSize: '14px', fontWeight: item.highlight ? '700' : '500' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{
                background: '#f0fdf4',
                border: '2px solid #1E6B4C',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 0.5rem 0', fontWeight: '600', textTransform: 'uppercase' }}>
                  Total Landed Cost
                </p>
                <p style={{ color: '#1E6B4C', fontSize: '32px', fontWeight: '800', margin: 0 }}>
                  ${breakdown.total.toLocaleString()}
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
              Want Personalized Duty Analysis?
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '1.5rem', margin: '0 0 1.5rem 0', lineHeight: '1.6' }}>
              Our customs experts provide detailed duty estimates and optimization strategies for your specific shipments.
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
              📋 Get Expert Duty Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

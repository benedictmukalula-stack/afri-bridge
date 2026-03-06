'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ChecklistItem {
  item: string;
  required: boolean;
}

interface CountryChecklist {
  [key: string]: ChecklistItem[];
}

export default function ComplianceChecklist() {
  const [selectedCountry, setSelectedCountry] = useState('South Africa');
  const [checklist, setChecklist] = useState<{ [key: string]: boolean }>({});

  const countryChecklists: CountryChecklist = {
    'South Africa': [
      { item: 'Commercial Invoice', required: true },
      { item: 'Packing List', required: true },
      { item: 'Bill of Lading (B/L)', required: true },
      { item: 'Certificate of Origin', required: false },
      { item: 'HS Code Classification', required: true },
      { item: 'Customs Declaration Form', required: true },
      { item: 'Import License (if applicable)', required: false },
      { item: 'SPS Certificate', required: false },
      { item: 'Insurance Certificate', required: false },
      { item: 'Bank Documents', required: false },
    ],
    'Zimbabwe': [
      { item: 'Commercial Invoice', required: true },
      { item: 'Packing List', required: true },
      { item: 'Bill of Lading', required: true },
      { item: 'Certificate of Origin (SADC)', required: true },
      { item: 'HS Code Classification', required: true },
      { item: 'Import Permit', required: true },
      { item: 'Customs Bond', required: false },
      { item: 'Technical Data Sheets', required: false },
    ],
    'Kenya': [
      { item: 'Commercial Invoice', required: true },
      { item: 'Packing List', required: true },
      { item: 'Bill of Lading/Airway Bill', required: true },
      { item: 'Certificate of Origin', required: true },
      { item: 'HS Code Classification', required: true },
      { item: 'Import Declaration Form', required: true },
      { item: 'Bank Guarantee', required: false },
      { item: 'Quality Certificate', required: false },
      { item: 'Standards Certificate', required: false },
    ],
    'Nigeria': [
      { item: 'Commercial Invoice', required: true },
      { item: 'Packing List', required: true },
      { item: 'Bill of Lading', required: true },
      { item: 'Certificate of Origin', required: true },
      { item: 'ECOWAS Certificate', required: true },
      { item: 'Import License', required: true },
      { item: 'FIRS Tax Number', required: true },
      { item: 'Agent Code', required: false },
      { item: 'Inspection Certificate', required: false },
    ],
  };

  const currentChecklist = countryChecklists[selectedCountry] || countryChecklists['South Africa'];
  const completionRate = Object.values(checklist).length > 0 
    ? (Object.values(checklist).filter(Boolean).length / currentChecklist.length) * 100 
    : 0;

  const handleToggle = (index: number) => {
    setChecklist(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setChecklist({});
  };

  const downloadChecklist = () => {
    const content = currentChecklist
      .map((item, i) => `${checklist[i] ? '[✓]' : '[ ]'} ${item.item}${item.required ? ' *' : ''}`)
      .join('\n');
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `compliance_checklist_${selectedCountry}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

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
            📋 Compliance Checklist Generator
          </h1>
          <p style={{ color: '#E5E7EB', fontSize: '16px' }}>
            Country-specific export requirements & documentation checklist.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section style={{ padding: '3rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Country Selection */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #e5e7eb'
          }}>
            <label style={{
              display: 'block',
              color: '#0B1F3A',
              fontWeight: '700',
              marginBottom: '1rem',
              fontSize: '14px'
            }}>
              Select Destination Country
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => handleCountryChange(e.target.value)}
              style={{
                width: '100%',
                padding: '0.875rem',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              {Object.keys(countryChecklists).map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          {/* Progress Bar */}
          {Object.keys(checklist).length > 0 && (
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '14px' }}>
                  Completion Progress
                </span>
                <span style={{ color: '#1E6B4C', fontWeight: '700', fontSize: '14px' }}>
                  {Math.round(completionRate)}%
                </span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#e5e7eb',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${completionRate}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #1E6B4C 0%, #10b981 100%)',
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
            </div>
          )}

          {/* Checklist */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            border: '1px solid #e5e7eb',
            marginBottom: '2rem'
          }}>
            <h3 style={{
              color: '#0B1F3A',
              fontSize: '16px',
              fontWeight: '800',
              marginBottom: '1.5rem',
              margin: '0 0 1.5rem 0'
            }}>
              Required Documents for {selectedCountry}
            </h3>
            
            <div className="space-y-3">
              {currentChecklist.map((item, i) => (
                <label key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1rem',
                  background: checklist[i] ? '#f0fdf4' : '#f9fafb',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  border: checklist[i] ? '1px solid #dcfce7' : '1px solid #e5e7eb',
                  transition: 'all 0.2s ease',
                }}>
                  <input
                    type="checkbox"
                    checked={checklist[i] || false}
                    onChange={() => handleToggle(i)}
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p style={{
                      color: '#0B1F3A',
                      fontWeight: '500',
                      fontSize: '14px',
                      margin: '0 0 0.25rem 0',
                      textDecoration: checklist[i] ? 'line-through' : 'none',
                      textDecorationColor: '#d1d5db'
                    }}>
                      {item.item}
                      {item.required && <span style={{ color: '#dc2626' }}> *</span>}
                    </p>
                    {item.required && (
                      <p style={{
                        color: '#6b7280',
                        fontSize: '11px',
                        margin: 0
                      }}>
                        Required document
                      </p>
                    )}
                  </div>
                </label>
              ))}
            </div>

            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              marginTop: '1.5rem',
              margin: '1.5rem 0 0 0'
            }}>
              * = Required document | ☐ = Recommended/Conditional
            </p>
          </div>

          {/* Actions */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <button
              onClick={downloadChecklist}
              style={{
                padding: '0.875rem',
                background: 'white',
                color: '#1E6B4C',
                border: '2px solid #1E6B4C',
                borderRadius: '8px',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              ⬇️ Download Checklist
            </button>
            <button
              onClick={() => {
                setChecklist({});
              }}
              style={{
                padding: '0.875rem',
                background: 'white',
                color: '#6b7280',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              ↻ Reset
            </button>
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            color: 'white'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '1rem', margin: '0 0 1rem 0' }}>
              Need Expert Review?
            </h3>
            <p style={{ fontSize: '13px', marginBottom: '1.5rem', margin: '0 0 1.5rem 0', lineHeight: '1.6' }}>
              Our compliance team verifies all documents and ensures regulatory compliance before shipment.
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
              Contact Compliance Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

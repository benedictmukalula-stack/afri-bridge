'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    shipmentType: 'Sea',
    incoterm: 'FOB',
    originCountry: '',
    originCity: '',
    destCountry: '',
    destCity: '',
    cargoDesc: '',
    hsCode: '',
    weight: '',
    dimensions: '',
    packages: '',
    readyDate: '',
    specialHandling: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to submit quote');
        setIsLoading(false);
        return;
      }

      setSubmitted(true);
      setIsLoading(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          shipmentType: 'Sea',
          incoterm: 'FOB',
          originCountry: '',
          originCity: '',
          destCountry: '',
          destCity: '',
          cargoDesc: '',
          hsCode: '',
          weight: '',
          dimensions: '',
          packages: '',
          readyDate: '',
          specialHandling: '',
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError('Network error. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Premium Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1e3a5f 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#F5B041',
            textShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
            letterSpacing: '-0.02em',
            fontWeight: '800',
            lineHeight: '1.2'
          }}>
            Request a Freight Quote
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{
            color: '#E5E7EB',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.7',
            fontWeight: '500'
          }}>
            Get a custom shipping quote from AfriBridge in under 24 hours. Our experts will review your shipment and provide competitive rates across all corridors.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section style={{ padding: '4rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left: Trust Content */}
          <div>
            <img
              src="https://images.pexels.com/photos/8441820/pexels-photo-8441820.jpeg"
              alt="Business professionals discussing logistics"
              className="mb-8 h-96 w-full object-cover rounded-lg shadow-lg"
              style={{
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
              }}
            />
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#0B1F3A', fontWeight: '800' }}>
              Why Choose AfriBridge?
            </h2>
            <ul className="space-y-6 mb-10">
              <li className="flex gap-4">
                <span style={{ color: '#1E6B4C' }} className="text-2xl font-bold flex-shrink-0 w-8">✓</span>
                <div>
                  <h4 className="font-bold text-base mb-1" style={{ color: '#0B1F3A' }}>Fast Turnaround</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Quote within 24 hours of submission</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span style={{ color: '#1E6B4C' }} className="text-2xl font-bold flex-shrink-0 w-8">✓</span>
                <div>
                  <h4 className="font-bold text-base mb-1" style={{ color: '#0B1F3A' }}>Compliance Checked</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">All quotes include HS coding & duty guidance</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span style={{ color: '#1E6B4C' }} className="text-2xl font-bold flex-shrink-0 w-8">✓</span>
                <div>
                  <h4 className="font-bold text-base mb-1" style={{ color: '#0B1F3A' }}>Multiple Modes</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Air, Sea, Road, and consolidation options</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span style={{ color: '#1E6B4C' }} className="text-2xl font-bold flex-shrink-0 w-8">✓</span>
                <div>
                  <h4 className="font-bold text-base mb-1" style={{ color: '#0B1F3A' }}>SADC Specialists</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">15+ years of corridor expertise</p>
                </div>
              </li>
            </ul>

            {/* Process Box */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 className="font-bold mb-6 text-base" style={{ color: '#0B1F3A' }}>Our Process</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <div style={{ color: '#1E6B4C', fontWeight: '700', minWidth: '24px' }}>1.</div>
                  <div style={{ color: '#4b5563', lineHeight: '1.6' }}>Submit your shipment details below</div>
                </div>
                <div className="flex gap-4">
                  <div style={{ color: '#1E6B4C', fontWeight: '700', minWidth: '24px' }}>2.</div>
                  <div style={{ color: '#4b5563', lineHeight: '1.6' }}>Our team reviews & confirms details</div>
                </div>
                <div className="flex gap-4">
                  <div style={{ color: '#1E6B4C', fontWeight: '700', minWidth: '24px' }}>3.</div>
                  <div style={{ color: '#4b5563', lineHeight: '1.6' }}>Receive custom quote with all options</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {!submitted ? (
              <>
                {/* Progress Indicator */}
                <div className="mb-10">
                  <div className="flex justify-between text-sm font-semibold mb-3" style={{ color: '#0B1F3A' }}>
                    <span>Step {currentStep} of {totalSteps}</span>
                    <span style={{ color: '#1E6B4C' }}>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="transition-all duration-300"
                      style={{
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #1E6B4C 0%, #10b981 100%)',
                        height: '100%'
                      }}
                    ></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Info */}
                <div>
                  <h3 className="font-bold mb-5" style={{ color: '#0B1F3A', fontSize: '16px' }}>Contact Information</h3>
                  <div className="grid gap-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone / WhatsApp *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    />
                  </div>
                </div>

                {/* Shipment Type & Incoterms */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-3" style={{ color: '#0B1F3A' }}>Shipment Type *</label>
                    <select
                      name="shipmentType"
                      value={formData.shipmentType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    >
                      <option>Air</option>
                      <option>Sea</option>
                      <option>Road</option>
                      <option>Consolidation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3" style={{ color: '#0B1F3A' }}>Incoterm *</label>
                    <select
                      name="incoterm"
                      value={formData.incoterm}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    >
                      <option>EXW</option>
                      <option>FOB</option>
                      <option>CIF</option>
                      <option>DDP</option>
                    </select>
                  </div>
                </div>

                {/* Origin & Destination */}
                <div>
                  <label className="block text-sm font-bold mb-3" style={{ color: '#0B1F3A' }}>Origin *</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="originCountry"
                      placeholder="Country"
                      value={formData.originCountry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    />
                    <input
                      type="text"
                      name="originCity"
                      placeholder="City"
                      value={formData.originCity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3" style={{ color: '#0B1F3A' }}>Destination *</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="destCountry"
                      placeholder="Country"
                      value={formData.destCountry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    />
                    <input
                      type="text"
                      name="destCity"
                      placeholder="City"
                      value={formData.destCity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    />
                  </div>
                </div>

                {/* Cargo Details */}
                <div>
                  <label className="block text-sm font-bold mb-3" style={{ color: '#0B1F3A' }}>Cargo Description *</label>
                  <textarea
                    name="cargoDesc"
                    placeholder="What are you shipping?"
                    value={formData.cargoDesc}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent h-24 text-sm transition-all resize-none"
                    style={{ background: 'white' }}
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="hsCode"
                    placeholder="HS Code (optional)"
                    value={formData.hsCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                    style={{ background: 'white' }}
                  />
                  <input
                    type="text"
                    name="readyDate"
                    placeholder="Ready Date"
                    value={formData.readyDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                    style={{ background: 'white' }}
                  />
                </div>

                {/* Dimensions */}
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="weight"
                    placeholder="Weight (kg)"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                    style={{ background: 'white' }}
                  />
                  <input
                    type="text"
                    name="dimensions"
                    placeholder="Dimensions (L×W×H)"
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                    style={{ background: 'white' }}
                  />
                  <input
                    type="text"
                    name="packages"
                    placeholder="# of Packages"
                    value={formData.packages}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                    style={{ background: 'white' }}
                  />
                </div>

                {/* Special Handling */}
                <div>
                  <label className="block text-sm font-bold mb-3" style={{ color: '#0B1F3A' }}>Special Handling Needs</label>
                  <select
                    name="specialHandling"
                    value={formData.specialHandling}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                    style={{ background: 'white' }}
                  >
                    <option value="">None</option>
                    <option>Hazmat</option>
                    <option>Cold Chain</option>
                    <option>Fragile</option>
                    <option>High Value</option>
                  </select>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-lg text-sm">
                    <p>{error}</p>
                  </div>
                )}

                {/* Compliance Note */}
                <div style={{
                  background: '#f0fdf4',
                  border: '1px solid #dcfce7',
                  color: '#166534',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '13px',
                  lineHeight: '1.6'
                }}>
                  ⓘ Quotes subject to documentation review and customs compliance. We'll confirm all details before finalizing.
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 text-lg font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: isLoading ? '#9ca3af' : 'linear-gradient(135deg, #1E6B4C 0%, #10b981 100%)',
                    color: 'white',
                    boxShadow: isLoading ? 'none' : '0 8px 20px rgba(30, 107, 76, 0.2)',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(30, 107, 76, 0.25)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 107, 76, 0.2)';
                  }}
                >
                  {isLoading ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </form>
              </>
            ) : (
              <div style={{
                background: 'white',
                padding: '3rem 2rem',
                borderRadius: '12px',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✓</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1E6B4C', fontWeight: '800' }}>
                  Quote Received!
                </h3>
                <p style={{ color: '#4b5563', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '15px' }}>
                  Thank you! We'll review your shipment details and send a custom quote within 24 hours.
                </p>
                <Link href="/contact" className="btn btn-primary" style={{
                  background: 'linear-gradient(135deg, #1E6B4C 0%, #10b981 100%)',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(30, 107, 76, 0.2)'
                }}>
                  Book a Call
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

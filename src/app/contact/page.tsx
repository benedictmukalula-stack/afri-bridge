'use client';

import SocialMediaIcons from '@/components/SocialMediaIcons';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [currentTab, setCurrentTab] = useState<'contact' | 'schedule'>('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
    serviceType: 'General Inquiry',
    budget: '',
    timeline: '',
    shipmentVolume: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to send message');
        setIsLoading(false);
        return;
      }

      setSubmitted(true);
      setIsLoading(false);

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          message: '',
          serviceType: 'General Inquiry',
          budget: '',
          timeline: '',
          shipmentVolume: '',
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
            Let's Talk Logistics
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{
            color: '#E5E7EB',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.7',
            fontWeight: '500'
          }}>
            Connect with AfriBridge's logistics experts. Whether you need a quote, have questions, or want to explore partnerships—we're here to help.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section style={{ padding: '4rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left: Contact Info & Quick Access */}
          <div>
            <img
              src="https://images.pexels.com/photos/6680149/pexels-photo-6680149.jpeg"
              alt="Business partnership"
              className="mb-8 h-96 w-full object-cover rounded-lg shadow-lg"
              style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }}
            />

            {/* Quick Contact Cards */}
            <div className="space-y-4 mb-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/27833910863?text=Hi%20AfriBridge!%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20shipment."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#25D366';
                  e.currentTarget.style.background = '#f0fdf4';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ fontSize: '24px' }}>💬</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0B1F3A' }}>WhatsApp (Preferred)</div>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>+27 83 391 0863 • Instant response</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+27115686712"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1E6B4C';
                  e.currentTarget.style.background = '#f0fdf4';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ fontSize: '24px' }}>📞</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0B1F3A' }}>Office Line</div>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>+27 11 568 6712 • Mon-Fri 8-18 SAST</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@afribridge.co.za"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1E6B4C';
                  e.currentTarget.style.background = '#f0fdf4';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ fontSize: '24px' }}>✉️</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0B1F3A' }}>Email</div>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>info@afribridge.co.za • 24h response</div>
                </div>
              </a>
            </div>

            {/* Response SLA */}
            <div style={{
              background: 'white',
              border: '2px solid #1E6B4C',
              borderRadius: '10px',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#1E6B4C', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                ⚡ Quick Response Guarantee
              </h4>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                Most inquiries answered within <span style={{ fontWeight: '700', color: '#0B1F3A' }}>2 hours</span> during business hours. <span style={{ fontWeight: '700', color: '#1E6B4C' }}>24/7 WhatsApp</span> support available.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: '#0B1F3A', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                Connect With Us
              </h4>
              <SocialMediaIcons variant="footer" />
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {!submitted ? (
              <>
                {/* Tab Switch */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #e5e7eb' }}>
                  <button
                    onClick={() => setCurrentTab('contact')}
                    style={{
                      padding: '1rem 1.5rem',
                      fontSize: '15px',
                      fontWeight: '700',
                      color: currentTab === 'contact' ? '#1E6B4C' : '#6b7280',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      borderBottom: currentTab === 'contact' ? '3px solid #1E6B4C' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Contact Form
                  </button>
                  <button
                    onClick={() => setCurrentTab('schedule')}
                    style={{
                      padding: '1rem 1.5rem',
                      fontSize: '15px',
                      fontWeight: '700',
                      color: currentTab === 'schedule' ? '#1E6B4C' : '#6b7280',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      borderBottom: currentTab === 'schedule' ? '3px solid #1E6B4C' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Schedule a Call
                  </button>
                </div>

                {currentTab === 'contact' ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6" style={{ color: '#0B1F3A', fontWeight: '800' }}>
                      Send us a Message
                    </h2>

                    {/* Basic Info */}
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                        style={{ background: 'white' }}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
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

                    {/* Company & Industry */}
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                        style={{ background: 'white' }}
                      />
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                        style={{ background: 'white' }}
                      >
                        <option value="">Select Industry</option>
                        <option>Mining</option>
                        <option>Oil & Gas</option>
                        <option>FMCG</option>
                        <option>Automotive</option>
                        <option>Agriculture</option>
                        <option>Manufacturing</option>
                        <option>Pharmaceutical</option>
                        <option>Construction</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Service Type & Timeline */}
                    <div className="grid grid-cols-2 gap-4">
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                        style={{ background: 'white' }}
                      >
                        <option>General Inquiry</option>
                        <option>Get a Quote</option>
                        <option>Track Shipment</option>
                        <option>Customs Help</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                        style={{ background: 'white' }}
                      >
                        <option value="">Timeframe</option>
                        <option>Immediate</option>
                        <option>Within 1 week</option>
                        <option>Within 1 month</option>
                        <option>Planning phase</option>
                      </select>
                    </div>

                    {/* Budget & Volume (Lead Qualification) */}
                    <div className="grid grid-cols-2 gap-4">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                        style={{ background: 'white' }}
                      >
                        <option value="">Budget Range</option>
                        <option>Under $5K</option>
                        <option>$5K - $25K</option>
                        <option>$25K - $100K</option>
                        <option>$100K+</option>
                      </select>
                      <select
                        name="shipmentVolume"
                        value={formData.shipmentVolume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                        style={{ background: 'white' }}
                      >
                        <option value="">Annual Volume</option>
                        <option>One-off shipment</option>
                        <option>1-5 shipments/year</option>
                        <option>Monthly shipments</option>
                        <option>Weekly+ shipments</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-bold mb-3" style={{ color: '#0B1F3A' }}>Message *</label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your logistics needs, current challenges, or how we can help..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent h-28 text-sm transition-all resize-none"
                        style={{ background: 'white' }}
                      ></textarea>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-lg text-sm">
                        <p>{error}</p>
                      </div>
                    )}

                    {/* Privacy Notice */}
                    <div style={{
                      background: '#f0fdf4',
                      border: '1px solid #dcfce7',
                      color: '#166534',
                      padding: '1rem',
                      borderRadius: '8px',
                      fontSize: '12px',
                      lineHeight: '1.6'
                    }}>
                      ✓ We respect your privacy. Your information will be used only to assist with your inquiry and provide relevant services.
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
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                ) : (
                  <div>
                    <h2 className="text-2xl font-bold mb-6" style={{ color: '#0B1F3A', fontWeight: '800' }}>
                      Schedule a Strategy Call
                    </h2>
                    <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                      Book a 30-minute call with our logistics expert. We'll discuss your needs and provide custom solutions.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                          style={{ background: 'white' }}
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
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
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                          style={{ background: 'white' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-3" style={{ color: '#0B1F3A' }}>What would you like to discuss? *</label>
                        <textarea
                          name="message"
                          placeholder="Brief description of your logistics needs..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent h-28 text-sm transition-all resize-none"
                          style={{ background: 'white' }}
                        ></textarea>
                      </div>

                      {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-lg text-sm">
                          <p>{error}</p>
                        </div>
                      )}

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
                        {isLoading ? 'Scheduling...' : 'Schedule Call'}
                      </button>
                    </form>
                  </div>
                )}
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
                  Message Received!
                </h3>
                <p style={{ color: '#4b5563', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '15px' }}>
                  Thank you! Our logistics expert will review your information and get back to you within 24 hours via email or WhatsApp.
                </p>
                <div style={{ fontSize: '13px', color: '#6b7280', fontStyle: 'italic' }}>
                  🎯 We'll tailor our response to your specific needs
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Smart AI Section */}
      <section style={{ padding: '4rem 2rem', background: '#f0fdf4', borderTop: '1px solid #e5e7eb' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 style={{ fontSize: '1.875rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem', color: '#0B1F3A' }}>
            Need Instant Help?
          </h2>
          <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto', fontSize: '16px', fontWeight: '500' }}>
            Our AI-powered assistant is available 24/7 to answer questions and get you started
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* AI Assistant */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(30, 107, 76, 0.12)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ marginBottom: '1rem', color: '#1E6B4C', fontSize: '48px' }}>🤖</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#0B1F3A' }}>
                AI Smart Assistant
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '14px', lineHeight: '1.6' }}>
                Chat with our intelligent assistant to get instant quotes, track shipments, and answer common questions.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: '#6b7280', marginBottom: '1.5rem' }}>
                <li>✓ Instant quote estimates</li>
                <li>✓ Service information</li>
                <li>✓ Tracking assistance</li>
              </ul>
              <button
                onClick={() => {
                  const chatButton = document.querySelector('[title="Chat with AI Assistant"]') as HTMLButtonElement;
                  if (chatButton) chatButton.click();
                }}
                style={{
                  padding: '0.75rem 1.6rem',
                  background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 107, 76, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Start Chat
              </button>
            </div>

            {/* WhatsApp */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 211, 102, 0.12)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ marginBottom: '1rem', color: '#25D366', fontSize: '48px' }}>💬</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#0B1F3A' }}>
                WhatsApp Direct
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '14px', lineHeight: '1.6' }}>
                Connect directly with our team for personalized assistance, instant responses, and real-time support.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: '#6b7280', marginBottom: '1.5rem' }}>
                <li>✓ Personal attention</li>
                <li>✓ Instant responses</li>
                <li>✓ 24/7 availability</li>
              </ul>
              <a
                href="https://wa.me/27833910863?text=Hi%20AfriBridge!%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.6rem',
                  background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Open WhatsApp
              </a>
            </div>

            {/* Phone Support */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(11, 31, 58, 0.12)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ marginBottom: '1rem', color: '#0B1F3A', fontSize: '48px' }}>☎️</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#0B1F3A' }}>
                Call Support
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '14px', lineHeight: '1.6' }}>
                Speak with our expert logistics team for complex inquiries and strategic discussions.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: '#6b7280', marginBottom: '1.5rem' }}>
                <li>+27 11 568 6712</li>
                <li>+27 83 391 0863</li>
                <li>Mon-Fri 8-18 SAST</li>
              </ul>
              <a
                href="tel:+27115686712"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.6rem',
                  background: '#0B1F3A',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(11, 31, 58, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section style={{ padding: '4rem 2rem' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#0B1F3A', fontWeight: '800' }}>
            Regional Coordination Centers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { region: 'SADC Hub', city: 'Johannesburg, South Africa', contact: '+27 11 568 6712' },
              { region: 'East Africa', city: 'Nairobi, Kenya', contact: '+254 20 XXX XXXX' },
              { region: 'West Africa', city: 'Accra, Ghana', contact: '+233 30 XXX XXXX' },
            ].map((office, i) => (
              <div key={i} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '10px',
                border: '1px solid #e5e7eb',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem', color: '#0B1F3A' }}>
                  {office.region}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '14px' }}>
                  {office.city}
                </p>
                <a href={`tel:${office.contact}`} style={{
                  color: '#1E6B4C',
                  fontWeight: '700',
                  textDecoration: 'none',
                  fontSize: '14px'
                }}>
                  {office.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import SocialMediaIcons from '@/components/SocialMediaIcons';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'General Inquiry',
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
          message: '',
          serviceType: 'General Inquiry',
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
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1f2937 100%)', color: 'white' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
            letterSpacing: '-0.02em'
          }}>
            Contact AfriBridge
          </h1>
          <p className="text-base md:text-lg" style={{
            color: '#E5E7EB',
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.8'
          }}>
            Our operations team responds within 24–48 hours. Available 24/7 on WhatsApp.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section style={{ padding: '3.5rem 2rem' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact AfriBridge</h2>

            {/* Contact */}
            <div className="mb-10">
              <h4 className="font-bold text-sm uppercase tracking-wide text-gray-600 mb-4">Contact Methods</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <a href="mailto:info@afribridge.co.za" className="text-lg text-emerald-600 font-semibold hover:underline">
                    info@afribridge.co.za
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Office Phone</p>
                  <a href="tel:+27115686712" className="text-lg text-emerald-600 font-semibold hover:underline">
                    +27 11 568 6712
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Mobile / WhatsApp (Preferred)</p>
                  <a href="https://wa.me/27833910863" target="_blank" rel="noopener noreferrer" className="text-lg text-emerald-600 font-semibold hover:underline">
                    +27 83 391 0863 ✓
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Website</p>
                  <a href="https://www.afribridge.co.za" target="_blank" rel="noopener noreferrer" className="text-lg text-emerald-600 font-semibold hover:underline">
                    www.afribridge.co.za
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-10">
              <h4 className="font-bold text-sm uppercase tracking-wide text-gray-600 mb-4">Operating Hours</h4>
              <ul className="space-y-2 text-gray-800">
                <li className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-semibold">08:00 – 18:00 SAST</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">09:00 – 14:00 SAST</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday & Holidays</span>
                  <span className="font-semibold">WhatsApp only</span>
                </li>
              </ul>
            </div>

            {/* Response SLA */}
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200 mb-8">
              <p className="text-sm text-emerald-900">
                <span className="font-bold">⚡ Quick Response Guarantee:</span><br />
                Most inquiries answered within 2 hours during business hours. Emergency shipments available 24/7 via WhatsApp.
              </p>
            </div>

            {/* Social Media Section */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: '#111827', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                Connect With Us
              </h4>
              <SocialMediaIcons variant="footer" />
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>

                <div>
                  <label className="block text-sm font-bold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Service Type</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                  >
                    <option>General Inquiry</option>
                    <option>Clearing & Forwarding</option>
                    <option>Tracking Support</option>
                    <option>Customs Help</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Message *</label>
                  <textarea
                    name="message"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500 h-32"
                  ></textarea>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn btn-primary py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-xs text-gray-500">
                  ✓ We respect your privacy. Your message will be handled by our operations team only.
                </p>
              </form>
            ) : (
              <div className="bg-emerald-50 p-12 rounded-lg text-center h-full flex flex-col justify-center min-h-96">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#10b981' }}>
                  Message Sent!
                </h3>
                <p className="text-gray-700 mb-6">
                  Thank you for contacting AfriBridge. We'll get back to you within 24 hours via email or WhatsApp.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Find Us on the Map</h2>
          <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 font-semibold mb-2">📍 AfriBridge Headquarters</p>
              <p className="text-gray-600">Johannesburg, South Africa</p>
              <p className="text-gray-500 text-sm mt-2">[Embedded Map Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Assistants Section */}
      <section style={{ padding: '4rem 2rem', background: '#F9FAFB' }}>
        <div className="container-max">
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem', color: '#111827' }}>
            Need Quick Help?
          </h2>
          <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto', fontSize: '1rem' }}>
            Get instant assistance from our intelligent support systems
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Smart Assistant Card */}
            <div className="card-premium" style={{ textAlign: 'center', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ marginBottom: '1rem', color: 'var(--emerald)' }}>
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M13 17.9v1.5c0 .83-.67 1.5-1.5 1.5S10 20.33 10 19.5v-1.5c0-.17.03-.33.09-.48-.67-.37-1.28-.87-1.81-1.45.47.1.95.16 1.44.16 1.32 0 2.57-.34 3.64-.93.09.3.14.62.14.96zm-6-2.23C5.56 13.73 4 11.67 4 9c0-2.8 2.02-5.13 4.64-5.48.37 2.85 2.75 5.08 5.62 5.08s5.25-2.23 5.62-5.08C17.98 3.87 20 6.2 20 9c0 2.67-1.56 4.73-3.5 5.67-.32.2-.59.46-.81.76-.4.58-.76 1.2-1.05 1.84.17.14.35.26.53.37l3.5-3.5c.73.73 1.73 1.18 2.82 1.18.07 0 .13-.01.2-.01C17 15.8 14.69 18 12 18c-1.29 0-2.52-.37-3.56-.98.22-.08.44-.13.66-.13zm10-6.19c1.31 0 2.37-1.06 2.37-2.37S18.31 3.76 17 3.76s-2.37 1.06-2.37 2.37 1.06 2.37 2.37 2.37zM7 6.13c1.31 0 2.37-1.06 2.37-2.37S8.31 1.39 7 1.39 4.63 2.45 4.63 3.76 5.69 6.13 7 6.13z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#111827' }}>
                AI Smart Assistant
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                Ask our intelligent chatbot anything about our services, pricing, or logistics processes. Available 24/7.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ fontSize: '11px', fontWeight: '600', color: '#1E6B4C', margin: '0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Quick Topics:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: '#6b7280' }}>
                  <li>✓ Get a quote</li>
                  <li>✓ Track shipment</li>
                  <li>✓ Service details</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  const chatButton = document.querySelector('[title="Chat with AI Assistant"]') as HTMLButtonElement;
                  if (chatButton) chatButton.click();
                }}
                style={{
                  marginTop: '1.5rem',
                  padding: '0.7rem 1.6rem',
                  background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '0.875rem',
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

            {/* WhatsApp Assistant Card */}
            <div className="card-premium" style={{ textAlign: 'center', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ marginBottom: '1rem', color: '#25D366' }}>
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.96.52 3.88 1.53 5.56L2 22l4.63-1.48C8.1 21.45 10 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2m0 18c-1.81 0-3.55-.46-5.05-1.28l-.36-.2-3.73 1.19.99-3.63-.25-.4C3.51 13.52 3 12.81 3 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.31-7.35c-.24-.12-1.42-.7-1.64-.78-.22-.07-.38-.12-.54.12-.16.24-.64.78-.78.94-.14.16-.29.18-.53.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.11-.54-1.3-.74-1.78-.19-.48-.39-.41-.54-.41-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.35 1 2.51.13.16 1.85 2.82 4.48 3.96.62.27 1.11.43 1.48.55.63.2 1.2.17 1.65.1.5-.08 1.54-.63 1.76-1.23.22-.61.22-1.13.16-1.23-.07-.1-.23-.16-.48-.28z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#111827' }}>
                WhatsApp Support
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                Connect with our team directly on WhatsApp for personalized assistance and immediate responses.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <p style={{ fontSize: '11px', fontWeight: '600', color: '#25D366', margin: '0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Available:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: '#6b7280', textAlign: 'center' }}>
                  <li>✓ Instant responses</li>
                  <li>✓ Personal attention</li>
                  <li>✓ 24/7 availability</li>
                </ul>
              </div>
              <a
                href="https://wa.me/27833910863?text=Hi%20AfriBridge!%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '1.5rem',
                  padding: '0.7rem 1.6rem',
                  background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '0.875rem',
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

            {/* Phone Support Card */}
            <div className="card-premium" style={{ textAlign: 'center', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ marginBottom: '1rem', color: 'var(--emerald)' }}>
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#111827' }}>
                Call Support
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                Speak directly with our logistics experts during business hours for complex inquiries.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <p style={{ fontSize: '11px', fontWeight: '600', color: '#0B1F3A', margin: '0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone Lines:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: '#6b7280', textAlign: 'center' }}>
                  <li>+27 11 568 6712</li>
                  <li>+27 83 391 0863</li>
                  <li>Mon-Fri 8:00-18:00 SAST</li>
                </ul>
              </div>
              <a
                href="tel:+27115686712"
                style={{
                  display: 'inline-block',
                  marginTop: '1.5rem',
                  padding: '0.7rem 1.6rem',
                  background: '#0B1F3A',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '0.875rem',
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
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Regional Coordination Centers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                region: 'SADC Hub',
                city: 'Johannesburg, South Africa',
                contact: '+27 11 568 6712',
              },
              {
                region: 'East Africa',
                city: 'Nairobi, Kenya',
                contact: '+254 20 XXX XXXX',
              },
              {
                region: 'West Africa',
                city: 'Accra, Ghana',
                contact: '+233 30 XXX XXXX',
              },
            ].map((office, i) => (
              <div key={i} className="card p-8 text-center">
                <h3 className="font-bold text-lg mb-2">{office.region}</h3>
                <p className="text-gray-600 mb-4">{office.city}</p>
                <a href={`tel:${office.contact}`} className="text-emerald-600 font-semibold hover:underline">
                  {office.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto mb-16">
          <img
            src="https://images.pexels.com/photos/6680149/pexels-photo-6680149.jpeg"
            alt="Business partnership handshake"
            className="h-96 w-full object-cover rounded"
          />
        </div>
      </section>

      {/* Book a Call */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8" style={{ background: '#10b981' }}>
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Schedule a Strategy Call</h2>
          <p className="text-lg mb-8 text-emerald-50">
            Not sure how AfriBridge can help? Book a 30-minute call with our operations manager.
          </p>
          <a href="#" className="btn" style={{ background: 'white', color: '#10b981', fontWeight: 'bold' }}>
            Book a Call
          </a>
        </div>
      </section>
    </>
  );
}

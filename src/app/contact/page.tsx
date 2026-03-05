'use client';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0f172a', color: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact AfriBridge</h1>
          <p className="text-xl text-gray-300">
            Our operations team responds within 24–48 hours. Available 24/7 on WhatsApp.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">SADC Operations</h2>

            {/* Office */}
            <div className="mb-10">
              <h4 className="font-bold text-sm uppercase tracking-wide text-gray-600 mb-2">Headquarters</h4>
              <p className="text-lg text-gray-800">
                AfriBridge Logistics<br />
                123 Trade Street, Johannesburg<br />
                South Africa 2000
              </p>
            </div>

            {/* Contact */}
            <div className="mb-10">
              <h4 className="font-bold text-sm uppercase tracking-wide text-gray-600 mb-4">Contact Methods</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <a href="mailto:info@afribridge.com" className="text-lg text-emerald-600 font-semibold hover:underline">
                    info@afribridge.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <a href="tel:+27123456789" className="text-lg text-emerald-600 font-semibold hover:underline">
                    +27 (11) 345-6789
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">WhatsApp (Preferred)</p>
                  <a href="https://wa.me/27123456789" target="_blank" rel="noopener noreferrer" className="text-lg text-emerald-600 font-semibold hover:underline">
                    +27 (71) 234-5678 ✓
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
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <p className="text-sm text-emerald-900">
                <span className="font-bold">⚡ Quick Response Guarantee:</span><br />
                Most inquiries answered within 2 hours during business hours. Emergency shipments available 24/7 via WhatsApp.
              </p>
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

                <button
                  type="submit"
                  className="w-full btn btn-primary py-4 text-lg font-bold"
                >
                  Send Message
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
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

      {/* Regional Offices */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Regional Coordination Centers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                region: 'SADC Hub',
                city: 'Johannesburg, South Africa',
                contact: '+27 11 345 6789',
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

      {/* Book a Call */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#10b981' }}>
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

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
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1f2937 100%)', color: 'white' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Freight Quote</h1>
          <p className="text-xl text-gray-300">Get a custom shipping quote from AfriBridge in under 24 hours</p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Trust Content */}
          <div>
            <img
              src="https://images.pexels.com/photos/5439165/pexels-photo-5439165.jpeg"
              alt="Business professionals discussing logistics"
              className="w-full h-80 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold mb-6">Why Choose AfriBridge?</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span style={{ color: '#10b981' }} className="text-xl font-bold">✓</span>
                <div>
                  <h4 className="font-bold">Fast Turnaround</h4>
                  <p className="text-gray-600 text-sm">Quote within 24 hours of submission</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#10b981' }} className="text-xl font-bold">✓</span>
                <div>
                  <h4 className="font-bold">Compliance Checked</h4>
                  <p className="text-gray-600 text-sm">All quotes include HS coding & duty guidance</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#10b981' }} className="text-xl font-bold">✓</span>
                <div>
                  <h4 className="font-bold">Multiple Modes</h4>
                  <p className="text-gray-600 text-sm">Air, Sea, Road, and consolidation options</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#10b981' }} className="text-xl font-bold">✓</span>
                <div>
                  <h4 className="font-bold">SADC Specialists</h4>
                  <p className="text-gray-600 text-sm">15+ years of corridor expertise</p>
                </div>
              </li>
            </ul>

            {/* Process */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-bold mb-4">Our Process</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <div className="text-emerald-600 font-bold w-6">1.</div>
                  <div>Submit your shipment details below</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-emerald-600 font-bold w-6">2.</div>
                  <div>Our team reviews & confirms details</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-emerald-600 font-bold w-6">3.</div>
                  <div>Receive custom quote with all options</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {!submitted ? (
              <>
                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm font-semibold mb-3">
                    <span>Step {currentStep} of {totalSteps}</span>
                    <span className="text-emerald-600">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-emerald-600 h-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Info */}
                <div>
                  <h3 className="font-bold mb-4">Contact Information</h3>
                  <div className="grid gap-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone / WhatsApp *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Shipment Type & Incoterms */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Shipment Type *</label>
                    <select
                      name="shipmentType"
                      value={formData.shipmentType}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                    >
                      <option>Air</option>
                      <option>Sea</option>
                      <option>Road</option>
                      <option>Consolidation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Incoterm *</label>
                    <select
                      name="incoterm"
                      value={formData.incoterm}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
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
                  <label className="block text-sm font-bold mb-2">Origin *</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="originCountry"
                      placeholder="Country"
                      value={formData.originCountry}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      name="originCity"
                      placeholder="City"
                      value={formData.originCity}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Destination *</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="destCountry"
                      placeholder="Country"
                      value={formData.destCountry}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      name="destCity"
                      placeholder="City"
                      value={formData.destCity}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Cargo Details */}
                <div>
                  <label className="block text-sm font-bold mb-2">Cargo Description *</label>
                  <textarea
                    name="cargoDesc"
                    placeholder="What are you shipping?"
                    value={formData.cargoDesc}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500 h-24"
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="hsCode"
                    placeholder="HS Code (optional)"
                    value={formData.hsCode}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                  />
                  <input
                    type="text"
                    name="readyDate"
                    placeholder="Ready Date"
                    value={formData.readyDate}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
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
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                  />
                  <input
                    type="text"
                    name="dimensions"
                    placeholder="Dimensions (L×W×H)"
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                  />
                  <input
                    type="text"
                    name="packages"
                    placeholder="# of Packages"
                    value={formData.packages}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Special Handling */}
                <div>
                  <label className="block text-sm font-bold mb-2">Special Handling Needs</label>
                  <select
                    name="specialHandling"
                    value={formData.specialHandling}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
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
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                {/* Compliance Note */}
                <p className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                  ⓘ Quotes subject to documentation review and customs compliance. We'll confirm all details before finalizing.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn btn-primary py-4 text-lg font-bold premium-card disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </form>
              </>
            ) : (
              <div className="bg-emerald-50 p-12 rounded-lg text-center h-full flex flex-col justify-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#10b981' }}>
                  Quote Received!
                </h3>
                <p className="text-gray-700 mb-6">
                  Thank you! We'll review your shipment details and send a custom quote within 24 hours.
                </p>
                <Link href="/contact" className="btn btn-primary inline-block">
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

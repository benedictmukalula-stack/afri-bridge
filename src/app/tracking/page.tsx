'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setShowDemo(true);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1f2937 100%)', color: 'white' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Track Your Shipment</h1>
          <p className="text-xl text-gray-300">Real-time visibility across all modes and corridors</p>
        </div>
      </section>

      {/* Tracking Input */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleTrack} className="flex gap-4 mb-12 flex-col md:flex-row">
            <input
              type="text"
              placeholder="Enter Tracking / Reference Number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 text-lg"
            />
            <button
              type="submit"
              className="btn btn-primary px-8 py-4 font-bold text-lg"
            >
              Track
            </button>
          </form>

          {/* Demo Timeline */}
          {showDemo && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Shipment Timeline - Demo</h2>
              <div className="space-y-6">
                {[
                  {
                    status: 'Booked',
                    date: 'Jan 15, 2025',
                    time: '09:30 AM',
                    desc: 'Shipment booking confirmed and documented',
                    completed: true,
                  },
                  {
                    status: 'In Transit',
                    date: 'Jan 16, 2025',
                    time: '02:15 PM',
                    desc: 'Cargo picked up and on the way to airport/port',
                    completed: true,
                  },
                  {
                    status: 'At Border',
                    date: 'Jan 18, 2025',
                    time: '11:45 AM',
                    desc: 'Shipment arrived at customs checkpoint',
                    completed: true,
                  },
                  {
                    status: 'Cleared',
                    date: 'Jan 19, 2025',
                    time: '04:30 PM',
                    desc: 'Customs clearance completed, no duties owed',
                    completed: false,
                  },
                  {
                    status: 'Delivered',
                    date: 'Jan 22, 2025',
                    time: 'Expected',
                    desc: 'Final delivery to destination',
                    completed: false,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                          item.completed ? 'bg-emerald-600' : 'bg-gray-300'
                        }`}
                      >
                        {item.completed ? '✓' : i + 1}
                      </div>
                      {i < 4 && <div className="w-1 h-12 bg-gray-200 mt-2"></div>}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-bold text-lg mb-1">{item.status}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.date} at {item.time}
                      </p>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What You Can Track */}
          <h2 className="text-2xl font-bold mb-8">What You Can Track</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: '📅', title: 'ETD / ETA', desc: 'Estimated departure and arrival times' },
              { icon: '📍', title: 'Live Milestones', desc: 'Real-time pickup, transit, border, delivery events' },
              { icon: '📄', title: 'Documents', desc: 'Access all shipping & customs documents' },
              { icon: '⚠️', title: 'Exceptions', desc: 'Delays, inspections, compliance issues' },
            ].map((item, i) => (
              <div key={i} className="card p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Tracking Image */}
          <img
            src="https://images.pexels.com/photos/3582392/pexels-photo-3582392.jpeg"
            alt="Logistics control center"
            className="w-full h-96 object-cover rounded-lg mb-12"
          />

          {/* Help Section */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Having trouble tracking your shipment?</h3>
            <p className="text-gray-700 mb-6">
              Our operations team is available 24/7 to help. Contact us via WhatsApp or email.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Operations
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Track with AfriBridge?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Proactive Alerts', desc: 'Get notified of delays, customs holds, or documentation issues before they impact delivery' },
              { title: 'Shareable Links', desc: 'Share tracking links with your customers for transparency and trust' },
              { title: '24/7 Support', desc: 'Our ops team monitors every shipment and responds to issues immediately' },
            ].map((item, i) => (
              <div key={i} className="card p-8">
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

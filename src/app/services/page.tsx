'use client';

import Link from 'next/link';
import CTAStrip from '@/components/CTAStrip';
import { useState } from 'react';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: 'Customs Clearing & Compliance',
      desc: 'Expert HS coding, tariff classification, documentation management, and duty/VAT guidance. We ensure full regulatory compliance across all SADC borders.',
      details: ['HS Code expertise', 'Tariff optimization', 'VAT & duty guidance', 'Documentation review'],
      image: 'https://images.pexels.com/photos/34570226/pexels-photo-34570226.jpeg',
    },
    {
      title: 'Air Freight',
      desc: 'Fast international shipments with full consolidation capabilities. Real-time tracking from origin to destination with customs pre-clearance.',
      details: ['Urgent shipments (24-48h)', 'Air consolidation', 'Dangerous goods handling', 'Express tracking'],
      image: 'https://images.pexels.com/photos/11146455/pexels-photo-11146455.jpeg',
    },
    {
      title: 'Ocean Freight',
      desc: 'Full Container (FCL) and Less Container (LCL) solutions. Carrier negotiations, booking management, and port coordination.',
      details: ['FCL / LCL optimization', 'Carrier partnerships', 'Port operations', 'Incoterm expertise'],
      image: 'https://images.pexels.com/photos/93106/pexels-photo-93106.jpeg',
    },
    {
      title: 'Road & Cross-Border',
      desc: 'Specialist SADC corridor services. Border post coordination, road freight consolidation, and compliance with regional trade rules.',
      details: ['SADC corridor expertise', 'Border processing', 'Road consolidation', 'Regional compliance'],
      image: 'https://images.pexels.com/photos/13961752/pexels-photo-13961752.jpeg',
    },
    {
      title: 'Warehousing & Distribution',
      desc: 'Bonded warehouse storage, pick & pack services, and last-mile delivery partnerships across the region.',
      details: ['Bonded storage', 'Pick & pack', 'Last-mile delivery', 'Inventory management'],
      image: 'https://images.pexels.com/photos/8760709/pexels-photo-8760709.jpeg',
    },
    {
      title: 'Project Cargo',
      desc: 'Oversized and heavy equipment shipments for mining, energy, and infrastructure sectors. Specialized handling and routing.',
      details: ['Oversized handling', 'Mining solutions', 'Energy sector', 'Infrastructure projects'],
      image: 'https://images.pexels.com/photos/29899416/pexels-photo-29899416.jpeg',
    },
  ];

  const faqs = [
    {
      q: 'How long does customs clearance typically take?',
      a: 'Most shipments clear within 24-48 hours of arrival. Complex shipments may take 3-5 days depending on documentation completeness and inspection requirements.',
    },
    {
      q: 'What documentation do I need for a quote?',
      a: 'Basic shipment details: origin, destination, weight, dimensions, and commodity type. For air freight, commercial invoice and packing list are helpful.',
    },
    {
      q: 'Do you handle dangerous goods?',
      a: 'Yes, we are fully certified for hazmat, chemicals, and restricted goods. We manage all IATA and IMDG compliance.',
    },
    {
      q: 'What are your payment terms?',
      a: 'We offer flexible terms: prepayment, net 30, or on-account arrangements for regular customers. WhatsApp for credit discussions.',
    },
    {
      q: 'Can you provide a tracking link for my shipment?',
      a: 'Yes, every shipment gets real-time tracking via our portal. You can share the link with your customers.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-96 flex items-center" style={{ backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fdc61da1f09234263a84e25f305acc6be%2F2c8b8193cfb641b0971c02d22466e48c?format=webp&width=800&height=1200')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        {/* Subtle Gradient Overlay - Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/10"></div>
        {/* Soft Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Our Services
          </h1>
          <p className="text-xl text-white max-w-2xl" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.25)' }}>
            Comprehensive clearing, forwarding, and logistics solutions across Africa
          </p>
        </div>
      </section>

      {/* Services - Alternating Layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'md:col-start-2' : ''}>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span style={{ color: '#10b981' }} className="font-bold mt-1">✓</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/quote" className="btn btn-primary">
                  Get a Quote
                </Link>
              </div>
              <div className="hidden md:block">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded border border-gray-200 premium-card fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 font-semibold flex justify-between items-center hover:bg-gray-50 transition"
                >
                  {faq.q}
                  <span className="text-emerald-600 font-bold text-xl transition-transform" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0 text-gray-600 border-t border-gray-200 fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Ready to Streamline Your Logistics?"
        subheadline="Get a competitive quote from AfriBridge specialists."
        buttonText="Request a Quote"
        buttonLink="/quote"
      />
    </>
  );
}

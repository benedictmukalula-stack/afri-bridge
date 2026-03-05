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
    },
    {
      title: 'Air Freight',
      desc: 'Fast international shipments with full consolidation capabilities. Real-time tracking from origin to destination with customs pre-clearance.',
      details: ['Urgent shipments (24-48h)', 'Air consolidation', 'Dangerous goods handling', 'Express tracking'],
    },
    {
      title: 'Ocean Freight',
      desc: 'Full Container (FCL) and Less Container (LCL) solutions. Carrier negotiations, booking management, and port coordination.',
      details: ['FCL / LCL optimization', 'Carrier partnerships', 'Port operations', 'Incoterm expertise'],
    },
    {
      title: 'Road & Cross-Border',
      desc: 'Specialist SADC corridor services. Border post coordination, road freight consolidation, and compliance with regional trade rules.',
      details: ['SADC corridor expertise', 'Border processing', 'Road consolidation', 'Regional compliance'],
    },
    {
      title: 'Warehousing & Distribution',
      desc: 'Bonded warehouse storage, pick & pack services, and last-mile delivery partnerships across the region.',
      details: ['Bonded storage', 'Pick & pack', 'Last-mile delivery', 'Inventory management'],
    },
    {
      title: 'Project Cargo',
      desc: 'Oversized and heavy equipment shipments for mining, energy, and infrastructure sectors. Specialized handling and routing.',
      details: ['Oversized handling', 'Mining solutions', 'Energy sector', 'Infrastructure projects'],
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0f172a', color: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
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
                <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-center">{service.title} Imagery</span>
                </div>
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
              <div key={i} className="bg-white rounded border border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 font-semibold flex justify-between items-center hover:bg-gray-50"
                >
                  {faq.q}
                  <span className="text-emerald-600 font-bold text-xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0 text-gray-600 border-t border-gray-200">
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

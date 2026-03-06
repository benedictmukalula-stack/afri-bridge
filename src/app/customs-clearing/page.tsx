'use client';

import Link from 'next/link';
import CTAStrip from '@/components/CTAStrip';

export default function CustomsClearingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing-lg relative px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)' }}>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Expert Customs Clearing
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Navigate complex customs regulations with confidence. AfriBridge handles compliance, documentation, and border coordination for seamless cargo movement across SADC.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/quote" className="btn btn-primary shadow-lg hover:shadow-xl">
                Get Customs Quote
              </Link>
              <Link href="/contact" className="btn btn-secondary" style={{ color: 'white', borderColor: 'white' }}>
                Talk to Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why AfriBridge for Customs Clearing</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3">Complete Documentation</h3>
              <p className="text-gray-600">
                We handle all customs forms, certificates, and compliance documentation to ensure smooth border crossings.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-3">Regulatory Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of SADC customs regulations, tariff codes, and compliance requirements for all trade corridors.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-3">Fast Clearance</h3>
              <p className="text-gray-600">
                Our established relationships with customs authorities enable quick processing and minimal delays at borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8" style={{ background: '#f3f4f6' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Customs Clearing Process</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Document Preparation', desc: 'Gather all customs paperwork' },
              { step: 2, title: 'Pre-Clearance', desc: 'Submit documents to customs authorities' },
              { step: 3, title: 'Inspection & Valuation', desc: 'Manage physical inspection if needed' },
              { step: 4, title: 'Final Release', desc: 'Obtain customs release certificate' }
            ].map((item) => (
              <div key={item.step} className="card relative">
                <div className="text-3xl font-bold text-emerald-600 mb-3">{item.step}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        headline="Ready for Hassle-Free Customs Clearing?"
        subheadline="Let AfriBridge handle the compliance. Get a quote today."
        buttonText="Request Customs Quote"
        buttonLink="/quote"
      />
    </>
  );
}

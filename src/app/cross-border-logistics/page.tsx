'use client';

import Link from 'next/link';
import CTAStrip from '@/components/CTAStrip';

export default function CrossBorderLogisticsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing-lg relative px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)' }}>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Cross-Border Logistics Simplified
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Navigate border complexities with ease. AfriBridge manages all cross-border coordination, customs, and compliance for smooth operations across SADC corridors.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/quote" className="btn btn-primary shadow-lg hover:shadow-xl">
                Get Cross-Border Quote
              </Link>
              <Link href="/contact" className="btn btn-secondary" style={{ color: 'white', borderColor: 'white' }}>
                Consult Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Cross-Border Excellence</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">Corridor Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of major SADC corridors, border posts, transit routes, and compliance requirements for seamless movement.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-3">End-to-End Coordination</h3>
              <p className="text-gray-600">
                Full management from origin warehouse through border processing to final destination, with real-time visibility.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3">Compliance Assurance</h3>
              <p className="text-gray-600">
                Complete regulatory compliance, documentation, and customs coordination to ensure smooth border crossings every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corridors Covered Section */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8" style={{ background: '#f3f4f6' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Corridors We Serve</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card premium-card">
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">SADC Corridors</h3>
              <p className="text-gray-700 mb-4">
                South Africa, Botswana, Zimbabwe, Zambia, Malawi, Mozambique, Angola, and more.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Major border posts covered</li>
                <li>✓ Established relationships</li>
                <li>✓ Fast clearance times</li>
              </ul>
            </div>

            <div className="card premium-card">
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">East Africa Routes</h3>
              <p className="text-gray-700 mb-4">
                Kenya, Tanzania, Uganda, Rwanda, and regional hubs for seamless East African movement.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Regional expertise</li>
                <li>✓ Multi-corridor networks</li>
                <li>✓ Consolidated shipping</li>
              </ul>
            </div>

            <div className="card premium-card">
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">Expanding Routes</h3>
              <p className="text-gray-700 mb-4">
                West Africa and emerging corridors for your expanding African logistics footprint.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Growing network</li>
                <li>✓ Partner relationships</li>
                <li>✓ New route development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        headline="Ready to Conquer SADC Cross-Border Logistics?"
        subheadline="Let AfriBridge handle the borders. We manage compliance, timing, and coordination."
        buttonText="Request Cross-Border Quote"
        buttonLink="/quote"
      />
    </>
  );
}

import Link from 'next/link';
import CTAStrip from '@/components/CTAStrip';

export default function FreightForwardingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing-lg relative px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)' }}>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              International Freight Forwarding
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Move cargo globally with confidence. Air, ocean, and multimodal solutions tailored to your logistics needs across African trade corridors.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/quote" className="btn btn-primary shadow-lg hover:shadow-xl">
                Get Freight Quote
              </Link>
              <Link href="/contact" className="btn btn-secondary" style={{ color: 'white', borderColor: 'white' }}>
                Speak with Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modes Section */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Freight Forwarding Modes</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-3">Air Freight</h3>
              <p className="text-gray-600 mb-4">
                Fast, reliable air forwarding for time-sensitive shipments across global routes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Express delivery</li>
                <li>✓ Consolidated shipments</li>
                <li>✓ Real-time tracking</li>
              </ul>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">🚢</div>
              <h3 className="text-xl font-bold mb-3">Ocean Freight</h3>
              <p className="text-gray-600 mb-4">
                Cost-effective ocean forwarding with flexible container options for bulk cargo.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ FCL & LCL options</li>
                <li>✓ Port coordination</li>
                <li>✓ Full transparency</li>
              </ul>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-3">Multimodal</h3>
              <p className="text-gray-600 mb-4">
                Seamless integration of air, ocean, and ground transport for complex routes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Door-to-door service</li>
                <li>✓ Optimized routing</li>
                <li>✓ Single point of contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8" style={{ background: '#f3f4f6' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose AfriBridge Forwarding</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">Comprehensive Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Full freight forwarding solutions for all cargo types</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Customs clearance and documentation handling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Warehousing and distribution services</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">Expert Support</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>24/7 shipment tracking and updates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Dedicated account managers for your business</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Proactive exception management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        headline="Move Cargo Globally with Confidence"
        subheadline="Let AfriBridge be your trusted forwarding partner. Get a quote in under 24 hours."
        buttonText="Request Forwarding Quote"
        buttonLink="/quote"
      />
    </>
  );
}

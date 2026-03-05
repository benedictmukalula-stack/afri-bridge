import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import CTAStrip from '@/components/CTAStrip';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center" style={{ backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fdc61da1f09234263a84e25f305acc6be%2F478a2d42a1c94c47b6ab76c57a333b69?format=webp&width=800&height=1200')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        {/* Subtle Gradient Overlay - Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/20 to-black/5"></div>
        {/* Soft Bottom Gradient for Better Text Area */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}>
                Premium Clearing & Logistics Across Africa
              </h1>
              <p className="text-xl text-white mb-8" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.25)' }}>
                Customs compliance, freight forwarding, and cross-border logistics built for SADC trade corridors.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/quote" className="btn btn-primary shadow-lg hover:shadow-xl">
                  Request a Quote
                </Link>
                <Link href="/tracking" className="btn btn-secondary" style={{ color: 'white', borderColor: 'white' }}>
                  Track Shipment
                </Link>
              </div>

              {/* Value Chips */}
              <div className="flex flex-wrap gap-3 mt-12">
                <div className="bg-emerald-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                  ✓ Customs Compliance
                </div>
                <div className="bg-emerald-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                  ✓ End-to-End Visibility
                </div>
                <div className="bg-emerald-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                  ✓ SADC Expertise
                </div>
              </div>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Certifications & Trust Badges */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-600 font-semibold mb-8 uppercase text-sm tracking-wide">
            Industry Certifications & Memberships
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <div className="text-4xl mb-2">🏛️</div>
              <p className="text-sm font-semibold text-gray-700">Customs Clearing License</p>
              <p className="text-xs text-gray-500">SADC Certified</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <div className="text-4xl mb-2">📦</div>
              <p className="text-sm font-semibold text-gray-700">Freight Forwarder</p>
              <p className="text-xs text-gray-500">IATA & FIATA Member</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <div className="text-4xl mb-2">✓</div>
              <p className="text-sm font-semibold text-gray-700">ISO 9001:2015</p>
              <p className="text-xs text-gray-500">Quality Assured</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <div className="text-4xl mb-2">🔒</div>
              <p className="text-sm font-semibold text-gray-700">Compliance First</p>
              <p className="text-xs text-gray-500">Full Regulatory Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <img
            src="https://images.pexels.com/photos/8760709/pexels-photo-8760709.jpeg"
            alt="Warehouse logistics operations"
            className="w-full h-72 object-cover rounded-lg mb-12"
            loading="lazy"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive logistics solutions across all modes and corridors
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🧾', title: 'Customs Clearing', desc: 'Expert HS coding, documentation, duty & VAT guidance' },
              { icon: '✈️', title: 'Air Freight', desc: 'Urgent shipments, consolidation, real-time tracking' },
              { icon: '🚢', title: 'Ocean Freight', desc: 'FCL/LCL solutions, carrier management, cost optimization' },
              { icon: '🚚', title: 'Road & Cross-Border', desc: 'SADC corridor expertise, border processing, compliance' },
              { icon: '📦', title: 'Warehousing', desc: 'Bonded storage, pick & pack, last-mile delivery' },
              { icon: '⚙️', title: 'Project Cargo', desc: 'Oversized shipments, mining, energy sector solutions' },
            ].map((service, i) => (
              <div key={i} className="card premium-card fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0f172a' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">{service.desc}</p>
                <Link href="/quote" className="inline-block text-emerald-600 font-semibold hover:text-emerald-700 transition">
                  Get a Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Quote & Request', desc: 'Submit your shipment details and get a custom quote' },
              { step: '02', title: 'Ship & Track', desc: 'We handle all logistics with real-time visibility' },
              { step: '03', title: 'Deliver & Compliance', desc: 'Cargo cleared and delivered to destination' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold mb-4" style={{ color: '#10b981' }}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Corridors Preview */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <img
            src="https://images.pexels.com/photos/22730371/pexels-photo-22730371.jpeg"
            alt="African port and trade infrastructure"
            className="w-full h-72 object-cover rounded-lg mb-12"
            loading="lazy"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Africa Trade Corridors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'SADC', countries: 'SA, Zambia, DRC, Botswana, Namibia, Mozambique, Zimbabwe' },
              { name: 'East Africa', countries: 'Kenya, Tanzania, Uganda, Ethiopia' },
              { name: 'West Africa', countries: 'Ghana, Nigeria, Ivory Coast, Senegal' },
            ].map((corridor, i) => (
              <Link href="/trade-corridors" key={i} className="card p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#0f172a' }}>
                  {corridor.name}
                </h3>
                <p className="text-gray-600 mb-4">{corridor.countries}</p>
                <span className="text-emerald-600 font-semibold">Explore Corridor →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Stats */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8" style={{ background: '#0f172a', color: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Trusted by African Logistics Leaders</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Our track record speaks for itself. Built on years of regional expertise and regional partnerships.
          </p>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-gray-800 hover:border-emerald-500 transition">
              <div className="text-6xl font-bold mb-3" style={{ color: '#10b981' }}>
                98%
              </div>
              <p className="text-gray-300 font-semibold">On-time Delivery</p>
              <p className="text-gray-500 text-sm mt-2">Across all corridors</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-gray-800 hover:border-emerald-500 transition">
              <div className="text-6xl font-bold mb-3" style={{ color: '#10b981' }}>
                12K+
              </div>
              <p className="text-gray-300 font-semibold">Shipments Handled</p>
              <p className="text-gray-500 text-sm mt-2">Successfully cleared</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-gray-800 hover:border-emerald-500 transition">
              <div className="text-6xl font-bold mb-3" style={{ color: '#10b981' }}>
                25+
              </div>
              <p className="text-gray-300 font-semibold">Countries Served</p>
              <p className="text-gray-500 text-sm mt-2">Across Africa</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-gray-800 hover:border-emerald-500 transition">
              <div className="text-6xl font-bold mb-3" style={{ color: '#10b981' }}>
                24/7
              </div>
              <p className="text-gray-300 font-semibold">Operations Support</p>
              <p className="text-gray-500 text-sm mt-2">Always available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTAStrip
        headline="Ready to Move Cargo with Confidence?"
        subheadline="Get a custom quote from our SADC logistics experts in under 24 hours."
        buttonText="Request a Quote"
        buttonLink="/quote"
      />
    </>
  );
}

import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import CTAStrip from '@/components/CTAStrip';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1f2937 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Premium Clearing & Logistics Across Africa
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Customs compliance, freight forwarding, and cross-border logistics built for SADC trade corridors.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/quote" className="btn btn-primary">
                  Request a Quote
                </Link>
                <Link href="/tracking" className="btn btn-secondary" style={{ color: 'white', borderColor: 'white' }}>
                  Track Shipment
                </Link>
              </div>
              
              {/* Value Chips */}
              <div className="flex flex-wrap gap-3 mt-12">
                <div className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ Customs Compliance
                </div>
                <div className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ End-to-End Visibility
                </div>
                <div className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ SADC Expertise
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/29899416/pexels-photo-29899416.jpeg"
                alt="Container terminal with cranes and shipping containers"
                className="h-96 w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <img
            src="https://images.pexels.com/photos/8760709/pexels-photo-8760709.jpeg"
            alt="Warehouse logistics operations"
            className="w-full h-72 object-cover rounded-lg mb-12"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive logistics solutions across all modes and corridors
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Customs Clearing', desc: 'Expert HS coding, documentation, duty & VAT guidance' },
              { title: 'Air Freight', desc: 'Urgent shipments, consolidation, real-time tracking' },
              { title: 'Ocean Freight', desc: 'FCL/LCL solutions, carrier management, cost optimization' },
              { title: 'Road & Cross-Border', desc: 'SADC corridor expertise, border processing, compliance' },
              { title: 'Warehousing', desc: 'Bonded storage, pick & pack, last-mile delivery' },
              { title: 'Project Cargo', desc: 'Oversized shipments, mining, energy sector solutions' },
            ].map((service, i) => (
              <div key={i} className="card p-8">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0f172a' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link href="/quote" className="inline-block text-emerald-600 font-semibold hover:text-emerald-700">
                  Get a Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <img
            src="https://images.pexels.com/photos/22730371/pexels-photo-22730371.jpeg"
            alt="African port and trade infrastructure"
            className="w-full h-72 object-cover rounded-lg mb-12"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#0f172a', color: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Trusted by African Logistics Leaders</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#10b981' }}>
                98%
              </div>
              <p className="text-gray-300">On-time Delivery Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#10b981' }}>
                1000+
              </div>
              <p className="text-gray-300">Successful Clearances Monthly</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#10b981' }}>
                15+
              </div>
              <p className="text-gray-300">Active Trade Corridors</p>
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

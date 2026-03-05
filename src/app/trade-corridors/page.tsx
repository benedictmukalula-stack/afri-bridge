import Link from 'next/link';
import CTAStrip from '@/components/CTAStrip';

export default function TradeCorridorsPage() {
  const corridors = [
    {
      name: 'SADC Corridor',
      countries: [
        'South Africa',
        'Zambia',
        'Democratic Republic of Congo',
        'Botswana',
        'Namibia',
        'Mozambique',
        'Zimbabwe',
      ],
      routes: [
        'Johannesburg - Lusaka - DRC',
        'Port Elizabeth - Botswana - Namibia',
        'Durban - Maputo - Zimbabwe',
      ],
      borders: [
        'Chirundu (SA-ZM)',
        'Beitbridge (SA-ZW)',
        'Kasumbalesa (ZM-DRC)',
        'Nakonde (ZM-TZ)',
      ],
      transitTime: '3-7 days (road), 7-14 days (sea)',
      risks: 'Zambian document requirements, DRC customs complexity, seasonal road conditions',
    },
    {
      name: 'East Africa Corridor',
      countries: [
        'Kenya',
        'Tanzania',
        'Uganda',
        'Ethiopia',
        'Rwanda',
      ],
      routes: [
        'Mombasa - Nairobi - Kampala',
        'Dar es Salaam - Dodoma - Uganda',
        'Addis Ababa - Kenya trade route',
      ],
      borders: [
        'Malaba (KE-UG)',
        'Namanga (KE-TZ)',
        'Jinja (UG-TZ)',
        'Moyale (ET-KE)',
      ],
      transitTime: '2-5 days (road), 5-10 days (sea)',
      risks: 'Port congestion at Mombasa, escort requirements, piracy on sea routes (northern corridor)',
    },
    {
      name: 'West Africa Corridor',
      countries: [
        'Ghana',
        'Nigeria',
        'Ivory Coast',
        'Senegal',
        'Benin',
      ],
      routes: [
        'Lagos - Accra - Abidjan',
        'Dakar - Accra - Lagos',
        'Port Harcourt - Cameroon transit',
      ],
      borders: [
        'Elubo (GH-CI)',
        'Seme (BJ-NG)',
        'Noé (GH-NG)',
        'Kaolack (SN-GM)',
      ],
      transitTime: '2-6 days (road), 4-12 days (sea)',
      risks: 'Nigeria bureaucratic delays, road safety, seasonal port closures in Senegal',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0f172a', color: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Africa Trade Corridors</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            AfriBridge specializes in SADC, East Africa, and West Africa trade corridors with deep border expertise
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            With 15+ years of corridor expertise, we understand the unique compliance, timing, and logistics challenges of each trade lane. From border post coordination to tariff optimization, we'll move your cargo efficiently and safely.
          </p>
        </div>
      </section>

      {/* Corridors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {corridors.map((corridor, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              {/* Header */}
              <div className="p-8" style={{ background: '#0f172a', color: 'white' }}>
                <h2 className="text-3xl font-bold mb-2">{corridor.name}</h2>
                <p className="text-gray-300">
                  {corridor.countries.slice(0, 4).join(', ')}
                  {corridor.countries.length > 4 ? ' and more' : ''}
                </p>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left */}
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide text-gray-600 mb-4">Key Routes</h4>
                    <ul className="space-y-2 mb-8">
                      {corridor.routes.map((route, j) => (
                        <li key={j} className="text-gray-700 flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">→</span> {route}
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-bold text-sm uppercase tracking-wide text-gray-600 mb-4">Major Border Posts</h4>
                    <ul className="space-y-2">
                      {corridor.borders.map((border, j) => (
                        <li key={j} className="text-gray-700 flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">🚩</span> {border}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right */}
                  <div>
                    <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                      <h4 className="font-bold text-sm uppercase tracking-wide text-emerald-900 mb-2">Typical Transit Time</h4>
                      <p className="text-gray-800 font-semibold">{corridor.transitTime}</p>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="font-bold text-sm uppercase tracking-wide text-yellow-900 mb-2">Compliance Risks & Tips</h4>
                      <p className="text-gray-800 text-sm">{corridor.risks}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="border-t pt-6 flex items-center justify-between">
                  <p className="font-semibold text-gray-700">Ready to plan a shipment on this corridor?</p>
                  <Link href="/quote" className="btn btn-primary">
                    Plan Shipment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why AfriBridge */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why AfriBridge for Corridor Logistics?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Corridor Mastery',
                desc: 'Deep relationships with border authorities, ports, and trucking partners on every major corridor',
              },
              {
                title: 'Border Coordination',
                desc: 'Expert handling of SADC paperwork, COMESA tariffs, and regional trade rules for seamless crossings',
              },
              {
                title: 'Risk Management',
                desc: 'Proactive compliance checks, documentation pre-screening, and contingency planning for delays',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-md transition">
                <div className="text-4xl mb-4" style={{ color: '#10b981' }}>
                  ✓
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Move Cargo Across Africa with Confidence"
        subheadline="Let AfriBridge handle the corridors. Get a quote in under 24 hours."
        buttonText="Plan a Shipment"
        buttonLink="/quote"
      />
    </>
  );
}

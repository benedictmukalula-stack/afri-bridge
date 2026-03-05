export default function TrustStrip() {
  const partners = [
    'Major Port Authority',
    'Global Airlines',
    'International Carriers',
    'Customs Authority',
    'ISO Certified',
    'SADC Partners',
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 font-semibold mb-8 uppercase text-sm tracking-wide">
          Trusted by leading organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-4 bg-white rounded border border-gray-200 h-20 text-center text-sm font-semibold text-gray-700"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

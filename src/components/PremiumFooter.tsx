'use client';

import Link from 'next/link';

export default function PremiumFooter() {
  return (
    <footer style={{ background: '#0a0f1b', color: '#f3f4f6' }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#ffffff', letterSpacing: '-0.5px' }}>
              AfriBridge
            </h3>
            <p style={{ fontSize: '14px', color: '#a1a5b1', lineHeight: '1.6' }}>
              Premium customs clearing, freight forwarding, and cross-border logistics across Africa.
            </p>
            <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '16px', fontStyle: 'italic' }}>
              Trusted by leading logistics companies across SADC.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: '700', marginBottom: '16px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Industries', href: '/industries' },
                { label: 'Tracking', href: '/tracking' },
                { label: 'Quote', href: '/quote' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: '#a1a5b1',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a5b1')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: '700', marginBottom: '16px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Customs Clearing',
                'Freight Forwarding',
                'Cross-Border Logistics',
                'Warehousing',
                'Distribution',
              ].map((service) => (
                <li key={service}>
                  <span
                    style={{
                      fontSize: '14px',
                      color: '#a1a5b1',
                    }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Regional Focus */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: '700', marginBottom: '16px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              Regions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'South Africa',
                'Zambia',
                'Zimbabwe',
                'SADC Region',
                'Pan-African Trade',
              ].map((region) => (
                <li key={region}>
                  <span
                    style={{
                      fontSize: '14px',
                      color: '#a1a5b1',
                    }}
                  >
                    {region}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom border */}
        <div style={{ borderTop: '1px solid #1f2937', paddingTop: '24px' }}>
          {/* Copyright and trust statement */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>
              &copy; 2025 AfriBridge. All rights reserved. | <Link href="#" style={{ color: '#a1a5b1', textDecoration: 'none', marginLeft: '8px' }}>Privacy</Link> | <Link href="#" style={{ color: '#a1a5b1', textDecoration: 'none', marginLeft: '8px' }}>Terms</Link>
            </p>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: 0, fontStyle: 'italic' }}>
              Compliance First. Trust Always. Excellence Every Time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

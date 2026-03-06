'use client';

import Link from 'next/link';

export default function PremiumFooter() {
  return (
    <footer style={{ background: 'var(--navy)', color: '#f3f4f6' }}>
      {/* Main footer content */}
      <div className="container-max py-16">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Column 1: Brand */}
          <div>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '16px',
                color: '#ffffff',
                letterSpacing: '-0.5px',
              }}
            >
              AfriBridge
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#a1a5b1',
                lineHeight: '1.6',
                marginBottom: '16px',
              }}
            >
              Premium customs clearing, freight forwarding, and cross-border logistics across Africa.
            </p>
            <p
              style={{
                fontSize: '12px',
                color: '#6b7280',
                fontStyle: 'italic',
              }}
            >
              Trusted by leading logistics companies across SADC.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
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
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1E6B4C';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#a1a5b1';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
              }}
            >
              Services
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
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
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span style={{ color: 'var(--emerald)', fontWeight: '600' }}>→</span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Regional Focus */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
              }}
            >
              Regions
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
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

          {/* Column 5: Contact */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
              }}
            >
              Contact
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <li>
                <a
                  href="tel:+27115686712"
                  style={{
                    fontSize: '14px',
                    color: '#a1a5b1',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6B4C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a5b1')}
                >
                  <span style={{ color: 'var(--emerald)' }}>📞</span>
                  +27 11 568 6712
                </a>
              </li>
              <li>
                <a
                  href="tel:+27833910863"
                  style={{
                    fontSize: '14px',
                    color: '#a1a5b1',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6B4C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a5b1')}
                >
                  <span style={{ color: 'var(--emerald)' }}>📱</span>
                  +27 83 391 0863
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@afribridge.co.za"
                  style={{
                    fontSize: '14px',
                    color: '#a1a5b1',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6B4C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a5b1')}
                >
                  <span style={{ color: 'var(--emerald)' }}>✉️</span>
                  info@afribridge.co.za
                </a>
              </li>
              <li>
                <a
                  href="https://www.afribridge.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '14px',
                    color: '#a1a5b1',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6B4C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a5b1')}
                >
                  <span style={{ color: 'var(--emerald)' }}>🌐</span>
                  www.afribridge.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <p
              style={{
                fontSize: '12px',
                color: '#6b7280',
                margin: 0,
              }}
            >
              &copy; 2025 AfriBridge. All rights reserved. |{' '}
              <Link
                href="#"
                style={{
                  color: '#a1a5b1',
                  textDecoration: 'none',
                  marginLeft: '8px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6B4C')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a5b1')}
              >
                Privacy
              </Link>{' '}
              |{' '}
              <Link
                href="#"
                style={{
                  color: '#a1a5b1',
                  textDecoration: 'none',
                  marginLeft: '8px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6B4C')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a5b1')}
              >
                Terms
              </Link>
            </p>
            <p
              style={{
                fontSize: '12px',
                color: '#6b7280',
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              Compliance First. Trust Always. Excellence Every Time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

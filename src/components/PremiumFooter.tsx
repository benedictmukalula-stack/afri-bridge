'use client';

import Link from 'next/link';
import SocialMediaIcons from './SocialMediaIcons';

export default function PremiumFooter() {
  return (
    <footer style={{ background: '#0B1F3A', color: '#f3f4f6' }}>
      {/* Main footer grid */}
      <div className="container-max" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Column 1: Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fdc61da1f09234263a84e25f305acc6be%2F6d65564945c34d529d336d8c04265a4f?format=webp&width=800&height=1200"
                alt="AfriBridge Logistics"
                style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '800',
              marginBottom: '1rem',
              color: '#F5B041',
              letterSpacing: '-0.5px',
              margin: '0 0 1rem 0'
            }}>
              AfriBridge
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#9ca3af',
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              Pan-African trade infrastructure. Enterprise logistics for SADC, East Africa, West Africa, and beyond.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '3px', height: '3px', background: '#1E6B4C', borderRadius: '50%' }}></div>
              <p style={{
                fontSize: '12px',
                color: '#6b7280',
                fontStyle: 'italic',
                margin: 0
              }}>
                Trusted by African logistics leaders
              </p>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 style={{
              fontSize: '12px',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '0 0 1.5rem 0'
            }}>
              Company
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {[
                { label: 'About Us', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Blog & Resources', href: '/resources' },
                { label: 'Press Kit', href: '#' },
                { label: 'Newsroom', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: '#9ca3af',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1E6B4C';
                      e.currentTarget.style.paddingLeft = '4px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9ca3af';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{
              fontSize: '12px',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '0 0 1.5rem 0'
            }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {[
                { label: 'Customs Clearing', href: '/services' },
                { label: 'Freight Forwarding', href: '/services' },
                { label: 'Air & Ocean Freight', href: '/services' },
                { label: 'Cross-Border Logistics', href: '/services' },
                { label: 'Vehicle Export', href: '/vehicle-export' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: '#9ca3af',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1E6B4C';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9ca3af';
                    }}
                  >
                    <span style={{ color: '#1E6B4C', fontWeight: '700' }}>→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Technology & Tools */}
          <div>
            <h4 style={{
              fontSize: '12px',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '0 0 1.5rem 0'
            }}>
              Technology
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {[
                { label: 'Tracking Portal', href: '/tracking' },
                { label: 'Freight Quote', href: '/quote' },
                { label: 'Learning Center', href: '/learn' },
                { label: 'Coverage Map', href: '/coverage' },
                { label: 'Tools Hub', href: '/tools' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: '#9ca3af',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1E6B4C';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9ca3af';
                    }}
                  >
                    <span style={{ color: '#1E6B4C', fontWeight: '700' }}>→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact & Support */}
          <div>
            <h4 style={{
              fontSize: '12px',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '0 0 1.5rem 0'
            }}>
              Contact
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}>
              <li>
                <a
                  href="tel:+27115686712"
                  style={{
                    fontSize: '14px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6B4C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                >
                  <span>📞</span>
                  +27 11 568 6712
                </a>
              </li>
              <li>
                <a
                  href="tel:+27833910863"
                  style={{
                    fontSize: '14px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6B4C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                >
                  <span>📱</span>
                  WhatsApp: +27 83 391 0863
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@afribridge.co.za"
                  style={{
                    fontSize: '14px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6B4C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                >
                  <span>✉️</span>
                  info@afribridge.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, rgba(30, 107, 76, 0) 0%, rgba(30, 107, 76, 0.4) 50%, rgba(30, 107, 76, 0) 100%)',
          marginBottom: '3rem',
        }}></div>

        {/* Social & Legal Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: '2rem',
          alignItems: 'center',
          marginBottom: '2rem',
        }}>
          {/* Social */}
          <div>
            <p style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#ffffff',
              margin: '0 0 0.75rem 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Follow AfriBridge
            </p>
            <SocialMediaIcons variant="inline" />
          </div>

          {/* Compliance */}
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              margin: 0,
              fontStyle: 'italic',
              lineHeight: '1.6'
            }}>
              🏆 Compliance First. Trust Always. Excellence Every Time.
            </p>
          </div>

          {/* Legal Links */}
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-end' }}>
            <Link
              href="#"
              style={{
                fontSize: '12px',
                color: '#9ca3af',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6B4C')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
            >
              Privacy
            </Link>
            <Link
              href="#"
              style={{
                fontSize: '12px',
                color: '#9ca3af',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6B4C')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
            >
              Terms
            </Link>
            <Link
              href="#"
              style={{
                fontSize: '12px',
                color: '#9ca3af',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6B4C')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
            >
              Cookies
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(30, 107, 76, 0.2)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          <p style={{
            fontSize: '12px',
            color: '#6b7280',
            margin: 0,
          }}>
            © 2025 AfriBridge Clearing & Logistics. All rights reserved.
          </p>
          <p style={{
            fontSize: '12px',
            color: '#6b7280',
            margin: 0,
          }}>
            Built for African trade. Trusted across 25+ countries.
          </p>
        </div>
      </div>
    </footer>
  );
}

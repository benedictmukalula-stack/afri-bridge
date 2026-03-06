'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PremiumHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services',
      submenu: [
        { label: 'Customs Clearing', href: '/customs-clearing' },
        { label: 'Freight Forwarding', href: '/freight-forwarding' },
        { label: 'Cross-Border Logistics', href: '/cross-border-logistics' },
        { label: 'Vehicle Export', href: '/vehicle-export' },
        { label: 'Warehousing', href: '/services' },
      ],
    },
    {
      label: 'Industries',
      href: '/industries',
      submenu: [
        { label: 'Mining', href: '/industries' },
        { label: 'Oil & Gas', href: '/industries' },
        { label: 'FMCG', href: '/industries' },
        { label: 'Automotive', href: '/industries' },
      ],
    },
    { label: 'Tracking', href: '/tracking' },
    {
      label: 'Resources',
      href: '/resources',
      submenu: [
        { label: 'Tools & Calculators', href: '/tools' },
        { label: 'Learning Center', href: '/learn' },
        { label: 'Resource Library', href: '/resources' },
        { label: 'Coverage Map', href: '/coverage' },
      ],
    },
    { label: 'Quote', href: '/quote' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50" style={{ background: 'white', borderBottom: '1px solid #e5e7eb' }}>
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fdc61da1f09234263a84e25f305acc6be%2F6d65564945c34d529d336d8c04265a4f?format=webp&width=800&height=1200"
              alt="AfriBridge Logistics"
              style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <div
                key={link.href}
                style={{ position: 'relative', display: 'inline-block' }}
                onMouseEnter={() => link.submenu && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#6b7280',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.3px',
                    position: 'relative',
                    paddingBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#0B1F3A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6b7280';
                  }}
                >
                  {link.label}
                  {link.submenu && (
                    <span
                      style={{
                        transition: 'transform 0.3s ease',
                        transform: openDropdown === link.label ? 'rotate(180deg)' : 'rotate(0)',
                      }}
                    >
                      ▼
                    </span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.submenu && openDropdown === link.label && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      background: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      minWidth: '220px',
                      marginTop: '2px',
                      paddingTop: '4px',
                      zIndex: 1000,
                      overflow: 'hidden',
                    }}
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        style={{
                          display: 'block',
                          padding: '12px 16px',
                          fontSize: '14px',
                          color: '#4b5563',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          borderLeft: '3px solid transparent',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#f9fafb';
                          e.currentTarget.style.color = '#0B1F3A';
                          e.currentTarget.style.borderLeftColor = '#1E6B4C';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'white';
                          e.currentTarget.style.color = '#4b5563';
                          e.currentTarget.style.borderLeftColor = 'transparent';
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/tracking"
              style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#4b5563',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0f172a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4b5563')}
            >
              Track
            </Link>
            <Link
              href="/quote"
              className="btn btn-dark"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <div
              style={{
                width: '24px',
                height: '2px',
                background: '#0f172a',
                transition: 'all 0.25s ease',
                transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'rotate(0)',
              }}
            />
            <div
              style={{
                width: '24px',
                height: '2px',
                background: '#0f172a',
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 0.25s ease',
              }}
            />
            <div
              style={{
                width: '24px',
                height: '2px',
                background: '#0f172a',
                transition: 'all 0.25s ease',
                transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'rotate(0)',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: '#f9fafb',
            borderTop: '1px solid #e5e7eb',
            padding: '24px 24px',
          }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#4b5563',
                    textDecoration: 'none',
                    padding: '8px 0',
                    display: 'block',
                  }}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div style={{ marginLeft: '16px', marginTop: '8px' }}>
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        style={{
                          fontSize: '13px',
                          color: '#6b7280',
                          textDecoration: 'none',
                          padding: '6px 0',
                          display: 'block',
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ borderTop: '1px solid #e5e7eb', marginTop: '16px', paddingTop: '16px' }}>
              <Link
                href="/quote"
                className="btn btn-dark"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Request Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

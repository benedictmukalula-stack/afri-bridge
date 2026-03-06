'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PremiumHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Tracking', href: '/tracking' },
    { label: 'Quote', href: '/quote' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50" style={{ background: 'white', borderBottom: '1px solid #e5e7eb' }}>
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Wordmark */}
          <Link href="/" className="flex items-center gap-3">
            {/* Logo Icon */}
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700',
              color: 'white',
              fontSize: '20px',
              boxShadow: '0 2px 8px rgba(30, 107, 76, 0.25)'
            }}>
              A
            </div>
            {/* Logo Text */}
            <span style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.5px' }}>
              AfriBridge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#4b5563',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                  letterSpacing: '0.3px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0f172a')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4b5563')}
              >
                {link.label}
              </Link>
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
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#0f172a',
                padding: '11px 28px',
                borderRadius: '5px',
                textDecoration: 'none',
                transition: 'background 0.2s ease',
                display: 'inline-block',
                letterSpacing: '0.3px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1a2739';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0f172a';
              }}
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
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#4b5563',
                  textDecoration: 'none',
                  padding: '8px 0',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ borderTop: '1px solid #e5e7eb', marginTop: '16px', paddingTop: '16px' }}>
              <Link
                href="/quote"
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'white',
                  background: '#0f172a',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center',
                }}
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

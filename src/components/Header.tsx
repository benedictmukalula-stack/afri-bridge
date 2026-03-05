'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fdc61da1f09234263a84e25f305acc6be%2F84ef958a2e9548af990a4ae1ff08bb40?format=webp&width=800&height=1200"
            alt="AfriBridge Logistics"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-emerald-600 transition">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-emerald-600 transition">
            Services
          </Link>
          <Link href="/industries" className="text-gray-700 hover:text-emerald-600 transition">
            Industries
          </Link>
          <Link href="/trade-corridors" className="text-gray-700 hover:text-emerald-600 transition">
            Trade Corridors
          </Link>
          <Link href="/tracking" className="text-gray-700 hover:text-emerald-600 transition">
            Tracking
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/quote"
          className="hidden md:block btn btn-primary"
          style={{ background: '#10b981' }}
        >
          Request Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1 p-2"
        >
          <div className="w-6 h-0.5" style={{ background: '#0f172a' }}></div>
          <div className="w-6 h-0.5" style={{ background: '#0f172a' }}></div>
          <div className="w-6 h-0.5" style={{ background: '#0f172a' }}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 p-4 flex flex-col gap-4">
          <Link href="/" className="text-gray-700 hover:text-emerald-600">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-emerald-600">
            Services
          </Link>
          <Link href="/industries" className="text-gray-700 hover:text-emerald-600">
            Industries
          </Link>
          <Link href="/trade-corridors" className="text-gray-700 hover:text-emerald-600">
            Trade Corridors
          </Link>
          <Link href="/tracking" className="text-gray-700 hover:text-emerald-600">
            Tracking
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-emerald-600">
            Contact
          </Link>
          <Link
            href="/quote"
            className="btn btn-primary w-full text-center"
            style={{ background: '#10b981' }}
          >
            Request Quote
          </Link>
        </div>
      )}
    </header>
  );
}

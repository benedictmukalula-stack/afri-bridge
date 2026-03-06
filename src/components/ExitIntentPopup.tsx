'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger on desktop
      if (window.innerWidth < 768) return;

      // Check if mouse is leaving from top of viewport
      if (e.clientY <= 0) {
        setShowPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [dismissed]);

  if (!showPopup || dismissed) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.3s ease-out',
      padding: '1rem'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '2.5rem',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        position: 'relative',
        animation: 'slideUp 0.4s ease-out',
      }}>
        {/* Close Button */}
        <button
          onClick={() => {
            setDismissed(true);
          }}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#d1d5db',
            padding: '0.5rem',
          }}
        >
          ✕
        </button>

        {/* Content */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '48px', marginBottom: '1rem' }}>🚀</div>
          <h3 style={{
            color: '#0B1F3A',
            fontSize: '22px',
            fontWeight: '800',
            marginBottom: '0.75rem',
            margin: '0 0 0.75rem 0'
          }}>
            Before You Go...
          </h3>
          <p style={{
            color: '#6b7280',
            fontSize: '14px',
            lineHeight: '1.6',
            margin: '0 0 1.5rem 0'
          }}>
            Get an instant logistics quote and receive <span style={{ fontWeight: '700', color: '#1E6B4C' }}>20% off your first shipment</span> when you submit within 24 hours.
          </p>
        </div>

        {/* Benefit Bullets */}
        <div style={{
          background: '#f9fafb',
          borderRadius: '10px',
          padding: '1.5rem',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          {[
            '✓ Free customs compliance review',
            '✓ Real-time shipment tracking',
            '✓ 24-hour quote turnaround',
            '✓ WhatsApp support available',
          ].map((item, i) => (
            <p key={i} style={{
              fontSize: '12px',
              color: '#4b5563',
              margin: '0.5rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#1E6B4C' }}>✓</span>
              {item}
            </p>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link href="/quote" style={{
            display: 'block',
            padding: '0.875rem',
            background: 'linear-gradient(135deg, #1E6B4C 0%, #10b981 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '700',
            fontSize: '14px',
            textAlign: 'center',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 107, 76, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          onClick={() => setDismissed(true)}>
            💬 Get 20% Off Now
          </Link>
          <button
            onClick={() => setDismissed(true)}
            style={{
              padding: '0.875rem',
              background: 'white',
              color: '#6b7280',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0B1F3A';
              e.currentTarget.style.borderColor = '#d1d5db';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#6b7280';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            No thanks, continue browsing
          </button>
        </div>

        {/* Timer */}
        <p style={{
          fontSize: '11px',
          color: '#9ca3af',
          marginTop: '1rem',
          margin: '1rem 0 0 0'
        }}>
          ⏰ This offer expires in 24 hours
        </p>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const phoneNumber = '27833910863';

  const messageTemplates = [
    { emoji: '📦', label: 'Get a Quote', message: 'Hi AfriBridge! I\'d like to request a shipping quote for my cargo.' },
    { emoji: '🚚', label: 'Track Shipment', message: 'Hi AfriBridge! Can you help me track my shipment?' },
    { emoji: '💼', label: 'General Inquiry', message: 'Hi AfriBridge! I have a question about your logistics services.' },
    { emoji: '🚨', label: 'Urgent Support', message: 'Hi AfriBridge! I need urgent assistance with a shipment issue.' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: '40',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
      }}
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      {/* Message Templates Menu */}
      {showMenu && (
        <div
          style={{
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
            overflow: 'hidden',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {messageTemplates.map((template) => (
            <a
              key={template.label}
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(template.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 16px',
                textDecoration: 'none',
                color: '#1f2937',
                fontSize: '13px',
                fontWeight: '500',
                borderBottom: '1px solid #f3f4f6',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f0fdf4';
                e.currentTarget.style.color = '#15803d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#1f2937';
              }}
            >
              <span>{template.emoji}</span>
              <span>{template.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)',
          color: 'white',
          padding: isHovered ? '10px 20px' : '14px 14px',
          borderRadius: '50px',
          boxShadow: isHovered ? '0 12px 24px rgba(37, 211, 102, 0.4)' : '0 8px 16px rgba(37, 211, 102, 0.3)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          border: 'none',
          outline: 'none',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.96.52 3.88 1.53 5.56L2 22l4.63-1.48C8.1 21.45 10 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2m0 18c-1.81 0-3.55-.46-5.05-1.28l-.36-.2-3.73 1.19.99-3.63-.25-.4C3.51 13.52 3 12.81 3 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.31-7.35c-.24-.12-1.42-.7-1.64-.78-.22-.07-.38-.12-.54.12-.16.24-.64.78-.78.94-.14.16-.29.18-.53.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.11-.54-1.3-.74-1.78-.19-.48-.39-.41-.54-.41-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.35 1 2.51.13.16 1.85 2.82 4.48 3.96.62.27 1.11.43 1.48.55.63.2 1.2.17 1.65.1.5-.08 1.54-.63 1.76-1.23.22-.61.22-1.13.16-1.23-.07-.1-.23-.16-.48-.28z" />
        </svg>
        <span style={{
          fontWeight: '600',
          fontSize: '14px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          width: isHovered ? 'auto' : '0px',
          opacity: isHovered ? '1' : '0',
          transition: 'all 0.3s ease',
        }}>
          WhatsApp
        </span>
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

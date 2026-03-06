'use client';

import { useAssistant } from '@/contexts/AssistantContext';
import { useMemo } from 'react';

const pageQuickActions: Record<string, Array<{ emoji: string; text: string }>> = {
  home: [
    { emoji: '📦', text: 'Request a Quote' },
    { emoji: '🚚', text: 'Track Shipment' },
    { emoji: '💼', text: 'Our Services' },
  ],
  quote: [
    { emoji: '💰', text: 'Pricing Help' },
    { emoji: '📋', text: 'Check Quote Details' },
    { emoji: '✅', text: 'Finalize Quote' },
  ],
  tracking: [
    { emoji: '📍', text: 'Track Status' },
    { emoji: '⏱️', text: 'Delivery ETA' },
    { emoji: '📞', text: 'Contact Support' },
  ],
  services: [
    { emoji: '🚢', text: 'Shipping Options' },
    { emoji: '📑', text: 'Documentation' },
    { emoji: '💼', text: 'Service Details' },
  ],
  tools: [
    { emoji: '🔍', text: 'HS Code Help' },
    { emoji: '💳', text: 'Duty Calculator' },
    { emoji: '📊', text: 'Rate Estimator' },
  ],
};

export default function AIChat() {
  const { isOpen, messages, isLoading, currentPage, open, close, sendMessage } = useAssistant();

  const quickActions = useMemo(() => {
    const pageActions = pageQuickActions[currentPage] || pageQuickActions.home;
    return [...pageActions, { emoji: '📞', text: 'Contact Support' }];
  }, [currentPage]);

  const handleQuickAction = (text: string) => {
    sendMessage(text);
  };

  if (!isOpen) {
    return (
      <button
        onClick={open}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: '40',
          background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '64px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(30, 107, 76, 0.35)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.12)';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(30, 107, 76, 0.45)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(30, 107, 76, 0.35)';
        }}
        title="Chat with AI Assistant (Cmd+K or Ctrl+K)"
      >
        <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-8v-2h8v2zm0-3h-8V9h8v2zm0-3H6V6h12v2z" />
        </svg>
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '400px',
      maxWidth: 'calc(100vw - 32px)',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
      zIndex: '50',
      display: 'flex',
      flexDirection: 'column',
      height: '600px',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '16px 16px 0 0',
      }}>
        <div>
          <h3 style={{ fontWeight: '700', fontSize: '18px', margin: '0 0 4px 0' }}>AfriBridge AI</h3>
          <p style={{ fontSize: '13px', margin: '0', opacity: '0.9' }}>Instant support available</p>
        </div>
        <button
          onClick={close}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 8px',
            cursor: 'pointer',
            fontSize: '20px',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          }}
          title="Close chat (Escape or Cmd+K)"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div style={{
        flex: '1',
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        background: '#f9fafb',
      }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                maxWidth: '85%',
                padding: '10px 14px',
                borderRadius: '12px',
                backgroundColor: msg.sender === 'user' ? '#1E6B4C' : '#e5e7eb',
                color: msg.sender === 'user' ? 'white' : '#374151',
                borderBottomRightRadius: msg.sender === 'user' ? '4px' : '12px',
                borderBottomLeftRadius: msg.sender === 'user' ? '12px' : '4px',
              }}
            >
              <p style={{ fontSize: '14px', margin: '0 0 6px 0', lineHeight: '1.4' }}>{msg.text}</p>
              <p style={{
                fontSize: '11px',
                margin: '0',
                opacity: msg.sender === 'user' ? '0.8' : '0.6',
              }}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{
              padding: '10px 14px',
              borderRadius: '12px',
              background: '#e5e7eb',
              color: '#374151',
            }}>
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#9ca3af',
                  animation: 'bounce 1.4s infinite',
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#9ca3af',
                  animation: 'bounce 1.4s infinite 0.2s',
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#9ca3af',
                  animation: 'bounce 1.4s infinite 0.4s',
                }} />
              </div>
            </div>
          </div>
        )}
        {messages.length === 1 && (
          <div style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            <p style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#6b7280',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>Quick Actions</p>
            {quickActions.map((action) => (
              <button
                key={action.text}
                onClick={() => handleQuickAction(action.text)}
                style={{
                  background: 'rgba(30, 107, 76, 0.1)',
                  border: '1px solid rgba(30, 107, 76, 0.3)',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  fontSize: '13px',
                  color: '#374151',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                  fontWeight: '500',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(30, 107, 76, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(30, 107, 76, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(30, 107, 76, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(30, 107, 76, 0.3)';
                }}
              >
                {action.emoji} {action.text}
              </button>
            ))}
          </div>
        )}
        <div style={{ marginTop: 'auto' }} />
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = (e.currentTarget.elements.namedItem('message') as HTMLInputElement).value;
          if (input.trim()) {
            sendMessage(input);
            (e.currentTarget.elements.namedItem('message') as HTMLInputElement).value = '';
          }
        }}
        style={{
          borderTop: '1px solid #e5e7eb',
          padding: '16px',
          background: 'white',
          borderRadius: '0 0 16px 16px',
        }}
      >
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <input
            type="text"
            name="message"
            placeholder="Ask about shipping, quotes..."
            style={{
              flex: '1',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              padding: '10px 12px',
              fontSize: '14px',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              fontFamily: 'inherit',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#1E6B4C';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
            }}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            style={{
              background: !isLoading ? 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)' : '#d1d5db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 16px',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '13px',
              transition: 'all 0.2s ease',
              opacity: isLoading ? '0.6' : '1',
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Send
          </button>
        </div>
        <p style={{ fontSize: '11px', color: '#6b7280', margin: '0' }}>
          💡 Tip: Press Cmd+K (or Ctrl+K) to toggle this chat anytime
        </p>
        <style>{`
          @keyframes bounce {
            0%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-8px); }
          }
        `}</style>
      </form>
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m AfriBridge\'s AI Assistant. How can I help you today? Ask about our services, shipping rates, or anything logistics-related!',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          context: 'AfriBridge Clearing & Logistics - providing customs clearing, freight forwarding, and cross-border logistics across African trade corridors.',
        }),
      });

      if (!response.ok) throw new Error('Chat failed');

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: 'Sorry, I encountered an error. Please try again or contact our team at info@afribridge.co.za or +27 83 391 0863',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
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
        title="Chat with AI Assistant"
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
          onClick={() => setIsOpen(false)}
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
          title="Close chat"
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
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} style={{
        borderTop: '1px solid #e5e7eb',
        padding: '16px',
        background: 'white',
        borderRadius: '0 0 16px 16px',
      }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
            disabled={isLoading || !input.trim()}
            style={{
              background: !isLoading && input.trim() ? 'linear-gradient(135deg, #1E6B4C 0%, #0B1F3A 100%)' : '#d1d5db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 16px',
              fontWeight: '600',
              cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
              fontSize: '13px',
              transition: 'all 0.2s ease',
              opacity: isLoading || !input.trim() ? '0.6' : '1',
            }}
            onMouseEnter={(e) => {
              if (!isLoading && input.trim()) {
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
          Powered by AI. For urgent issues, WhatsApp +27 83 391 0863
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

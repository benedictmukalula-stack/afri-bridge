'use client';

import { useState, useEffect } from 'react';

interface Notification {
  id: string;
  type: 'shipment' | 'review' | 'quote';
  message: string;
  location?: string;
  time: string;
}

export default function SocialProof() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(true);

  useEffect(() => {
    // Initial notifications
    const initialNotifications: Notification[] = [
      { id: '1', type: 'shipment', message: 'Shipment #12847 cleared customs in Johannesburg', location: 'SA → ZW', time: '2m ago' },
      { id: '2', type: 'quote', message: 'Premium quote requested', location: 'Ocean Freight', time: '5m ago' },
      { id: '3', type: 'review', message: '⭐⭐⭐⭐⭐ Excellent service! Fast clearance', location: 'Harare', time: '12m ago' },
    ];

    setNotifications(initialNotifications);

    // Add new notifications periodically
    const interval = setInterval(() => {
      const messages = [
        { type: 'shipment' as const, message: 'New shipment booked', location: 'Air Freight' },
        { type: 'shipment' as const, message: 'Customs clearance approved', location: 'Border Post' },
        { type: 'quote' as const, message: 'Quote requested', location: 'Vehicle Export' },
        { type: 'review' as const, message: '⭐⭐⭐⭐⭐ Fast response time!', location: 'Support' },
      ];

      const random = messages[Math.floor(Math.random() * messages.length)];
      const newNotification: Notification = {
        id: String(Date.now()),
        type: random.type,
        message: random.message,
        location: random.location,
        time: 'now',
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 2)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  if (!showNotifications || notifications.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 50,
      maxWidth: '320px',
    }}>
      {notifications.map((notif) => (
        <div
          key={notif.id}
          style={{
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '0.75rem',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            animation: 'slideIn 0.3s ease-out',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <div style={{
              fontSize: '18px',
              flexShrink: 0,
              marginTop: '0.25rem'
            }}>
              {notif.type === 'shipment' && '📦'}
              {notif.type === 'quote' && '📋'}
              {notif.type === 'review' && '⭐'}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#0B1F3A',
                margin: '0 0 0.25rem 0'
              }}>
                {notif.message}
              </p>
              {notif.location && (
                <p style={{
                  fontSize: '11px',
                  color: '#6b7280',
                  margin: '0 0 0.25rem 0'
                }}>
                  {notif.location}
                </p>
              )}
              <p style={{
                fontSize: '10px',
                color: '#9ca3af',
                margin: 0
              }}>
                {notif.time}
              </p>
            </div>
            <button
              onClick={() => setShowNotifications(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '14px',
                cursor: 'pointer',
                color: '#d1d5db',
                padding: 0,
                flexShrink: 0
              }}
            >
              ✕
            </button>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(400px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

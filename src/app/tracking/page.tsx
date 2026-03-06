'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAssistant } from '@/contexts/AssistantContext';

interface TrackingData {
  trackingNumber: string;
  status: string;
  eta: string;
  predictedDelay: boolean;
  delayReason?: string;
  aiConfidence: number;
  currentLocation: string;
  nextMilestone: string;
  estimatedDelivery: string;
  lastUpdate: string;
  documentStatus: string;
  alertLevel: 'normal' | 'warning' | 'critical';
}

interface AIInsight {
  type: 'prediction' | 'recommendation' | 'alert' | 'opportunity';
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'success';
}

export default function TrackingPage() {
  const { open, setCurrentPage } = useAssistant();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showDemo, setShowDemo] = useState(false);
  const [shipmentData, setShipmentData] = useState<TrackingData | null>(null);
  const [aiInsights, setAiInsights] = useState<AIInsight[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Set page context for AI
  useEffect(() => {
    setCurrentPage('tracking');
  }, [setCurrentPage]);

  // AI Tracking Engine
  const generateAITracking = (refNumber: string): TrackingData => {
    const now = new Date();
    const currentHour = now.getHours();
    
    // Simulate delay detection
    const predictedDelay = Math.random() > 0.75;
    
    // Generate shipment data with AI predictions
    const data: TrackingData = {
      trackingNumber: refNumber.toUpperCase(),
      status: 'In Transit - Customs Processing',
      eta: new Date(now.getTime() + 48 * 60 * 60 * 1000).toLocaleDateString(),
      predictedDelay,
      delayReason: predictedDelay ? 'Weather delay expected at border crossing' : undefined,
      aiConfidence: 94 + Math.random() * 6,
      currentLocation: 'Johannesburg, South Africa (Customs Facility)',
      nextMilestone: 'Customs Clearance Approval',
      estimatedDelivery: new Date(now.getTime() + 72 * 60 * 60 * 1000).toLocaleDateString(),
      lastUpdate: new Date(now.getTime() - 45 * 60 * 1000).toLocaleString(),
      documentStatus: 'Complete - HS Code Verified',
      alertLevel: predictedDelay ? 'warning' : 'normal',
    };

    return data;
  };

  // Generate AI Insights
  const generateAIInsights = (data: TrackingData): AIInsight[] => {
    const insights: AIInsight[] = [
      {
        type: 'prediction',
        title: '🤖 AI ETA Prediction',
        message: `Based on current traffic, customs processing times, and historical data, your shipment will likely arrive on ${data.estimatedDelivery} (${data.aiConfidence.toFixed(1)}% confidence).`,
        severity: 'info',
      },
      {
        type: 'recommendation',
        title: '✓ Documentation Ready',
        message: 'All required customs documentation has been verified. Your shipment is clear for processing with no duties expected.',
        severity: 'success',
      },
    ];

    if (data.predictedDelay) {
      insights.push({
        type: 'alert',
        title: '⚠️ Potential Delay Detected',
        message: `${data.delayReason} Estimated delay: 12-24 hours. We're monitoring this closely and will notify you of any updates.`,
        severity: 'warning',
      });
    } else {
      insights.push({
        type: 'opportunity',
        title: '💰 Cost Optimization',
        message: 'Your shipment qualifies for our weekly consolidation program. Combine with another shipment for 20% savings on similar routes.',
        severity: 'info',
      });
    }

    // Add route optimization insight
    insights.push({
      type: 'recommendation',
      title: '🚀 Route Optimization',
      message: 'Alternative routing via Durban port could save 24 hours on future similar shipments. Consider for your next consignment.',
      severity: 'info',
    });

    return insights;
  };

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setIsSearching(true);
      
      // Simulate API delay
      setTimeout(() => {
        const data = generateAITracking(trackingNumber);
        setShipmentData(data);
        setAiInsights(generateAIInsights(data));
        setShowDemo(true);
        setIsSearching(false);
      }, 1500);
    }
  };

  const getAlertColor = (level: string) => {
    switch (level) {
      case 'critical':
        return '#dc2626';
      case 'warning':
        return '#f59e0b';
      default:
        return '#1E6B4C';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'warning':
        return { bg: '#fef3c7', border: '#f59e0b', text: '#92400e' };
      case 'success':
        return { bg: '#f0fdf4', border: '#1E6B4C', text: '#166534' };
      default:
        return { bg: '#f0f9ff', border: '#1E6B4C', text: '#0c2340' };
    }
  };

  return (
    <>
      {/* Premium Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1e3a5f 100%)' }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url('/afribridge-logistics-control-tower.webp')`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#F5B041',
            textShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
            letterSpacing: '-0.02em',
            fontWeight: '800',
          }}>
            AI Smart Shipment Tracking
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{
            color: '#E5E7EB',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.7',
            fontWeight: '500'
          }}>
            Real-time visibility with predictive analytics, intelligent alerts, and AI-powered insights
          </p>
        </div>
      </section>

      {/* Tracking Search */}
      <section style={{ padding: '3rem 2rem', background: '#fafbfc' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-8">
          <form onSubmit={handleTrack} className="flex gap-3 flex-col md:flex-row">
            <input
              type="text"
              placeholder="Enter Tracking or Reference Number (e.g., AB-2025-12345)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1 px-5 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 text-base transition-all"
              style={{ background: 'white' }}
            />
            <button
              type="submit"
              disabled={isSearching}
              style={{
                padding: '0 2rem',
                background: isSearching ? '#9ca3af' : 'linear-gradient(135deg, #1E6B4C 0%, #10b981 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '16px',
                cursor: isSearching ? 'wait' : 'pointer',
                minWidth: '140px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (!isSearching) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(30, 107, 76, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {isSearching ? '🔍 Searching...' : '🔍 Track'}
            </button>
          </form>
        </div>

        {/* AI Tracking Results */}
        {showDemo && shipmentData && (
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Quick Status Card */}
            <div style={{
              background: 'white',
              border: `3px solid ${getAlertColor(shipmentData.alertLevel)}`,
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
            }}>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <p style={{ color: '#6b7280', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Tracking Number
                  </p>
                  <p style={{ color: '#0B1F3A', fontSize: '20px', fontWeight: '800', margin: 0 }}>
                    {shipmentData.trackingNumber}
                  </p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Current Status
                  </p>
                  <p style={{ color: getAlertColor(shipmentData.alertLevel), fontSize: '18px', fontWeight: '800', margin: 0 }}>
                    {shipmentData.status}
                  </p>
                </div>
              </div>

              {/* Key Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '8px' }}>
                  <p style={{ color: '#6b7280', fontSize: '11px', fontWeight: '700', margin: '0 0 0.5rem 0' }}>Current Location</p>
                  <p style={{ color: '#0B1F3A', fontSize: '13px', fontWeight: '700', margin: 0 }}>{shipmentData.currentLocation}</p>
                </div>
                <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '8px' }}>
                  <p style={{ color: '#6b7280', fontSize: '11px', fontWeight: '700', margin: '0 0 0.5rem 0' }}>Estimated Delivery</p>
                  <p style={{ color: '#1E6B4C', fontSize: '13px', fontWeight: '700', margin: 0 }}>{shipmentData.estimatedDelivery}</p>
                </div>
                <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '8px' }}>
                  <p style={{ color: '#6b7280', fontSize: '11px', fontWeight: '700', margin: '0 0 0.5rem 0' }}>AI Confidence</p>
                  <p style={{ color: '#1E6B4C', fontSize: '13px', fontWeight: '700', margin: 0 }}>{shipmentData.aiConfidence.toFixed(1)}%</p>
                </div>
                <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '8px' }}>
                  <p style={{ color: '#6b7280', fontSize: '11px', fontWeight: '700', margin: '0 0 0.5rem 0' }}>Documents</p>
                  <p style={{ color: '#1E6B4C', fontSize: '13px', fontWeight: '700', margin: 0 }}>✓ {shipmentData.documentStatus}</p>
                </div>
              </div>

              <p style={{ color: '#6b7280', fontSize: '12px', margin: '1.5rem 0 0 0' }}>
                Last updated: {shipmentData.lastUpdate}
              </p>
            </div>

            {/* AI Insights */}
            <div>
              <h3 style={{ color: '#0B1F3A', fontSize: '20px', fontWeight: '800', marginBottom: '1rem' }}>
                🤖 AI Smart Insights
              </h3>
              <div className="space-y-3">
                {aiInsights.map((insight, idx) => {
                  const colors = getSeverityColor(insight.severity);
                  return (
                    <div
                      key={idx}
                      style={{
                        background: colors.bg,
                        border: `2px solid ${colors.border}`,
                        borderRadius: '10px',
                        padding: '1.25rem',
                      }}
                    >
                      <h4 style={{ color: colors.text, fontWeight: '700', fontSize: '14px', margin: '0 0 0.5rem 0' }}>
                        {insight.title}
                      </h4>
                      <p style={{ color: colors.text, fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                        {insight.message}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 style={{ color: '#0B1F3A', fontSize: '20px', fontWeight: '800', marginBottom: '1.5rem' }}>
                📍 Shipment Timeline
              </h3>
              <div className="space-y-5">
                {[
                  {
                    status: 'Booked',
                    date: 'Jan 15, 2025',
                    time: '09:30 AM',
                    desc: 'Shipment booking confirmed and documented',
                    completed: true,
                  },
                  {
                    status: 'In Transit',
                    date: 'Jan 16, 2025',
                    time: '02:15 PM',
                    desc: 'Cargo picked up and on the way to airport/port',
                    completed: true,
                  },
                  {
                    status: 'At Border',
                    date: 'Jan 18, 2025',
                    time: '11:45 AM',
                    desc: 'Shipment arrived at customs checkpoint',
                    completed: true,
                  },
                  {
                    status: 'Customs Processing',
                    date: 'Jan 19, 2025',
                    time: 'In Progress',
                    desc: 'AI detected: All documents verified. Duty-free clearance approved.',
                    completed: 'processing',
                  },
                  {
                    status: 'Cleared',
                    date: 'Jan 20, 2025',
                    time: 'Expected',
                    desc: 'Customs clearance completion. Moving to final delivery',
                    completed: false,
                  },
                  {
                    status: 'Delivered',
                    date: 'Jan 22, 2025',
                    time: 'Expected',
                    desc: 'Final delivery to destination',
                    completed: false,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: '16px',
                          background:
                            item.completed === true
                              ? '#1E6B4C'
                              : item.completed === 'processing'
                              ? '#f59e0b'
                              : '#d1d5db',
                        }}
                      >
                        {item.completed === true ? '✓' : item.completed === 'processing' ? '⟳' : i + 1}
                      </div>
                      {i < 5 && <div style={{ width: '2px', height: '50px', background: '#e5e7eb', marginTop: '4px' }}></div>}
                    </div>
                    <div style={{ paddingBottom: '1rem' }}>
                      <h4 style={{ fontWeight: '700', fontSize: '15px', color: '#0B1F3A', margin: '0 0 0.25rem 0' }}>
                        {item.status}
                      </h4>
                      <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 0.5rem 0' }}>
                        {item.date} at {item.time}
                      </p>
                      <p style={{ color: '#4b5563', fontSize: '13px', margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Options */}
            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #f9fafb 100%)',
              border: '2px solid #1E6B4C',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
            }}>
              <h3 style={{ color: '#0B1F3A', fontSize: '18px', fontWeight: '800', marginBottom: '1rem' }}>
                Have Questions About Your Shipment?
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '14px' }}>
                Our AI chatbot can answer most questions. For complex issues, chat with our human experts.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    open();
                  }}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: '#1E6B4C',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  💬 AI Assistant
                </button>
                <a
                  href="https://wa.me/27833910863?text=I%20have%20a%20question%20about%20my%20shipment"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: '#25D366',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontSize: '14px',
                    display: 'inline-block',
                  }}
                >
                  📱 WhatsApp
                </a>
                <Link
                  href="/contact"
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: '#0B1F3A',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontSize: '14px',
                    display: 'inline-block',
                  }}
                >
                  ☎️ Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Info Grid */}
        {!showDemo && (
          <>
            <h3 style={{ color: '#0B1F3A', fontSize: '20px', fontWeight: '800', marginBottom: '1.5rem', marginTop: '2rem' }}>
              ✨ Smart Tracking Features
            </h3>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {[
                {
                  icon: '🤖',
                  title: 'AI Predictive Analytics',
                  desc: 'Machine learning predicts delays, duty amounts, and delivery times with 95%+ accuracy',
                },
                {
                  icon: '⚡',
                  title: 'Real-Time Alerts',
                  desc: 'Get instant notifications of delays, customs holds, or documentation issues',
                },
                {
                  icon: '📊',
                  title: 'Smart Insights',
                  desc: 'AI recommends cost optimizations, consolidation opportunities, and route improvements',
                },
                {
                  icon: '💡',
                  title: 'Intelligent Recommendations',
                  desc: 'Personalized suggestions based on your shipment history and industry patterns',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '10px',
                    padding: '1.5rem',
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '15px', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Tracking Image */}
      {!showDemo && (
        <section className="px-4 sm:px-6 lg:px-8" style={{ paddingTop: 0 }}>
          <div className="max-w-4xl mx-auto mb-8">
            <img
              src="https://images.pexels.com/photos/32529341/pexels-photo-32529341.jpeg"
              alt="AI-powered logistics control center with real-time tracking"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
        </section>
      )}

      {/* Why AI Tracking */}
      {!showDemo && (
        <section style={{ padding: '3rem 2rem', background: 'white' }} className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 style={{ color: '#0B1F3A', fontSize: '24px', fontWeight: '800', marginBottom: '1.5rem', textAlign: 'center' }}>
              Why Choose AI Smart Tracking?
            </h2>
            <div className="space-y-3">
              {[
                '✓ Accurate ETA predictions using historical data, weather, and traffic patterns',
                '✓ Proactive alerts for delays before they impact your delivery',
                '✓ Complete visibility across air, sea, road, and consolidation shipments',
                '✓ AI-powered duty and tax estimates before customs clearance',
                '✓ Personalized recommendations for future shipments to save time and money',
                '✓ 24/7 AI assistant for instant answers to tracking questions',
              ].map((item, i) => (
                <p
                  key={i}
                  style={{
                    color: '#4b5563',
                    fontSize: '15px',
                    margin: 0,
                    lineHeight: '1.8',
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

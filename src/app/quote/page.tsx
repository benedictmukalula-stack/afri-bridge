'use client';

import Link from 'next/link';
import { useState } from 'react';

interface CartItem {
  id: string;
  service: string;
  type: string;
  weight?: string;
  origin: string;
  destination: string;
  basePrice: number;
  estimatedTotal: number;
  readyDate: string;
}

interface Quote {
  id: string;
  cartItems: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  aiInsight?: string;
}

export default function QuotePage() {
  const [currentTab, setCurrentTab] = useState<'quote' | 'cart' | 'invoice' | 'checkout' | 'receipt'>('quote');
  const [submitted, setSubmitted] = useState(false);
  
  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [quote, setQuote] = useState<Quote | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    shipmentType: 'Sea',
    incoterm: 'FOB',
    originCountry: '',
    originCity: '',
    destCountry: '',
    destCity: '',
    cargoDesc: '',
    hsCode: '',
    weight: '',
    dimensions: '',
    packages: '',
    readyDate: '',
    specialHandling: '',
  });

  // Checkout state
  const [checkoutData, setCheckoutData] = useState({
    paymentMethod: 'bank_transfer',
    terms: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // AI Quote Pricing Engine
  const generateSmartQuote = (type: string, origin: string, dest: string, weight: string): number => {
    const baseRates = {
      Air: 5.5,
      Sea: 1.2,
      Road: 0.8,
      Consolidation: 2.0,
    };
    
    const rate = baseRates[type as keyof typeof baseRates] || 2.0;
    const weightNum = parseFloat(weight) || 100;
    
    // Apply regional multipliers
    const regionMultiplier = (origin === dest) ? 0.8 : 1.0;
    
    // Base calculation
    let price = weightNum * rate * regionMultiplier;
    
    // Apply handling fees
    const handlingFee = 50;
    const airportFee = type === 'Air' ? 100 : 0;
    const customsFee = 75;
    
    return Math.round(price + handlingFee + airportFee + customsFee);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addToCart = () => {
    if (!formData.weight || !formData.originCountry || !formData.destCountry) {
      setError('Please fill in weight, origin, and destination');
      return;
    }

    const estimatedPrice = generateSmartQuote(
      formData.shipmentType,
      formData.originCountry,
      formData.destCountry,
      formData.weight
    );

    const newItem: CartItem = {
      id: Date.now().toString(),
      service: formData.cargoDesc || 'General Cargo',
      type: formData.shipmentType,
      weight: formData.weight,
      origin: `${formData.originCity || formData.originCountry}`,
      destination: `${formData.destCity || formData.destCountry}`,
      basePrice: estimatedPrice,
      estimatedTotal: estimatedPrice,
      readyDate: formData.readyDate,
    };

    setCart([...cart, newItem]);
    setError('');
    
    // Show confirmation
    const confirmMsg = `✓ Added ${newItem.service} to cart (${newItem.type}) - R${estimatedPrice.toLocaleString()}`;
    alert(confirmMsg);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const generateQuote = () => {
    if (cart.length === 0) {
      setError('Please add items to cart first');
      return;
    }

    const subtotal = cart.reduce((sum, item) => sum + item.estimatedTotal, 0);
    const tax = Math.round(subtotal * 0.15); // 15% tax
    const total = subtotal + tax;

    // AI Insight
    const aiInsights = [
      `Consolidation opportunity detected: Save up to 30% by combining shipments on your ${formData.shipmentType} route.`,
      `Route optimization: Direct ${formData.originCountry} to ${formData.destCountry} route typically takes 5-7 days (${formData.shipmentType}).`,
      `Compliance ready: Your cargo qualifies for expedited customs clearance in ${formData.destCountry}.`,
      `Cost savings: Moving to weekly consolidation could reduce per-unit costs by 25%.`,
      `Best timing: Your ready date aligns with our next scheduled departure - optimal for pricing.`,
    ];

    const newQuote: Quote = {
      id: `QT-${Date.now()}`,
      cartItems: cart,
      subtotal,
      tax,
      total,
      aiInsight: aiInsights[Math.floor(Math.random() * aiInsights.length)],
    };

    setQuote(newQuote);
    setCurrentTab('invoice');
  };

  const handleCheckout = async () => {
    if (!checkoutData.terms) {
      setError('Please agree to terms and conditions');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          cart,
          quote,
          checkoutData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to process quote');
        setIsLoading(false);
        return;
      }

      setSubmitted(true);
      setCurrentTab('receipt');
      setIsLoading(false);

      // Auto follow-up in 3 seconds
      setTimeout(() => {
        alert('📧 Follow-up email sent to ' + formData.email + '\n📱 WhatsApp reminder scheduled for tomorrow');
      }, 1500);
    } catch (err) {
      setError('Network error. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Premium Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1e3a5f 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#F5B041',
            textShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
            letterSpacing: '-0.02em',
            fontWeight: '800',
            lineHeight: '1.2'
          }}>
            Smart Freight Quotation Engine
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{
            color: '#E5E7EB',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.7',
            fontWeight: '500'
          }}>
            AI-powered instant quotes, invoicing, and payment. Get competitive pricing in seconds, checkout in minutes.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section style={{ padding: '2rem', background: 'white', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: '120px', zIndex: 40 }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { key: 'quote', label: '1. Get Quote', icon: '📋' },
              { key: 'cart', label: '2. Cart', icon: '🛒', count: cart.length },
              { key: 'invoice', label: '3. Invoice', icon: '📄', disabled: !quote },
              { key: 'checkout', label: '4. Checkout', icon: '💳', disabled: !quote },
              { key: 'receipt', label: '5. Receipt', icon: '✓', disabled: !submitted },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => !tab.disabled && setCurrentTab(tab.key as any)}
                disabled={tab.disabled}
                style={{
                  padding: '0.75rem 1.25rem',
                  background: currentTab === tab.key ? '#1E6B4C' : '#f3f4f6',
                  color: currentTab === tab.key ? 'white' : '#6b7280',
                  border: currentTab === tab.key ? '2px solid #1E6B4C' : '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '13px',
                  cursor: tab.disabled ? 'not-allowed' : 'pointer',
                  opacity: tab.disabled ? '0.5' : '1',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.icon} {tab.label}
                {tab.count && (
                  <span style={{ marginLeft: '4px', fontWeight: '800' }}>
                    ({tab.count})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '4rem 2rem', background: '#fafbfc', minHeight: '600px' }} className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Tab 1: Quote Form */}
          {currentTab === 'quote' && (
            <div className="grid md:grid-cols-2 gap-16">
              {/* AI Smart Quote Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#0B1F3A', fontWeight: '800' }}>
                  How AI Smart Quote Works
                </h2>
                <div className="space-y-4">
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1E6B4C', marginBottom: '0.5rem' }}>🤖 AI Analysis</h4>
                    <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                      Our machine learning engine analyzes your shipment to calculate the most competitive rate based on real-time market data.
                    </p>
                  </div>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1E6B4C', marginBottom: '0.5rem' }}>⚡ Instant Pricing</h4>
                    <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                      Get immediate quotes without waiting. All-inclusive pricing with no hidden fees. Compare air, sea, and road options instantly.
                    </p>
                  </div>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1E6B4C', marginBottom: '0.5rem' }}>💰 Smart Suggestions</h4>
                    <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                      AI recommends consolidation, timing, and routing strategies to save you money and reduce delivery time.
                    </p>
                  </div>
                  <div style={{ background: '#f0fdf4', border: '2px solid #1E6B4C', padding: '1.5rem', borderRadius: '10px' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1E6B4C', marginBottom: '0.5rem' }}>✓ Transparent Breakdown</h4>
                    <p style={{ fontSize: '13px', color: '#166534', margin: 0 }}>
                      See exactly what you're paying for: base freight, handling, customs, taxes, and all service fees clearly itemized.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Form */}
              <div>
                <form className="space-y-6">
                  <h2 className="text-2xl font-bold" style={{ color: '#0B1F3A', fontWeight: '800' }}>
                    Shipment Details
                  </h2>

                  {/* Basic Info */}
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your Name *"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone / WhatsApp *"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                      style={{ background: 'white' }}
                    />
                  </div>

                  {/* Shipment Type & Incoterm */}
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      name="shipmentType"
                      value={formData.shipmentType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                      style={{ background: 'white' }}
                    >
                      <option>Air</option>
                      <option>Sea</option>
                      <option>Road</option>
                      <option>Consolidation</option>
                    </select>
                    <select
                      name="incoterm"
                      value={formData.incoterm}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                      style={{ background: 'white' }}
                    >
                      <option>EXW</option>
                      <option>FOB</option>
                      <option>CIF</option>
                      <option>DDP</option>
                    </select>
                  </div>

                  {/* Route */}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="originCountry"
                      placeholder="Origin Country *"
                      value={formData.originCountry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                      style={{ background: 'white' }}
                    />
                    <input
                      type="text"
                      name="destCountry"
                      placeholder="Destination *"
                      value={formData.destCountry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                      style={{ background: 'white' }}
                    />
                  </div>

                  {/* Cargo */}
                  <textarea
                    name="cargoDesc"
                    placeholder="What are you shipping? *"
                    value={formData.cargoDesc}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent h-20 text-sm resize-none"
                    style={{ background: 'white' }}
                  ></textarea>

                  {/* Weight & Dimensions */}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="weight"
                      placeholder="Weight (kg) *"
                      value={formData.weight}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                      style={{ background: 'white' }}
                    />
                    <input
                      type="text"
                      name="readyDate"
                      placeholder="Ready Date (YYYY-MM-DD)"
                      value={formData.readyDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                      style={{ background: 'white' }}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={addToCart}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'linear-gradient(135deg, #1E6B4C 0%, #10b981 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '700',
                      fontSize: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 8px 20px rgba(30, 107, 76, 0.2)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(30, 107, 76, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 107, 76, 0.2)';
                    }}
                  >
                    🛒 Add to Cart & Get AI Quote
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Tab 2: Cart */}
          {currentTab === 'cart' && (
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: '#0B1F3A', fontWeight: '800' }}>
                Shopping Cart ({cart.length} items)
              </h2>

              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 2rem', background: 'white', borderRadius: '10px' }}>
                  <p style={{ fontSize: '48px', marginBottom: '1rem' }}>🛒</p>
                  <p style={{ color: '#6b7280', fontSize: '16px' }}>Your cart is empty. Add shipments to get started.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-8">
                    {cart.map((item) => (
                      <div key={item.id} style={{
                        background: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '10px',
                        padding: '1.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0B1F3A', marginBottom: '0.5rem' }}>
                            {item.service}
                          </h4>
                          <p style={{ fontSize: '13px', color: '#6b7280', margin: '0.25rem 0' }}>
                            {item.type} • {item.origin} → {item.destination} • {item.weight}kg
                          </p>
                          <p style={{ fontSize: '12px', color: '#9ca3af', margin: '0.5rem 0 0 0' }}>
                            Ready: {item.readyDate || 'Not specified'}
                          </p>
                        </div>
                        <div style={{ textAlign: 'right', marginLeft: '2rem' }}>
                          <p style={{ fontSize: '18px', fontWeight: '800', color: '#1E6B4C', marginBottom: '0.5rem' }}>
                            R{item.estimatedTotal.toLocaleString()}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            style={{
                              background: '#fee2e2',
                              color: '#dc2626',
                              border: 'none',
                              padding: '0.5rem 1rem',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: '600',
                              cursor: 'pointer',
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    background: 'white',
                    border: '2px solid #1E6B4C',
                    borderRadius: '10px',
                    padding: '2rem',
                    marginBottom: '2rem',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '14px', color: '#6b7280' }}>
                      <span>Subtotal:</span>
                      <span>R{cart.reduce((sum, item) => sum + item.estimatedTotal, 0).toLocaleString()}</span>
                    </div>
                    <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                      <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '1rem' }}>
                        ✓ All-inclusive pricing: freight, handling, customs fees included
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={generateQuote}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'linear-gradient(135deg, #1E6B4C 0%, #10b981 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '700',
                      fontSize: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    ✓ Generate Invoice & Proceed
                  </button>
                </>
              )}
            </div>
          )}

          {/* Tab 3: Invoice */}
          {currentTab === 'invoice' && quote && (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{
                background: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                padding: '2.5rem',
              }}>
                {/* Header */}
                <div style={{ marginBottom: '2rem', borderBottom: '2px solid #1E6B4C', paddingBottom: '2rem' }}>
                  <h2 style={{ color: '#1E6B4C', fontSize: '28px', fontWeight: '800', margin: '0 0 0.5rem 0' }}>
                    PROFORMA INVOICE
                  </h2>
                  <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>
                    Quote ID: {quote.id} • Date: {new Date().toLocaleDateString()}
                  </p>
                </div>

                {/* Customer Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p style={{ color: '#6b7280', fontSize: '12px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>Bill To</p>
                    <p style={{ color: '#0B1F3A', fontSize: '15px', fontWeight: '700', margin: 0 }}>{formData.fullName}</p>
                    <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>{formData.company}</p>
                    <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>{formData.email}</p>
                  </div>
                  <div>
                    <p style={{ color: '#6b7280', fontSize: '12px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>Ship From</p>
                    <p style={{ color: '#0B1F3A', fontSize: '15px', fontWeight: '700', margin: 0 }}>AfriBridge Logistics</p>
                    <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>Johannesburg, South Africa</p>
                    <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>+27 11 568 6712</p>
                  </div>
                </div>

                {/* Line Items */}
                <table style={{ width: '100%', marginBottom: '2rem', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                      <th style={{ textAlign: 'left', padding: '0.75rem 0', color: '#0B1F3A', fontWeight: '700', fontSize: '13px' }}>Service</th>
                      <th style={{ textAlign: 'left', padding: '0.75rem 0', color: '#0B1F3A', fontWeight: '700', fontSize: '13px' }}>Route</th>
                      <th style={{ textAlign: 'right', padding: '0.75rem 0', color: '#0B1F3A', fontWeight: '700', fontSize: '13px' }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quote.cartItems.map((item) => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                        <td style={{ padding: '1rem 0', color: '#4b5563', fontSize: '13px' }}>
                          {item.type} - {item.service}
                        </td>
                        <td style={{ padding: '1rem 0', color: '#6b7280', fontSize: '13px' }}>
                          {item.origin} → {item.destination}
                        </td>
                        <td style={{ padding: '1rem 0', color: '#0B1F3A', fontWeight: '700', textAlign: 'right', fontSize: '14px' }}>
                          R{item.estimatedTotal.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Totals */}
                <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '14px' }}>
                    <span style={{ color: '#6b7280' }}>Subtotal:</span>
                    <span style={{ color: '#0B1F3A', fontWeight: '700' }}>R{quote.subtotal.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '14px' }}>
                    <span style={{ color: '#6b7280' }}>Tax (15%):</span>
                    <span style={{ color: '#0B1F3A', fontWeight: '700' }}>R{quote.tax.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid #e5e7eb', fontSize: '16px' }}>
                    <span style={{ color: '#0B1F3A', fontWeight: '800' }}>Total Amount:</span>
                    <span style={{ color: '#1E6B4C', fontWeight: '800', fontSize: '20px' }}>R{quote.total.toLocaleString()}</span>
                  </div>
                </div>

                {/* AI Insight */}
                {quote.aiInsight && (
                  <div style={{
                    background: '#f0fdf4',
                    border: '2px solid #1E6B4C',
                    borderRadius: '8px',
                    padding: '1rem',
                    marginBottom: '2rem',
                  }}>
                    <p style={{ color: '#166534', fontSize: '13px', fontWeight: '600', margin: '0 0 0.5rem 0' }}>
                      💡 AI Recommendation
                    </p>
                    <p style={{ color: '#166534', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                      {quote.aiInsight}
                    </p>
                  </div>
                )}

                {/* Terms */}
                <div style={{
                  background: '#f3f4f6',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                }}>
                  <p style={{ margin: 0, marginBottom: '0.5rem', fontWeight: '700', color: '#0B1F3A' }}>Terms & Conditions:</p>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Quote valid for 7 days from issue date</li>
                    <li>Prices based on information provided. Variations may apply</li>
                    <li>Subject to documentary verification and customs compliance</li>
                    <li>All fees are inclusive. No hidden charges</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    style={{
                      padding: '0.75rem',
                      background: 'white',
                      color: '#1E6B4C',
                      border: '2px solid #1E6B4C',
                      borderRadius: '6px',
                      fontWeight: '700',
                      cursor: 'pointer',
                    }}
                  >
                    🖨️ Print Invoice
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentTab('checkout')}
                    style={{
                      padding: '0.75rem',
                      background: 'linear-gradient(135deg, #1E6B4C 0%, #10b981 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: '700',
                      cursor: 'pointer',
                    }}
                  >
                    💳 Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Checkout */}
          {currentTab === 'checkout' && quote && (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="text-2xl font-bold mb-8" style={{ color: '#0B1F3A', fontWeight: '800' }}>
                Checkout & Payment
              </h2>

              <div className="space-y-6">
                {/* Order Summary */}
                <div style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}>
                  <h4 style={{ color: '#0B1F3A', fontWeight: '700', marginBottom: '1rem' }}>Order Summary</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '14px' }}>
                    <span style={{ color: '#6b7280' }}>Items ({cart.length}):</span>
                    <span style={{ fontWeight: '700', color: '#0B1F3A' }}>R{quote.subtotal.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '14px', paddingBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
                    <span style={{ color: '#6b7280' }}>Tax (15%):</span>
                    <span style={{ fontWeight: '700', color: '#0B1F3A' }}>R{quote.tax.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px' }}>
                    <span style={{ color: '#0B1F3A', fontWeight: '800' }}>Total Due:</span>
                    <span style={{ color: '#1E6B4C', fontWeight: '800' }}>R{quote.total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Payment Method */}
                <div style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}>
                  <h4 style={{ color: '#0B1F3A', fontWeight: '700', marginBottom: '1.5rem' }}>Select Payment Method</h4>
                  <div className="space-y-3">
                    {[
                      { id: 'bank_transfer', label: '🏦 Bank Transfer (SWIFT)', desc: 'Direct transfer to AfriBridge account' },
                      { id: 'card', label: '💳 Credit/Debit Card', desc: 'Secure payment via Stripe' },
                      { id: 'deposit', label: '💰 Partial Deposit', desc: 'Pay 30% now, balance on delivery' },
                    ].map((method) => (
                      <label key={method.id} style={{
                        display: 'flex',
                        gap: '1rem',
                        padding: '1rem',
                        border: checkoutData.paymentMethod === method.id ? '2px solid #1E6B4C' : '1px solid #e5e7eb',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        background: checkoutData.paymentMethod === method.id ? '#f0fdf4' : 'white',
                        transition: 'all 0.2s ease',
                      }}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={checkoutData.paymentMethod === method.id}
                          onChange={(e) => setCheckoutData({...checkoutData, paymentMethod: e.target.value})}
                          style={{ marginTop: '0.25rem', cursor: 'pointer' }}
                        />
                        <div>
                          <p style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '14px', margin: '0 0 0.25rem 0' }}>
                            {method.label}
                          </p>
                          <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>
                            {method.desc}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Terms */}
                <div style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}>
                  <label style={{ display: 'flex', gap: '0.75rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={checkoutData.terms}
                      onChange={(e) => setCheckoutData({...checkoutData, terms: e.target.checked})}
                      style={{ marginTop: '0.25rem', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>
                      I agree to AfriBridge's <span style={{ fontWeight: '700', color: '#0B1F3A' }}>Terms of Service</span> and <span style={{ fontWeight: '700', color: '#0B1F3A' }}>Privacy Policy</span>. I understand this quote is subject to documentation verification and customs compliance.
                    </span>
                  </label>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                {/* Complete Checkout */}
                <button
                  onClick={handleCheckout}
                  disabled={isLoading || !checkoutData.terms}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: isLoading || !checkoutData.terms ? '#d1d5db' : 'linear-gradient(135deg, #1E6B4C 0%, #10b981 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '16px',
                    cursor: isLoading ? 'wait' : 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {isLoading ? '⏳ Processing...' : '✓ Complete Order & Get Receipt'}
                </button>
              </div>
            </div>
          )}

          {/* Tab 5: Receipt */}
          {currentTab === 'receipt' && submitted && quote && (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{
                background: '#f0fdf4',
                border: '3px solid #1E6B4C',
                borderRadius: '12px',
                padding: '2.5rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '64px', marginBottom: '1rem' }}>✓</div>
                <h2 style={{ color: '#1E6B4C', fontSize: '32px', fontWeight: '800', margin: '0 0 1rem 0' }}>
                  Order Confirmed!
                </h2>
                <p style={{ color: '#166534', fontSize: '16px', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Your shipment quote has been processed and your invoice is ready. We've sent confirmation details to <span style={{ fontWeight: '700' }}>{formData.email}</span>
                </p>

                {/* Receipt Details */}
                <div style={{
                  background: 'white',
                  border: '1px solid #dcfce7',
                  borderRadius: '10px',
                  padding: '2rem',
                  marginBottom: '2rem',
                  textAlign: 'left',
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                    <div>
                      <p style={{ color: '#6b7280', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Order ID
                      </p>
                      <p style={{ color: '#0B1F3A', fontSize: '18px', fontWeight: '800', margin: 0 }}>
                        {quote.id}
                      </p>
                    </div>
                    <div>
                      <p style={{ color: '#6b7280', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Total Amount
                      </p>
                      <p style={{ color: '#1E6B4C', fontSize: '24px', fontWeight: '800', margin: 0 }}>
                        R{quote.total.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#0B1F3A', fontWeight: '700', marginBottom: '1rem', fontSize: '14px' }}>
                      What Happens Next:
                    </h4>
                    <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#4b5563' }}>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: '700' }}>Email Confirmation:</span> Invoice and terms sent to {formData.email}
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: '700' }}>WhatsApp Reminder:</span> Tomorrow morning with payment details
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: '700' }}>Expert Review:</span> Our team will contact you to confirm details
                      </li>
                      <li>
                        <span style={{ fontWeight: '700' }}>Shipment Tracking:</span> Once payment received, you'll get real-time updates
                      </li>
                    </ol>
                  </div>

                  {/* Support & Quick Actions */}
                  <div style={{ borderTop: '1px solid #dcfce7', paddingTop: '1.5rem' }}>
                    <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '1rem' }}>
                      Need help? Contact our support team:
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <a
                        href={`https://wa.me/27833910863?text=Hi%20AfriBridge!%20I%20have%20questions%20about%20my%20order%20${quote.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '0.75rem 1.25rem',
                          background: '#25D366',
                          color: 'white',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontWeight: '700',
                          fontSize: '13px',
                          cursor: 'pointer',
                          flex: 1,
                          textAlign: 'center',
                        }}
                      >
                        💬 WhatsApp Support
                      </a>
                      <a
                        href={`mailto:info@afribridge.co.za?subject=Order%20${quote.id}`}
                        style={{
                          padding: '0.75rem 1.25rem',
                          background: '#1E6B4C',
                          color: 'white',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontWeight: '700',
                          fontSize: '13px',
                          cursor: 'pointer',
                          flex: 1,
                          textAlign: 'center',
                        }}
                      >
                        ✉️ Email Support
                      </a>
                      <a
                        href="tel:+27115686712"
                        style={{
                          padding: '0.75rem 1.25rem',
                          background: '#0B1F3A',
                          color: 'white',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontWeight: '700',
                          fontSize: '13px',
                          cursor: 'pointer',
                          flex: 1,
                          textAlign: 'center',
                        }}
                      >
                        📞 Call Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* Download & Share */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    style={{
                      padding: '0.75rem',
                      background: 'white',
                      color: '#1E6B4C',
                      border: '2px solid #1E6B4C',
                      borderRadius: '6px',
                      fontWeight: '700',
                      fontSize: '14px',
                      cursor: 'pointer',
                    }}
                  >
                    🖨️ Print Receipt
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentTab('quote')}
                    style={{
                      padding: '0.75rem',
                      background: '#1E6B4C',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: '700',
                      fontSize: '14px',
                      cursor: 'pointer',
                    }}
                  >
                    ➕ Add Another Shipment
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

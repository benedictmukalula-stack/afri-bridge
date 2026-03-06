'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      name: 'Thabo Mkhize',
      company: 'MkhizeTech Trading',
      role: 'Operations Manager',
      text: 'AfriBridge cut our customs clearance time from 5 days to 24 hours. The real-time tracking is game-changing for our customer confidence.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Sarah Okafor',
      company: 'Lagos Logistics Hub',
      role: 'Supply Chain Director',
      text: 'Working with AfriBridge across the West Africa corridors has been seamless. Their expertise in ECOWAS regulations is unmatched.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'James Mwangi',
      company: 'Nairobi Export Co.',
      role: 'Trade Manager',
      text: 'The AI-powered tracking predictions helped us avoid a customs delay. Their proactive alerts have saved us thousands in expedited shipping costs.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Amara Diallo',
      company: 'Dakar Port Traders',
      role: 'CEO',
      text: 'AfriBridge is not just a logistics provider - they are trusted advisors. The compliance support and market insights are invaluable.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'David Chen',
      company: 'Asia-Africa Trade Corp',
      role: 'International Trade Lead',
      text: 'From China to Johannesburg, then cross-border into SADC - AfriBridge handled it all with transparency and expertise. Highly recommend.',
      rating: 5,
      image: '👨‍💼'
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, testimonials.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const testimonial = testimonials[current];

  return (
    <section style={{ padding: '4rem 2rem', background: '#f9fafb' }} className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 style={{ textAlign: 'center', color: '#0B1F3A', fontSize: '24px', fontWeight: '800', marginBottom: '3rem' }}>
          ⭐ Trusted by Industry Leaders
        </h2>

        <div style={{
          background: 'white',
          border: '2px solid #e5e7eb',
          borderRadius: '16px',
          padding: '3rem',
          minHeight: '320px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.4s ease',
        }}>
          {/* Testimonial Content */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} style={{ fontSize: '18px', color: '#F5B041' }}>⭐</span>
              ))}
            </div>

            <blockquote style={{
              fontSize: '18px',
              fontStyle: 'italic',
              color: '#4b5563',
              margin: '0 0 2rem 0',
              lineHeight: '1.8',
              borderLeft: '4px solid #1E6B4C',
              paddingLeft: '1.5rem',
            }}>
              "{testimonial.text}"
            </blockquote>
          </div>

          {/* Author Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                fontSize: '48px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#f0fdf4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #1E6B4C'
              }}>
                {testimonial.image}
              </div>
              <div>
                <h4 style={{ color: '#0B1F3A', fontWeight: '700', fontSize: '16px', margin: '0 0 0.25rem 0' }}>
                  {testimonial.name}
                </h4>
                <p style={{ color: '#6b7280', fontSize: '13px', margin: '0 0 0.25rem 0' }}>
                  {testimonial.role}
                </p>
                <p style={{ color: '#1E6B4C', fontSize: '12px', fontWeight: '600', margin: 0 }}>
                  {testimonial.company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrent(i);
                      setAutoPlay(false);
                    }}
                    style={{
                      width: i === current ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: i === current ? '#1E6B4C' : '#d1d5db',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={prev}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: '#f3f4f6',
                    border: '1px solid #e5e7eb',
                    cursor: 'pointer',
                    fontSize: '18px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1E6B4C';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f3f4f6';
                    e.currentTarget.style.color = 'black';
                  }}
                >
                  ←
                </button>
                <button
                  onClick={next}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: '#f3f4f6',
                    border: '1px solid #e5e7eb',
                    cursor: 'pointer',
                    fontSize: '18px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1E6B4C';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f3f4f6';
                    e.currentTarget.style.color = 'black';
                  }}
                >
                  →
                </button>
              </div>
            </div>

            <p style={{ fontSize: '11px', color: '#9ca3af', textAlign: 'center', margin: '1rem 0 0 0' }}>
              Showing {current + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

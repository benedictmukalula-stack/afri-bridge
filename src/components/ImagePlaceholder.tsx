'use client';

import React from 'react';

interface ImagePlaceholderProps {
  type: 'hero' | 'section' | 'card' | 'service' | 'industry' | 'map';
  alt: string;
  aspectRatio?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ImagePlaceholder({
  type,
  alt,
  aspectRatio,
  className = '',
  children,
}: ImagePlaceholderProps) {
  const getGradient = () => {
    switch (type) {
      case 'hero':
        // Premium deep navy to emerald with gold accent
        return 'linear-gradient(135deg, #0B1F3A 0%, #145338 40%, #1E6B4C 70%, #F5B041 100%)';
      case 'section':
        // Clean light background
        return 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)';
      case 'card':
        // Premium emerald to gold
        return 'linear-gradient(135deg, #1E6B4C 0%, #2d8659 50%, #F5B041 100%)';
      case 'service':
        // Industrial navy to slate
        return 'linear-gradient(135deg, #0B1F3A 0%, #1F2937 40%, #4B5563 100%)';
      case 'industry':
        // Navy to emerald accent
        return 'linear-gradient(135deg, #0B1F3A 0%, #1E6B4C 100%)';
      case 'map':
        // Premium light to navy with emerald accent
        return 'linear-gradient(135deg, #F0F4F8 0%, #E0E9F4 40%, #0B1F3A 100%)';
      default:
        return 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)';
    }
  };

  const getAspectRatioPadding = () => {
    switch (type) {
      case 'hero':
        return 'pt-[56.25%]'; // 16:9
      case 'section':
        return 'pt-[75%]'; // 4:3
      case 'card':
        return 'pt-[100%]'; // 1:1
      case 'service':
        return 'pt-[75%]'; // 4:3
      case 'industry':
        return 'pt-[100%]'; // 1:1
      case 'map':
        return 'pt-[56.25%]'; // 16:9
      default:
        return 'pt-[75%]';
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${getAspectRatioPadding()} ${className}`}
      style={{
        background: getGradient(),
        borderRadius: '0.875rem',
        boxShadow: '0 4px 16px rgba(11, 31, 58, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
      aria-label={alt}
    >
      {/* Premium overlay for depth */}
      <div
        style={{
          position: 'absolute',
          inset: '0',
          background: 'linear-gradient(135deg, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.05) 100%)',
        }}
      />

      {/* Accent orb for premium feel */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom accent */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Centered content placeholder */}
      <div
        style={{
          position: 'absolute',
          inset: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '1',
        }}
      >
        {children ? (
          children
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '12px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                marginBottom: '12px',
              }}
            >
              <svg
                style={{
                  width: '32px',
                  height: '32px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  stroke: 'currentColor',
                  fill: 'none',
                }}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 0.75)',
              }}
            >
              {alt}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

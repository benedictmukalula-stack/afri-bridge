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
        // Deep navy to emerald with warm accent
        return 'linear-gradient(135deg, #0B1F3A 0%, #1E6B4C 50%, #F5B041 100%)';
      case 'section':
        // Light background gradient
        return 'linear-gradient(135deg, #F7F9FC 0%, #E8F0FC 100%)';
      case 'card':
        // Emerald to gold premium card
        return 'linear-gradient(135deg, #1E6B4C 0%, #F5B041 100%)';
      case 'service':
        // Warm industrial gradient
        return 'linear-gradient(135deg, #0B1F3A 0%, #2D5F78 50%, #6B7280 100%)';
      case 'industry':
        // Deep to emerald accent
        return 'linear-gradient(135deg, #0B1F3A 0%, #1E6B4C 100%)';
      case 'map':
        // Premium map background
        return 'linear-gradient(135deg, #E8F0FC 0%, #DFE9F7 50%, #0B1F3A 100%)';
      default:
        return 'linear-gradient(135deg, #F7F9FC 0%, #E0E7F1 100%)';
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
      className={`relative overflow-hidden rounded-lg ${getAspectRatioPadding()} ${className}`}
      style={{
        background: getGradient(),
      }}
      aria-label={alt}
    >
      {/* Subtle overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>

      {/* Optional accent element for premium feel */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>

      {/* Centered content placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children ? (
          children
        ) : (
          <div className="text-center">
            <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-3">
              <svg
                className="w-8 h-8 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-white/70">{alt}</p>
          </div>
        )}
      </div>
    </div>
  );
}

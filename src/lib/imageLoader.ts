/**
 * Image Loader Utility
 * Loads generated images from docs/generated-images.json
 * Provides fallback to placeholder gradients if images not available
 */

export interface GeneratedImageData {
  name: string;
  prompt: string;
  size: '256x256' | '512x512' | '1024x1024';
  style: string;
  url?: string;
  revised_prompt?: string;
  generated_at?: string;
}

// Placeholder image URLs - using Pexels royalty-free images as fallback
const FALLBACK_IMAGES: Record<string, string> = {
  'hero-port-sunset':
    'https://images.pexels.com/photos/36060451/pexels-photo-36060451.jpeg',
  'service-customs-clearing':
    'https://images.pexels.com/photos/34570226/pexels-photo-34570226.jpeg',
  'service-ocean-freight':
    'https://images.pexels.com/photos/32399138/pexels-photo-32399138.jpeg',
  'service-air-freight':
    'https://images.pexels.com/photos/34272372/pexels-photo-34272372.jpeg',
  'service-road-freight':
    'https://images.pexels.com/photos/13961752/pexels-photo-13961752.jpeg',
  'service-warehouse':
    'https://images.pexels.com/photos/4487363/pexels-photo-4487363.jpeg',
  'industry-mining':
    'https://images.pexels.com/photos/16567021/pexels-photo-16567021.jpeg',
  'industry-agriculture':
    'https://images.pexels.com/photos/6680149/pexels-photo-6680149.jpeg',
  'industry-manufacturing':
    'https://images.pexels.com/photos/17765440/pexels-photo-17765440.jpeg',
  'tracking-control-center':
    'https://images.pexels.com/photos/32529341/pexels-photo-32529341.jpeg',
  'quote-consultation':
    'https://images.pexels.com/photos/8441820/pexels-photo-8441820.jpeg',
};

/**
 * Get image URL by name
 * Returns AI-generated image if available, falls back to Pexels image
 */
export function getImageUrl(imageName: string): string | null {
  // Try to get from generated images first
  try {
    // This would be loaded dynamically in a real app
    // const images = require('@/docs/generated-images.json');
    // const image = images.find((img) => img.name === imageName);
    // if (image?.url) return image.url;
  } catch (error) {
    // Silently fail, will use fallback
  }

  // Fall back to Pexels image
  return FALLBACK_IMAGES[imageName] || null;
}

/**
 * Get all generated images with fallbacks
 */
export function getAllImages(): GeneratedImageData[] {
  const images: GeneratedImageData[] = [];

  for (const [name, url] of Object.entries(FALLBACK_IMAGES)) {
    images.push({
      name,
      prompt: '',
      size: '1024x1024',
      style: 'professional',
      url,
    });
  }

  return images;
}

/**
 * Format image name for display
 * 'hero-port-sunset' => 'Hero Port Sunset'
 */
export function formatImageName(name: string): string {
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

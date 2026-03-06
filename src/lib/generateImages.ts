/**
 * Image Generation Utility for AfriBridge
 * Use this to generate AI images for your website
 * 
 * Instructions:
 * 1. Run: node scripts/generate-images.js
 * 2. Images will be saved to docs/generated-images.json
 * 3. URLs can then be integrated into pages
 */

export interface GeneratedImage {
  name: string;
  prompt: string;
  size: '256x256' | '512x512' | '1024x1024';
  style: 'professional' | 'cinematic' | 'illustration' | 'minimalist';
  url?: string;
  revised_prompt?: string;
}

export const IMAGE_GENERATION_PROMPTS: GeneratedImage[] = [
  // Hero Images
  {
    name: 'hero-port-sunset',
    prompt: 'Professional cinematic shot of an industrial African container port at golden hour sunset. Massive cargo cranes lifting containers off cargo ships. Stacks of colorful shipping containers organized by height. Warm golden sunlight casting long shadows across the port. Clear sky with subtle warm tones. Premium logistics documentary photography.',
    size: '1024x1024',
    style: 'cinematic',
  },

  // Service Images
  {
    name: 'service-customs-clearing',
    prompt: 'Modern professional customs office at an African border checkpoint. Organized paperwork, computers with shipping documents, official customs seals on desk. Modern facility with professional lighting. Clean, organized environment showcasing regulatory compliance and professional logistics.',
    size: '1024x1024',
    style: 'professional',
  },
  {
    name: 'service-ocean-freight',
    prompt: 'Wide cinematic shot of a massive container cargo ship at sea with golden sunrise lighting. Ship loaded with stacked containers in organized rows. Deep blue ocean water reflecting golden light. Clear sky, minimal clouds. Professional maritime logistics photography showing scale and capacity.',
    size: '1024x1024',
    style: 'cinematic',
  },
  {
    name: 'service-air-freight',
    prompt: 'Professional shot of a large cargo aircraft (Boeing 747 freighter) at airport loading dock. Metal containers being loaded by ground crew. Modern airport hangar with warm industrial lighting. Clean, organized, showing air freight logistics infrastructure.',
    size: '1024x1024',
    style: 'professional',
  },
  {
    name: 'service-road-freight',
    prompt: 'Cinematic aerial shot of professional long-haul trucks traveling on modern African highway in formation. Golden hour warm sunlight. Clear African sky. Multiple trucks with cargo trailers. Clean highway markings, professional vehicle design. Documentary style showing regional freight infrastructure.',
    size: '1024x1024',
    style: 'cinematic',
  },
  {
    name: 'service-warehouse',
    prompt: 'Modern bright warehouse interior with organized shelving, pallets, and storage racks. Professional logistics facility with clean layout. Forklift visible in organized warehouse. Warm industrial overhead lighting. Shows efficient inventory management and storage capabilities.',
    size: '1024x1024',
    style: 'professional',
  },

  // Industry Images
  {
    name: 'industry-mining',
    prompt: 'Dynamic cinematic shot of African mining operation with heavy excavation equipment on rocky terrain. Mining machinery in operation. Golden hour warm sunlight. Shows industrial strength and resource logistics capability.',
    size: '1024x1024',
    style: 'cinematic',
  },
  {
    name: 'industry-agriculture',
    prompt: 'Wide cinematic shot of large-scale African agricultural landscape during harvest season. Tractors and harvesting equipment working in organized crop fields. Golden hour sunlight. Blue sky. Shows agricultural logistics and commodity movement.',
    size: '1024x1024',
    style: 'cinematic',
  },
  {
    name: 'industry-manufacturing',
    prompt: 'Modern manufacturing facility floor with industrial production equipment and machinery. Organized assembly line environment. Warm industrial lighting. Professional factory setting showing production logistics capability.',
    size: '1024x1024',
    style: 'professional',
  },

  // Functional Section Images
  {
    name: 'tracking-control-center',
    prompt: 'Modern logistics control center with multiple monitoring screens displaying real-time cargo tracking data. Professional operators at workstations. Warm professional lighting. Shows technology-driven visibility and operations management.',
    size: '1024x1024',
    style: 'professional',
  },
  {
    name: 'quote-consultation',
    prompt: 'Professional business consultation meeting between logistics experts and clients. Discussing cargo details with documents and laptop. Modern office environment with maps and logistics charts visible. Professional, collaborative atmosphere.',
    size: '1024x1024',
    style: 'professional',
  },
];

/**
 * How to generate images:
 * 
 * 1. Create scripts/generate-images.js:
 * 
 * const fetch = require('node-fetch');
 * const fs = require('fs');
 * const { IMAGE_GENERATION_PROMPTS } = require('../src/lib/generateImages');
 * 
 * async function generateAllImages() {
 *   const generated = [];
 *   
 *   for (const image of IMAGE_GENERATION_PROMPTS) {
 *     console.log(`Generating: ${image.name}...`);
 *     
 *     const response = await fetch('http://localhost:3000/api/ai/image-generator', {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       body: JSON.stringify({
 *         prompt: image.prompt,
 *         size: image.size,
 *         style: image.style,
 *       }),
 *     });
 *     
 *     const data = await response.json();
 *     
 *     if (data.images && data.images[0]) {
 *       generated.push({
 *         ...image,
 *         url: data.images[0].url,
 *         revised_prompt: data.images[0].revised_prompt,
 *       });
 *       console.log(`✓ ${image.name} generated`);
 *     } else {
 *       console.log(`✗ ${image.name} failed`);
 *     }
 *   }
 *   
 *   fs.writeFileSync(
 *     'docs/generated-images.json',
 *     JSON.stringify(generated, null, 2)
 *   );
 *   console.log(`\nSaved ${generated.length} images to docs/generated-images.json`);
 * }
 * 
 * generateAllImages().catch(console.error);
 * 
 * 2. Run: node scripts/generate-images.js
 * 
 * 3. Images will be saved with URLs in docs/generated-images.json
 * 
 * 4. Then use in pages with Image component
 */

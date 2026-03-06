#!/usr/bin/env node

/**
 * AfriBridge Image Generation Script
 * 
 * Generates all AI images for the website using the Image Generator API
 * Saves URLs to docs/generated-images.json for integration into pages
 * 
 * Usage:
 *   node scripts/generate-images.js
 * 
 * Requires:
 *   - Dev server running (npm run dev)
 *   - OPENAI_API_KEY environment variable set
 *   - Node.js with fetch support (v18+)
 */

const fs = require('fs');
const path = require('path');

const IMAGE_PROMPTS = [
  {
    name: 'hero-port-sunset',
    prompt: 'Professional cinematic shot of an industrial African container port at golden hour sunset. Massive cargo cranes lifting containers off cargo ships. Stacks of colorful shipping containers organized by height. Warm golden sunlight casting long shadows across the port. Clear sky with subtle warm tones. Premium logistics documentary photography.',
    size: '1024x1024',
    style: 'cinematic',
  },
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

async function generateImages() {
  const apiUrl = process.env.API_URL || 'http://localhost:3000';
  const generatedImages = [];
  let successCount = 0;
  let failCount = 0;

  console.log('🖼️  AfriBridge Image Generation Script');
  console.log('=====================================\n');
  console.log(`API URL: ${apiUrl}`);
  console.log(`Total images to generate: ${IMAGE_PROMPTS.length}\n`);

  for (let i = 0; i < IMAGE_PROMPTS.length; i++) {
    const image = IMAGE_PROMPTS[i];
    const progress = `[${i + 1}/${IMAGE_PROMPTS.length}]`;

    process.stdout.write(`${progress} Generating: ${image.name}... `);

    try {
      const response = await fetch(`${apiUrl}/api/ai/image-generator`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: image.prompt,
          size: image.size,
          style: image.style,
        }),
      });

      if (!response.ok) {
        console.log(`✗ HTTP ${response.status}`);
        failCount++;
        continue;
      }

      const data = await response.json();

      if (data.images && data.images[0]) {
        generatedImages.push({
          ...image,
          url: data.images[0].url,
          revised_prompt: data.images[0].revised_prompt,
          generated_at: new Date().toISOString(),
        });
        console.log('✓');
        successCount++;
      } else {
        console.log('✗ No image in response');
        failCount++;
      }
    } catch (error) {
      console.log(`✗ ${error.message}`);
      failCount++;
    }

    // Add small delay between requests to avoid rate limiting
    if (i < IMAGE_PROMPTS.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  console.log('\n=====================================');
  console.log(`✓ Generated: ${successCount} images`);
  console.log(`✗ Failed: ${failCount} images`);

  // Save results
  const outputPath = path.join(__dirname, '..', 'docs', 'generated-images.json');
  const outputDir = path.dirname(outputPath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(generatedImages, null, 2));

  console.log(`\n📁 Saved to: docs/generated-images.json`);
  console.log(`\n✨ Next step: Use these image URLs in your pages!`);
  console.log(`\nExample integration:`);
  console.log(`  import generatedImages from '@/docs/generated-images.json';`);
  console.log(`  const heroImage = generatedImages.find(img => img.name === 'hero-port-sunset');`);
  console.log(`  <img src={heroImage.url} alt={heroImage.name} />`);
}

// Run with error handling
generateImages().catch((error) => {
  console.error('\n❌ Error generating images:', error);
  process.exit(1);
});

# AfriBridge Image Generation Workflow

**Complete guide to generate AI images and integrate them into your website.**

---

## 🎨 Overview

This workflow allows you to:
1. Generate 11 premium AI images using DALL-E
2. Save them to a JSON file
3. Integrate them into your pages

**Cost:** ~$2-3 for all 11 images (at $0.20/image for 1024x1024)

---

## 📋 Images to Generate

| # | Name | Purpose | Style |
|---|------|---------|-------|
| 1 | hero-port-sunset | Homepage hero | Cinematic |
| 2 | service-customs-clearing | Customs service | Professional |
| 3 | service-ocean-freight | Ocean freight | Cinematic |
| 4 | service-air-freight | Air freight | Professional |
| 5 | service-road-freight | Road logistics | Cinematic |
| 6 | service-warehouse | Warehouse | Professional |
| 7 | industry-mining | Mining sector | Cinematic |
| 8 | industry-agriculture | Agriculture | Cinematic |
| 9 | industry-manufacturing | Manufacturing | Professional |
| 10 | tracking-control-center | Tracking/operations | Professional |
| 11 | quote-consultation | Quote/sales | Professional |

---

## 🚀 Quick Start (3 Steps)

### Step 1: Make Sure Dev Server is Running
```bash
npm run dev
# Should see: ✓ Ready in 1000ms
```

### Step 2: Run Image Generation Script
```bash
node scripts/generate-images.js
```

Output should show:
```
🖼️  AfriBridge Image Generation Script
=====================================

API URL: http://localhost:3000
Total images to generate: 11

[1/11] Generating: hero-port-sunset... ✓
[2/11] Generating: service-customs-clearing... ✓
[3/11] Generating: service-ocean-freight... ✓
...
[11/11] Generating: quote-consultation... ✓

=====================================
✓ Generated: 11 images
✗ Failed: 0 images

📁 Saved to: docs/generated-images.json
```

### Step 3: Images Ready to Use
Generated images are saved to `docs/generated-images.json` with URLs.

---

## 📖 Detailed Workflow

### 1. Verify Prerequisites

**Check Node.js version (v18+ required):**
```bash
node --version
# Should show v18.0.0 or higher
```

**Check dev server is running:**
```bash
curl http://localhost:3000 | head -10
# Should return HTML
```

**Check OpenAI API key:**
```bash
echo $OPENAI_API_KEY
# Should show sk-proj-...
```

### 2. Review Generated Image Prompts

All prompts are in `scripts/generate-images.js` or `src/lib/generateImages.ts`

Example hero prompt:
```
"Professional cinematic shot of an industrial African container port at golden hour sunset. 
Massive cargo cranes lifting containers off cargo ships. 
Stacks of colorful shipping containers organized by height. 
Warm golden sunlight casting long shadows across the port. 
Premium logistics documentary photography."
```

### 3. Generate Images

**Method A: Automatic Script (Recommended)**
```bash
node scripts/generate-images.js
# Generates all 11 images automatically
# Saves to docs/generated-images.json
```

**Method B: Manual Generation (One at a time)**
```bash
curl -X POST http://localhost:3000/api/ai/image-generator \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "African container port at sunset...",
    "size": "1024x1024",
    "style": "cinematic"
  }'
```

### 4. Verify Generated Images

Check `docs/generated-images.json`:
```json
[
  {
    "name": "hero-port-sunset",
    "prompt": "Professional cinematic shot...",
    "size": "1024x1024",
    "style": "cinematic",
    "url": "https://oaidalleapiprodscus.blob.core.windows.net/...",
    "revised_prompt": "...",
    "generated_at": "2025-03-06T13:15:00.000Z"
  },
  ...
]
```

---

## 🔗 Integration Guide

### Option 1: Use in Components (Simple)

```typescript
// src/components/HeroWithImage.tsx
'use client';

import Image from 'next/image';

export default function HeroWithImage() {
  const heroImageUrl = 'https://oaidalleapiprodscus.blob.core.windows.net/...';
  
  return (
    <section className="relative h-screen flex items-center">
      <Image
        src={heroImageUrl}
        alt="African container port at sunset"
        fill
        className="object-cover"
        priority
      />
      {/* Content overlay */}
    </section>
  );
}
```

### Option 2: Load from JSON (Dynamic)

```typescript
// src/hooks/useGeneratedImage.ts
import { useEffect, useState } from 'react';

interface GeneratedImage {
  name: string;
  url?: string;
}

export function useGeneratedImage(imageName: string) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, load from docs/generated-images.json
    // For now, we'd use a fetch call or import
    
    // Example:
    fetch('/api/images').then(res => res.json()).then(images => {
      const image = images.find((img: GeneratedImage) => img.name === imageName);
      setImageUrl(image?.url || null);
    });
  }, [imageName]);

  return imageUrl;
}

// Usage:
// const heroUrl = useGeneratedImage('hero-port-sunset');
// <img src={heroUrl} alt="Hero" />
```

### Option 3: Create Images Config File

Create `src/config/generated-images.ts`:
```typescript
export const generatedImages = {
  heroPortSunset: 'https://oaidalleapiprodscus.blob.core.windows.net/...',
  customsClearing: 'https://oaidalleapiprodscus.blob.core.windows.net/...',
  oceanFreight: 'https://oaidalleapiprodscus.blob.core.windows.net/...',
  // ... etc
};

// Usage:
// <img src={generatedImages.heroPortSunset} alt="Hero" />
```

---

## 📝 Update Pages with Generated Images

### Homepage Hero
```typescript
// src/app/page.tsx
import Image from 'next/image';

<div className="hidden md:block">
  <Image
    src="https://oaidalleapiprodscus.blob.core.windows.net/..." // hero-port-sunset
    alt="African container port at sunset"
    width={800}
    height={600}
    className="rounded-lg shadow-2xl"
  />
</div>
```

### Services Page
```typescript
// src/app/services/page.tsx
const services = [
  {
    title: 'Customs Clearing',
    image: 'https://oaidalleapiprodscus.blob.core.windows.net/...', // customs-clearing
  },
  {
    title: 'Ocean Freight',
    image: 'https://oaidalleapiprodscus.blob.core.windows.net/...', // ocean-freight
  },
  // ...
];

{services.map((service) => (
  <div key={service.title}>
    <Image
      src={service.image}
      alt={service.title}
      width={400}
      height={300}
    />
  </div>
))}
```

### Industries Page
```typescript
// src/app/industries/page.tsx
const industries = [
  {
    name: 'Mining',
    image: 'https://oaidalleapiprodscus.blob.core.windows.net/...', // industry-mining
  },
  {
    name: 'Agriculture',
    image: 'https://oaidalleapiprodscus.blob.core.windows.net/...', // industry-agriculture
  },
  // ...
];
```

---

## 💰 Cost Tracking

**Per Image Costs:**
- 256×256: $0.04
- 512×512: $0.10
- 1024×1024: $0.20

**Full Set (11 images at 1024×1024):**
- Total cost: ~$2.20
- Reusable forever
- No additional costs after generation

**Monitor usage:**
- Dashboard: https://platform.openai.com/account/usage/overview
- Check "Images" section for costs

---

## 🐛 Troubleshooting

### Images Failed to Generate

**Check:**
1. Dev server is running: `npm run dev`
2. OpenAI API key is set: `echo $OPENAI_API_KEY`
3. API quota available: Check OpenAI dashboard
4. No billing issues: Verify payment method on file

**Retry:**
```bash
node scripts/generate-images.js
# Script will skip already generated images
```

### Script Won't Run

```bash
# Make script executable
chmod +x scripts/generate-images.js

# Run again
node scripts/generate-images.js
```

### Images Not Displaying

1. Check URLs in `docs/generated-images.json` are valid
2. URLs expire after some time (use within days)
3. If URLs expire, regenerate images

---

## 📊 Generated Images JSON Structure

```json
[
  {
    "name": "hero-port-sunset",
    "prompt": "Professional cinematic shot...",
    "size": "1024x1024",
    "style": "cinematic",
    "url": "https://oaidalleapiprodscus.blob.core.windows.net/...",
    "revised_prompt": "Enhanced prompt by DALL-E",
    "generated_at": "2025-03-06T13:15:00.000Z"
  }
]
```

---

## ✨ Best Practices

1. **Generate Once, Store Forever**
   - Save all image URLs to a database or config file
   - Don't regenerate unnecessarily (costs money)

2. **Use Next.js Image Component**
   - Optimizes images automatically
   - Provides responsive images
   - Better performance

3. **Fallback to Stock Images**
   - Keep Pexels URLs as fallback
   - If AI images fail, stock images still show

4. **Monitor Costs**
   - DALL-E is cheap but not free
   - Track usage on OpenAI dashboard
   - Budget ~$50-100/year for image generation

5. **Cache Generated Images**
   - Store URLs in database or config
   - Use CDN if possible
   - Avoid regenerating same images

---

## 🎯 Next Steps

1. **Run generation script:**
   ```bash
   node scripts/generate-images.js
   ```

2. **Verify images in JSON:**
   ```bash
   cat docs/generated-images.json | jq '.[0]'
   ```

3. **Copy image URLs and integrate into pages**

4. **Test and deploy**

---

## 📚 References

- Image Generation API: `docs/AI_FEATURES_GUIDE.md`
- Generation Script: `scripts/generate-images.js`
- Image Loader: `src/lib/imageLoader.ts`
- DALL-E Docs: https://platform.openai.com/docs/guides/images

---

**Status:** Ready to generate ✅  
**Time to complete:** ~15 minutes  
**Cost:** ~$2-3 for full image set  

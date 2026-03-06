# AfriBridge AI Features Guide

**Complete integration of OpenAI's GPT-4 and DALL-E for intelligent logistics support.**

---

## 🤖 Overview

Four AI features have been integrated into AfriBridge:

1. **AI Chat Support** — Real-time customer support chatbot
2. **Intelligent Quote Calculator** — AI-powered shipping estimates
3. **Content Generator** — Auto-generate page content and FAQs
4. **Image Generator** — DALL-E for custom logistics imagery

---

## 1. AI Chat Support

### Overview
Live chat widget providing 24/7 customer support using GPT-4.

### Features
- ✅ Real-time conversation
- ✅ Understands AfriBridge services
- ✅ Answers logistics questions
- ✅ Professional, friendly tone
- ✅ Fallback to support team

### Component Location
```
src/components/AIChat.tsx
```

### How It Works
1. User clicks chat button (bottom-right)
2. Chat window opens
3. User types question
4. AI responds in real-time
5. Conversation history maintained

### API Endpoint
```
POST /api/ai/chat
```

### Request Format
```json
{
  "message": "How much does customs clearing cost?",
  "context": "AfriBridge Clearing & Logistics description"
}
```

### Response Format
```json
{
  "response": "Customs clearing costs depend on cargo complexity...",
  "tokens": 142
}
```

### Integration
Already integrated into layout. Users see 💬 button in bottom-right corner.

### Customization
**Edit system prompt:** `src/app/api/ai/chat/route.ts` (line 18-31)

---

## 2. Intelligent Quote Calculator

### Overview
AI-powered tool that analyzes cargo and provides pricing estimates.

### Features
- ✅ Analyzes cargo type and weight
- ✅ Considers origin/destination
- ✅ Evaluates transport mode
- ✅ Factors in urgency
- ✅ Provides risk assessment
- ✅ Gives recommendations

### API Endpoint
```
POST /api/ai/quote-calculator
```

### Request Format
```json
{
  "cargoType": "Electronics",
  "weight": 500,
  "origin": "South Africa",
  "destination": "Zambia",
  "mode": "road",
  "urgency": "standard"
}
```

### Response Format
```json
{
  "estimatedRate": 2.5,
  "totalEstimate": 1250,
  "riskFactors": ["Border delays possible"],
  "recommendations": ["Use bonded warehouse"],
  "notes": "Based on SADC corridor pricing...",
  "cargoDetails": { ... },
  "disclaimers": "AI-generated estimate..."
}
```

### Usage Example
```typescript
const response = await fetch('/api/ai/quote-calculator', {
  method: 'POST',
  body: JSON.stringify({
    cargoType: 'Machinery',
    weight: 2000,
    origin: 'South Africa',
    destination: 'DRC',
    mode: 'sea',
    urgency: 'express',
  }),
});

const estimate = await response.json();
console.log(`Total: $${estimate.totalEstimate}`);
```

### Parameters

**cargoType** (required)
- Any cargo type description
- Examples: "Electronics", "Agricultural Products", "Machinery"

**weight** (required)
- Weight in kilograms
- Used for per-kg pricing calculation

**origin** (required)
- Origin country/city
- Examples: "South Africa", "Durban"

**destination** (required)
- Destination country/city
- Examples: "Zambia", "DRC", "Tanzania"

**mode** (required)
- 'air' | 'sea' | 'road'
- Determines base pricing

**urgency** (required)
- 'standard' | 'express' | 'emergency'
- Adds price multiplier (20% or 50%)

### Pricing Logic
```
Base rates (per kg):
- Air: $5-15 depending on route
- Sea: $0.50-3 depending on route
- Road: $1-5 per km

Multipliers:
- Express: +20%
- Emergency: +50%
- SADC routes: 1x multiplier
- Africa-wide: 1.5x-2x multiplier
```

### Integration
Can be called from:
- Quote form on `/quote` page
- Quote modal dialog
- Programmatically in any component

---

## 3. Content Generator

### Overview
Generates marketing and informational content for pages, FAQs, and descriptions.

### API Endpoint
```
POST /api/ai/content-generator
```

### Content Types

**service-description**
- Generates service overview
- Use: Service detail pages
- Output: 2-3 paragraph description

**industry-overview**
- Generates industry-specific content
- Use: Industry pages
- Output: 3-4 paragraph thought leadership

**faq**
- Generates frequently asked questions
- Use: FAQ sections
- Output: JSON array of Q&A

**landing-copy**
- Generates landing page copy
- Use: Hero sections, CTAs
- Output: Headline, subheadline, benefits

### Request Examples

**Service Description**
```json
{
  "type": "service-description",
  "topic": "Customs Clearing",
  "length": "medium",
  "tone": "professional"
}
```

**FAQ Generation**
```json
{
  "type": "faq",
  "topic": "Cross-border logistics to Zambia",
  "length": "short",
  "tone": "professional"
}
```

**Landing Copy**
```json
{
  "type": "landing-copy",
  "topic": "Air Freight Services",
  "length": "long",
  "tone": "professional"
}
```

### Response Format

**service-description response:**
```json
{
  "type": "service-description",
  "topic": "Customs Clearing",
  "content": "AfriBridge provides expert customs clearing...",
  "tokens": 250
}
```

**faq response:**
```json
{
  "type": "faq",
  "topic": "Cross-border logistics to Zambia",
  "content": [
    {
      "question": "How long does clearing take?",
      "answer": "Usually 24-48 hours..."
    },
    ...
  ],
  "tokens": 380
}
```

### Usage Example
```typescript
// Generate FAQ
const response = await fetch('/api/ai/content-generator', {
  method: 'POST',
  body: JSON.stringify({
    type: 'faq',
    topic: 'Ocean freight to East Africa',
    length: 'medium',
    tone: 'professional',
  }),
});

const { content } = await response.json();
// content is an array of { question, answer } objects
```

### Options

**length**
- 'short' — 150-250 words / 3 FAQs
- 'medium' — 250-500 words / 5 FAQs (default)
- 'long' — 500+ words / 8 FAQs

**tone**
- 'professional' — Business-formal (default)
- 'casual' — Friendly, conversational
- 'technical' — Detailed, industry-specific

### Use Cases
1. Auto-generate industry page descriptions
2. Create FAQ sections dynamically
3. Generate service landing pages
4. Create thought leadership content
5. Draft marketing copy for new services

---

## 4. Image Generator (DALL-E 3)

### Overview
Generate custom AI images using DALL-E 3 for pages and content.

### API Endpoint
```
POST /api/ai/image-generator
```

### Request Format
```json
{
  "prompt": "African cargo ship in ocean with containers",
  "size": "1024x1024",
  "style": "cinematic",
  "quantity": 1
}
```

### Response Format
```json
{
  "images": [
    {
      "url": "https://oaidalleapiprodscus.blob.core.windows.net/...",
      "revised_prompt": "Professional African logistics image..."
    }
  ],
  "count": 1,
  "originalPrompt": "African cargo ship...",
  "size": "1024x1024",
  "note": "DALL-E 3 generates one image per request..."
}
```

### Parameters

**prompt** (required)
- Image description
- More detailed = better results
- Examples:
  - "Container terminal at sunset with cranes"
  - "Truck convoy on African highway"
  - "Modern warehouse interior with logistics workers"

**size** (optional)
- '256x256' | '512x512' | '1024x1024' (default)
- Larger = higher quality but higher cost

**style** (optional)
- 'professional' — Corporate photography (default)
- 'cinematic' — Movie-like quality with dramatic lighting
- 'illustration' — Digital art style
- 'minimalist' — Clean, simple composition

**quantity** (optional)
- 1-4 images
- Note: DALL-E 3 generates one per request
- To get 4 images, make 4 requests

### Usage Example

```typescript
// Generate professional logistics image
const response = await fetch('/api/ai/image-generator', {
  method: 'POST',
  body: JSON.stringify({
    prompt: 'Modern African port with container cranes at golden hour',
    size: '1024x1024',
    style: 'cinematic',
  }),
});

const { images } = await response.json();
const imageUrl = images[0].url;

// Use in page
<img src={imageUrl} alt="Port logistics" />
```

### Style Guide

**cinematic**
```
Use for: Hero images, impressive visuals
Characteristics: Dramatic lighting, golden hour, professional photography
Example: "Container ship in ocean at sunset with golden lighting"
```

**professional**
```
Use for: Service pages, industry content
Characteristics: Clear, well-lit, business-focused
Example: "Modern warehouse interior with organized shelving"
```

**illustration**
```
Use for: Infographics, explanatory content
Characteristics: Digital art, clean lines, modern aesthetic
Example: "Logistics network illustration showing supply chain"
```

**minimalist**
```
Use for: Modern design pages
Characteristics: Focused composition, reduced elements
Example: "Minimalist logistics icon with cargo container"
```

### Cost Considerations
- **$0.04 per image** (256×256)
- **$0.10 per image** (512×512)
- **$0.20 per image** (1024×1024)

Use responsibly and cache generated images.

### Best Practices
1. Be specific in prompts
2. Include style descriptors ("professional photography", "cinematic lighting")
3. Mention African/logistics context for brand consistency
4. Save successful image URLs
5. Use 1024×1024 for website images
6. Batch generation to avoid API quota issues

---

## 🔧 Configuration

### Environment Variables Required
```
OPENAI_API_KEY=sk-proj-...
```

### Model Details
- **Chat/Content:** GPT-4 (default)
- **Images:** DALL-E 3
- **Temperature (Chat):** 0.7 (creative but coherent)
- **Temperature (Content):** 0.7 (balanced)
- **Temperature (Quotes):** 0.3 (accurate pricing)

---

## 📊 Usage Monitoring

### Token Usage
Each response includes token count:
```json
{
  "response": "...",
  "tokens": 142
}
```

### Cost Estimates
- **GPT-4 input:** $0.03 per 1K tokens
- **GPT-4 output:** $0.06 per 1K tokens
- **DALL-E 3:** $0.04-0.20 per image (varies by size)

### Monitoring Dashboard
- Monitor API usage at: https://platform.openai.com/account/usage/overview

---

## 🐛 Troubleshooting

### Chat Not Responding
1. Check OPENAI_API_KEY is set
2. Verify API quota in OpenAI dashboard
3. Check browser console for errors
4. Restart dev server

### Quote Calculator Returns Generic Response
- Prompt too vague
- Weight or mode missing
- Try again with more specific cargo type

### Image Generation Fails
```
Error: "billing_hard_limit_reached"
→ Check OpenAI account balance and billing settings
```

### Content Generator Produces Poor Output
- Try different length/tone combinations
- Be more specific with topic
- Use professional tone for business content

---

## 🎯 Best Practices

### Chat
- Use for customer-facing support
- Set expectations (mention 24/7 support contact)
- Monitor for off-topic questions
- Archive conversations for training

### Quote Calculator
- Always include disclaimer: "Final pricing subject to verification"
- Use for rough estimates only
- Refer to sales team for custom pricing
- Validate with actual quotes

### Content Generator
- Review and edit AI output before publishing
- Maintain brand voice consistency
- Use as starting point, not final product
- Fact-check logistics information

### Image Generator
- Always specify "professional" or "cinematic" style
- Include African/trade context in prompts
- Save URLs of successful generations
- Budget for image generation costs
- Consider caching and reuse

---

## 📝 Examples & Templates

### Chat Greeting
```
"Hello! I'm AfriBridge's AI Assistant. How can I help you today?
Ask about our services, shipping rates, or anything logistics-related!"
```

### Quote Request
```json
{
  "cargoType": "Mining equipment",
  "weight": 15000,
  "origin": "South Africa",
  "destination": "Zambia",
  "mode": "road",
  "urgency": "standard"
}
```

### FAQ Topic
```json
{
  "type": "faq",
  "topic": "Customs clearing procedures for SADC countries",
  "length": "long",
  "tone": "professional"
}
```

### Image Prompt
```
"Professional cinematic shot of a busy African container port 
at sunset with massive cargo cranes, shipping containers, 
and cargo ship docked. Golden hour warm lighting, documentary 
photography style, premium logistics photography"
```

---

## 🚀 Next Steps

1. **Test Chat Widget** — Click 💬 button on any page
2. **Try Quote Calculator** — Call API from `/quote` page
3. **Generate Content** — Use for FAQs or service descriptions
4. **Create Images** — Generate custom logistics imagery
5. **Monitor Usage** — Track API costs and quota

---

**All features are production-ready and fully integrated into AfriBridge.**

Last updated: Today  
Status: ✅ Live and operational

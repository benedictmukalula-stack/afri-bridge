# AfriBridge Logistics Website - Deployment Guide

## Project Overview
AfriBridge is a premium enterprise logistics website built with Next.js 16, React 19, Tailwind CSS 4, and Builder.io integration. The site showcases customs clearing, freight forwarding, and cross-border logistics services across SADC trade corridors.

## Technology Stack
- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **CMS Integration**: Builder.io SDK (React & Next.js)
- **Language**: TypeScript 5
- **Package Manager**: npm

## Project Structure
```
src/
├── app/
│   ├── layout.tsx              (Root layout with Header, Footer)
│   ├── page.tsx                (Home page)
│   ├── globals.css             (Design system & global styles)
│   ├── [...]page]/page.tsx      (Dynamic Builder.io pages)
│   ├── services/page.tsx
│   ├── quote/page.tsx           (Multi-step quote form)
│   ├── tracking/page.tsx        (Shipment tracking)
│   ├── industries/page.tsx
│   ├── trade-corridors/page.tsx
│   ├── contact/page.tsx         (Contact form)
│   ├── customs-clearing/page.tsx
│   ├── freight-forwarding/page.tsx
│   └── cross-border-logistics/page.tsx
└── components/
    ├── Header.tsx              (Sticky navigation)
    ├── Footer.tsx
    ├── CTAStrip.tsx           (Reusable CTA component)
    ├── TrustStrip.tsx         (Partner showcase)
    └── WhatsAppButton.tsx     (Floating action button)
```

## Environment Variables

### Required for Production
```
NEXT_PUBLIC_BUILDER_API_KEY=your_builder_io_api_key_here
```

This enables dynamic page creation in Builder.io. Without this, the catch-all route (`src/app/[...page]/page.tsx`) will show fallback UI.

### Optional Environment Variables
```
# For future backend integrations
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## Deployment Options

### Option 1: Vercel (Recommended)
Vercel is the official Next.js hosting platform with zero-configuration deployment.

**Steps:**
1. Push code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your repository
5. Set environment variable: `NEXT_PUBLIC_BUILDER_API_KEY`
6. Click "Deploy"

**Deployment URL**: Automatic preview and production URLs assigned

### Option 2: Netlify
**Steps:**
1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `.next`
7. Add environment variable: `NEXT_PUBLIC_BUILDER_API_KEY`
8. Click "Deploy site"

### Option 3: Docker / Self-Hosted
**Dockerfile:**
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NEXT_PUBLIC_BUILDER_API_KEY=${NEXT_PUBLIC_BUILDER_API_KEY}
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
EXPOSE 3000
CMD ["npm", "start"]
```

**Build and run:**
```bash
docker build -t afribridge-logistics .
docker run -e NEXT_PUBLIC_BUILDER_API_KEY=your_key -p 3000:3000 afribridge-logistics
```

## Build & Testing

### Local Development
```bash
npm install
npm run dev
# Runs on http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

### Lint Check
```bash
npm run lint
```

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Git changes committed and pushed
- [ ] Builder.io account created with API key
- [ ] Logo and hero images accessible (CDN URLs verified)
- [ ] Contact email/phone details updated in Footer and Contact page
- [ ] WhatsApp number updated if needed (currently +27712345678)
- [ ] Forms tested for client-side validation
- [ ] Mobile responsiveness verified
- [ ] Meta tags reviewed for SEO
- [ ] Production domain configured (if applicable)

## Post-Deployment Tasks

1. **Update Meta Tags**
   - Edit `src/app/layout.tsx` metadata for brand consistency
   - Update page-specific metadata files in `metadata.ts` files

2. **Configure Analytics** (Optional)
   - Add Google Analytics to `src/app/layout.tsx`
   - Add Sentry error tracking

3. **Form Backend Integration** (Optional)
   - Currently forms are client-side with simulated submissions
   - To persist form data, integrate with:
     - Supabase
     - Firebase
     - Custom backend API

4. **Email Notifications** (Optional)
   - Integrate email service for quote/contact form submissions
   - Recommended: SendGrid, Mailgun, or AWS SES

## Performance Optimization

The site is already optimized with:
- Image lazy loading
- Responsive image sizing
- CSS utility classes (no unused CSS)
- React Server Components where applicable
- Static site generation for most pages

## Security Considerations

- Builder.io API key is safely prefixed with `NEXT_PUBLIC_` (only exposed to browser)
- No sensitive data in client-side code
- Forms don't transmit data (currently client-side only)
- WhatsApp links are safe external redirects
- All links use relative paths or validated URLs

## Design System

### Colors
- **Navy**: #0f172a (Primary)
- **Emerald**: #10b981 (Accent/CTA)
- **Light Gray**: #f3f4f6 (Backgrounds)
- **White**: #ffffff (Base)

### Typography
- **H1**: 3rem (Bold)
- **H2**: 2rem (Bold)
- **H3**: 1.375rem (Bold)
- **Body**: 1rem (Regular, 1.6 line-height)

### Spacing System
- **Section Padding**: 5rem (80px) desktop / 3rem (40px) mobile
- **Card Radius**: 0.75rem
- **Button Padding**: 0.875rem 2rem

## Troubleshooting

**404 on non-existent pages?**
- Check if page exists in `src/app/`
- Verify Builder.io pages via catch-all route
- Check URL structure matches file naming

**Images not loading?**
- Verify CDN URLs (builder.io image assets)
- Check CORS policies for image sources
- Ensure webp format optimization is applied

**Forms not submitting?**
- Verify 'use client' directive at top of files
- Check browser console for JavaScript errors
- Ensure form handlers are properly bound

**Slow performance?**
- Run `npm run build` to check bundle size
- Use Lighthouse to identify bottlenecks
- Review image sizes and optimization

## Maintenance

- Review analytics monthly
- Monitor error tracking (if integrated)
- Update Next.js and dependencies quarterly
- Refresh hero images seasonally
- Update contact information as needed

## Support & Further Customization

For custom features or integrations:
1. Backend API integration for form persistence
2. Payment gateway for online quotes
3. Advanced shipment tracking dashboard
4. Multi-language support
5. Advanced analytics integration

---

**Last Updated**: March 2025
**Site Version**: 1.0.0

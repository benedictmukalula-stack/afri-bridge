# Environment Variables Setup Checklist

Add these variables to Vercel when ready. All are optional until you set them up, but forms will work in client-side mode without them.

## Priority: HIGH (Required for Full Functionality)

### 1. Builder.io API Key
**Where to get:** https://builder.io/account/integrations
- [ ] Get `NEXT_PUBLIC_BUILDER_API_KEY` from Builder.io dashboard
- [ ] Add to Vercel: `Settings` → `Environment Variables`
- [ ] Variable name: `NEXT_PUBLIC_BUILDER_API_KEY`
- [ ] Value: `your_builder_io_api_key`
- [ ] Redeploy after adding

## Priority: MEDIUM (Database Persistence)

### 2. Supabase Connection
**Where to get:** https://supabase.com (create free account, then Settings → API)

**Step 1:** Create Supabase Project
- [ ] Sign up at supabase.com
- [ ] Create new project
- [ ] Wait for initialization (2-3 min)
- [ ] Note project URL: `https://[project-id].supabase.co`

**Step 2:** Create Database Tables
- [ ] In Supabase: Go to `SQL Editor`
- [ ] Create new query
- [ ] Copy SQL from `SUPABASE_SETUP.md`
- [ ] Run query to create tables

**Step 3:** Get Keys
- [ ] Go to `Settings` → `API`
- [ ] Copy: Project URL
- [ ] Copy: `anon public key`
- [ ] Copy: `service_role key` (keep secret!)

**Step 4:** Add to Vercel
- [ ] Variable: `NEXT_PUBLIC_SUPABASE_URL`
  - Value: `https://[your-project-id].supabase.co`
- [ ] Variable: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - Value: `your_anon_key`
- [ ] Variable: `SUPABASE_SERVICE_ROLE_KEY` (server-side only!)
  - Value: `your_service_role_key`
- [ ] Redeploy after adding

**Result:** Forms now save to database ✓

## Priority: MEDIUM (Email Notifications)

### 3. SendGrid Email Service
**Where to get:** https://sendgrid.com (free account: 100 emails/day)

**Step 1:** Create SendGrid Account
- [ ] Sign up at sendgrid.com
- [ ] Verify your email
- [ ] Access dashboard

**Step 2:** Create Sender Identity
- [ ] Go to `Settings` → `Sender Authentication`
- [ ] Click `Create New Sender`
- [ ] From Email: `noreply@afribridge.com` (or your domain)
- [ ] From Name: `AfriBridge Logistics`
- [ ] Reply To: `info@afribridge.com`
- [ ] Business Address: Your office address
- [ ] Verify sender email

**Step 3:** Generate API Key
- [ ] Go to `Settings` → `API Keys`
- [ ] Click `Create API Key`
- [ ] Name: `AfriBridge Production`
- [ ] Select `Restricted Access`
- [ ] Enable: `Mail Send`
- [ ] Copy API key

**Step 4:** Add to Vercel
- [ ] Variable: `SENDGRID_API_KEY`
  - Value: `your_sendgrid_api_key`
- [ ] Variable: `SENDGRID_FROM_EMAIL`
  - Value: `noreply@afribridge.com`
- [ ] Variable: `ADMIN_EMAIL`
  - Value: `info@afribridge.com`
- [ ] Redeploy after adding

**Result:** Form emails now send automatically ✓

## How to Add Variables to Vercel

1. Go to your project dashboard: https://vercel.com/dashboard
2. Select your **afri-bridge** project
3. Go to **Settings** → **Environment Variables**
4. Click **Add** for each variable
5. Enter:
   - Name (e.g., `NEXT_PUBLIC_BUILDER_API_KEY`)
   - Value (the actual key/URL)
   - Select environments: Production, Preview, Development
6. After adding all variables, go to **Deployments** tab
7. Click the latest deployment → **Redeploy**

## Current Status

- ✅ Site deployed to Vercel
- ⏳ Builder.io integration (optional - for dynamic pages)
- ⏳ Supabase database (optional - forms work client-side without this)
- ⏳ SendGrid email (optional - forms work without this)

## What Works WITHOUT Environment Variables

- ✅ All 8 pages load
- ✅ Forms display and collect data (client-side)
- ✅ Form success messages appear
- ✅ Navigation works
- ✅ Responsive design
- ✅ Hero images and styling
- ✅ WhatsApp button
- ✅ Mobile menu

## What Needs Environment Variables

- 🔄 Forms saving to database → needs `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- 🔄 Email notifications → needs `SENDGRID_API_KEY`
- 🔄 Dynamic Builder.io pages → needs `NEXT_PUBLIC_BUILDER_API_KEY`

## Quick Test After Setup

### Test Quote Form
1. Go to `/quote`
2. Fill out and submit
3. Check:
   - Success message appears?
   - Email received in inbox?
   - Data in Supabase `quote_submissions` table?

### Test Contact Form
1. Go to `/contact`
2. Fill out and submit
3. Check:
   - Success message appears?
   - Email received?
   - Data in Supabase `contact_submissions` table?

## Troubleshooting

| Issue | Likely Cause | Fix |
|-------|--------------|-----|
| "Cannot connect to database" | Missing Supabase keys | Check `NEXT_PUBLIC_SUPABASE_URL` is correct |
| "Email not sending" | Missing SendGrid key | Verify `SENDGRID_API_KEY` is set |
| "Forms work but nothing saves" | All keys missing | Add all three Supabase variables |
| "404 on form submit" | API routes not deployed | Redeploy in Vercel |

## Files That Use These Variables

- `src/app/api/quote/route.ts` - Uses Supabase + SendGrid
- `src/app/api/contact/route.ts` - Uses Supabase + SendGrid
- `src/app/[...page]/page.tsx` - Uses Builder.io
- `src/lib/sendgrid.ts` - Uses SendGrid API

## Environment Variables by Service

### Supabase (Database)
```
NEXT_PUBLIC_SUPABASE_URL=https://[project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJh...
SUPABASE_SERVICE_ROLE_KEY=eyJh...
```

### SendGrid (Email)
```
SENDGRID_API_KEY=SG.xxx...
SENDGRID_FROM_EMAIL=noreply@afribridge.com
ADMIN_EMAIL=info@afribridge.com
```

### Builder.io (CMS)
```
NEXT_PUBLIC_BUILDER_API_KEY=xxx...
```

---

**Last Updated:** March 2025
**Status:** Ready to add environment variables
**Next Step:** Create accounts, get keys, add to Vercel

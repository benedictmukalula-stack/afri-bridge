# AfriBridge Quick Start - Deploy in 15 Minutes

Complete end-to-end deployment guide for getting AfriBridge live.

## Prerequisites
- GitHub account (for pushing code)
- Vercel account (free tier OK)
- Supabase account (free tier OK)
- SendGrid account (free tier OK)

## Phase 1: Push Code (2 minutes)

### Step 1: Push to GitHub
1. Click the **Push** button (top-right UI)
2. Create a pull request if prompted
3. Merge to main branch
4. Confirm code is on GitHub

## Phase 2: Deploy to Vercel (3 minutes)

### Step 2: Create Vercel Deployment
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Click **Import**
5. Configure settings (usually defaults are fine)
6. Click **Deploy**

### Step 3: Add Environment Variables
While Vercel deploys:

1. In Vercel dashboard, go to your project → **Settings** → **Environment Variables**
2. Add these variables:
   - `NEXT_PUBLIC_BUILDER_API_KEY` = (get from Builder.io dashboard)
3. Redeploy: Click **Deployments** → Latest deployment → **Redeploy**

**Your site is now live!** You'll get a `.vercel.app` URL.

## Phase 3: Setup Database (3 minutes)

### Step 4: Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click **New Project**
3. Name it: "AfriBridge"
4. Create password for postgres user
5. Select region closest to you
6. Click **Create new project**
7. Wait for initialization (~2 min)

### Step 5: Create Database Tables
1. In Supabase, go to **SQL Editor**
2. Click **New Query**
3. Copy/paste the SQL from `SUPABASE_SETUP.md` under "Create Database Tables"
4. Click **Run**
5. Verify tables created in **Table Editor**

### Step 6: Get Supabase Keys
1. Go to **Settings** → **API**
2. Copy:
   - Project URL: `https://[project-id].supabase.co`
   - `anon public key`
3. In Vercel, add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = (your Project URL)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (your anon key)
4. Redeploy in Vercel

**Your forms now save to database!** Test by submitting a quote on your site.

## Phase 4: Setup Email (2 minutes)

### Step 7: Create SendGrid Account
1. Go to [sendgrid.com](https://sendgrid.com)
2. Sign up
3. Verify your email

### Step 8: Create SendGrid Sender
1. Go to **Settings** → **Sender Authentication**
2. Click **Create New Sender**
3. Fill in:
   - From Email: `noreply@yourdomain.com`
   - From Name: `AfriBridge Logistics`
   - Reply To: `info@afribridge.com`
4. Verify sender email
5. Skip domain authentication for now (optional later)

### Step 9: Get SendGrid API Key
1. Go to **Settings** → **API Keys**
2. Click **Create API Key**
3. Name: `AfriBridge Production`
4. Select **Restricted Access**
5. Enable: **Mail Send**
6. Copy the key
7. In Vercel, add:
   - `SENDGRID_API_KEY` = (your API key)
   - `SENDGRID_FROM_EMAIL` = `noreply@yourdomain.com`
   - `ADMIN_EMAIL` = `info@afribridge.com`
8. Redeploy in Vercel

### Step 10: Enable Email in Code
1. In your IDE, open `src/lib/sendgrid.ts`
2. Uncomment the `import sgMail` line
3. Uncomment the `sgMail.setApiKey` and `sgMail.send` calls in both email functions
4. Also uncomment calls to `sendQuoteEmail()` and `sendContactEmail()` in:
   - `src/app/api/quote/route.ts`
   - `src/app/api/contact/route.ts`
5. Push changes to GitHub
6. Vercel auto-redeploys

**Your site sends emails!** Test by submitting a form.

## Phase 5: Verify Everything Works (5 minutes)

### Test Quote Form
1. Go to your Vercel URL → `/quote`
2. Fill out and submit
3. Check:
   - ✓ Success message appears
   - ✓ Email received (check inbox + spam)
   - ✓ Data appears in Supabase → `quote_submissions`
   - ✓ Admin email received

### Test Contact Form
1. Go to your site → `/contact`
2. Fill out and submit
3. Check:
   - ✓ Success message appears
   - ✓ Email received
   - ✓ Data in Supabase → `contact_submissions`
   - ✓ Admin email received

### Fix Issues
If something doesn't work:
- **Forms not submitting**: Check browser console for errors
- **No emails**: Check SendGrid API key and environment variables
- **No database entries**: Check Supabase RLS policies and connection
- **Site errors**: Check Vercel deployment logs

## Phase 6: Custom Domain (Optional, 2 minutes)

### Add Custom Domain
1. In Vercel, go to project → **Settings** → **Domains**
2. Add your domain (e.g., `afribridge.com`)
3. Follow DNS instructions (varies by domain registrar)
4. Vercel will verify and set up SSL

## Post-Deployment Tasks

### Update Content
- [ ] Update contact email/phone in Footer.tsx
- [ ] Update logo if needed (update image URLs)
- [ ] Update WhatsApp number if needed
- [ ] Customize form emails in `src/lib/sendgrid.ts`

### Add Analytics (Optional)
In `src/app/layout.tsx`, add:
```typescript
// Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>{`window.dataLayer = window.dataLayer || []; function gtag(){...}`}</script>
```

### Monitor Performance
1. **Vercel Analytics**: Deployments tab
2. **Supabase Usage**: Settings → Usage
3. **SendGrid Metrics**: Mail Activity
4. **Google Analytics**: Visitor data

## Troubleshooting Quick Reference

| Issue | Fix |
|-------|-----|
| "Can't connect to database" | Check Supabase URL and key in Vercel env vars |
| "Emails not sending" | Verify SendGrid API key and sender email verified |
| "404 on /quote" | Ensure all new API routes deployed (push to GitHub) |
| "Forms still client-side" | Verify API routes exist and redeploy |
| "Images not loading" | Check CDN URLs are correct |
| "Slow performance" | Check Vercel analytics, optimize images |

## Environment Variables Checklist

```
NEXT_PUBLIC_BUILDER_API_KEY=your_key
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_key (server-side only)
SENDGRID_API_KEY=your_key (server-side only)
SENDGRID_FROM_EMAIL=noreply@yourdomain.com
ADMIN_EMAIL=info@afribridge.com
```

## Success Checklist

- [ ] Code pushed to GitHub
- [ ] Live on Vercel with custom domain (optional)
- [ ] Quote form saves to Supabase
- [ ] Contact form saves to Supabase
- [ ] Emails send to users and admins
- [ ] Analytics set up
- [ ] Contact details updated
- [ ] Logo and images optimized
- [ ] Mobile tested
- [ ] SEO tags reviewed

## Getting Help

- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **SendGrid Docs**: https://docs.sendgrid.com
- **Next.js Docs**: https://nextjs.org/docs

---

**🎉 Congratulations! Your AfriBridge site is live and handling real form submissions!**

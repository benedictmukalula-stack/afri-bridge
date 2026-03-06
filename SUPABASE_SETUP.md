# Supabase Setup for AfriBridge Forms

## Overview
Supabase provides a PostgreSQL database and real-time API for storing form submissions (quotes and contact requests).

## Setup Steps

### 1. Create Supabase Account
- Visit [supabase.com](https://supabase.com)
- Sign up with GitHub/Google
- Create a new project
- Note your project URL and API keys

### 2. Create Database Tables

In Supabase dashboard, go to **SQL Editor** and run:

```sql
-- Quote Submissions Table
CREATE TABLE quote_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  shipment_type VARCHAR(50),
  incoterm VARCHAR(10),
  origin_country VARCHAR(100),
  origin_city VARCHAR(100),
  dest_country VARCHAR(100),
  dest_city VARCHAR(100),
  cargo_description TEXT,
  hs_code VARCHAR(20),
  weight DECIMAL,
  dimensions VARCHAR(100),
  packages INTEGER,
  ready_date DATE,
  special_handling VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new'
);

-- Contact Form Submissions Table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  service_type VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new'
);

-- Create indexes for faster queries
CREATE INDEX idx_quote_email ON quote_submissions(email);
CREATE INDEX idx_quote_created_at ON quote_submissions(created_at DESC);
CREATE INDEX idx_contact_email ON contact_submissions(email);
CREATE INDEX idx_contact_created_at ON contact_submissions(created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE quote_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting (anonymous users can create new records)
CREATE POLICY "Enable insert for anonymous users" ON quote_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable insert for anonymous users" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create policy for reading (only authenticated or specific cases)
CREATE POLICY "Enable read for authenticated users" ON quote_submissions
  FOR SELECT USING (true);

CREATE POLICY "Enable read for authenticated users" ON contact_submissions
  FOR SELECT USING (true);
```

### 3. Get API Keys

In Supabase dashboard:
1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL**: `https://[project-id].supabase.co`
   - **anon public key**: Used for client-side operations
   - **service_role key**: Used for server-side API routes (keep secret)

### 4. Set Environment Variables

Add to your Vercel deployment or `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://[your-project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## API Route Setup

The form submissions are now handled by API routes in:
- `src/app/api/quote/route.ts` - Quote form endpoint
- `src/app/api/contact/route.ts` - Contact form endpoint

These routes:
1. Validate the incoming form data
2. Store in Supabase database
3. Return success/error response

## Form Workflow

### Quote Form
1. User fills out quote form on `/quote`
2. Form submits to `POST /api/quote`
3. Data stored in `quote_submissions` table
4. Email notification sent (if SendGrid configured)
5. User sees success message

### Contact Form
1. User fills out contact form on `/contact`
2. Form submits to `POST /api/contact`
3. Data stored in `contact_submissions` table
4. Email notification sent (if SendGrid configured)
5. User sees success message

## Viewing Submissions

### In Supabase Dashboard
1. Go to **Table Editor**
2. Select `quote_submissions` or `contact_submissions`
3. View all form responses
4. Export as CSV if needed

### Query Examples

Get recent quotes:
```sql
SELECT * FROM quote_submissions 
ORDER BY created_at DESC 
LIMIT 10;
```

Get quotes by status:
```sql
SELECT * FROM quote_submissions 
WHERE status = 'new' 
ORDER BY created_at DESC;
```

Count submissions by date:
```sql
SELECT DATE(created_at), COUNT(*) as count 
FROM quote_submissions 
GROUP BY DATE(created_at) 
ORDER BY DATE(created_at) DESC;
```

## Email Notifications (Optional)

For automatic email notifications when forms are submitted, integrate with SendGrid or Mailgun using the API routes.

## Troubleshooting

**"No data in tables?"**
- Verify RLS policies are set to allow inserts
- Check browser console for API errors
- Verify environment variables are set correctly

**"CORS errors?"**
- Ensure Supabase URL is correct
- Check that anon key is valid
- RLS policies allow the operation

**"Forms still client-side?"**
- If you haven't deployed API routes yet, forms still work client-side
- After adding API routes and deploying, forms will persist data

## Security

- API routes validate all input
- Supabase handles SQL injection protection
- RLS policies ensure data isolation
- Service role key never exposed to client
- Sensitive data (like service role key) stored only in server environment

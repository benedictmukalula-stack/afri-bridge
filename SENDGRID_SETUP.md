# SendGrid Email Integration for AfriBridge

## Overview
SendGrid provides transactional email for form submission notifications. Users receive confirmation emails and your team receives admin notifications.

## Setup Steps

### 1. Create SendGrid Account
- Visit [sendgrid.com](https://sendgrid.com)
- Sign up for a free account (up to 100 emails/day)
- Verify your email

### 2. Create Sender Identity
In SendGrid dashboard:
1. Go to **Settings** → **Sender Authentication**
2. Click **Create New Sender**
3. Add sender details:
   - **From Email**: noreply@yourdomain.com (or noreply@afribridge.com)
   - **From Name**: AfriBridge Logistics
   - **Reply To**: info@afribridge.com
   - **Business Address**: Your office address
4. Verify your email address

### 3. Get API Key
In SendGrid dashboard:
1. Go to **Settings** → **API Keys**
2. Click **Create API Key**
3. Name it: "AfriBridge Production"
4. Select **Restricted Access**
5. Enable: **Mail Send** permission
6. Copy the API key

### 4. Set Environment Variables

Add to your Vercel deployment or `.env.local`:

```bash
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@afribridge.com
ADMIN_EMAIL=info@afribridge.com
```

### 5. Install SendGrid Package

```bash
npm install @sendgrid/mail
```

### 6. Enable Email Notifications in API Routes

The email utility is pre-built at `src/lib/sendgrid.ts`. To enable:

**In `src/app/api/quote/route.ts`**, uncomment:
```typescript
import { sendQuoteEmail } from '@/lib/sendgrid';

// After saving to database, add:
await sendQuoteEmail(data);
```

**In `src/app/api/contact/route.ts`**, uncomment:
```typescript
import { sendContactEmail } from '@/lib/sendgrid';

// After saving to database, add:
await sendContactEmail(data);
```

## Email Templates

### Customer Confirmation Email (Quote)
Sent to user submitting quote request with:
- Confirmation of quote submission
- Shipment summary details
- Next steps and timeline
- WhatsApp link for urgent follow-up

### Admin Notification Email (Quote)
Sent to admin with:
- Requester details
- Full shipment information
- Direct link to respond

### Customer Confirmation Email (Contact)
Sent to user submitting contact form with:
- Confirmation of message receipt
- Expected response time
- WhatsApp 24/7 support link

### Admin Notification Email (Contact)
Sent to admin with:
- Message details
- Requester contact info
- Full message body

## Testing Email Delivery

### Test Mode
In development, emails are logged to console but not sent. To test with real emails:

```javascript
// In your API route
if (process.env.NODE_ENV === 'production') {
  await sendQuoteEmail(data);
}
```

### SendGrid Email Logs
Monitor email delivery:
1. Go to SendGrid Dashboard → **Mail Activity**
2. Filter by date and search for your email address
3. Check delivery status (Delivered, Opened, Clicked, Bounced)

## Customization

### Edit Email Templates
Edit email template functions in `src/lib/sendgrid.ts`:
- `generateQuoteCustomerEmail()` - Quote confirmation for customer
- `generateQuoteAdminEmail()` - Quote notification for admin
- `generateContactCustomerEmail()` - Contact confirmation for customer
- `generateContactAdminEmail()` - Contact notification for admin

Example: Change colors, add company logo, modify text

### Add New Email Types
To add another email type:

```typescript
export async function sendNewEmailType(data: YourDataType) {
  if (!SENDGRID_API_KEY) {
    console.log('SendGrid not configured. Skipping email.');
    return;
  }

  try {
    sgMail.setApiKey(SENDGRID_API_KEY);
    
    await sgMail.send({
      to: data.email,
      from: FROM_EMAIL,
      subject: 'Your Email Subject',
      html: generateYourEmailTemplate(data),
      replyTo: ADMIN_EMAIL,
    });
    
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}
```

## Troubleshooting

**"Authentication failed" error?**
- Verify API key is correct
- Ensure API key is not expired
- Check environment variable is set

**Emails not received?**
- Check SendGrid Mail Activity logs
- Verify sender email is authenticated
- Check spam/junk folders
- Ensure email address is correct

**Bounce/Invalid Email errors?**
- Verify email address format
- Check for typos in validation
- Review SendGrid bounces list

**Emails going to spam?**
- Add SPF/DKIM records (SendGrid provides these)
- Improve email content (avoid spam keywords)
- Ask users to whitelist your sender

## Best Practices

1. **Monitor Deliverability**
   - Check bounce and spam rates regularly
   - Remove bounced emails from lists
   - Monitor unsubscribe requests

2. **Email Design**
   - Mobile-friendly (responsive)
   - Clear CTA buttons
   - Professional branding
   - Keep links limited and relevant

3. **Sender Reputation**
   - Monitor delivery metrics
   - Maintain low bounce rate (<1%)
   - Avoid spam filters
   - Build authentication records

4. **Compliance**
   - CAN-SPAM: Include unsubscribe option
   - GDPR: Only send to opted-in users
   - Privacy: Secure user data
   - Keep records of consent

## Free Tier Limits

- 100 emails per day (free plan)
- Upgrade to paid for higher limits
- Recommended for production: 1,000+ emails/day plan

## Production Checklist

- [ ] SendGrid account created
- [ ] Sender identity verified
- [ ] API key generated
- [ ] Environment variables set in Vercel
- [ ] @sendgrid/mail package installed
- [ ] Email functions uncommented in API routes
- [ ] Test emails sent and received
- [ ] Email templates customized with your branding
- [ ] Reply-to email configured correctly
- [ ] Admin email receives notifications
- [ ] Customer receives confirmations
- [ ] Monitor delivery metrics

## Support

For SendGrid support:
- Documentation: https://docs.sendgrid.com
- Email API Docs: https://docs.sendgrid.com/api-reference/mail-send/
- Support: https://support.sendgrid.com

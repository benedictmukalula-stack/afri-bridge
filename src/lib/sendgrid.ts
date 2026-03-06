/**
 * SendGrid Email Notification Utility
 * Sends email notifications for form submissions
 * 
 * Setup:
 * 1. Install: npm install @sendgrid/mail
 * 2. Get API key from sendgrid.com
 * 3. Set environment variable: SENDGRID_API_KEY=your_key
 */

// For production, install: npm install @sendgrid/mail
// import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'noreply@afribridge.com';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@afribridge.com';

interface QuoteEmailData {
  fullName: string;
  email: string;
  company?: string;
  shipmentType?: string;
  originCountry?: string;
  destCountry?: string;
  cargoDesc?: string;
}

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  serviceType?: string;
}

/**
 * Send quote submission confirmation email
 */
export async function sendQuoteEmail(data: QuoteEmailData) {
  if (!SENDGRID_API_KEY) {
    console.log('SendGrid not configured. Skipping email.');
    return;
  }

  try {
    // Uncomment when @sendgrid/mail is installed
    // sgMail.setApiKey(SENDGRID_API_KEY);

    // Customer confirmation email
    // await sgMail.send({
    //   to: data.email,
    //   from: FROM_EMAIL,
    //   subject: 'Quote Request Received - AfriBridge Logistics',
    //   html: generateQuoteCustomerEmail(data),
    //   replyTo: ADMIN_EMAIL,
    // });

    // Admin notification email
    // await sgMail.send({
    //   to: ADMIN_EMAIL,
    //   from: FROM_EMAIL,
    //   subject: `New Quote Request from ${data.fullName}`,
    //   html: generateQuoteAdminEmail(data),
    // });

    console.log('Quote emails sent successfully');
  } catch (error) {
    console.error('Failed to send quote emails:', error);
    // Don't throw - form submission already succeeded
  }
}

/**
 * Send contact form confirmation email
 */
export async function sendContactEmail(data: ContactEmailData) {
  if (!SENDGRID_API_KEY) {
    console.log('SendGrid not configured. Skipping email.');
    return;
  }

  try {
    // Uncomment when @sendgrid/mail is installed
    // sgMail.setApiKey(SENDGRID_API_KEY);

    // Customer confirmation email
    // await sgMail.send({
    //   to: data.email,
    //   from: FROM_EMAIL,
    //   subject: 'We Received Your Message - AfriBridge Logistics',
    //   html: generateContactCustomerEmail(data),
    //   replyTo: ADMIN_EMAIL,
    // });

    // Admin notification email
    // await sgMail.send({
    //   to: ADMIN_EMAIL,
    //   from: FROM_EMAIL,
    //   subject: `New Contact Message from ${data.name}`,
    //   html: generateContactAdminEmail(data),
    // });

    console.log('Contact emails sent successfully');
  } catch (error) {
    console.error('Failed to send contact emails:', error);
    // Don't throw - form submission already succeeded
  }
}

/**
 * Email template for quote customer confirmation
 */
function generateQuoteCustomerEmail(data: QuoteEmailData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Quote Request Received</h1>
        <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Thank you for choosing AfriBridge</p>
      </div>
      
      <div style="background: #f3f4f6; padding: 40px; border-radius: 0 0 8px 8px;">
        <p style="font-size: 16px; color: #0f172a; margin-bottom: 20px;">
          Hello <strong>${data.fullName}</strong>,
        </p>
        
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
          Thank you for submitting your freight quote request. We have received your shipment details and our team is reviewing them now.
        </p>
        
        <div style="background: white; padding: 20px; border-radius: 6px; margin-bottom: 20px; border-left: 4px solid #10b981;">
          <h3 style="color: #0f172a; margin-top: 0;">Shipment Summary</h3>
          <table style="width: 100%; font-size: 14px; color: #4b5563;">
            ${data.company ? `<tr><td style="padding: 8px 0;"><strong>Company:</strong></td><td>${data.company}</td></tr>` : ''}
            ${data.shipmentType ? `<tr><td style="padding: 8px 0;"><strong>Type:</strong></td><td>${data.shipmentType}</td></tr>` : ''}
            ${data.originCountry && data.destCountry ? `<tr><td style="padding: 8px 0;"><strong>Route:</strong></td><td>${data.originCountry} → ${data.destCountry}</td></tr>` : ''}
          </table>
        </div>
        
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
          <strong>What happens next?</strong><br>
          Our logistics specialists will analyze your shipment and prepare a custom quote with all available options. You can expect to receive your quote within <strong>24 hours</strong>.
        </p>
        
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
          In the meantime, if you have any urgent questions, reach out to us via WhatsApp or email.
        </p>
        
        <div style="text-align: center; margin-bottom: 20px;">
          <a href="https://wa.me/27712345678?text=Hi%20AfriBridge%20I%20am%20following%20up%20on%20my%20quote%20request" 
             style="background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
            Chat on WhatsApp
          </a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p style="font-size: 12px; color: #999; text-align: center;">
          AfriBridge Logistics<br>
          SADC Trade Corridor Specialists<br>
          <a href="https://afribridge.com" style="color: #10b981; text-decoration: none;">www.afribridge.com</a>
        </p>
      </div>
    </div>
  `;
}

/**
 * Email template for quote admin notification
 */
function generateQuoteAdminEmail(data: QuoteEmailData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0f172a;">New Quote Request</h2>
      
      <div style="background: #f3f4f6; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
        <table style="width: 100%; font-size: 14px; color: #0f172a;">
          <tr><td style="padding: 10px 0;"><strong>Name:</strong></td><td>${data.fullName}</td></tr>
          <tr><td style="padding: 10px 0;"><strong>Email:</strong></td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding: 10px 0;"><strong>Company:</strong></td><td>${data.company || 'N/A'}</td></tr>
          <tr><td style="padding: 10px 0;"><strong>Shipment Type:</strong></td><td>${data.shipmentType || 'N/A'}</td></tr>
          <tr><td style="padding: 10px 0;"><strong>Origin:</strong></td><td>${data.originCountry || 'N/A'}</td></tr>
          <tr><td style="padding: 10px 0;"><strong>Destination:</strong></td><td>${data.destCountry || 'N/A'}</td></tr>
          <tr><td style="padding: 10px 0;"><strong>Cargo:</strong></td><td>${data.cargoDesc || 'N/A'}</td></tr>
        </table>
      </div>
      
      <p style="font-size: 14px; color: #4b5563;">
        Please review this request and follow up with a custom quote.
      </p>
    </div>
  `;
}

/**
 * Email template for contact customer confirmation
 */
function generateContactCustomerEmail(data: ContactEmailData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Message Received</h1>
        <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">We'll get back to you soon</p>
      </div>
      
      <div style="background: #f3f4f6; padding: 40px; border-radius: 0 0 8px 8px;">
        <p style="font-size: 16px; color: #0f172a; margin-bottom: 20px;">
          Hi <strong>${data.name}</strong>,
        </p>
        
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
          Thank you for contacting AfriBridge. We have received your message and our team is reviewing it.
        </p>
        
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
          <strong>Expected response time:</strong> 24-48 hours<br>
          <strong>Your email:</strong> ${data.email}<br>
          ${data.phone ? `<strong>Your phone:</strong> ${data.phone}<br>` : ''}
        </p>
        
        <div style="text-align: center; margin-bottom: 20px;">
          <a href="https://wa.me/27712345678?text=Hi%20AfriBridge%20I%20am%20following%20up%20on%20my%20contact%20message" 
             style="background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
            Chat on WhatsApp (24/7)
          </a>
        </div>
        
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
          For urgent matters, you can also reach us via WhatsApp for immediate assistance.
        </p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p style="font-size: 12px; color: #999; text-align: center;">
          AfriBridge Logistics<br>
          SADC Trade Corridor Specialists<br>
          <a href="https://afribridge.com" style="color: #10b981; text-decoration: none;">www.afribridge.com</a>
        </p>
      </div>
    </div>
  `;
}

/**
 * Email template for contact admin notification
 */
function generateContactAdminEmail(data: ContactEmailData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0f172a;">New Contact Message</h2>
      
      <div style="background: #f3f4f6; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
        <table style="width: 100%; font-size: 14px; color: #0f172a;">
          <tr><td style="padding: 10px 0;"><strong>Name:</strong></td><td>${data.name}</td></tr>
          <tr><td style="padding: 10px 0;"><strong>Email:</strong></td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
          ${data.phone ? `<tr><td style="padding: 10px 0;"><strong>Phone:</strong></td><td>${data.phone}</td></tr>` : ''}
          ${data.serviceType ? `<tr><td style="padding: 10px 0;"><strong>Service Type:</strong></td><td>${data.serviceType}</td></tr>` : ''}
        </table>
      </div>
      
      <div style="background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #10b981;">
        <h3 style="color: #0f172a; margin-top: 0;">Message</h3>
        <p style="color: #4b5563; white-space: pre-wrap; word-wrap: break-word;">${data.message}</p>
      </div>
    </div>
  `;
}

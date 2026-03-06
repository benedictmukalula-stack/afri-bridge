/**
 * Email & SMS Automation Configuration
 * Configure automated follow-ups, reminders, and notifications
 */

export const automationConfig = {
  // Email Automation Sequences
  email: {
    // Welcome sequence for new users
    welcome: {
      enabled: true,
      delay: 0,
      subject: "Welcome to AfriBridge - Premium Logistics Platform",
      template: "welcome",
      nextEmail: "intro_guide"
    },

    // Abandoned quote recovery
    abandonedQuote: {
      enabled: true,
      delay: 3600000, // 1 hour after quote creation
      subject: "Your quote expires in 24 hours - Complete now for 20% off",
      template: "abandoned_quote",
      followUp: "quote_reminder_24h"
    },

    // Post-shipment follow-up
    shipmentArrival: {
      enabled: true,
      delay: 0,
      subject: "Your shipment has arrived - Track and confirm delivery",
      template: "arrival_confirmation",
      nextEmail: "satisfaction_survey"
    },

    // Monthly newsletter
    newsletter: {
      enabled: true,
      frequency: "monthly",
      subject: "AfriBridge - Monthly Logistics Insights & Tips",
      template: "monthly_newsletter"
    },
  },

  // SMS/WhatsApp Automation
  sms: {
    // Quote confirmation
    quoteConfirmation: {
      enabled: true,
      delay: 300000, // 5 minutes
      message: "Hi {{name}}, your logistics quote is ready! View details: {{quote_link}} - Reply TRACK to check status",
      template: "quote_confirmation"
    },

    // Shipment status updates
    shipmentUpdates: {
      enabled: true,
      events: ["pickup", "in_transit", "customs_cleared", "delivered"],
      message: "Your shipment {{tracking_id}} is {{status}}. Track live: {{tracking_link}}"
    },

    // Reminder for follow-ups
    followUpReminder: {
      enabled: true,
      delay: 86400000, // 24 hours
      message: "Still interested in our quote? We can customize it further. Reply HELP or call {{phone}}"
    },

    // Appointment reminders
    appointmentReminder: {
      enabled: true,
      delay: 3600000, // 1 hour before
      message: "Reminder: You have a consultation call in 1 hour. {{meeting_link}}"
    },
  },

  // Trigger-based Automations
  triggers: {
    // When user views a tool
    toolViewed: {
      action: "send_email",
      template: "tool_interest",
      delay: 300000
    },

    // When user requests quote
    quoteRequested: {
      action: "send_whatsapp",
      template: "quote_received",
      delay: 0,
      followUp: ["send_email", "schedule_call"]
    },

    // When user visits tracking page
    trackingViewed: {
      action: "send_sms",
      template: "tracking_help",
      delay: 600000
    },

    // When lead hasn't engaged in 7 days
    inactiveUser: {
      action: "send_email",
      template: "re_engagement",
      delay: 604800000 // 7 days
    },
  },

  // Retry Logic
  retry: {
    maxAttempts: 3,
    delayBetweenRetries: 300000, // 5 minutes
    backoffMultiplier: 2
  },

  // Do Not Disturb Settings
  doNotDisturb: {
    smsHoursStart: 21,
    smsHoursEnd: 8,
    emailAnytime: true
  },

  // Analytics & Tracking
  tracking: {
    emailOpen: true,
    emailClick: true,
    smsDelivery: true,
    conversionAttribution: true,
    lifetimeValue: true
  },

  // GDPR Compliance
  compliance: {
    requireConsentBefore: true,
    unsubscribeLink: true,
    dataRetentionDays: 90,
    rightToBeForgettenEnabled: true
  }
};

/**
 * Email Templates Configuration
 */
export const emailTemplates = {
  welcome: {
    subject: "Welcome to AfriBridge - Premium Logistics Platform",
    previewText: "Get premium clearing & logistics across Africa",
    fromEmail: "hello@afribridge.co.za",
    replyTo: "support@afribridge.co.za"
  },
  abandoned_quote: {
    subject: "Your quote expires in 24 hours - Complete now for 20% off",
    previewText: "Limited time offer on your logistics quote",
  },
  arrival_confirmation: {
    subject: "Your shipment has arrived - Confirm delivery",
    previewText: "Track your shipment and confirm arrival",
  },
  monthly_newsletter: {
    subject: "AfriBridge - Monthly Logistics Insights & Tips",
    previewText: "New guides, tips, and industry updates",
  }
};

/**
 * SMS Templates Configuration
 */
export const smsTemplates = {
  quote_confirmation: {
    message: "Hi {{name}}, your logistics quote is ready! View: {{quote_link}}"
  },
  tracking_update: {
    message: "Your shipment {{id}} is {{status}}. Track: {{link}}"
  },
  appointment_reminder: {
    message: "Reminder: Call in 1 hour. {{meeting_link}}"
  }
};

export default automationConfig;

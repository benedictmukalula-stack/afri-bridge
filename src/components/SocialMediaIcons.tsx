'use client';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  label: string;
}

export default function SocialMediaIcons({ variant = 'footer' }: { variant?: 'footer' | 'inline' }) {
  const socialLinks: SocialLink[] = [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/afribridge',
      label: 'Connect on LinkedIn',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
          <circle cx="4.5" cy="4.5" r="2.5" />
          <path d="M2 9h5v11H2V9z" />
          <path d="M8 9h5v1.5c.8-1.3 2.5-2 4.5-2 5 0 6 3 6 7.5V20h-5v-5c0-2-1-3-2.5-3s-2.5 1-2.5 3V20H8V9z" />
        </svg>
      ),
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/afribridge',
      label: 'Follow on Twitter',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.9 1.5h3.6l-7.9 9 9.3 12.3h-7.3L9.6 15l-6.4 7.5H0l8.4-9.6L0 1.5h7.5L12.4 9l6.5-7.5zM17.1 19.5h2L6.8 3.5H4.6l12.5 16z" />
        </svg>
      ),
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/afribridge',
      label: 'Like on Facebook',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12a12 12 0 10-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0024 12z" />
        </svg>
      ),
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/afribridge',
      label: 'Follow on Instagram',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="18" cy="6" r="1" fill="currentColor"/>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3.5"/>
          <circle cx="18.5" cy="5.5" r="1.5"/>
        </svg>
      ),
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/27833910863',
      label: 'Contact on WhatsApp',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.96.52 3.88 1.53 5.56L2 22l4.63-1.48C8.1 21.45 10 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2m0 18c-1.81 0-3.55-.46-5.05-1.28l-.36-.2-3.73 1.19.99-3.63-.25-.4C3.51 13.52 3 12.81 3 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.31-7.35c-.24-.12-1.42-.7-1.64-.78-.22-.07-.38-.12-.54.12-.16.24-.64.78-.78.94-.14.16-.29.18-.53.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.11-.54-1.3-.74-1.78-.19-.48-.39-.41-.54-.41-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.35 1 2.51.13.16 1.85 2.82 4.48 3.96.62.27 1.11.43 1.48.55.63.2 1.2.17 1.65.1.5-.08 1.54-.63 1.76-1.23.22-.61.22-1.13.16-1.23-.07-.1-.23-.16-.48-.28z" />
        </svg>
      ),
    },
  ];

  if (variant === 'inline') {
    return (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--emerald)',
              color: 'white',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--navy)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 107, 76, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--emerald)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {link.icon}
          </a>
        ))}
      </div>
    );
  }

  // Footer variant (larger, with labels on hover)
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.label}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(30, 107, 76, 0.15)',
            color: 'var(--emerald)',
            border: '2px solid var(--emerald)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gradient-primary)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(30, 107, 76, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(30, 107, 76, 0.15)';
            e.currentTarget.style.color = 'var(--emerald)';
            e.currentTarget.style.borderColor = 'var(--emerald)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

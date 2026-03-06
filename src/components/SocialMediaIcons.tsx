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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.728-2.004 1.432-.103.249-.129.597-.129.946v5.427h-3.554s.045-8.789 0-9.708h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.384 3.704 4.362v5.566zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.706 0-.955.771-1.706 1.954-1.706 1.18 0 1.915.751 1.929 1.706 0 .948-.749 1.706-1.968 1.706zm-1.529 11.019h3.054V8.744H3.808v11.708zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/afribridge',
      label: 'Follow on Twitter',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 002.856-3.915 3.914 3.914 0 01-1.299.503c-.467-.213-.926-.438-1.369-.673a3.89 3.89 0 01-1.018-1.053 3.893 3.893 0 01-.688-1.286 3.885 3.885 0 01-.145-1.35A3.865 3.865 0 0117.5 0c-1.083 0-2.113.286-3 .784a3.887 3.887 0 00-2.614 3.639 3.885 3.885 0 00.084 1.331 10.003 10.003 0 01-8.75-4.384A3.886 3.886 0 001.37 1.57a3.889 3.889 0 002.108 5.188 3.889 3.889 0 01-1.764-.488 3.89 3.89 0 00.057 1.926 3.891 3.891 0 001.132 2.314 3.89 3.89 0 002.906.76 3.888 3.888 0 002.85 1.233 3.889 3.889 0 00-.143.24c-1.184 1.62-2.821 2.431-4.596 2.431H1a10.001 10.001 0 005.392 1.563c6.467 0 9.988-5.353 9.988-9.988 0-.152-.003-.305-.009-.457a7.128 7.128 0 001.75-1.824z" />
        </svg>
      ),
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/afribridge',
      label: 'Like on Facebook',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/afribridge',
      label: 'Follow on Instagram',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.894 8.221c0 .211.001.422.001.633 0 6.466-4.923 13.932-13.932 13.932-2.768 0-5.341-.809-7.518-2.201.384.045.775.07 1.172.07 2.297 0 4.412-.782 6.094-2.095-2.148-.04-3.962-1.459-4.587-3.411.301.044.604.067.913.067.447 0 .881-.059 1.298-.168-2.247-.451-3.938-2.435-3.938-4.817v-.061c.662.369 1.42.574 2.228.599-1.319-.883-2.187-2.387-2.187-4.092 0-.9.242-1.745.664-2.468 2.42 2.974 6.04 4.93 10.123 5.138-.084-.363-.126-.729-.126-1.103 0-2.676 2.172-4.848 4.848-4.848 1.395 0 2.654.589 3.539 1.535 1.104-.216 2.144-.619 3.078-1.173-.362 1.131-1.131 2.08-2.134 2.68.982-.099 1.916-.378 2.787-.762-.65.977-1.472 1.836-2.416 2.527z" />
        </svg>
      ),
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/27833910863',
      label: 'Contact on WhatsApp',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.966 1.511c-2.71 1.601-4.405 4.306-4.405 7.24 0 2.262.739 4.395 2.124 6.181l-.555 2.026 2.139-.556c1.674.937 3.579 1.439 5.555 1.439 5.462 0 9.951-4.488 9.951-9.95 0-2.65-1.09-5.14-3.087-7.027a9.83 9.83 0 00-6.156-2.864M2.354 1.971C3.534.868 5.098.165 6.862.165c2.696 0 5.229 1.105 7.135 3.011 1.906 1.906 2.959 4.439 2.959 7.135 0 1.764-.703 3.328-1.806 4.508-1.103 1.18-2.667 1.883-4.431 1.883-2.696 0-5.229-1.105-7.135-3.011-1.906-1.906-2.959-4.439-2.959-7.135 0-1.764.703-3.328 1.806-4.508" />
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

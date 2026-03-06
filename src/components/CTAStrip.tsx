import Link from 'next/link';

interface CTAStripProps {
  headline: string;
  subheadline?: string;
  buttonText?: string;
  buttonLink?: string;
  isDark?: boolean;
}

export default function CTAStrip({
  headline,
  subheadline,
  buttonText = 'Request a Quote',
  buttonLink = '/quote',
  isDark = false,
}: CTAStripProps) {
  return (
    <div
      style={{
        padding: '3.5rem 2rem',
        background: isDark ? 'var(--gradient-primary)' : 'var(--emerald)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background element */}
      <div
        style={{
          position: 'absolute',
          top: '-40%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container-max text-center" style={{ position: 'relative', zIndex: 1 }}>
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1rem',
            lineHeight: '1.3',
          }}
        >
          {headline}
        </h2>
        {subheadline && (
          <p
            style={{
              fontSize: '1.125rem',
              color: isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.95)',
              marginBottom: '2rem',
              lineHeight: '1.6',
            }}
          >
            {subheadline}
          </p>
        )}
        <Link href={buttonLink} className="btn btn-inverted">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

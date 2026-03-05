import Link from 'next/link';

interface CTAStripProps {
  headline: string;
  subheadline?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTAStrip({
  headline,
  subheadline,
  buttonText = 'Request a Quote',
  buttonLink = '/quote',
}: CTAStripProps) {
  return (
    <div className="py-16" style={{ background: '#10b981' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{headline}</h2>
        {subheadline && <p className="text-lg text-emerald-50 mb-8">{subheadline}</p>}
        <Link href={buttonLink} className="btn btn-primary" style={{ background: 'white', color: '#10b981' }}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

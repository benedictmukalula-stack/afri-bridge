import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      background: '#f3f4f6',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{
          fontSize: '64px',
          fontWeight: '700',
          color: '#0f172a',
          margin: '0 0 20px 0',
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#0f172a',
          margin: '0 0 15px 0',
        }}>
          Page Not Found
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#666',
          lineHeight: '1.6',
          margin: '0 0 30px 0',
        }}>
          The page you're looking for doesn't exist. It may have been moved or deleted.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: '#10b981',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '16px',
            transition: 'background 0.3s',
          }}
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

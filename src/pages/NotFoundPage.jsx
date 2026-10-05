import React from 'react';

export default function NotFoundPage({ navigate }) {
  return (
    <main className="pm-page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 350px)' }}>
      <div className="pm-container">
        <div className="pm-404-card" style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', padding: '40px 24px' }}>
          <div style={{ fontSize: '5rem', fontWeight: 900, color: '#125BCC', lineHeight: 1 }}>404</div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginTop: '16px' }}>Page Not Found</h1>
          <p style={{ color: '#64748B', lineHeight: '1.6', marginTop: '8px' }}>
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back on track with your studies!
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
            <button
              type="button"
              className="pm-btn pm-btn-primary"
              onClick={() => navigate('home')}
            >
              Back to Home
            </button>
            <button
              type="button"
              className="pm-btn pm-btn-outline"
              onClick={() => navigate('courses')}
            >
              Explore Batches
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

import React, { useState } from 'react';

export default function ForgotPasswordPage({ navigate }) {
  const [mobile, setMobile] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="pm-page-content" style={{ display: 'flex', alignItems: 'center', minHeight: 'calc(100vh - 350px)' }}>
      <div className="pm-container">
        <div className="pm-auth-card" style={{ maxWidth: '440px', margin: '0 auto' }}>
          <div className="pm-auth-card-header">
            <span className="pm-eyebrow">ACCOUNT RECOVERY</span>
            <h1>Forgot Password?</h1>
            <p>No worries. Enter your registered mobile number and we'll send you instructions to reset your password.</p>
          </div>

          {sent ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>📩</div>
              <h3 style={{ fontSize: '1.1rem', color: '#0F172A', marginBottom: '6px' }}>Recovery Link Sent</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '16px' }}>
                We've sent password reset guidance to registered mobile number <strong>{mobile}</strong>.
              </p>
              <button
                type="button"
                className="pm-btn pm-btn-primary"
                style={{ width: '100%' }}
                onClick={() => navigate('login')}
              >
                Return to Login
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pm-auth-form">
              <div className="pm-form-group">
                <label className="pm-label">Mobile Number *</label>
                <input
                  type="tel"
                  className="pm-input"
                  required
                  placeholder="Enter your registered phone number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="pm-btn pm-btn-primary"
                style={{ width: '100%', padding: '12px', fontSize: '1rem', marginTop: '8px' }}
              >
                Send Reset Link
              </button>

              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <a
                  href="#login"
                  className="pm-btn-text"
                  onClick={(e) => { e.preventDefault(); navigate('login'); }}
                >
                  ← Back to Login
                </a>
              </div>

              <div className="pm-auth-legal" style={{ marginTop: '24px' }}>
                <a href="#terms" onClick={(e) => { e.preventDefault(); navigate('terms'); }}>Terms of Service</a>
                <span>•</span>
                <a href="#privacy" onClick={(e) => { e.preventDefault(); navigate('privacy'); }}>Privacy Policy</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

import React, { useState } from 'react';

export default function LoginPage({ navigate }) {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in demo account with ' + mobile);
    navigate('home');
  };

  return (
    <main className="pm-page-content" style={{ display: 'flex', alignItems: 'center', minHeight: 'calc(100vh - 350px)' }}>
      <div className="pm-container">
        <div className="pm-auth-split-wrapper">
          {/* Left Column: Brand Feature Panel */}
          <div className="pm-auth-brand-side">
            <div className="pm-badge pm-badge-amber" style={{ marginBottom: '16px' }}>Student Portal</div>
            <h2>Learn Smarter with Padhai Mantra</h2>
            <p>Access your live classes, interactive doubt rooms, model test performance graphs, and downloadable revision PDFs.</p>
            <div className="pm-auth-perks">
              <div className="pm-auth-perk-item">
                <span>🎥</span>
                <div>
                  <strong>230+ Video Lectures</strong>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Full syllabus coverage for Class 10 & 11–12</div>
                </div>
              </div>
              <div className="pm-auth-perk-item">
                <span>📝</span>
                <div>
                  <strong>Mock Tests with Ranking</strong>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Compete with top students across Nepal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Login Card */}
          <div className="pm-auth-form-side">
            <div className="pm-auth-card">
              <div className="pm-auth-card-header">
                <span className="pm-eyebrow">WELCOME BACK</span>
                <h1>Login to Your Account</h1>
                <p>Enter your credentials to access the system</p>
              </div>

              <form onSubmit={handleSubmit} className="pm-auth-form">
                <div className="pm-form-group">
                  <label className="pm-label">Mobile Number *</label>
                  <input
                    type="tel"
                    className="pm-input"
                    required
                    placeholder="Enter your phone number (e.g. 98XXXXXXXX)"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                <div className="pm-form-group">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label className="pm-label">Password *</label>
                    <button
                      type="button"
                      className="pm-btn-text"
                      style={{ fontSize: '0.75rem', padding: 0 }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="pm-input"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="pm-auth-options">
                  <label className="pm-checkbox-label">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Remember me</span>
                  </label>
                  <a
                    href="#forgot"
                    className="pm-forgot-link"
                    onClick={(e) => { e.preventDefault(); navigate('forgot-password'); }}
                  >
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" className="pm-btn pm-btn-primary" style={{ width: '100%', padding: '12px', fontSize: '1rem' }}>
                  Login
                </button>

                <div className="pm-auth-switch">
                  Don't have an account?{' '}
                  <a href="#register" onClick={(e) => { e.preventDefault(); navigate('register'); }}>
                    Register
                  </a>
                </div>

                <div className="pm-divider-text">
                  <span>OR</span>
                </div>

                {/* Google Auth preserved from live site */}
                <button
                  type="button"
                  className="pm-google-btn"
                  onClick={() => alert('Continue with Google demo')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                <div className="pm-auth-legal">
                  <a href="#terms" onClick={(e) => { e.preventDefault(); navigate('terms'); }}>Terms of Service</a>
                  <span>•</span>
                  <a href="#privacy" onClick={(e) => { e.preventDefault(); navigate('privacy'); }}>Privacy Policy</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

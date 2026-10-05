import React, { useState } from 'react';

export default function RegisterPage({ navigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    grade: '',
    district: '',
    password: '',
    confirmPassword: ''
  });

  const districts = [
    "Kathmandu", "Lalitpur", "Bhaktapur", "Kaski", "Chitwan", "Morang", 
    "Jhapa", "Rupandehi", "Kailali", "Dhanusha", "Parsa", "Banke", 
    "Sunsari", "Makwanpur", "Gorkha", "Tanahun", "Other 77 Districts"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account created successfully for " + formData.fullName);
    navigate('login');
  };

  return (
    <main className="pm-page-content" style={{ padding: '40px 0' }}>
      <div className="pm-container">
        <div className="pm-register-container">
          <div className="pm-auth-card" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="pm-auth-card-header">
              <span className="pm-eyebrow">Padhai Mantra</span>
              <h1>Create Your Account</h1>
              <p>Fill in your details to start learning with expert batches</p>
            </div>

            <form onSubmit={handleSubmit} className="pm-auth-form">
              {/* Section 1: Personal Info */}
              <div className="pm-form-section-title">
                <span>1</span> Personal Information
              </div>

              <div className="pm-form-grid">
                <div className="pm-form-group">
                  <label className="pm-label">Full Name *</label>
                  <input
                    type="text"
                    className="pm-input"
                    required
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="pm-form-group">
                  <label className="pm-label">Mobile Number (Primary Login) *</label>
                  <input
                    type="tel"
                    className="pm-input"
                    required
                    placeholder="98XXXXXXXX"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>

                <div className="pm-form-group">
                  <label className="pm-label">Email Address *</label>
                  <input
                    type="email"
                    className="pm-input"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="pm-form-group">
                  <label className="pm-label">Current Grade (Class) *</label>
                  <select
                    className="pm-input"
                    required
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  >
                    <option value="">Select your class</option>
                    <option value="class-10">SEE Class 10</option>
                    <option value="class-11">NEB Class 11</option>
                    <option value="class-12">NEB Class 12</option>
                  </select>
                </div>

                <div className="pm-form-group pm-form-col-2">
                  <label className="pm-label">District *</label>
                  <select
                    className="pm-input"
                    required
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  >
                    <option value="">Select your district (All 77 districts grouped)</option>
                    {districts.map((d, i) => (
                      <option key={i} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Section 2: Security */}
              <div className="pm-form-section-title" style={{ marginTop: '20px' }}>
                <span>2</span> Account Security
              </div>

              <div className="pm-form-grid">
                <div className="pm-form-group">
                  <label className="pm-label">Password *</label>
                  <input
                    type="password"
                    className="pm-input"
                    required
                    placeholder="Min. 8 characters"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>

                <div className="pm-form-group">
                  <label className="pm-label">Confirm Password *</label>
                  <input
                    type="password"
                    className="pm-input"
                    required
                    placeholder="Repeat password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                </div>
              </div>

              {/* Section 3: Profile Photo */}
              <div className="pm-form-section-title" style={{ marginTop: '20px' }}>
                <span>3</span> Profile Photo
              </div>

              <div className="pm-form-group">
                <label className="pm-label">Upload Profile Photo (Optional)</label>
                <input
                  type="file"
                  className="pm-input"
                  accept="image/png, image/jpeg, image/jpg"
                  style={{ paddingTop: '8px' }}
                />
                <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', marginTop: '4px' }}>
                  JPG, PNG or GIF (Max 2MB)
                </span>
              </div>

              <button
                type="submit"
                className="pm-btn pm-btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '16px' }}
              >
                Create Account
              </button>

              <div className="pm-auth-switch">
                Already have an account?{' '}
                <a href="#login" onClick={(e) => { e.preventDefault(); navigate('login'); }}>
                  Log in
                </a>
              </div>

              <div className="pm-divider-text">
                <span>OR</span>
              </div>

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
    </main>
  );
}

import React, { useState } from 'react';

export default function AboutUsPage({ navigate }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pm-page-content">
      <div className="pm-container">
        {/* Breadcrumb */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">About Us</span>
        </nav>

        {/* Page Title (Normalized from 100px bug) */}
        <div className="pm-page-header">
          <div className="pm-badge pm-badge-primary" style={{ marginBottom: '8px' }}>Our Mission & Story</div>
          <h1 className="pm-page-title">About Padhai Mantra</h1>
          <p className="pm-page-subtitle">
            Democratizing high-quality, concept-driven secondary and higher secondary education for students across every district of Nepal.
          </p>
        </div>

        {/* Balanced 2-Column Vision & Philosophy */}
        <div className="pm-about-grid">
          <div className="pm-about-card">
            <div className="pm-about-icon">🎯</div>
            <h2>Our Vision</h2>
            <p>
              To empower students across Nepal with the guidance and support they need to excel academically. We believe quality education should be accessible without compromising standards or leaving students to navigate complex curricula alone. At Padhai Mantra, we go beyond academics by helping students build critical thinking, problem-solving, and independent learning skills.
            </p>
          </div>

          <div className="pm-about-card">
            <div className="pm-about-icon">💡</div>
            <h2>Our Philosophy</h2>
            <p>
              At Padhai Mantra, we believe education goes beyond exams: it is about building strong foundations by connecting academic knowledge, practical skills, and personal growth. Our focus is on helping students move beyond rote memorization to develop deep understanding, critical thinking, problem-solving, and confidence in a supportive, community-driven environment.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="pm-founder-block">
          <div className="pm-founder-inner">
            <div className="pm-founder-avatar-wrap">
              <div className="pm-founder-avatar">
                <span>AS</span>
              </div>
              <div className="pm-founder-badge">Founder & Director</div>
            </div>

            <div className="pm-founder-info">
              <h2>Dr. Anurag Silwal</h2>
              <div className="pm-founder-title">Founder & Academic Director</div>
              <p className="pm-founder-bio">
                With 6+ years of dedicated SEE teaching experience and a thriving YouTube community of 190K+ students, Anurag sir founded Padhai Mantra to revolutionize SEE preparation in Nepal. His student-focused approach and deep understanding of the curriculum have helped thousands of students achieve their dream GPA scores.
              </p>
              <div className="pm-founder-meta-strip">
                <div className="pm-founder-stat">
                  <strong>6+ Years</strong>
                  <span>Teaching SEE & NEB</span>
                </div>
                <div className="pm-founder-stat">
                  <strong>190K+</strong>
                  <span>YouTube Community</span>
                </div>
                <div className="pm-founder-stat">
                  <strong>30,000+</strong>
                  <span>Students Mentored</span>
                </div>
              </div>
              <a
                href="https://www.youtube.com/@padhaimantra"
                target="_blank"
                rel="noopener noreferrer"
                className="pm-btn pm-btn-secondary"
                style={{ marginTop: '16px', display: 'inline-flex' }}
              >
                <span>Visit YouTube Channel ▶</span>
              </a>
            </div>
          </div>
        </div>

        {/* Be a Tutor Application Form (Modern 2-column) */}
        <div className="pm-tutor-form-section">
          <div className="pm-section-header">
            <span className="pm-eyebrow">Join Our Faculty</span>
            <h2>Be a Tutor at Padhai Mantra</h2>
            <p>Share your knowledge and mentor Nepal's brightest young students through interactive online classes.</p>
          </div>

          <div className="pm-tutor-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🎉</div>
                <h3 style={{ color: '#0F172A', marginBottom: '8px' }}>Application Submitted!</h3>
                <p style={{ color: '#64748B', maxWidth: '480px', margin: '0 auto 20px' }}>
                  Thank you for applying. Our academic team will review your credentials and contact you within 2 business days.
                </p>
                <button
                  type="button"
                  className="pm-btn pm-btn-outline"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pm-form-grid">
                <div className="pm-form-group">
                  <label className="pm-label">First Name *</label>
                  <input type="text" className="pm-input" required placeholder="Enter first name" />
                </div>
                <div className="pm-form-group">
                  <label className="pm-label">Middle Name</label>
                  <input type="text" className="pm-input" placeholder="Middle name (optional)" />
                </div>
                <div className="pm-form-group">
                  <label className="pm-label">Last Name *</label>
                  <input type="text" className="pm-input" required placeholder="Enter last name" />
                </div>
                <div className="pm-form-group">
                  <label className="pm-label">Email Address *</label>
                  <input type="email" className="pm-input" required placeholder="your.email@example.com" />
                </div>
                <div className="pm-form-group">
                  <label className="pm-label">Contact Number *</label>
                  <input type="tel" className="pm-input" required placeholder="+977-98XXXXXXXX" />
                </div>
                <div className="pm-form-group">
                  <label className="pm-label">Highest Qualification *</label>
                  <select className="pm-input" required>
                    <option value="">Select Qualification</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD / Doctorate</option>
                  </select>
                </div>
                <div className="pm-form-group">
                  <label className="pm-label">Class Expertise *</label>
                  <select className="pm-input" required>
                    <option value="">Select Class</option>
                    <option value="class-10">SEE Class 10</option>
                    <option value="class-11">NEB Class 11</option>
                    <option value="class-12">NEB Class 12</option>
                  </select>
                </div>
                <div className="pm-form-group">
                  <label className="pm-label">Subject Expertise *</label>
                  <select className="pm-input" required>
                    <option value="">Select Subject</option>
                    <option value="math">Compulsory Mathematics</option>
                    <option value="opt-math">Optional Mathematics</option>
                    <option value="science">Science & Technology / Physics / Chem</option>
                    <option value="english">Compulsory English</option>
                    <option value="nepali">Compulsory Nepali</option>
                  </select>
                </div>
                <div className="pm-form-group pm-form-col-2">
                  <label className="pm-label">Upload CV (PDF / JPG / PNG max 5MB) *</label>
                  <input type="file" className="pm-input" required accept=".pdf,.jpg,.jpeg,.png" style={{ paddingTop: '8px' }} />
                </div>
                <div className="pm-form-group pm-form-col-2">
                  <label className="pm-label">Why should we hire you? *</label>
                  <textarea
                    className="pm-input"
                    rows={4}
                    required
                    placeholder="Briefly describe your teaching experience, methodology, and motivation..."
                  />
                </div>
                <div className="pm-form-col-2" style={{ textAlign: 'right' }}>
                  <button type="submit" className="pm-btn pm-btn-primary" style={{ padding: '12px 32px' }}>
                    Submit Tutor Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

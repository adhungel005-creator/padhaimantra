import React, { useState } from 'react';

export default function MockTestsPage({ navigate }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <main className="pm-page-content">
      <div className="pm-container">
        {/* Breadcrumb */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">Mock Tests</span>
        </nav>

        {/* Page Header */}
        <div className="pm-page-header">
          <div className="pm-badge pm-badge-amber" style={{ marginBottom: '8px' }}>CDC Pattern Test Engine</div>
          <h1 className="pm-page-title">Mock Tests & Exam Simulations</h1>
          <p className="pm-page-subtitle">
            Practice with timed online mock tests built strictly according to CDC SEE and NEB board examination specifications. Track accuracy, speed, and topic weak points.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="pm-mock-metrics">
          <div className="pm-metric-item">
            <strong>8+</strong>
            <span>Active Mock Sets</span>
          </div>
          <div className="pm-metric-item">
            <strong>100%</strong>
            <span>Board Pattern Aligned</span>
          </div>
          <div className="pm-metric-item">
            <strong>Instant</strong>
            <span>Detailed Score & Analytics</span>
          </div>
        </div>

        {/* Interactive Sample Question Preview Card */}
        <div className="pm-mock-preview-container">
          <div className="pm-mock-preview-header">
            <span className="pm-badge pm-badge-primary">Sample Test Question Preview</span>
            <span style={{ fontSize: '0.8125rem', color: '#64748B' }}>SEE Compulsory Science • Question 1 of 20</span>
          </div>

          <div className="pm-sample-question-card">
            <p className="pm-question-text">
              <strong>Q:</strong> Which of the following phenomena explains the twinkling of stars in the night sky?
            </p>
            <div className="pm-options-list">
              {[
                { id: 'A', text: 'Atmospheric reflection of starlight' },
                { id: 'B', text: 'Atmospheric refraction of starlight' },
                { id: 'C', text: 'Total internal reflection of light' },
                { id: 'D', text: 'Dispersion of light by water droplets' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`pm-option-item ${selectedOption === opt.id ? 'selected' : ''}`}
                  onClick={() => setSelectedOption(opt.id)}
                >
                  <span className="pm-opt-letter">{opt.id}</span>
                  <span>{opt.text}</span>
                </button>
              ))}
            </div>

            <div style={{ marginTop: '16px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="pm-btn pm-btn-secondary"
                disabled={!selectedOption}
                onClick={() => setShowAnswer(true)}
              >
                Check Answer
              </button>
              {showAnswer && (
                <div style={{ fontSize: '0.9rem', color: selectedOption === 'B' ? '#059669' : '#DC2626', fontWeight: 600 }}>
                  {selectedOption === 'B' ? '✓ Correct! Atmospheric refraction bends light continuously.' : '✗ Incorrect. The correct answer is B.'}
                </div>
              )}
            </div>
          </div>

          {/* Test Unlock CTA */}
          <div className="pm-test-cta-box">
            <h3>Ready to Test Your Real Preparation Level?</h3>
            <p>
              Take our free diagnostic assessment test or enroll in a batch for complete subject test series with ranking leaderboard.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
              <button
                type="button"
                className="pm-btn pm-btn-primary"
                onClick={() => navigate('register')}
              >
                Try a Free Test Now →
              </button>
              <button
                type="button"
                className="pm-btn pm-btn-outline"
                onClick={() => navigate('courses')}
              >
                View Batch Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

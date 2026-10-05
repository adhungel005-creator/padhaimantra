import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export default function ScholarshipsPage({ navigate }) {
  const [filter, setFilter] = useState('all');

  const filteredScholarships = siteData.scholarships.filter((s) => {
    if (filter === 'active') return !s.isExpired;
    if (filter === 'expired') return s.isExpired;
    return true;
  });

  return (
    <main className="pm-page-content">
      <div className="pm-container">
        {/* Breadcrumb */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">Scholarships</span>
        </nav>

        {/* Page Header */}
        <div className="pm-page-header">
          <div className="pm-badge pm-badge-amber" style={{ marginBottom: '8px' }}>Partner College Aid</div>
          <h1 className="pm-page-title">Merit & Entrance Scholarships</h1>
          <p className="pm-page-subtitle">
            Padhai Mantra collaborates with leading Nepali colleges to grant financial aid, entrance fee waivers, and academic excellence scholarships to deserving SEE graduates.
          </p>
        </div>

        {/* 3-Step How to Apply Strip */}
        <div className="pm-apply-steps-strip">
          <div className="pm-apply-step">
            <span className="pm-step-circle">1</span>
            <div>
              <strong>Explore Schemes</strong>
              <p>Compare scholarship criteria, deadlines, and partner college programs.</p>
            </div>
          </div>
          <div className="pm-apply-step">
            <span className="pm-step-circle">2</span>
            <div>
              <strong>Submit Application</strong>
              <p>Fill out the verified Google Form application with your SEE GPA and details.</p>
            </div>
          </div>
          <div className="pm-apply-step">
            <span className="pm-step-circle">3</span>
            <div>
              <strong>Verification & Award</strong>
              <p>College committee reviews credentials and communicates scholarship confirmation.</p>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="pm-filter-bar" style={{ marginTop: 'var(--sp-6)' }}>
          <div className="pm-filter-chips">
            <button
              type="button"
              className={`pm-filter-chip ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Programs ({siteData.scholarships.length})
            </button>
            <button
              type="button"
              className={`pm-filter-chip ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              Active Programs (2)
            </button>
            <button
              type="button"
              className={`pm-filter-chip ${filter === 'expired' ? 'active' : ''}`}
              onClick={() => setFilter('expired')}
            >
              Past Programs (2)
            </button>
          </div>
        </div>

        {/* 4-Column Responsive Scholarships Grid */}
        <div className="pm-scholarships-grid">
          {filteredScholarships.map((s) => (
            <article key={s.id} className="pm-scholarship-card">
              <div className="pm-scholarship-header">
                {s.isExpired ? (
                  <span className="pm-badge pm-badge-expired">Expired</span>
                ) : (
                  <span className="pm-badge pm-badge-green">Closing Soon</span>
                )}
                <span className="pm-applied-count">{s.appliedCount}</span>
              </div>

              <h2 className="pm-scholarship-title">{s.institution}</h2>

              <ul className="pm-scholarship-perks">
                {s.features.map((f, idx) => (
                  <li key={idx}><span>✓</span> {f}</li>
                ))}
              </ul>

              <div className="pm-scholarship-footer">
                <div>
                  <div className="pm-scholarship-val">{s.amount}</div>
                  <div className={`pm-scholarship-date ${s.isExpired ? 'expired' : ''}`}>
                    Valid till {s.validity}
                  </div>
                </div>

                <a
                  href={s.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pm-btn ${s.isExpired ? 'pm-btn-disabled' : 'pm-btn-primary'}`}
                  style={{ padding: '8px 14px', fontSize: '0.85rem' }}
                >
                  <span>{s.isExpired ? 'Closed' : 'Apply Now'}</span>
                  {!s.isExpired && <span style={{ fontSize: '0.8rem', marginLeft: '4px' }}>↗</span>}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

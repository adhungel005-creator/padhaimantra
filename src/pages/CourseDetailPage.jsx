import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export default function CourseDetailPage({ navigate }) {
  const [activeTab, setActiveTab] = useState('subjects');
  const [selectedPlan, setSelectedPlan] = useState('12m');

  return (
    <main className="pm-page-content" style={{ paddingBottom: '90px' }}>
      <div className="pm-container">
        {/* Breadcrumb */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <a href="#courses" onClick={(e) => { e.preventDefault(); navigate('courses'); }}>Courses</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">SEE Class 10: Apex Batch 2083</span>
        </nav>

        {/* Course Hero */}
        <div className="pm-course-hero">
          <div className="pm-course-hero-content">
            <div className="pm-course-hero-meta">
              <span className="pm-badge pm-badge-amber">SEE Class 10</span>
              <span className="pm-badge pm-badge-primary">Apex Batch 2083</span>
              <span className="pm-badge pm-badge-green">Admissions Open</span>
            </div>
            <h1 className="pm-course-hero-title">SEE Class 10: Apex Batch 2083</h1>
            <p className="pm-course-hero-desc">
              Complete exam-oriented online preparation course designed for SEE students across Nepal. Learn from certified expert educators, practice with regular mock test series, and get 24/7 doubt resolution in our private Discord community.
            </p>
            <div className="pm-course-highlights">
              <div className="pm-highlight-pill">
                <strong>Target:</strong> SEE 2083 Candidates
              </div>
              <div className="pm-highlight-pill">
                <strong>Schedule:</strong> Daily Live 07:45 PM
              </div>
              <div className="pm-highlight-pill">
                <strong>Language:</strong> Nepali & English
              </div>
              <div className="pm-highlight-pill">
                <strong>Format:</strong> Live + Recorded Backup
              </div>
            </div>
          </div>
          <div className="pm-course-hero-sidebar">
            <div className="pm-video-preview-card">
              <img
                src="/assets/apex-batch.jpg"
                alt="SEE Class 10 Apex Batch 2083"
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
              />
              <div style={{ padding: '16px', background: '#FFFFFF', borderRadius: '0 0 10px 10px' }}>
                <a
                  href="https://www.youtube.com/@padhaimantra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pm-btn pm-btn-secondary"
                  style={{ width: '100%', marginBottom: '10px' }}
                >
                  ▶ Play Demo Video
                </a>
                <div style={{ fontSize: '0.8rem', color: '#64748B', textAlign: 'center' }}>
                  Includes free sample lectures & orientation notes
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main 2-Column Body */}
        <div className="pm-course-layout">
          {/* Left Column: Tabs & Syllabus */}
          <div className="pm-course-main">
            {/* Horizontally scrollable mobile tabs */}
            <div className="pm-tabs-bar" role="tablist">
              <button
                type="button"
                className={`pm-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                type="button"
                className={`pm-tab-btn ${activeTab === 'subjects' ? 'active' : ''}`}
                onClick={() => setActiveTab('subjects')}
              >
                Subjects & Syllabus
              </button>
              <button
                type="button"
                className={`pm-tab-btn ${activeTab === 'instructors' ? 'active' : ''}`}
                onClick={() => setActiveTab('instructors')}
              >
                Instructors
              </button>
              <button
                type="button"
                className={`pm-tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews & Results
              </button>
            </div>

            {/* Tab: Overview */}
            {activeTab === 'overview' && (
              <div className="pm-tab-pane">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Course Overview</h3>
                <p style={{ lineHeight: '1.7', color: '#334155', marginBottom: '16px' }}>
                  The Apex Batch is Padhai Mantra's flagship SEE preparation curriculum. Tailored specifically for Class 10 students aiming for 3.6 to 4.0 GPA, the course covers the entire Curriculum Development Centre (CDC) syllabus with intensive problem-solving drills and model question analysis.
                </p>
                <div className="pm-features-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                  <div className="pm-feature-box">
                    <strong>Daily Live Classes:</strong> Real-time sessions with interactive Q&A.
                  </div>
                  <div className="pm-feature-box">
                    <strong>Recorded Archives:</strong> Re-watch any missed class anytime on mobile or web.
                  </div>
                  <div className="pm-feature-box">
                    <strong>Discord Community:</strong> Engage directly with mentors and peer study groups.
                  </div>
                  <div className="pm-feature-box">
                    <strong>Offline Accessible PDFs:</strong> Chapter notes, formula cheat-sheets, and solutions.
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Subjects & Syllabus (Redesigned with title on line 1, clean meta on line 2) */}
            {activeTab === 'subjects' && (
              <div className="pm-tab-pane">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Included Subjects & Modules</h3>
                  <span style={{ fontSize: '0.875rem', color: '#64748B' }}>11 Modules Available</span>
                </div>
                <div className="pm-subjects-accordion">
                  {siteData.subjects.map((subj, idx) => (
                    <div key={idx} className="pm-subject-row">
                      <div className="pm-subject-left">
                        <span className="pm-subject-index">{idx + 1}</span>
                        <div>
                          <div className={`pm-subject-name ${subj.nepali ? 'nepali-text' : ''}`}>
                            {subj.title} {subj.subtitle ? `(${subj.subtitle})` : ''}
                          </div>
                          <div className="pm-subject-submeta">
                            <span>⏱️ {subj.duration}</span>
                            <span>•</span>
                            <span>📚 {subj.lectures}</span>
                          </div>
                        </div>
                      </div>
                      <span className="pm-subject-tag">Module Ready</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Instructors */}
            {activeTab === 'instructors' && (
              <div className="pm-tab-pane">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Lead Instructors</h3>
                <div className="pm-tutor-profile">
                  <div className="pm-tutor-avatar">AS</div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '1.1rem' }}>Dr. Anurag Silwal</h4>
                    <div style={{ fontSize: '0.85rem', color: '#125BCC', fontWeight: 600, marginBottom: '6px' }}>Founder & Academic Director</div>
                    <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      With 6+ years of dedicated SEE teaching experience and a thriving YouTube community of 190K+ students, Anurag sir founded Padhai Mantra to revolutionize SEE preparation across Nepal through concept-first learning.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Reviews */}
            {activeTab === 'reviews' && (
              <div className="pm-tab-pane">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Student Reviews & Feedback</h3>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {siteData.testimonials.slice(0, 2).map((t) => (
                    <div key={t.id} style={{ background: '#F8FAFC', padding: '16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <strong>{t.author}</strong>
                        <span style={{ color: '#F59E0B' }}>★★★★★</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#125BCC', marginBottom: '6px' }}>{t.meta}</div>
                      <p style={{ fontSize: '0.875rem', color: '#475569', margin: 0 }}>{t.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Pricing & Live Widget Sidebar */}
          <div className="pm-course-sidebar">
            {/* Choose Learning Plan */}
            <div className="pm-pricing-box">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', textAlign: 'center' }}>Choose Your Learning Plan</h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748B', textAlign: 'center', marginBottom: '16px' }}>
                Select the plan that suits your board examination timeline
              </p>

              <div className="pm-plans-container">
                {/* 3 Months Plan */}
                <div
                  className={`pm-plan-card ${selectedPlan === '3m' ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan('3m')}
                >
                  <div className="pm-plan-header">
                    <strong>3 Months</strong>
                    <span className="pm-plan-sub">Revision Access</span>
                  </div>
                  <div className="pm-plan-price">Rs. 1,999.00</div>
                  <div className="pm-plan-savings">Save Rs. 1,000.00</div>
                  <div className="pm-plan-select-indicator">
                    {selectedPlan === '3m' ? '● Selected' : '○ Select'}
                  </div>
                </div>

                {/* 12 Months Plan (Best Value) */}
                <div
                  className={`pm-plan-card best-value ${selectedPlan === '12m' ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan('12m')}
                >
                  <div className="pm-plan-badge-value">BEST VALUE</div>
                  <div className="pm-plan-header">
                    <strong>12 Months</strong>
                    <span className="pm-plan-sub">Full Course Access</span>
                  </div>
                  <div className="pm-plan-price">Rs. 3,999.00</div>
                  <div className="pm-plan-savings">Save Rs. 4,000.00</div>
                  <div className="pm-plan-select-indicator">
                    {selectedPlan === '12m' ? '● Selected' : '○ Select'}
                  </div>
                </div>
              </div>

              {/* Plan Inclusions Checklist */}
              <ul className="pm-plan-checklist">
                <li><span>✓</span> Daily Live Classes</li>
                <li><span>✓</span> Recorded Sessions Backup</li>
                <li><span>✓</span> Weekly MCQ Tests</li>
                <li><span>✓</span> PDF Notes & Chapter Banks</li>
                <li><span>✓</span> Discord Community Doubts</li>
              </ul>

              <button
                type="button"
                className="pm-btn pm-btn-primary"
                style={{ width: '100%', padding: '12px 20px', fontSize: '1rem', marginTop: '16px' }}
                onClick={() => navigate('register')}
              >
                Start Learning Today →
              </button>
            </div>

            {/* Dedicated Live Class Schedule Widget */}
            <div className="pm-schedule-widget">
              <div className="pm-schedule-header">
                <span className="pm-badge-live">LIVE SCHEDULE</span>
                <span style={{ fontSize: '0.8rem', color: '#64748B' }}>By SK Sir</span>
              </div>
              <h4 style={{ margin: '8px 0 4px', fontSize: '0.95rem' }}>Class-10 (SEE): Accounts (Demo)</h4>
              <div className="pm-schedule-time">
                <span>📅 Monday</span>
                <span>⏰ 07:45 PM – 09:00 PM</span>
              </div>
              <button
                type="button"
                className="pm-btn pm-btn-outline"
                style={{ width: '100%', marginTop: '12px', fontSize: '0.85rem' }}
                onClick={() => navigate('register')}
              >
                Enroll to Access Live Class
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Enrollment Bar */}
      <div className="pm-mobile-sticky-bar">
        <div>
          <div style={{ fontSize: '0.75rem', color: '#64748B' }}>SEE Apex Batch</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#125BCC' }}>Rs. 1,999/-</div>
        </div>
        <button
          type="button"
          className="pm-btn pm-btn-primary"
          style={{ padding: '8px 20px' }}
          onClick={() => navigate('register')}
        >
          Enroll Now
        </button>
      </div>
    </main>
  );
}

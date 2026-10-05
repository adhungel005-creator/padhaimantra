import React from 'react';
import { siteData } from '../data/siteData';

export default function CourseCategoryPage({ navigate }) {
  const seeCourse = siteData.courses.find((c) => c.category === 'class-10');

  return (
    <main className="pm-page-content">
      <div className="pm-container">
        {/* Breadcrumb */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <a href="#courses" onClick={(e) => { e.preventDefault(); navigate('courses'); }}>Courses</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">Class 10</span>
        </nav>

        {/* Category Header */}
        <div className="pm-page-header">
          <div className="pm-badge pm-badge-amber" style={{ marginBottom: '8px' }}>Targeted SEE Batches</div>
          <h1 className="pm-page-title">Class 10 (SEE) Preparation Courses</h1>
          <p className="pm-page-subtitle">
            Expert-led board preparation courses covering Mathematics, Science, English, Nepali, Social Studies and Optional subjects for Secondary Education Examination (SEE).
          </p>
        </div>

        {/* Filter Bar with Class 10 highlighted */}
        <div className="pm-filter-bar">
          <div className="pm-filter-chips">
            <button type="button" className="pm-filter-chip" onClick={() => navigate('courses')}>All</button>
            <button type="button" className="pm-filter-chip active">Class 10</button>
            <button type="button" className="pm-filter-chip" onClick={() => navigate('courses')}>Class 11</button>
            <button type="button" className="pm-filter-chip" onClick={() => navigate('courses')}>Class 12</button>
          </div>
          <div className="pm-search-box">
            <input type="text" className="pm-input" placeholder="Search Class 10 courses..." style={{ width: '220px', minHeight: '38px', padding: '6px 12px' }} />
          </div>
        </div>

        {/* Balanced 2-Column Grid solving single-course empty space */}
        <div className="pm-category-featured-grid">
          {/* Main Course Card */}
          {seeCourse && (
            <article className="pm-course-card" style={{ height: 'auto' }}>
              <div className="pm-course-thumb" style={{ height: '230px' }}>
                <div className="pm-course-badge-top">
                  <span className="pm-badge pm-badge-amber">{seeCourse.badge}</span>
                </div>
                <img src={seeCourse.image} alt={seeCourse.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="pm-course-content">
                <div className="pm-course-category">{seeCourse.grade}</div>
                <h2 className="pm-course-title" style={{ fontSize: '1.35rem' }}>{seeCourse.title}</h2>
                <p className="pm-course-desc">{seeCourse.description}</p>
                <div className="pm-course-features">
                  {seeCourse.features.map((f, idx) => (
                    <span key={idx} className="pm-badge pm-badge-primary">{f}</span>
                  ))}
                </div>
                <div className="pm-course-footer" style={{ marginTop: 'var(--sp-4)' }}>
                  <div className="pm-course-price-lockup">
                    <span className="pm-course-price-orig">{seeCourse.origPrice}</span>
                    <span className="pm-course-price-curr">{seeCourse.currPrice}</span>
                  </div>
                  <button
                    type="button"
                    className="pm-btn pm-btn-primary"
                    style={{ padding: '10px 22px' }}
                    onClick={() => navigate('course-detail')}
                  >
                    View Batch & Enroll
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* Academic Counseling & Syllabus Card */}
          <div className="pm-category-counseling-card">
            <div className="pm-badge pm-badge-primary" style={{ marginBottom: '12px' }}>Academic Counseling</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#0F172A' }}>Need Help Deciding Your SEE Preparation Plan?</h3>
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
              Our academic counselors are available on WhatsApp to answer questions about batch timing, live class schedules, subject-wise curriculum, and Discord study groups.
            </p>
            <div className="pm-counseling-highlights">
              <div className="pm-counseling-item">
                <span className="pm-counseling-check">✓</span>
                <span>Full syllabus coverage for Compulsory & Optional subjects</span>
              </div>
              <div className="pm-counseling-item">
                <span className="pm-counseling-check">✓</span>
                <span>Regular mock tests modeled after CDC board exam pattern</span>
              </div>
              <div className="pm-counseling-item">
                <span className="pm-counseling-check">✓</span>
                <span>Weekly live masterclasses with previous 4.0 GPA achievers</span>
              </div>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/9779705849944"
                target="_blank"
                rel="noopener noreferrer"
                className="pm-btn pm-btn-primary"
                style={{ background: '#25D366', borderColor: '#25D366' }}
              >
                <span>Chat on WhatsApp</span>
              </a>
              <button
                type="button"
                className="pm-btn pm-btn-outline"
                onClick={() => navigate('contact')}
              >
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

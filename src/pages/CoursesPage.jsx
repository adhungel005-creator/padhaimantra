import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export default function CoursesPage({ navigate }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredCourses = siteData.courses.filter((course) => {
    const matchesFilter = filter === 'all' || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) ||
                          course.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="pm-page-content">
      <div className="pm-container">
        {/* Breadcrumb */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">Courses</span>
        </nav>

        {/* Page Header (Brief: Add short page header) */}
        <div className="pm-page-header">
          <h1 className="pm-page-title">Courses for SEE, Class 11 & 12</h1>
          <p className="pm-page-subtitle">
            Comprehensive curriculum programs with daily live classes, recorded lecture backups, and exam-focused mock test series.
          </p>
        </div>

        {/* Unified Filter & Search Bar */}
        <div className="pm-filter-bar">
          <div className="pm-filter-chips">
            <button
              type="button"
              className={`pm-filter-chip ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Courses
            </button>
            <button
              type="button"
              className={`pm-filter-chip ${filter === 'class-10' ? 'active' : ''}`}
              onClick={() => { setFilter('class-10'); navigate('course-category'); }}
            >
              Class 10
            </button>
            <button
              type="button"
              className={`pm-filter-chip ${filter === 'class-11' ? 'active' : ''}`}
              onClick={() => setFilter('class-11')}
            >
              Class 11
            </button>
            <button
              type="button"
              className={`pm-filter-chip ${filter === 'class-12' ? 'active' : ''}`}
              onClick={() => setFilter('class-12')}
            >
              Class 12
            </button>
          </div>

          <div className="pm-search-box">
            <input
              type="text"
              className="pm-input"
              placeholder="Search for courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '220px', minHeight: '38px', padding: '6px 12px', fontSize: '0.875rem' }}
            />
            {search && (
              <button
                type="button"
                className="pm-btn pm-btn-outline"
                style={{ minHeight: '38px', padding: '6px 12px', fontSize: '0.8125rem' }}
                onClick={() => setSearch('')}
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* 3-Column Equal Height Course Cards */}
        <div className="pm-courses-grid">
          {filteredCourses.map((course) => (
            <article key={course.id} className="pm-course-card">
              <div className="pm-course-thumb">
                <div className="pm-course-badge-top">
                  <span className={`pm-badge pm-badge-${course.badgeType}`}>{course.badge}</span>
                </div>
                {course.image ? (
                  <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <svg width="100%" height="100%" viewBox="0 0 360 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="360" height="202" fill="#1E293B" />
                    <circle cx="280" cy="100" r="70" fill="#D97706" opacity="0.3" />
                    <text x="24" y="60" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="18" fill="#F87171">CLASS 11 (SCIENCE):</text>
                    <text x="24" y="90" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="24" fill="#FFFFFF">IGNITE 2083</text>
                    <text x="24" y="130" fontFamily="Inter, sans-serif" fontSize="12" fill="#CBD5E1">Physics, Chemistry, Maths & Biology Focus</text>
                  </svg>
                )}
              </div>
              <div className="pm-course-content">
                <div className="pm-course-category">{course.grade}</div>
                <h2 className="pm-course-title">
                  <a href="#details" onClick={(e) => { e.preventDefault(); navigate('course-detail'); }} style={{ color: 'inherit' }}>
                    {course.title}
                  </a>
                </h2>
                <p className="pm-course-desc">{course.description}</p>
                <div className="pm-course-features">
                  {course.features.map((f, idx) => (
                    <span key={idx} className="pm-badge pm-badge-primary">{f}</span>
                  ))}
                </div>
                <div className="pm-course-footer">
                  <div className="pm-course-price-lockup">
                    {course.origPrice ? (
                      <span className="pm-course-price-orig">{course.origPrice}</span>
                    ) : (
                      <span className="pm-course-price-orig" style={{ visibility: 'hidden' }}>—</span>
                    )}
                    <span className={`pm-course-price-curr ${course.isFree ? 'free' : ''}`}>{course.currPrice}</span>
                  </div>
                  <button
                    type="button"
                    className="pm-btn pm-btn-primary"
                    style={{ padding: '9px 18px', minHeight: '42px', fontSize: '0.875rem' }}
                    onClick={() => navigate('course-detail')}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

import React, { useState } from 'react';

export default function LiveClassesPage({ navigate }) {
  const [selectedGrade, setSelectedGrade] = useState('all');

  const weeklySchedule = [
    {
      id: 1,
      day: 'Monday',
      time: '07:45 PM – 09:00 PM',
      grade: 'class-10',
      gradeLabel: 'SEE Class 10',
      subject: 'Compulsory Mathematics',
      topic: 'Quadratic Equations & Graph Analysis',
      instructor: 'SK Sir',
      isDemo: true,
      status: 'Live Today'
    },
    {
      id: 2,
      day: 'Tuesday',
      time: '07:45 PM – 09:00 PM',
      grade: 'class-10',
      gradeLabel: 'SEE Class 10',
      subject: 'Science & Technology',
      topic: 'Force, Gravity & Numerical Problem Solving',
      instructor: 'Dr. Anurag Silwal',
      isDemo: false,
      status: 'Tomorrow'
    },
    {
      id: 3,
      day: 'Wednesday',
      time: '07:45 PM – 09:00 PM',
      grade: 'class-11',
      gradeLabel: 'Class 11 Science',
      subject: 'Physics (Mechanics)',
      topic: 'Newton’s Laws of Motion & Friction Dynamics',
      instructor: 'Senior Physics Lead',
      isDemo: false,
      status: 'Upcoming'
    },
    {
      id: 4,
      day: 'Thursday',
      time: '07:45 PM – 09:00 PM',
      grade: 'class-10',
      gradeLabel: 'SEE Class 10',
      subject: 'Social Studies (सामाजिक अध्ययन)',
      topic: 'Nepal ko Sambidhan ra Nagarik Adhikar',
      instructor: 'Department Lead',
      isDemo: true,
      status: 'Demo Open'
    },
    {
      id: 5,
      day: 'Friday',
      time: '07:45 PM – 09:00 PM',
      grade: 'class-10',
      gradeLabel: 'SEE Class 10',
      subject: 'Optional Mathematics',
      topic: 'Trigonometric Transformations & Compound Angles',
      instructor: 'SK Sir',
      isDemo: false,
      status: 'Upcoming'
    },
    {
      id: 6,
      day: 'Saturday',
      time: '04:00 PM – 06:00 PM',
      grade: 'all',
      gradeLabel: 'SEE & NEB Special',
      subject: 'Toppers Masterclass & Doubt Marathon',
      topic: '4.0 GPA Strategy Session & Weekly Open Q&A',
      instructor: 'Dr. Anurag Silwal & 4.0 GPA Achievers',
      isDemo: true,
      status: 'Weekly Special'
    }
  ];

  const filteredSchedule = weeklySchedule.filter(
    (item) => selectedGrade === 'all' || item.grade === selectedGrade || item.grade === 'all'
  );

  return (
    <main className="pm-page-content">
      <div className="pm-container">
        {/* Breadcrumb Navigation */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">Live Classes</span>
        </nav>

        {/* Page Header (Unified H1 with Live Status) */}
        <div className="pm-page-header" style={{ borderBottom: 'none', paddingBottom: 0 }}>
          <div className="pm-live-header-badge">
            <span className="pm-pulse-dot" />
            <span>Interactive Evening Batches • 07:45 PM NST</span>
          </div>
          <h1 className="pm-page-title">Live Interactive Classes</h1>
          <p className="pm-page-desc">
            Experience real-time interactive lectures taught by Nepal's expert faculty. Join scheduled evening sessions, clear your doubts live via chat and voice, and review automated HD cloud recordings anytime.
          </p>
        </div>

        {/* Live Classroom Showcase: Solves the orphan lock empty state defect */}
        <section className="pm-live-showcase" aria-label="Live Class Preview">
          <div className="pm-live-player-preview">
            <div className="pm-player-topbar">
              <span className="pm-badge-live" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span className="pm-pulse-dot" style={{ background: '#FFFFFF' }} /> LIVE SESSION
              </span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(0,0,0,0.5)', padding: '3px 10px', borderRadius: '12px' }}>
                👥 1,240 Students Online
              </span>
            </div>

            <div className="pm-player-center">
              <div className="pm-player-instructor-badge">👨‍🏫</div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '6px', fontWeight: 800 }}>
                Compulsory Mathematics: Trigonometry & Circle Theorems
              </h4>
              <p style={{ color: '#CBD5E1', fontSize: '0.875rem', maxWidth: '440px', margin: '0 auto' }}>
                Led by <strong>SK Sir</strong> • Apex Batch 2083 Session
              </p>
            </div>

            <div className="pm-player-bottombar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#10B981', fontWeight: 700 }}>● HD 1080p</span>
                <span style={{ color: '#94A3B8' }}>| Two-way Audio Active</span>
              </div>
              <span style={{ color: '#F59E0B', fontWeight: 600, fontSize: '0.75rem' }}>
                Free Demo Stream Preview
              </span>
            </div>
          </div>

          <div className="pm-live-info-panel">
            <div>
              <span className="pm-badge pm-badge-amber" style={{ marginBottom: '8px' }}>
                Today's Featured Session
              </span>
              <h3>Class 10 (SEE): Accounts & Maths (Demo) LIVE</h3>
              <p style={{ color: 'var(--pm-slate-600)', fontSize: '0.90625rem', lineHeight: 1.5 }}>
                Get a front-row seat to Padhai Mantra's live teaching methodology. Watch real examples, step-by-step CDC syllabus breakdown, and live doubt resolution.
              </p>

              <div className="pm-live-schedule-meta">
                <div className="pm-meta-row">
                  <span>Batch:</span>
                  <strong>SEE 2083 Apex Batch</strong>
                </div>
                <div className="pm-meta-row">
                  <span>Schedule:</span>
                  <strong>Monday – Friday, 07:45 PM – 09:00 PM</strong>
                </div>
                <div className="pm-meta-row">
                  <span>Language:</span>
                  <strong>Nepali & English (नेपाली र अंग्रेजी)</strong>
                </div>
                <div className="pm-meta-row">
                  <span>Access:</span>
                  <span className="pm-badge pm-badge-green" style={{ fontSize: '0.7rem' }}>Free Demo Permitted</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                type="button"
                className="pm-btn pm-btn-primary"
                style={{ width: '100%' }}
                onClick={() => navigate('course-detail')}
              >
                <span>Enroll in Batch for Full Access →</span>
              </button>
              <button
                type="button"
                className="pm-btn pm-btn-outline"
                style={{ width: '100%' }}
                onClick={() => navigate('register')}
              >
                <span>Create Free Student Account</span>
              </button>
            </div>
          </div>
        </section>

        {/* Weekly Live Class Timetable */}
        <section className="pm-timetable-container" aria-label="Weekly Timetable">
          <div className="pm-timetable-header">
            <div>
              <h2>Weekly Live Timetable</h2>
              <span style={{ fontSize: '0.875rem', color: 'var(--pm-slate-600)' }}>
                Structured evening schedule designed to fit school hours
              </span>
            </div>

            {/* Filter Chips */}
            <div className="pm-filter-chips">
              <button
                type="button"
                className={`pm-filter-chip ${selectedGrade === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedGrade('all')}
              >
                All Classes
              </button>
              <button
                type="button"
                className={`pm-filter-chip ${selectedGrade === 'class-10' ? 'active' : ''}`}
                onClick={() => setSelectedGrade('class-10')}
              >
                SEE Class 10
              </button>
              <button
                type="button"
                className={`pm-filter-chip ${selectedGrade === 'class-11' ? 'active' : ''}`}
                onClick={() => setSelectedGrade('class-11')}
              >
                Class 11 Science
              </button>
            </div>
          </div>

          <div className="pm-schedule-grid">
            {filteredSchedule.map((item) => (
              <div key={item.id} className="pm-schedule-row-card">
                <div className="pm-sched-day">
                  <strong>{item.day}</strong>
                  <span className="pm-sched-time">{item.time}</span>
                  <span style={{ fontSize: '0.7rem', color: '#64748B' }}>{item.gradeLabel}</span>
                </div>

                <div className="pm-sched-details">
                  <div className="pm-sched-subject">{item.subject}</div>
                  <div style={{ fontSize: '0.84375rem', color: 'var(--pm-slate-700)', fontWeight: 500 }}>
                    Topic: {item.topic}
                  </div>
                  <div className="pm-sched-tutor">Instructor: {item.instructor}</div>
                </div>

                <div className="pm-sched-status">
                  {item.isDemo ? (
                    <span className="pm-badge pm-badge-green">Free Demo Open</span>
                  ) : (
                    <span className="pm-badge pm-badge-primary">🔒 Enrolled Batch</span>
                  )}
                </div>

                <div style={{ textAlign: 'right' }}>
                  <button
                    type="button"
                    className={`pm-btn ${item.isDemo ? 'pm-btn-secondary' : 'pm-btn-outline'}`}
                    style={{ padding: '8px 16px', minHeight: '38px', fontSize: '0.8125rem' }}
                    onClick={() => navigate(item.isDemo ? 'course-detail' : 'courses')}
                  >
                    {item.isDemo ? 'Join Free Demo' : 'Enroll to Access'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Solution to Brief Defect: Elegant Unlock Callout instead of raw full-screen lock */}
          <div className="pm-unlock-callout">
            <div className="pm-unlock-icon">🔓</div>
            <div className="pm-unlock-content">
              <h3>Unlock Unlimited Live Classes & Daily Doubts</h3>
              <p>
                Enroll in any Padhai Mantra course to get unlimited access to all live interactive lectures, teacher annotated PDF notes, weekly mock tests, and our vibrant student community.
              </p>
            </div>
            <button
              type="button"
              className="pm-btn pm-btn-secondary"
              style={{ minHeight: '44px', padding: '10px 22px', fontSize: '0.9375rem', fontWeight: 700 }}
              onClick={() => navigate('courses')}
            >
              Explore Batches & Pricing →
            </button>
          </div>
        </section>

        {/* Why Choose Live Learning with Padhai Mantra */}
        <section style={{ marginBottom: 'var(--sp-8)' }} aria-label="Benefits of Live Learning">
          <div className="pm-section-header" style={{ marginBottom: 'var(--sp-6)' }}>
            <span className="pm-eyebrow">Interactive Advantage</span>
            <h2>Why Learn Live With Padhai Mantra?</h2>
            <p>Designed specifically to prepare students for CDC Nepal board exam success.</p>
          </div>

          <div className="pm-live-perks-grid">
            <div className="pm-perk-card">
              <div className="pm-perk-icon">🎙️</div>
              <h4>Real-Time Two-Way Q&A</h4>
              <p>Ask questions via live microphone or instant text chat. Get step-by-step guidance from senior teachers as each concept is solved on screen.</p>
            </div>
            <div className="pm-perk-card">
              <div className="pm-perk-icon">⚡</div>
              <h4>Automated HD Cloud Replays</h4>
              <p>Missed a live session due to internet issues or power cuts? Recordings are published within an hour, complete with chapter timestamps and PDF slides.</p>
            </div>
            <div className="pm-perk-card">
              <div className="pm-perk-icon">👥</div>
              <h4>24/7 Discord Study Group</h4>
              <p>Never study alone. Enrolled students gain immediate access to dedicated batch Discord channels for collaborative homework problem-solving.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

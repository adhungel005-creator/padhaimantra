import React from 'react';

export default function LiveClassesPage({ navigate }) {
  const schedule = [
    { day: 'Monday', subject: 'C. Mathematics', time: '07:45 PM – 09:00 PM', instructor: 'SK Sir', isDemo: true },
    { day: 'Tuesday', subject: 'Science & Technology', time: '07:45 PM – 09:00 PM', instructor: 'Dr. Anurag Silwal', isDemo: false },
    { day: 'Wednesday', subject: 'Compulsory English', time: '07:45 PM – 09:00 PM', instructor: 'Faculty Lead', isDemo: false },
    { day: 'Thursday', subject: 'Social Studies (सामाजिक अध्ययन)', time: '07:45 PM – 09:00 PM', instructor: 'Department Lead', isDemo: true },
    { day: 'Friday', subject: 'Opt. Mathematics', time: '07:45 PM – 09:00 PM', instructor: 'SK Sir', isDemo: false }
  ];

  return (
    <main className="pm-page-content">
      <div className="pm-container">
        {/* Breadcrumb */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">Live Classes</span>
        </nav>

        {/* Page Header */}
        <div className="pm-page-header">
          <div className="pm-badge pm-badge-live" style={{ marginBottom: '8px' }}>Interactive Daily Sessions</div>
          <h1 className="pm-page-title">Live Interactive Classes</h1>
          <p className="pm-page-subtitle">
            Join scheduled daily evening classes led by Nepal's top educators with live screen sharing, chat Q&A, and real-time concept clarity.
          </p>
        </div>

        {/* Timetable Preview & Unlock Banner */}
        <div className="pm-timetable-container">
          <div className="pm-timetable-header">
            <h3>Weekly Live Class Schedule</h3>
            <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Evening Sessions (Nepal Standard Time)</span>
          </div>

          <div className="pm-schedule-grid">
            {schedule.map((item, idx) => (
              <div key={idx} className="pm-schedule-row-card">
                <div className="pm-sched-day">
                  <strong>{item.day}</strong>
                  <span className="pm-sched-time">{item.time}</span>
                </div>
                <div className="pm-sched-details">
                  <div className="pm-sched-subject">{item.subject}</div>
                  <div className="pm-sched-tutor">Instructor: {item.instructor}</div>
                </div>
                <div className="pm-sched-status">
                  {item.isDemo ? (
                    <span className="pm-badge pm-badge-green">Free Demo Open</span>
                  ) : (
                    <span className="pm-badge pm-badge-outline">🔒 Enrolled Only</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Unlock Live Learning Callout */}
          <div className="pm-unlock-callout">
            <div className="pm-unlock-icon">🔓</div>
            <div className="pm-unlock-content">
              <h3>Unlock Unlimited Live Classes & Daily Doubts</h3>
              <p>
                Get full access to all live interactive streams, video lecture replays, teacher notes, and private Discord rooms.
              </p>
            </div>
            <button
              type="button"
              className="pm-btn pm-btn-primary"
              onClick={() => navigate('courses')}
            >
              Explore Courses & Enroll Now →
            </button>
          </div>
        </div>

        {/* Features of Live Learning */}
        <div className="pm-live-perks-grid">
          <div className="pm-perk-card">
            <div className="pm-perk-icon">🎙️</div>
            <h4>Real-time Two-way Q&A</h4>
            <p>Ask doubts live during the session and get solutions step-by-step from instructors.</p>
          </div>
          <div className="pm-perk-card">
            <div className="pm-perk-icon">💾</div>
            <h4>Automated Cloud Replays</h4>
            <p>Missed a lecture due to power cuts or travel? High-definition recordings are posted within an hour.</p>
          </div>
          <div className="pm-perk-card">
            <div className="pm-perk-icon">💬</div>
            <h4>24/7 Discord Community</h4>
            <p>Connect with peers and teaching assistants anytime outside class hours for question solving.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

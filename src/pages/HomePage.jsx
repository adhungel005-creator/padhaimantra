import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export default function HomePage({ navigate }) {
  const [expandedTestimonials, setExpandedTestimonials] = useState({});
  const [openFaq, setOpenFaq] = useState(1);

  const toggleTestimonial = (id) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <main>
      {/* ==========================================================================
           SECTION 1: UNIFIED HERO
           Merges competing heroes into one clear value prop + CTAs + student image
           ========================================================================== */}
      <section className="pm-hero" id="home">
        <div className="pm-container">
          <div className="pm-hero-grid">
            {/* Left Column: Value Prop, Headline, CTAs, Social Proof */}
            <div className="pm-hero-content">
              <div className="pm-hero-pill">
                <span className="pm-badge-amber" style={{ padding: '2px 8px', fontSize: '0.7rem', borderRadius: '4px' }}>
                  SEE & NEB
                </span>
                <span>Batch 2083 Admissions Open</span>
              </div>

              <h1 className="pm-hero-title">
                Learn Smarter, Score Higher With <span className="highlight">Padhai Mantra</span>
              </h1>

              <p className="pm-hero-subtitle">
                Build strong concepts for SEE Class 10 and prepare confidently for Class 11 & 12 with Padhai Mantra Course Programs. Learn from expert teachers, practice with structured mock tests, and boost your performance with smart, exam-focused guidance.
              </p>

              {/* One Primary CTA + One Secondary CTA */}
              <div className="pm-hero-actions">
                <button
                  type="button"
                  className="pm-btn pm-btn-primary"
                  onClick={() => navigate('courses')}
                >
                  <span>Get Started</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="pm-btn pm-btn-secondary"
                  onClick={() => navigate('mock-tests')}
                >
                  <span>Try a Test</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
              </div>

              {/* Real Social Proof Bar from Brief */}
              <div className="pm-social-proof">
                <div className="pm-avatar-group">
                  <div className="pm-avatar-item" style={{ background: '#DBEAFE', color: '#125BCC' }}>SR</div>
                  <div className="pm-avatar-item" style={{ background: '#FEF3C7', color: '#B45309' }}>IM</div>
                  <div className="pm-avatar-item" style={{ background: '#D1FAE5', color: '#065F46' }}>AS</div>
                  <div className="pm-avatar-item" style={{ background: '#FEE2E2', color: '#991B1B' }}>DS</div>
                </div>
                <div className="pm-proof-text">
                  <strong>33K+ Active Users!</strong><br />
                  <span>Over 190K+ students on YouTube & live batches</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Frame with Student & Dual Floating Badges */}
            <div className="pm-hero-media">
              <div className="pm-hero-card-frame">
                {/* Top-Right Floating YouTube Badge */}
                <div className="pm-hero-floating-tag">
                  <span style={{ color: '#FF0000', fontSize: '1rem' }}>▶</span>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1 }}>190K+ Community</div>
                    <div style={{ fontSize: '0.625rem', color: '#94A3B8' }}>On YouTube</div>
                  </div>
                </div>

                {/* Real Student Image from padhaimantra.com */}
                <img
                  src="/assets/student-hero.png"
                  alt="Student smiling with books - Padhai Mantra"
                  className="pm-hero-student-img"
                />

                {/* Bottom-Left Floating Achievement Card */}
                <div className="pm-hero-card-stat">
                  <div className="pm-hero-stat-badge">★</div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0F172A', lineHeight: 1.2 }}>4.0 GPA Achievers</div>
                    <div style={{ fontSize: '0.6875rem', color: '#64748B' }}>SEE & NEB Topper Mentorship</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           SECTION 2: CURRENT ACADEMIC ANNOUNCEMENTS & PROGRAMS
           Modern, elevated 3-card banner row with icons, badges, and direct actions
           ========================================================================== */}
      <section className="pm-announcements-section" aria-label="Current Offerings">
        <div className="pm-container">
          <div className="pm-announcements-card">
            {/* Item 1: SEE Apex Batch */}
            <div
              className="pm-announce-col"
              onClick={() => navigate('course-detail')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('course-detail')}
            >
              <div className="pm-announce-icon-wrap" style={{ background: '#EEF5FF', color: '#125BCC' }}>
                <span className="pm-announce-emoji">🎯</span>
              </div>
              <div className="pm-announce-body">
                <div className="pm-announce-header">
                  <strong>SEE 2083 Apex Batch</strong>
                  <span className="pm-badge pm-badge-primary" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>Admissions Open</span>
                </div>
                <p className="pm-announce-text">Full syllabus coverage with daily live classes & Discord doubt clearing.</p>
                <span className="pm-announce-link">Explore Batch →</span>
              </div>
            </div>

            <div className="pm-announce-divider" />

            {/* Item 2: Project 4.0 Free Demo */}
            <div
              className="pm-announce-col"
              onClick={() => navigate('courses')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('courses')}
            >
              <div className="pm-announce-icon-wrap" style={{ background: '#FFFBEB', color: '#D97706' }}>
                <span className="pm-announce-emoji">⚡</span>
              </div>
              <div className="pm-announce-body">
                <div className="pm-announce-header">
                  <strong>Project 4.0 (Class 12)</strong>
                  <span className="pm-badge pm-badge-amber" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>Free Demo</span>
                </div>
                <p className="pm-announce-text">Full-year board exam preparation valid until 30th Kartik.</p>
                <span className="pm-announce-link">Join Free Demo →</span>
              </div>
            </div>

            <div className="pm-announce-divider" />

            {/* Item 3: Merit Scholarships */}
            <div
              className="pm-announce-col"
              onClick={() => navigate('scholarships')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('scholarships')}
            >
              <div className="pm-announce-icon-wrap" style={{ background: '#ECFDF5', color: '#059669' }}>
                <span className="pm-announce-emoji">🎓</span>
              </div>
              <div className="pm-announce-body">
                <div className="pm-announce-header">
                  <strong>Partner Scholarships</strong>
                  <span className="pm-badge pm-badge-green" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>Up to Rs. 10K</span>
                </div>
                <p className="pm-announce-text">College entrance fee waiver & merit aid for ambitious SEE achievers.</p>
                <span className="pm-announce-link">View Schemes →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           SECTION 3: COMPACT STATISTICS
           4 across desktop, 2x2 mobile
           ========================================================================== */}
      <section className="pm-stats-section" aria-label="Platform Statistics">
        <div className="pm-container">
          <div className="pm-stat-grid">
            {siteData.stats.map((st) => (
              <div key={st.id} className="pm-stat-card">
                <div style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{st.icon}</div>
                <div className="stat-number">{st.number}</div>
                <div className="stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
           SECTION 4: FEATURED BATCHES
           Equal-height cards with 16:9 thumbnails and pinned bottom CTAs
           ========================================================================== */}
      <section className="pm-section pm-courses-section" id="courses">
        <div className="pm-container">
          <div className="pm-section-header">
            <span className="pm-eyebrow">Academic Programs</span>
            <h2>Featured Batches for SEE & NEB</h2>
            <p>Join focused batches taught by expert educators with daily live classes, Discord study groups, and topper notes.</p>
          </div>

          <div className="pm-courses-grid">
            {siteData.courses.map((course) => (
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
                  <h3 className="pm-course-title">{course.title}</h3>
                  <p className="pm-course-desc">{course.description}</p>

                  <div className="pm-course-features">
                    {course.features.slice(0, 3).map((f, idx) => (
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
                      className={`pm-btn ${course.isFree ? 'pm-btn-secondary' : 'pm-btn-primary'}`}
                      style={{ padding: '8px 16px', minHeight: '40px', fontSize: '0.875rem' }}
                      onClick={() => navigate('course-detail')}
                    >
                      {course.isFree ? 'Enroll Free' : 'Enroll Now'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--sp-6)' }}>
            <button
              type="button"
              className="pm-btn pm-btn-outline"
              onClick={() => navigate('courses')}
            >
              Explore All Courses & Batches
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           SECTION 5: HOW IT WORKS?
           ========================================================================== */}
      <section className="pm-section" aria-label="How Padhai Mantra Works">
        <div className="pm-container">
          <div className="pm-section-header">
            <span className="pm-eyebrow">Seamless Experience</span>
            <h2>How it Works?</h2>
            <p>Learn how to make your education seamless and successful with three simple steps.</p>
          </div>

          <div className="pm-steps-grid">
            <div className="pm-step-card">
              <div className="pm-step-number">01</div>
              <h3 className="pm-step-title">Register</h3>
              <p className="pm-step-desc">Quick form to reserve your seat in the next batch.</p>
            </div>
            <div className="pm-step-card">
              <div className="pm-step-number">02</div>
              <h3 className="pm-step-title">Attend Live</h3>
              <p className="pm-step-desc">Join scheduled live classes with interactive sessions.</p>
            </div>
            <div className="pm-step-card">
              <div className="pm-step-number">03</div>
              <h3 className="pm-step-title">Practice & Improve</h3>
              <p className="pm-step-desc">Take mock tests and review detailed performance reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           SECTION 6: WHAT OUR STUDENTS SAY
           Equal-height cards with 4-line clamping and expandable state
           ========================================================================== */}
      <section className="pm-section pm-section-soft" id="testimonials">
        <div className="pm-container">
          <div className="pm-section-header">
            <span className="pm-eyebrow">Real Achievements</span>
            <h2>What Our Students Say</h2>
            <p>Hear what our learners have to say about Padhai Mantra mentors, classes, and test simulations.</p>
          </div>

          <div className="pm-testimonials-grid">
            {siteData.testimonials.map((testi) => {
              const isExpanded = !!expandedTestimonials[testi.id];
              return (
                <article key={testi.id} className="pm-testimonial-card">
                  <div>
                    <div className="pm-testimonial-header">
                      <div className="pm-testimonial-avatar">{testi.avatarText}</div>
                      <div>
                        <div className="pm-testimonial-author">{testi.author}</div>
                        <div className="pm-testimonial-meta">{testi.meta}</div>
                      </div>
                      <span style={{ fontSize: '0.65rem', color: '#065F46', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '3px 8px', borderRadius: '20px', fontWeight: 700, marginLeft: 'auto' }}>
                        Verified
                      </span>
                    </div>
                    <div className="pm-testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                    <p className={`pm-testimonial-body ${isExpanded ? '' : 'clamped'}`}>
                      {testi.content}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="pm-testimonial-more"
                    onClick={() => toggleTestimonial(testi.id)}
                  >
                    {isExpanded ? 'Show less' : 'Read more'}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================================
           SECTION 7: RECENT NEWS & ARTICLES
           ========================================================================== */}
      <section className="pm-section" id="articles">
        <div className="pm-container">
          <div className="pm-section-header">
            <span className="pm-eyebrow">Stay Updated</span>
            <h2>Recent News & Educational Updates</h2>
            <p>Be in the know about what matters to you most in Nepali education.</p>
          </div>

          <div className="pm-news-grid">
            {/* Featured Story */}
            <article className="pm-featured-news">
              <div className="pm-featured-thumb">
                <svg width="100%" height="100%" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="225" fill="#0B2545" />
                  <polygon points="200,40 230,110 300,110 240,150 260,210 200,170 140,210 160,150 100,110 170,110" fill="#125BCC" opacity="0.6" />
                  <text x="200" y="160" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="14" fill="#FFFFFF" textAnchor="middle">Institute of Engineering (IOE)</text>
                </svg>
              </div>
              <div className="pm-featured-body">
                <div className="pm-news-meta">
                  <span className="pm-badge pm-badge-amber">News</span>
                  <span>By Admin</span>
                  <span>Ashad 2083</span>
                </div>
                <h3 style={{ marginBottom: 'var(--sp-1)', fontSize: '1.25rem' }}>
                  <a href="#article" style={{ color: 'var(--pm-slate-900)' }} onClick={(e) => { e.preventDefault(); navigate('article-detail'); }}>
                    Tribhuvan University Institute of Engineering (IOE) campus in Madhesh Province
                  </a>
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--pm-slate-600)', marginBottom: 'var(--sp-2)' }}>
                  The government is moving forward with plans to establish a new Institute of Engineering (IOE) constituent campus in Madhesh Province to expand technical education.
                </p>
                <button
                  type="button"
                  className="pm-btn-text"
                  style={{ alignSelf: 'flex-start', padding: 0 }}
                  onClick={() => navigate('article-detail')}
                >
                  Read More →
                </button>
              </div>
            </article>

            {/* Secondary Stories List */}
            <div className="pm-news-list">
              <div
                className="pm-news-item"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('articles')}
              >
                <div className="pm-news-item-thumb">
                  <svg width="100%" height="100%" viewBox="0 0 120 90" fill="#E2E8F0">
                    <rect width="120" height="90" fill="#065F46" />
                    <text x="60" y="50" fontFamily="Mukta, sans-serif" fontWeight="700" fontSize="11" fill="#A7F3D0" textAnchor="middle">धान दिवस</text>
                  </svg>
                </div>
                <div className="pm-news-item-content">
                  <div className="pm-news-meta" style={{ marginBottom: '2px' }}>
                    <span className="pm-badge pm-badge-green" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>News</span>
                    <span style={{ fontSize: '0.7rem' }}>Admin</span>
                  </div>
                  <div className="pm-news-item-title">
                    Celebrating National Paddy Day & Ashad 15: Honoring the Hands That Nourish Our Nation
                  </div>
                  <span className="nepali-text" style={{ fontSize: '0.75rem', color: 'var(--pm-slate-500)' }}>राष्ट्रिय धान दिवस तथा असार १५ को शुभकामना</span>
                </div>
              </div>

              <div
                className="pm-news-item"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('articles')}
              >
                <div className="pm-news-item-thumb">
                  <svg width="100%" height="100%" viewBox="0 0 120 90" fill="#E2E8F0">
                    <rect width="120" height="90" fill="#1E293B" />
                    <text x="60" y="50" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="10" fill="#CBD5E1" textAnchor="middle">Education VAT</text>
                  </svg>
                </div>
                <div className="pm-news-item-content">
                  <div className="pm-news-meta" style={{ marginBottom: '2px' }}>
                    <span className="pm-badge pm-badge-amber" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>Policy</span>
                    <span style={{ fontSize: '0.7rem' }}>Admin</span>
                  </div>
                  <div className="pm-news-item-title">
                    VAT on Educational Institutions: A Step Toward a Stronger Education Sector
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--pm-slate-500)' }}>Overview of budget reforms impacting schools.</span>
                </div>
              </div>

              <div
                className="pm-news-item"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('articles')}
              >
                <div className="pm-news-item-thumb">
                  <svg width="100%" height="100%" viewBox="0 0 120 90" fill="#E2E8F0">
                    <rect width="120" height="90" fill="#0C4A6E" />
                    <text x="60" y="50" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="10" fill="#38BDF8" textAnchor="middle">Hackathon</text>
                  </svg>
                </div>
                <div className="pm-news-item-content">
                  <div className="pm-news-meta" style={{ marginBottom: '2px' }}>
                    <span className="pm-badge pm-badge-primary" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>Event</span>
                    <span style={{ fontSize: '0.7rem' }}>Admin</span>
                  </div>
                  <div className="pm-news-item-title">
                    Lumbini Police is Organizing Nepal's First Police-Tech Hackathon 2083
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--pm-slate-500)' }}>Big opportunity for young developers and tech enthusiasts.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           SECTION 8: FAQS ACCORDION
           ========================================================================== */}
      <section className="pm-section pm-section-soft" id="faqs">
        <div className="pm-container">
          <div className="pm-section-header">
            <span className="pm-eyebrow">Clear Answers</span>
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>Find solutions to the common questions about Padhai Mantra batches and methodology.</p>
          </div>

          <div className="pm-faq-list">
            {siteData.faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className={`pm-faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="pm-faq-question"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className="pm-faq-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points={isOpen ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                      </svg>
                    </span>
                  </button>
                  {isOpen && <div className="pm-faq-answer">{faq.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================================
           SECTION 9: DOWNLOAD OUR MOBILE APP
           ========================================================================== */}
      <section className="pm-container">
        <div className="pm-app-section">
          <div className="pm-app-grid">
            <div className="pm-app-content">
              <div className="pm-badge pm-badge-amber" style={{ marginBottom: 'var(--sp-2)' }}>
                Mantra to your dream education
              </div>
              <h2>DOWNLOAD OUR MOBILE APP<br />LEARN ANYTIME, ANYWHERE!</h2>
              <p>
                Get ready to experience seamless learning right from your mobile device. Access all features, courses, and resources anytime, anywhere — on the platform you love.
              </p>

              <div className="pm-store-buttons">
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="pm-store-btn" aria-label="Get it on Google Play">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.428V3.242c0-.54.225-1.03.609-1.428zm11.242 11.244l2.58 2.58-11.838 6.83 9.258-9.41zm0-2.116L5.593 1.532l11.838 6.83-2.58 2.58zm1.488 1.488l3.18-1.837a1.642 1.642 0 0 0 0-2.846l-3.18-1.837-2.058 2.058 2.058 2.462z" />
                  </svg>
                  <div className="pm-store-text">
                    <span className="pm-store-label">GET IT ON</span>
                    <span className="pm-store-name">Google Play</span>
                  </div>
                </a>

                <a href="https://apple.com" target="_blank" rel="noopener noreferrer" className="pm-store-btn" aria-label="Download on the App Store">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.66-1.06 1.73-.93 2.76 1.01.08 2.03-.51 2.64-1.26z" />
                  </svg>
                  <div className="pm-store-text">
                    <span className="pm-store-label">Download on the</span>
                    <span className="pm-store-name">App Store</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Phone Mockup with Real Padhai Mantra UI preview */}
            <div className="pm-app-mockup">
              <div className="pm-phone-frame">
                <div className="pm-phone-notch" />
                <div className="pm-phone-screen">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '6px' }}>
                    <strong style={{ color: '#125BCC', fontSize: '0.8rem' }}>Padhai Mantra</strong>
                    <span className="pm-badge-live" style={{ fontSize: '0.6rem', padding: '2px 6px' }}>Live</span>
                  </div>
                  <div style={{ background: '#EEF5FF', borderRadius: '8px', padding: '8px', marginTop: '6px' }}>
                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.75rem' }}>Today's Live Class</div>
                    <div style={{ fontSize: '0.7rem', color: '#475569' }}>C. Mathematics • 07:45 PM</div>
                    <span className="pm-badge pm-badge-amber" style={{ fontSize: '0.6rem', marginTop: '4px' }}>Join Session</span>
                  </div>
                  <div style={{ border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px', marginTop: '6px' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.75rem', color: '#0F172A' }}>Apex Batch 2083</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Chapter 4: Trigonometry Notes</div>
                    <div style={{ fontSize: '0.65rem', color: '#10B981', fontWeight: 600, marginTop: '2px' }}>✓ Downloaded PDF</div>
                  </div>
                  <div style={{ border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px', marginTop: '6px' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.75rem', color: '#0F172A' }}>Mock Test #4</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>SEE Science Practice Set</div>
                    <div style={{ fontSize: '0.65rem', color: '#125BCC', fontWeight: 600, marginTop: '2px' }}>Score: 92/100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React, { useState, useEffect } from 'react';

export default function PromoModal({ navigate }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('pm_promo_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('pm_promo_dismissed', 'true');
  };

  const handleEnroll = (e) => {
    e.preventDefault();
    handleClose();
    navigate('course-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isOpen) return null;

  return (
    <div className="pm-modal-backdrop active" role="dialog" aria-modal="true" aria-labelledby="promoTitle">
      <div className="pm-modal-card">
        <button
          type="button"
          className="pm-modal-close"
          onClick={handleClose}
          aria-label="Close Announcement"
        >
          ✕
        </button>

        <div className="pm-modal-header-banner">
          <span className="pm-badge pm-badge-amber" style={{ marginBottom: '8px' }}>
            Special Announcement
          </span>
          <h3 id="promoTitle" style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '4px' }}>
            Class 12 (Science) Free Demo!
          </h3>
          <p style={{ color: '#DBEAFE', fontSize: '0.875rem' }}>
            Free enroll now to get intense with Project 4.0 Batch.
          </p>
        </div>

        <div className="pm-modal-content">
          <img
            src="/assets/flash-notice.jpg"
            alt="Class 12 Science Project 4.0 Free Demo"
            style={{ width: '100%', borderRadius: '8px', marginBottom: '14px', maxHeight: '240px', objectFit: 'cover' }}
          />
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '10px', marginBottom: '16px' }}>
            <div style={{ fontWeight: '700', color: '#DC2626', fontSize: '0.8125rem' }}>
              VALID UNTIL 30th KARTIK
            </div>
            <div style={{ fontSize: '0.8125rem', color: '#475569', marginTop: '2px' }}>
              Access live interactive sessions & question bank demo.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <a
              href="#enroll"
              className="pm-btn pm-btn-primary"
              style={{ flex: 1 }}
              onClick={handleEnroll}
            >
              Enroll Now
            </a>
            <button
              type="button"
              className="pm-btn pm-btn-outline"
              onClick={handleClose}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

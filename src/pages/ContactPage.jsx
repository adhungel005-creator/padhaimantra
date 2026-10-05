import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export default function ContactPage({ navigate }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="pm-page-content">
      <div className="pm-container">
        {/* Breadcrumb */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">Contact Us</span>
        </nav>

        {/* Page Header with 700 bold weight */}
        <div className="pm-page-header">
          <div className="pm-badge pm-badge-primary" style={{ marginBottom: '8px' }}>Direct Student Support</div>
          <h1 className="pm-page-title">Contact Our Academic Helpdesk</h1>
          <p className="pm-page-subtitle">
            Have questions about course admissions, live batch schedules, technical portal access, or scholarship eligibility? Our student advisors are here to help.
          </p>
        </div>

        <div className="pm-contact-layout">
          {/* Left Column: Contact Information Block */}
          <div className="pm-contact-info-card">
            <h2>Contact Information</h2>
            <p>
              We are here to assist you with any inquiries or concerns you may have. Please feel free to reach out to us using the contact details below:
            </p>

            <ul className="pm-contact-rows">
              <li className="pm-contact-row">
                <span className="pm-c-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <span>{siteData.brand.address}</span>
                </div>
              </li>

              <li className="pm-contact-row">
                <span className="pm-c-icon">📞</span>
                <div>
                  <strong>Phone Numbers</strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <a href={`tel:${siteData.brand.phone1.replace(/[^0-9+]/g, '')}`}>{siteData.brand.phone1}</a>
                    <a href={`tel:${siteData.brand.phone2.replace(/[^0-9+]/g, '')}`}>{siteData.brand.phone2}</a>
                  </div>
                </div>
              </li>

              <li className="pm-contact-row">
                <span className="pm-c-icon">✉️</span>
                <div>
                  <strong>Email Support</strong>
                  <a href={`mailto:${siteData.brand.email}`} style={{ wordBreak: 'break-all' }}>
                    {siteData.brand.email}
                  </a>
                </div>
              </li>

              <li className="pm-contact-row">
                <span className="pm-c-icon">🕒</span>
                <div>
                  <strong>Helpdesk Hours</strong>
                  <span>Sunday – Friday: 08:00 AM – 08:00 PM</span>
                  <span style={{ fontSize: '0.75rem', color: '#10B981', display: 'block', marginTop: '2px' }}>
                    Typical WhatsApp response within 15 minutes
                  </span>
                </div>
              </li>
            </ul>

            {/* Direct WhatsApp Primary Button */}
            <div style={{ marginTop: '24px' }}>
              <a
                href="https://wa.me/9779705849944"
                target="_blank"
                rel="noopener noreferrer"
                className="pm-btn pm-btn-primary"
                style={{ width: '100%', background: '#25D366', borderColor: '#25D366', justifyContent: 'center' }}
              >
                <span>💬 Quick Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Get In Touch Form */}
          <div className="pm-contact-form-card">
            <h2>Get In Touch</h2>
            <p>Please fill out the form with your query and our team will get back to you promptly.</p>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '12px' }}>✅</div>
                <h3 style={{ color: '#0F172A', marginBottom: '8px' }}>Message Sent Successfully!</h3>
                <p style={{ color: '#64748B', marginBottom: '16px' }}>
                  Thank you for reaching out. An academic counselor will contact you via email or phone shortly.
                </p>
                <button
                  type="button"
                  className="pm-btn pm-btn-outline"
                  onClick={() => setSent(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pm-form-grid">
                <div className="pm-form-group">
                  <label className="pm-label">Full Name *</label>
                  <input type="text" className="pm-input" required placeholder="Enter your full name" />
                </div>
                <div className="pm-form-group">
                  <label className="pm-label">Phone Number *</label>
                  <input type="tel" className="pm-input" required placeholder="+977-98XXXXXXXX" />
                </div>
                <div className="pm-form-group">
                  <label className="pm-label">Email Address *</label>
                  <input type="email" className="pm-input" required placeholder="your.email@example.com" />
                </div>
                <div className="pm-form-group">
                  <label className="pm-label">Subject of Inquiry *</label>
                  <input type="text" className="pm-input" required placeholder="Course Admissions / Technical / Other" />
                </div>
                <div className="pm-form-group pm-form-col-2">
                  <label className="pm-label">Feedback or Queries *</label>
                  <textarea
                    className="pm-input"
                    rows={5}
                    required
                    placeholder="Write your detailed query or message here..."
                  />
                </div>
                <div className="pm-form-col-2">
                  <button type="submit" className="pm-btn pm-btn-primary" style={{ padding: '12px 32px' }}>
                    Submit Message
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

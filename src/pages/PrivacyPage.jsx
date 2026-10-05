import React from 'react';

export default function PrivacyPage({ navigate }) {
  const sections = [
    { id: 'p-1', title: '1. Information Collected' },
    { id: 'p-2', title: '2. Use of Information' },
    { id: 'p-3', title: '3. Data Protection and Security' },
    { id: 'p-4', title: '4. Data Sharing and Disclosure' },
    { id: 'p-5', title: '5. Privacy of Minors' },
    { id: 'p-6', title: '6. Policy Updates & Contact' }
  ];

  return (
    <main className="pm-page-content">
      <div className="pm-container">
        {/* Breadcrumb */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">Privacy Policy</span>
        </nav>

        {/* Page Header (Removed emoji bug) */}
        <div className="pm-page-header">
          <div className="pm-badge pm-badge-outline" style={{ marginBottom: '8px' }}>Effective Date: Ashad 2083</div>
          <h1 className="pm-page-title">Privacy Policy</h1>
          <p className="pm-page-subtitle">
            How Padhai Mantra collects, safeguards, and utilizes student data in compliance with digital safety and Nepalese privacy standards.
          </p>
        </div>

        {/* Standardized Legal Layout: Sticky TOC + 720px Column */}
        <div className="pm-legal-layout">
          <aside className="pm-legal-toc">
            <div className="pm-toc-card">
              <h3>Privacy Sections</h3>
              <nav className="pm-toc-list">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="pm-toc-link">
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="pm-legal-content">
            <section id="p-1" className="pm-legal-section">
              <h2>1. Information Collected</h2>
              <p>We may collect:</p>
              <ul>
                <li>Full name, email address, and mobile contact number</li>
                <li>Login and authentication details</li>
                <li>Course enrollment history and payment verification records</li>
                <li>Device and usage data for security and performance optimization</li>
              </ul>
            </section>

            <section id="p-2" className="pm-legal-section">
              <h2>2. Use of Information</h2>
              <p>User data is used strictly for:</p>
              <ul>
                <li>Providing personalized educational services and course access</li>
                <li>Verifying enrollment and transaction authentications</li>
                <li>Academic communication, class timing alerts, and schedule changes</li>
                <li>Platform security and service improvement</li>
              </ul>
            </section>

            <section id="p-3" className="pm-legal-section">
              <h2>3. Data Protection and Security</h2>
              <p>
                Reasonable technical and organizational safeguards are applied to protect your information against unauthorized access, alteration, or disclosure. Access is strictly limited to authorized academic and technical personnel.
              </p>
            </section>

            <section id="p-4" className="pm-legal-section">
              <h2>4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell personal data. We may use limited anonymized learner statistics for academic marketing and student benefit purposes. Disclosure only occurs if required by Nepalese law or lawful authority.
              </p>
            </section>

            <section id="p-5" className="pm-legal-section">
              <h2>5. Privacy of Minors</h2>
              <p>
                Platform primarily serves secondary students aged 13–17. Parental or guardian consent is assumed upon registration and fee settlement. Guardians may contact Padhai Mantra for privacy concerns.
              </p>
            </section>

            <section id="p-6" className="pm-legal-section">
              <h2>6. Policy Updates & Contact</h2>
              <p>
                Padhai Mantra may revise these Terms and Privacy Policy as required. Continued use of the platform implies acceptance of updated policies.
              </p>
              <div style={{ marginTop: '16px', background: '#F8FAFC', padding: '16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <strong>For privacy concerns:</strong>
                <div>Padhai Mantra Pvt. Ltd., Kathmandu, Nepal</div>
                <div>Contact: +977-9705849944 | hamropadhaimantra@gmail.com</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

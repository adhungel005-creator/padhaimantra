import React from 'react';

export default function TermsPage({ navigate }) {
  const sections = [
    { id: 'sec-1', title: '1. About Padhai Mantra' },
    { id: 'sec-2', title: '2. Acceptance of Terms' },
    { id: 'sec-3', title: '3. User Registration & Responsibilities' },
    { id: 'sec-4', title: '4. Use of Platform & Educational Purpose' },
    { id: 'sec-5', title: '5. Intellectual Property & Content Ownership' },
    { id: 'sec-6', title: '6. Payments, Fees, and No Refund Policy' },
    { id: 'sec-7', title: '7. Availability, Interruptions, and Technical Issues' },
    { id: 'sec-8', title: '8. User Conduct and Prohibited Activities' },
    { id: 'sec-9', title: '9. Suspension and Termination' },
    { id: 'sec-10', title: '10. Disclaimer of Warranties' },
    { id: 'sec-11', title: '11. Limitation of Liability' },
    { id: 'sec-12', title: '12. Indemnification' },
    { id: 'sec-13', title: '13. Governing Law and Jurisdiction' }
  ];

  return (
    <main className="pm-page-content">
      <div className="pm-container">
        {/* Breadcrumb */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">Terms & Conditions</span>
        </nav>

        {/* Page Header */}
        <div className="pm-page-header">
          <div className="pm-badge pm-badge-outline" style={{ marginBottom: '8px' }}>Last Updated: Ashad 2083</div>
          <h1 className="pm-page-title">Terms & Conditions</h1>
          <p className="pm-page-subtitle">
            Please read these terms carefully before accessing or using Padhai Mantra's live classes, mock tests, and digital services.
          </p>
        </div>

        {/* Standardized Legal Layout: Sticky TOC + 720px Content */}
        <div className="pm-legal-layout">
          {/* Sticky Table of Contents on Desktop */}
          <aside className="pm-legal-toc">
            <div className="pm-toc-card">
              <h3>Table of Contents</h3>
              <nav className="pm-toc-list">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="pm-toc-link">
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Legal Text Column */}
          <div className="pm-legal-content">
            <section id="sec-1" className="pm-legal-section">
              <h2>1. About Padhai Mantra</h2>
              <p>
                Padhai Mantra Pvt. Ltd. ("Padhai Mantra", "we", "our", "us") is an educational platform providing academic courses, recorded lectures, live sessions, notes, tests, and digital learning resources for students.
              </p>
            </section>

            <section id="sec-2" className="pm-legal-section">
              <h2>2. Acceptance of Terms</h2>
              <p>
                By creating an account, accessing content, or making payment, you confirm that you have read, understood, and accepted these Terms and Conditions and agree to comply with all applicable laws of Nepal. Continued use after updates constitutes acceptance of revised terms.
              </p>
            </section>

            <section id="sec-3" className="pm-legal-section">
              <h2>3. User Registration and Account Responsibility</h2>
              <p>
                Users must provide accurate, complete, and updated information. Login credentials are strictly personal and non-transferable. Account sharing is strictly prohibited. Padhai Mantra is not liable for misuse due to negligence in safeguarding credentials.
              </p>
            </section>

            <section id="sec-4" className="pm-legal-section">
              <h2>4. Use of Platform and Educational Purpose</h2>
              <p>
                The platform is intended solely for educational purposes. Users must not misuse content for commercial, illegal, or unethical purposes. Unauthorized access, hacking, screen recording, or data manipulation is strictly prohibited and might result in legal action.
              </p>
            </section>

            <section id="sec-5" className="pm-legal-section">
              <h2>5. Intellectual Property & Content Ownership</h2>
              <p>
                All content including recorded videos, live class recordings, notes, PDFs, tests, and question banks are the exclusive intellectual property of Padhai Mantra Pvt. Ltd. Users may NOT download, copy, screen-capture, distribute, sell, or share login credentials with third parties.
              </p>
            </section>

            <section id="sec-6" className="pm-legal-section">
              <h2>6. Payments, Fees, and No Refund Policy</h2>
              <p>
                All course fees are non-refundable under any circumstances. Failure to attend, incomplete usage, or technical inconvenience does not qualify for refund. Users are responsible for all charges related to their enrollment.
              </p>
            </section>

            <section id="sec-7" className="pm-legal-section">
              <h2>7. Availability, Interruptions, and Technical Issues</h2>
              <p>
                Access may be interrupted due to maintenance, upgrades, or technical issues beyond reasonable control. Padhai Mantra is not liable for internet issues, device incompatibility, power failure, or force majeure events.
              </p>
            </section>

            <section id="sec-8" className="pm-legal-section">
              <h2>8. User Conduct and Prohibited Activities</h2>
              <p>
                Users must not defame or harm the reputation of Padhai Mantra, staff, or instructors, harass or threaten any individual, or disrupt academic operations. Violation may result in immediate suspension with possible legal action under prevailing laws of Nepal.
              </p>
            </section>

            <section id="sec-9" className="pm-legal-section">
              <h2>9. Suspension and Termination</h2>
              <p>
                Padhai Mantra reserves the right to suspend or terminate access without prior notice if terms are violated or misuse is detected. Terminated users forfeit course duration without refund.
              </p>
            </section>

            <section id="sec-10" className="pm-legal-section">
              <h2>10. Disclaimer of Warranties</h2>
              <p>
                The platform and content are provided "as is" and "as available" without warranties of any kind.
              </p>
            </section>

            <section id="sec-11" className="pm-legal-section">
              <h2>11. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by Nepalese law, Padhai Mantra shall not be liable for direct or indirect damages, data loss, service interruption, or device issues.
              </p>
            </section>

            <section id="sec-12" className="pm-legal-section">
              <h2>12. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Padhai Mantra Pvt. Ltd. from any claims, losses, or legal expenses arising from your misuse of the platform.
              </p>
            </section>

            <section id="sec-13" className="pm-legal-section">
              <h2>13. Governing Law and Jurisdiction</h2>
              <p>
                These Terms and Policies shall be governed by and interpreted in accordance with the laws of Nepal. Any dispute shall fall under the jurisdiction of competent courts of Nepal.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

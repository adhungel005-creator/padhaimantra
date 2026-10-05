import React from 'react';
import { siteData } from '../data/siteData';

export default function ArticleDetailPage({ navigate }) {
  const relatedArticles = siteData.articles.slice(1, 4);

  return (
    <main className="pm-page-content">
      <div className="pm-container">
        {/* Breadcrumb */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <a href="#articles" onClick={(e) => { e.preventDefault(); navigate('articles'); }}>Articles</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">How To Check SEE Result</span>
        </nav>

        <div className="pm-article-layout">
          {/* Main Reading Column (Max 720px) */}
          <article className="pm-article-single">
            <div className="pm-article-header">
              <div className="pm-art-meta">
                <span className="pm-badge pm-badge-primary">Exam Guide</span>
                <span>👤 By Admin</span>
                <span>📅 Ashad 2083</span>
                <span>⏱️ 4 min read</span>
              </div>
              <h1 className="pm-article-h1">How To Check SEE Result 2082 / 2083 Officially</h1>
            </div>

            <div className="pm-article-body">
              <p>
                The National Examination Board (NEB), Office of the Controller of Examinations (Sanothimi, Bhaktapur), has published the official list of authorized platforms through which students, parents, and schools can check the Secondary Education Examination (SEE) results. The board said results for both regular and grade improvement exams are accessible via SMS, IVR, and designated official web portals.
              </p>

              <h2>Official Verification SMS & IVR Portals</h2>
              <p>
                Students can check their subject-wise grades and GPA by sending their symbol number along with alphabet code to the shortcodes listed below:
              </p>

              {/* Authentic Verification Table from Screenshot Page 35 */}
              <div className="pm-table-responsive">
                <table className="pm-table">
                  <thead>
                    <tr>
                      <th>S.N.</th>
                      <th>Organization / Provider</th>
                      <th>Service Type</th>
                      <th>Shortcode / Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nepal Telecom (नेपाल टेलिकम)</td>
                      <td>SMS / IVR</td>
                      <td><strong>1600</strong></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Janaki Technology Pvt. Ltd.</td>
                      <td>SMS</td>
                      <td><strong>35001</strong></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Easy Service Pvt. Ltd.</td>
                      <td>SMS</td>
                      <td><strong>31003</strong></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Akash Tech Pvt. Ltd.</td>
                      <td>SMS</td>
                      <td><strong>31001</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Official Websites for Result & Marksheet</h2>
              <p>
                For complete grade-sheet downloads including individual theoretical and practical scores, visit the following government portals:
              </p>
              <ul>
                <li><strong>NEB Official Portal:</strong> <code>www.neb.gov.np</code></li>
                <li><strong>Office of Controller of Examinations:</strong> <code>www.see.gov.np</code></li>
                <li><strong>Nepal Telecom Result Portal:</strong> <code>see.ntc.net.np</code></li>
              </ul>

              <blockquote>
                "Make sure to keep your SEE Symbol Number and Date of Birth (YYYY-MM-DD) ready before logging into web portals to avoid server timeouts during peak traffic."
              </blockquote>

              <h2>Next Steps After SEE: Admissions & Scholarships</h2>
              <p>
                Once you check your GPA, explore Padhai Mantra's Class 11 Science bridge courses and college partner merit scholarships available across Kathmandu and Chitwan colleges.
              </p>

              {/* Social Share Bar */}
              <div className="pm-share-bar">
                <span>Share this guide:</span>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="pm-share-btn">Facebook</a>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="pm-share-btn">WhatsApp</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="pm-share-btn">Twitter</a>
              </div>
            </div>
          </article>

          {/* Sticky Related Posts Sidebar on Desktop */}
          <aside className="pm-article-sidebar">
            <div className="pm-sidebar-box">
              <h3>Related Articles</h3>
              <div className="pm-sidebar-posts-list">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    className="pm-sidebar-post-item"
                    onClick={() => navigate('article-detail')}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="pm-sidebar-post-badge">{rel.category}</span>
                    <h4>{rel.title}</h4>
                    <span className="pm-sidebar-post-date">{rel.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pm-sidebar-box" style={{ background: '#EEF5FF', border: '1px solid #BFDBFE' }}>
              <h3 style={{ color: '#125BCC' }}>Join Padhai Mantra Batches</h3>
              <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.6' }}>
                Prepare for Class 11 & 12 with live evening classes and masterclass mentoring.
              </p>
              <button
                type="button"
                className="pm-btn pm-btn-primary"
                style={{ width: '100%', marginTop: '8px' }}
                onClick={() => navigate('courses')}
              >
                Explore Batches
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

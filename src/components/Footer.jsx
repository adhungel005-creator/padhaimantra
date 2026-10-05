import React from 'react';
import { siteData } from '../data/siteData';

export default function Footer({ navigate }) {
  const handleLink = (e, pageId) => {
    e.preventDefault();
    navigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pm-footer">
      <div className="pm-container">
        <div className="pm-footer-grid">
          {/* Col 1: Brand Info */}
          <div className="pm-footer-brand">
            <a href="#home" className="pm-brand" style={{ textDecoration: 'none' }} onClick={(e) => handleLink(e, 'home')}>
              <img
                src="/assets/logo.png"
                alt="Padhai Mantra"
                style={{ height: '40px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <p>
              Padhai Mantra is Nepal's dedicated ed-tech brand for SEE (Class 10) and NEB Class 11–12 students. Empowering over 30,000 learners and 190K+ YouTube community members.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="pm-footer-col">
            <h4>Quick Links</h4>
            <ul className="pm-footer-links">
              <li><a href="#home" onClick={(e) => handleLink(e, 'home')}>Home</a></li>
              <li><a href="#courses" onClick={(e) => handleLink(e, 'courses')}>Courses</a></li>
              <li><a href="#live-classes" onClick={(e) => handleLink(e, 'live-classes')}>Live Classes</a></li>
              <li><a href="#mock-tests" onClick={(e) => handleLink(e, 'mock-tests')}>Mock Tests</a></li>
              <li><a href="#scholarships" onClick={(e) => handleLink(e, 'scholarships')}>Scholarships</a></li>
            </ul>
          </div>

          {/* Col 3: Company & Legal */}
          <div className="pm-footer-col">
            <h4>About & Legal</h4>
            <ul className="pm-footer-links">
              <li><a href="#about-us" onClick={(e) => handleLink(e, 'about-us')}>About Us</a></li>
              <li><a href="#articles" onClick={(e) => handleLink(e, 'articles')}>Articles</a></li>
              <li><a href="#contact" onClick={(e) => handleLink(e, 'contact')}>Contact Us</a></li>
              <li><a href="#terms" onClick={(e) => handleLink(e, 'terms')}>Terms & Conditions</a></li>
              <li><a href="#privacy" onClick={(e) => handleLink(e, 'privacy')}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Details (Real data from brief page 13) */}
          <div className="pm-footer-col">
            <h4>Contact Us</h4>
            <ul className="pm-footer-contact-list">
              <li className="pm-footer-contact-item">
                <span className="pm-footer-contact-icon">📍</span>
                <span>{siteData.brand.address}</span>
              </li>
              <li className="pm-footer-contact-item">
                <span className="pm-footer-contact-icon">📞</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href={`tel:${siteData.brand.phone1.replace(/[^0-9+]/g, '')}`} style={{ color: '#CBD5E1' }}>
                    {siteData.brand.phone1}
                  </a>
                  <a href={`tel:${siteData.brand.phone2.replace(/[^0-9+]/g, '')}`} style={{ color: '#CBD5E1' }}>
                    {siteData.brand.phone2}
                  </a>
                </div>
              </li>
              <li className="pm-footer-contact-item">
                <span className="pm-footer-contact-icon">✉️</span>
                <a href={`mailto:${siteData.brand.email}`} style={{ color: '#CBD5E1', wordBreak: 'break-all' }}>
                  {siteData.brand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pm-footer-bottom">
          <p>© {new Date().getFullYear()} Padhai Mantra Pvt. Ltd. All rights reserved. | Powered by XAV Technology</p>
          <div className="pm-social-row">
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8', marginRight: '6px' }}>Follow Us:</span>
            <a
              href="https://www.youtube.com/@padhaimantra"
              target="_blank"
              rel="noopener noreferrer"
              className="pm-social-icon"
              aria-label="YouTube Channel"
            >
              ▶
            </a>
            <a
              href="https://wa.me/9779705849944"
              target="_blank"
              rel="noopener noreferrer"
              className="pm-social-icon"
              aria-label="WhatsApp Chat"
            >
              💬
            </a>
            <a
              href="https://www.facebook.com/padhaimantra"
              target="_blank"
              rel="noopener noreferrer"
              className="pm-social-icon"
              aria-label="Facebook Page"
            >
              f
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

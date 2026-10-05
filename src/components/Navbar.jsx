import React, { useState } from 'react';

export default function Navbar({ currentPage, navigate }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'live-classes', label: 'Live Classes' },
    { id: 'mock-tests', label: 'Mock Tests' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'about-us', label: 'About Us' }
  ];

  const handleLinkClick = (e, pageId) => {
    e.preventDefault();
    navigate(pageId);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="pm-header">
        <div className="pm-container">
          <div className="pm-header-inner">
            {/* Authentic Brand Logo */}
            <a
              href="#home"
              className="pm-brand"
              onClick={(e) => handleLinkClick(e, 'home')}
              aria-label="Padhai Mantra Homepage"
            >
              <img
                src="/assets/logo.png"
                alt="Padhai Mantra - Mantra to your dream education"
                style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="pm-nav-desktop" aria-label="Primary Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`pm-nav-link ${currentPage === link.id ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions (Desktop Login / Sign up) */}
            <div className="pm-header-actions">
              <a
                href="#login"
                className="pm-btn pm-btn-outline"
                style={{ padding: '9px 18px', minHeight: '40px' }}
                onClick={(e) => handleLinkClick(e, 'login')}
              >
                Log in
              </a>
              <a
                href="#register"
                className="pm-btn pm-btn-primary"
                style={{ padding: '9px 20px', minHeight: '40px' }}
                onClick={(e) => handleLinkClick(e, 'register')}
              >
                Sign up
              </a>

              {/* Mobile Hamburger Trigger (Accessible 44px min target) */}
              <button
                type="button"
                className="pm-mobile-toggle"
                id="mobileMenuToggle"
                aria-label="Open mobile navigation menu"
                aria-expanded={drawerOpen}
                onClick={() => setDrawerOpen(true)}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      <div
        className={`pm-drawer-backdrop ${drawerOpen ? 'open' : ''}`}
        id="drawerBackdrop"
        onClick={() => setDrawerOpen(false)}
      />
      <aside className={`pm-drawer ${drawerOpen ? 'open' : ''}`} id="mobileDrawer" aria-label="Mobile Menu">
        <div className="pm-drawer-header">
          <a
            href="#home"
            className="pm-brand"
            style={{ textDecoration: 'none' }}
            onClick={(e) => handleLinkClick(e, 'home')}
          >
            <img src="/assets/logo.png" alt="Padhai Mantra" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
          </a>
          <button
            type="button"
            className="pm-modal-close"
            id="drawerClose"
            aria-label="Close mobile menu"
            style={{ position: 'static', width: '36px', height: '36px' }}
            onClick={() => setDrawerOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="pm-drawer-body">
          <nav className="pm-drawer-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={currentPage === link.id ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, link.id)}
              >
                <span>{link.label}</span> <span>→</span>
              </a>
            ))}
            <a
              href="#articles"
              className={currentPage === 'articles' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'articles')}
            >
              <span>Articles</span> <span>→</span>
            </a>
            <a
              href="#contact"
              className={currentPage === 'contact' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              <span>Contact Us</span> <span>→</span>
            </a>
          </nav>
        </div>

        <div className="pm-drawer-footer">
          <a
            href="#register"
            className="pm-btn pm-btn-primary"
            style={{ width: '100%' }}
            onClick={(e) => handleLinkClick(e, 'register')}
          >
            Sign up
          </a>
          <a
            href="#login"
            className="pm-btn pm-btn-outline"
            style={{ width: '100%' }}
            onClick={(e) => handleLinkClick(e, 'login')}
          >
            Log in
          </a>
          <div style={{ fontSize: '0.75rem', color: 'var(--pm-slate-500)', textAlign: 'center', marginTop: '6px' }}>
            Support: +977-9705849944
          </div>
        </div>
      </aside>
    </>
  );
}

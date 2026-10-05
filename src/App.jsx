import React, { useState, useEffect } from 'react';
import Toolbar from './components/Toolbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PromoModal from './components/PromoModal';

import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseCategoryPage from './pages/CourseCategoryPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LiveClassesPage from './pages/LiveClassesPage';
import MockTestsPage from './pages/MockTestsPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import AboutUsPage from './pages/AboutUsPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [viewport, setViewport] = useState('fluid');

  // Sync with URL Hash for natural browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'courses':
        return <CoursesPage navigate={navigate} />;
      case 'course-category':
      case 'courses/class-10':
        return <CourseCategoryPage navigate={navigate} />;
      case 'course-detail':
        return <CourseDetailPage navigate={navigate} />;
      case 'live-classes':
      case 'all-live-class':
        return <LiveClassesPage navigate={navigate} />;
      case 'mock-tests':
      case 'all-mock-tests':
        return <MockTestsPage navigate={navigate} />;
      case 'scholarships':
        return <ScholarshipsPage navigate={navigate} />;
      case 'about-us':
        return <AboutUsPage navigate={navigate} />;
      case 'articles':
      case 'all-blogs':
        return <ArticlesPage navigate={navigate} />;
      case 'article-detail':
        return <ArticleDetailPage navigate={navigate} />;
      case 'contact':
        return <ContactPage navigate={navigate} />;
      case 'terms':
      case 'terms-and-conditions':
        return <TermsPage navigate={navigate} />;
      case 'privacy':
      case 'privacy-policy':
        return <PrivacyPage navigate={navigate} />;
      case 'login':
        return <LoginPage navigate={navigate} />;
      case 'register':
        return <RegisterPage navigate={navigate} />;
      case 'forgot-password':
        return <ForgotPasswordPage navigate={navigate} />;
      default:
        return <NotFoundPage navigate={navigate} />;
    }
  };

  return (
    <div className="pm-app-root">
      {/* Interactive Responsive Breakpoint Switcher */}
      <Toolbar currentViewport={viewport} setViewport={setViewport} />

      {/* Frame wrapper adhering to chosen viewport preview */}
      <div className={`preview-stage ${viewport !== 'fluid' ? 'isolated-mode' : ''}`}>
        <div
          className={`preview-frame ${
            viewport === '1440' ? 'mode-1440' :
            viewport === '390' ? 'mode-390' :
            viewport === '360' ? 'mode-360' : 'mode-fluid'
          }`}
        >
          <Navbar currentPage={currentPage} navigate={navigate} />
          {renderPage()}
          <Footer navigate={navigate} />
        </div>
      </div>

      {/* Promotional Pop-up Modal */}
      <PromoModal navigate={navigate} />
    </div>
  );
}

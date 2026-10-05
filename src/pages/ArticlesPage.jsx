import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export default function ArticlesPage({ navigate }) {
  const [filter, setFilter] = useState('all');

  const featured = siteData.articles.find((a) => a.featured) || siteData.articles[0];
  const listArticles = siteData.articles.filter((a) => {
    if (filter === 'all') return true;
    return a.category.toLowerCase() === filter.toLowerCase();
  });

  return (
    <main className="pm-page-content">
      <div className="pm-container">
        {/* Breadcrumb */}
        <nav className="pm-breadcrumb" aria-label="Breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">Articles</span>
        </nav>

        {/* Page Header */}
        <div className="pm-page-header">
          <div className="pm-badge pm-badge-primary" style={{ marginBottom: '8px' }}>Education & Exam Guidance</div>
          <h1 className="pm-page-title">Articles & Exam News</h1>
          <p className="pm-page-subtitle">
            Stay informed with verified SEE updates, board examination result notices, study strategies, and Nepal education policy analysis.
          </p>
        </div>

        {/* Featured Top Story */}
        {featured && (
          <div className="pm-featured-article-card" onClick={() => navigate('article-detail')} style={{ cursor: 'pointer' }}>
            <div className="pm-featured-art-thumb">
              <svg width="100%" height="100%" viewBox="0 0 500 300" fill="none">
                <rect width="500" height="300" fill="#0F172A" />
                <rect x="50" y="50" width="400" height="200" rx="8" fill="#1E293B" stroke="#334155" />
                <text x="250" y="130" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="22" fill="#38BDF8" textAnchor="middle">SEE RESULT GUIDE</text>
                <text x="250" y="170" fontFamily="Inter, sans-serif" fontSize="13" fill="#94A3B8" textAnchor="middle">Official SMS Codes & Portals</text>
              </svg>
            </div>
            <div className="pm-featured-art-content">
              <div className="pm-art-meta">
                <span className="pm-badge pm-badge-primary">{featured.category}</span>
                <span>👤 {featured.author}</span>
                <span>📅 {featured.date}</span>
                <span>⏱️ {featured.readTime}</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <button
                type="button"
                className="pm-btn pm-btn-primary"
                style={{ alignSelf: 'flex-start', padding: '10px 20px', marginTop: '12px' }}
                onClick={(e) => { e.stopPropagation(); navigate('article-detail'); }}
              >
                Read Full Article →
              </button>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="pm-filter-bar" style={{ marginTop: 'var(--sp-6)' }}>
          <div className="pm-filter-chips">
            {['all', 'guide', 'news', 'policy', 'event'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`pm-filter-chip ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="pm-articles-grid">
          {listArticles.map((art) => (
            <article key={art.id} className="pm-article-card" onClick={() => navigate('article-detail')}>
              <div className="pm-article-thumb">
                <svg width="100%" height="100%" viewBox="0 0 320 180" fill="none">
                  <rect width="320" height="180" fill="#1E293B" />
                  <circle cx="160" cy="90" r="50" fill="#125BCC" opacity="0.3" />
                  <text x="160" y="95" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="14" fill="#FFFFFF" textAnchor="middle">
                    {art.category}
                  </text>
                </svg>
              </div>
              <div className="pm-article-content">
                <div className="pm-art-meta">
                  <span className={`pm-badge pm-badge-${art.categoryType || 'primary'}`}>{art.category}</span>
                  <span>{art.date}</span>
                </div>
                <h3 className="pm-article-title">{art.title}</h3>
                <p className="pm-article-excerpt">{art.excerpt}</p>
                <div className="pm-article-footer">
                  <button
                    type="button"
                    className="pm-btn-text"
                    onClick={(e) => { e.stopPropagation(); navigate('article-detail'); }}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

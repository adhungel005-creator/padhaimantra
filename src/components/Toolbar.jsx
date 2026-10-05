import React from 'react';

export default function Toolbar({ currentViewport, setViewport }) {
  const viewports = [
    { id: '1440', label: '🖥️ 1440px Desktop' },
    { id: '390', label: '📱 390px iPhone' },
    { id: '360', label: '📱 360px Android' },
    { id: 'fluid', label: '↔️ Fluid Width' }
  ];

  return (
    <div className="pm-preview-toolbar">
      <span className="pm-toolbar-title">PADHAI MANTRA REACT PREVIEW</span>
      <div className="pm-toolbar-buttons">
        {viewports.map((vp) => (
          <button
            key={vp.id}
            type="button"
            className={`pm-toolbar-btn ${currentViewport === vp.id ? 'active' : ''}`}
            onClick={() => setViewport(vp.id)}
          >
            {vp.label}
          </button>
        ))}
      </div>
    </div>
  );
}

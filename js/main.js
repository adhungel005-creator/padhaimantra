/**
 * PADHAI MANTRA - JAVASCRIPT LOGIC
 * Includes:
 * 1. Responsive Viewport Preview Switcher (Desktop 1440px / Mobile 390px / Mobile 360px / Fluid)
 * 2. Mobile Navigation Drawer (Touch-ready, single-row header)
 * 3. Testimonial Clamping & Read More Toggle
 * 4. FAQ Accordion Interaction
 * 5. Lightweight Promotional Popup (with session storage dismissal)
 */

document.addEventListener('DOMContentLoaded', () => {
  initDeviceToolbar();
  initMobileDrawer();
  initTestimonials();
  initFaqAccordion();
  initPromoModal();
});

/* ==========================================================================
   1. Device Preview Switcher (Allows client to review exact 1440px and 390px frames)
   ========================================================================== */
function initDeviceToolbar() {
  const buttons = document.querySelectorAll('.pm-mode-btn');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.dataset.mode;
      document.body.className = `preview-frame-mode mode-${mode}`;
    });
  });
}

/* ==========================================================================
   2. Mobile Drawer Navigation
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('drawerClose');
  const backdrop = document.getElementById('drawerBackdrop');
  const drawer = document.getElementById('mobileDrawer');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   3. Testimonial Clamping & Expansion
   ========================================================================== */
function initTestimonials() {
  const expandButtons = document.querySelectorAll('.pm-testimonial-more');
  expandButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.pm-testimonial-card');
      const body = card.querySelector('.pm-testimonial-body');

      if (body.classList.contains('clamped')) {
        body.classList.remove('clamped');
        btn.textContent = 'Show less';
      } else {
        body.classList.add('clamped');
        btn.textContent = 'Read more';
      }
    });
  });
}

/* ==========================================================================
   4. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const questions = document.querySelectorAll('.pm-faq-question');
  questions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.pm-faq-item');
      const isActive = item.classList.contains('active');

      // Close all other items in standard accordion style
      document.querySelectorAll('.pm-faq-item').forEach(other => {
        other.classList.remove('active');
        other.querySelector('.pm-faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   5. Lightweight Promotional Popup
   ========================================================================== */
function initPromoModal() {
  const modal = document.getElementById('promoModal');
  const closeBtn = document.getElementById('promoCloseBtn');
  const dismissActionBtn = document.getElementById('promoDismissBtn');
  const triggerBtn = document.getElementById('viewPromoBtn');

  if (!modal) return;

  function closeModal() {
    modal.classList.remove('open');
    sessionStorage.setItem('pm_promo_dismissed', 'true');
  }

  function openModal() {
    modal.classList.add('open');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (dismissActionBtn) dismissActionBtn.addEventListener('click', closeModal);

  // Manual trigger button on preview toolbar
  if (triggerBtn) {
    triggerBtn.addEventListener('click', openModal);
  }

  // Show only once per session after 2.5s delay if not dismissed
  if (!sessionStorage.getItem('pm_promo_dismissed')) {
    setTimeout(() => {
      openModal();
    }, 2500);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

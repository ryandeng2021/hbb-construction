/**
 * Google Analytics 4 (gtag.js) + custom events.
 *
 * GA4 measurement ID from analytics.google.com (Admin → Data streams).
 * gtag.js only loads in production builds so local dev visits don't skew the numbers;
 * in dev, track() still queues events on window.dataLayer so they can be inspected.
 *
 * Page views (including client-side route changes) are sent by GA4 itself via
 * Enhanced measurement → "Page changes based on browser history events".
 *
 * Page areas are tagged with data-section="..." (see pages/*.jsx and the Navbar,
 * Hero, Footer and TourBookingModal components); events report the nearest one,
 * or 'mobile_menu' for clicks inside the open mobile menu.
 */
export const GA_MEASUREMENT_ID = 'G-8W0NV2FYBE';

export const analyticsEnabled = Boolean(GA_MEASUREMENT_ID) && process.env.NODE_ENV === 'production';

// Same as Google's snippet: gtag.js only reads Arguments objects off the dataLayer,
// so this must be a regular function, not an arrow function
function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

const PROJECT_PATH = /^\/projects\/([^/?#]+)/;

/**
 * Send a GA4 event. Shows up under Reports → Engagement → Events.
 * On a project detail page, `project` (the slug) is added automatically.
 * @param {string} event - e.g. 'phone_click'
 * @param {Record<string, unknown>} [params]
 */
export const track = (event, params = {}) => {
  if (typeof window === 'undefined') return;
  const onProject = window.location.pathname.match(PROJECT_PATH);
  gtag('event', event, onProject ? { project: onProject[1], ...params } : params);
};

// The nav links live in the offcanvas element on every screen size; it only acts as
// the mobile menu while it is open (Bootstrap adds .show)
const sectionOf = (el) =>
  (el.closest('.offcanvas.show') && 'mobile_menu') ||
  el.closest('[data-section]')?.dataset.section ||
  'other';

const clean = (text) => (text || '').replace(/\s+/g, ' ').trim().slice(0, 100);

/**
 * Site-wide listeners: phone/email clicks, every other link/button click (cta_click)
 * and video plays. Returns a cleanup function.
 */
export const initGlobalTracking = () => {
  const onClick = (e) => {
    const el = e.target.closest?.('a, button, [role="button"]');
    if (!el) return;
    const href = el.getAttribute('href') || '';
    const section = sectionOf(el);

    if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      track(href.startsWith('tel:') ? 'phone_click' : 'email_click', { section });
      return;
    }

    const params = {
      section,
      cta_text: clean(el.innerText) || clean(el.getAttribute('aria-label')) || clean(el.getAttribute('title')),
    };
    if (href) params.cta_href = href.startsWith('http') ? href : href.split(/[?#]/)[0];
    const toProject = href.match(PROJECT_PATH);
    if (toProject) params.project = toProject[1];
    const slide = el.closest('[data-hero-slide]')?.dataset.heroSlide;
    if (slide) params.hero_slide = slide;
    track('cta_click', params);
  };

  // 'play' doesn't bubble, so listen in the capture phase
  const onPlay = (e) => {
    if (e.target.tagName !== 'VIDEO') return;
    const src = e.target.currentSrc || e.target.querySelector('source')?.src || '';
    track('video_play', { video_file: src.split('/').pop(), section: sectionOf(e.target) });
  };

  document.addEventListener('click', onClick);
  document.addEventListener('play', onPlay, true);
  return () => {
    document.removeEventListener('click', onClick);
    document.removeEventListener('play', onPlay, true);
  };
};

/**
 * Fires section_view once per tagged section per page view, when at least half of it
 * (or half the screen, for sections taller than the screen) is visible.
 * Call after each route change; returns a cleanup function.
 */
export const initSectionViews = () => {
  if (typeof IntersectionObserver === 'undefined') return () => {};
  const seen = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const name = entry.target.dataset.section;
        const visible = entry.intersectionRect.height;
        const enough = entry.intersectionRatio >= 0.5 || visible >= window.innerHeight * 0.5;
        if (!enough || seen.has(name)) return;
        seen.add(name);
        observer.unobserve(entry.target);
        track('section_view', { section: name });
      });
    },
    // Fine steps so very tall sections (e.g. the project grid) still cross a threshold
    // once half a screen of them is showing
    { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
  );
  // The header is always on screen and the modal only exists once opened - neither says anything
  document
    .querySelectorAll('[data-section]:not([data-section="header"]):not([data-section="tour_modal"])')
    .forEach((el) => observer.observe(el));
  return () => observer.disconnect();
};

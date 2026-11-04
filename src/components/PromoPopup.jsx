import { useState, useEffect, useCallback, useRef } from 'react';
import TourBookingModal from './TourBookingModal';
import { promoPopup, projects } from '../data';
import { track } from '../utils/analytics';

// Remembers within the browser tab whether the visitor shrank or dismissed the card,
// so it doesn't pop up again every time they come back to the home page
const STORAGE_KEY = 'hbb-promo-popup';

const readSaved = () => {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const save = (value) => {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Private mode / blocked storage - the card just shows again next time
  }
};

// "Book a Tour" is only offered while there is a build in progress to visit
const tourProject = projects.find((project) => project.status === 'ongoing');

/**
 * Small promo card that pops up shortly after the home page opens, with the intro clip
 * and quote / tour buttons. Closing it (×, Esc or clicking outside) shrinks it to a
 * button in the bottom-right corner that reopens it; that button has its own × to
 * hide it for the rest of the visit.
 */
const PromoPopup = () => {
  // hidden -> open <-> minimized -> dismissed
  const [view, setView] = useState('hidden');
  const [form, setForm] = useState(null); // null | 'contact' | 'tour'
  const videoRef = useRef(null);

  useEffect(() => {
    const saved = readSaved();
    if (saved === 'dismissed') return undefined;
    if (saved === 'minimized') {
      setView('minimized');
      return undefined;
    }
    const id = setTimeout(() => {
      setView('open');
      track('promo_open', { trigger: 'auto' });
    }, promoPopup.delayMs);
    return () => clearTimeout(id);
  }, []);

  const minimize = useCallback(() => {
    setView('minimized');
    save('minimized');
  }, []);

  const reopen = () => {
    setView('open');
    track('promo_open', { trigger: 'corner_button' });
  };

  const dismiss = () => {
    setView('dismissed');
    save('dismissed');
    track('promo_dismiss');
  };

  const openForm = (which) => {
    minimize();
    setForm(which);
  };

  const closeForm = useCallback(() => setForm(null), []);

  // Esc shrinks the card; keep the page behind from scrolling while it's open
  useEffect(() => {
    if (view !== 'open') return undefined;
    const onKeyDown = (e) => { if (e.key === 'Escape') minimize(); };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Autoplay can be refused (e.g. iOS Low Power Mode); the poster still shows then
    videoRef.current?.play()?.catch(() => {});
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [view, minimize]);

  return (
    <>
      {view === 'open' && (
        <div
          className="promo-backdrop"
          role="presentation"
          onClick={(e) => { if (e.target === e.currentTarget) minimize(); }}
        >
          <div className="promo-card" data-section="promo_modal" role="dialog" aria-modal="true" aria-labelledby="promo-title">
            <button type="button" className="promo-close" onClick={minimize} aria-label="Minimize">
              <i className="uil uil-times" />
            </button>

            <div className="promo-media">
              <video
                ref={videoRef}
                src={promoPopup.video}
                poster={promoPopup.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
              />
            </div>

            <div className="promo-body">
              <p className="promo-eyebrow roboto">{promoPopup.eyebrow}</p>
              <h3 id="promo-title" className="promo-title oswald">{promoPopup.title}</h3>
              <p className="promo-text roboto">{promoPopup.body}</p>
              <div className="promo-actions">
                <button type="button" className="btn primary-bg text-white" onClick={() => openForm('contact')}>
                  {promoPopup.quoteLabel}
                </button>
                {tourProject && (
                  <button type="button" className="btn btn-outline-primary" onClick={() => openForm('tour')}>
                    <i className="uil uil-constructor me-1" />
                    {promoPopup.tourLabel}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {view === 'minimized' && (
        <div className="promo-mini" data-section="promo_mini">
          <button type="button" className="promo-mini-open" onClick={reopen}>
            <span className="promo-mini-thumb" style={{ backgroundImage: `url(${promoPopup.poster})` }} />
            {promoPopup.minimizedLabel}
          </button>
          <button type="button" className="promo-mini-close" onClick={dismiss} aria-label="Hide">
            <i className="uil uil-times" />
          </button>
        </div>
      )}

      <TourBookingModal mode="contact" isOpen={form === 'contact'} onClose={closeForm} />
      {tourProject && (
        <TourBookingModal
          isOpen={form === 'tour'}
          onClose={closeForm}
          projectTitle={tourProject.title}
          projectSlug={tourProject.slug}
          projectLocation={tourProject.location}
        />
      )}
    </>
  );
};

export default PromoPopup;

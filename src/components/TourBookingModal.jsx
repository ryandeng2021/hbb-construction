import { useState, useEffect, useCallback, useRef } from 'react';
import { WEB3FORMS_ACCESS_KEY, FALLBACK_EMAIL, tourBooking } from '../data/tourBooking';

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', required: false, autoComplete: 'tel' },
  { name: 'preferred', label: 'Preferred day or time', type: 'text', required: false, placeholder: 'e.g. weekday mornings' },
  { name: 'message', label: 'Anything you would like to see?', type: 'textarea', required: false },
];

const EMPTY = { name: '', email: '', phone: '', preferred: '', message: '' };

/**
 * Tour request form shown over an ongoing project page.
 *
 * Posts to Web3Forms when an access key is configured; otherwise it hands the
 * details to the visitor's mail client so the form is never a dead end.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.onClose
 * @param {string} props.projectTitle - Named in the email subject so enquiries are identifiable
 * @param {string} [props.projectLocation]
 */
const TourBookingModal = ({ isOpen, onClose, projectTitle, projectLocation }) => {
  const [values, setValues] = useState(EMPTY);
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');
  const firstFieldRef = useRef(null);

  const subject = `Tour request - ${projectTitle}${projectLocation ? ` (${projectLocation})` : ''}`;

  // Reset whenever the dialog is reopened so a second visitor starts clean
  useEffect(() => {
    if (isOpen) {
      setValues(EMPTY);
      setState('idle');
      setError('');
      const id = setTimeout(() => firstFieldRef.current?.focus(), 50);
      return () => clearTimeout(id);
    }
  }, [isOpen]);

  // Escape to dismiss, and keep the page behind from scrolling
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  const update = (name) => (e) => setValues((v) => ({ ...v, [name]: e.target.value }));

  // No access key configured yet - hand off to the visitor's mail client instead
  const sendViaMailto = useCallback(() => {
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone && `Phone: ${values.phone}`,
      values.preferred && `Preferred time: ${values.preferred}`,
      '',
      values.message,
    ].filter(Boolean).join('\n');
    window.location.href =
      `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setState('sent');
  }, [values, subject]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!WEB3FORMS_ACCESS_KEY) {
      sendViaMailto();
      return;
    }

    setState('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject,
          from_name: 'HBB Construction website',
          project: projectTitle,
          location: projectLocation,
          ...values,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Submission failed');
      setState('sent');
    } catch (err) {
      setState('error');
      setError(err.message || 'Something went wrong. Please try again, or email us directly.');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="tour-modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="presentation"
    >
      <div className="tour-modal" role="dialog" aria-modal="true" aria-labelledby="tour-modal-title">
        <button type="button" className="tour-modal-close" onClick={onClose} aria-label="Close">
          <i className="uil uil-times" />
        </button>

        {state === 'sent' ? (
          <div className="tour-modal-done">
            <i className="uil uil-check-circle" />
            <h3 className="oswald mb-2">{tourBooking.successTitle}</h3>
            <p className="roboto text-muted mb-4">{tourBooking.successBody}</p>
            <button type="button" className="btn btn-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h3 id="tour-modal-title" className="oswald mb-2">{tourBooking.modalTitle}</h3>
            <p className="roboto text-muted fs-15 mb-1">{tourBooking.modalIntro}</p>
            <p className="roboto text-muted fs-14 mb-4">
              <i className="uil uil-map-marker me-1" />
              {projectTitle}{projectLocation ? ` - ${projectLocation}` : ''}
            </p>

            <form onSubmit={handleSubmit} noValidate={false}>
              {FIELDS.map((field, i) => (
                <div className="tour-field" key={field.name}>
                  <label htmlFor={`tour-${field.name}`}>
                    {field.label}
                    {field.required && <span className="tour-required"> *</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={`tour-${field.name}`}
                      rows={3}
                      value={values[field.name]}
                      onChange={update(field.name)}
                    />
                  ) : (
                    <input
                      id={`tour-${field.name}`}
                      ref={i === 0 ? firstFieldRef : null}
                      type={field.type}
                      required={field.required}
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      value={values[field.name]}
                      onChange={update(field.name)}
                    />
                  )}
                </div>
              ))}

              {state === 'error' && <p className="tour-error">{error}</p>}

              <button type="submit" className="btn btn-primary w-100 mt-2" disabled={state === 'sending'}>
                {state === 'sending' ? 'Sending...' : 'Send request'}
              </button>
              <p className="tour-privacy">
                We only use your details to arrange the visit.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default TourBookingModal;

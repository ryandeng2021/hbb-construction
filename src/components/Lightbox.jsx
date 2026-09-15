import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const LIGHTBOX_TRANSITION_MS = 200;

/**
 * Fullscreen image viewer shared by the gallery and the project detail pages.
 *
 * @param {Object} props
 * @param {Array} props.images - Images to page through: { id?, src, alt, ... }
 * @param {number|null} props.index - Index of the visible image, null when closed
 * @param {Function} props.onIndexChange - Called with the next index when navigating
 * @param {Function} props.onClose - Called once the close transition has finished
 * @param {Function} [props.renderCaption] - Optional caption renderer, receives the active image
 */
const Lightbox = ({ images = [], index, onIndexChange, onClose, renderCaption }) => {
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef(null);
  const isOpen = index !== null && index !== undefined && images[index];

  useEffect(() => () => clearTimeout(closeTimeoutRef.current), []);

  // Reset the closing flag whenever a new image is opened
  useEffect(() => {
    if (isOpen) {
      clearTimeout(closeTimeoutRef.current);
      setIsClosing(false);
    }
  }, [isOpen, index]);

  const requestClose = useCallback(() => {
    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, LIGHTBOX_TRANSITION_MS);
  }, [onClose]);

  const showPrev = useCallback(
    () => onIndexChange((index - 1 + images.length) % images.length),
    [index, images.length, onIndexChange]
  );
  const showNext = useCallback(
    () => onIndexChange((index + 1) % images.length),
    [index, images.length, onIndexChange]
  );

  // Keyboard navigation while the lightbox is open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') requestClose();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, requestClose, showPrev, showNext]);

  // Keep the page behind the lightbox from scrolling
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const activeImage = images[index];
  const caption = renderCaption ? renderCaption(activeImage) : null;

  return (
    <div
      className={`gallery-lightbox position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center ${
        isClosing ? 'gallery-lightbox-closing' : 'gallery-lightbox-open'
      }`}
      onClick={requestClose}
      role="dialog"
      aria-modal="true"
      aria-label={activeImage.alt || 'Image viewer'}
    >
      <button
        type="button"
        className="gallery-lightbox-close btn-close btn-close-white position-absolute"
        aria-label="Close"
        onClick={requestClose}
      />

      {images.length > 1 && (
        <span className="gallery-lightbox-counter position-absolute">
          {index + 1} / {images.length}
        </span>
      )}

      {images.length > 1 && (
        <button
          type="button"
          className="gallery-lightbox-nav gallery-lightbox-prev position-absolute d-flex align-items-center justify-content-center"
          aria-label="Previous image"
          onClick={(event) => {
            event.stopPropagation();
            showPrev();
          }}
        >
          <i className="uil uil-angle-left" />
        </button>
      )}

      <div
        className={`gallery-lightbox-content position-relative d-flex flex-column align-items-center ${
          caption ? 'gallery-lightbox-content-captioned' : ''
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          key={activeImage.id || activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt || ''}
          width={1600}
          height={1200}
          unoptimized={true}
          className="gallery-lightbox-image"
        />

        {caption}
      </div>

      {images.length > 1 && (
        <button
          type="button"
          className="gallery-lightbox-nav gallery-lightbox-next position-absolute d-flex align-items-center justify-content-center"
          aria-label="Next image"
          onClick={(event) => {
            event.stopPropagation();
            showNext();
          }}
        >
          <i className="uil uil-angle-right" />
        </button>
      )}
    </div>
  );
};

export default Lightbox;

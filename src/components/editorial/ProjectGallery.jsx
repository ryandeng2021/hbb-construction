import { useEffect, useMemo, useRef, useState } from 'react';
import Photo from './Photo';
import { mediaDimensions, projectGalleryRows } from './projectMedia';
import { track } from '../../utils/analytics';

export default function ProjectGallery({ heroAlt, media = [], introduction }) {
  const [active, setActive] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const rows = useMemo(() => projectGalleryRows(media, introduction), [media, introduction]);
  const photos = useMemo(() => media.filter(item=>!item.isVideo), [media]);
  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.querySelector('button')?.focus();
    const keydown = event => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') setActive(index => (index + 1) % photos.length);
      if (event.key === 'ArrowLeft') setActive(index => (index - 1 + photos.length) % photos.length);
      if (event.key === 'Tab') {
        const buttons = [...dialog.current.querySelectorAll('button')];
        const first = buttons[0], last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', keydown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', keydown); trigger.current?.focus(); };
  }, [active !== null, photos.length]);
  const renderMedia = (item, index) => {
    const dimensions = mediaDimensions(item);
    const alt = item.alt || `${heroAlt}, view ${index + 1}`;
    const photoIndex = photos.findIndex(photo => photo.key === item.key);
    return <figure key={item.key} className="hbb-project-tile" style={{ '--media-ratio': item.ratio }} data-kind={item.isVideo ? 'video' : 'photo'}>
      <div className="hbb-project-media">{item.isVideo ? <video controls playsInline preload="none" width={dimensions.width} height={dimensions.height} poster={item.poster || item.src.replace(/\.(mp4|webm|mov|m4v)$/i, '-poster.webp')} aria-label={alt}><source src={item.src}/></video> : <button type="button" className="ed-gallery-open" aria-label={`Enlarge: ${alt}`} onClick={event => { trigger.current = event.currentTarget; setActive(photoIndex); track('project_photo_open', { photo_index: photoIndex + 1, photo_file: item.src.split('/').pop() }); }}><Photo src={item.src} alt={alt} sizes="(max-width: 600px) 48vw, 45vw"/></button>}</div>
    </figure>;
  };
  return <div className="ed-gallery"><div className="hbb-project-grid">{rows.map((row, index) => <div key={row.items[0].key} className="hbb-project-spread" data-copy-side={row.side} data-count={row.items.length} data-has-copy={row.notes.length > 0} data-has-video={row.items.some(item => item.isVideo)} style={{ '--row-ratio': row.totalRatio, '--row-gaps': row.ratios.length - 1, gridTemplateColumns: row.ratios.map(ratio => `${ratio}fr`).join(' ') }}>
    {row.notes.length > 0 && row.side === 'left' && <div className="hbb-spread-copy">{row.notes.map((note, i) => <p key={i}>{note}</p>)}</div>}
    {row.items.map(renderMedia)}
    {row.notes.length > 0 && row.side === 'right' && <div className="hbb-spread-copy">{row.notes.map((note, i) => <p key={i}>{note}</p>)}</div>}
  </div>)}</div>{active !== null && photos[active] && <div ref={dialog} className="ed-lightbox" role="dialog" aria-modal="true" aria-label="Project photograph" onClick={() => setActive(null)}><button type="button" onClick={() => setActive(null)} className="ed-lightbox-close">Close ×</button><span className="ed-lightbox-count" aria-live="polite">{active + 1} / {photos.length}</span><button className="ed-lightbox-prev" aria-label="Previous photograph" type="button" onClick={event => { event.stopPropagation(); setActive((active - 1 + photos.length) % photos.length); }}>←</button><img src={photos[active].src} alt={photos[active].alt || heroAlt} onClick={event => event.stopPropagation()} /><button className="ed-lightbox-next" aria-label="Next photograph" type="button" onClick={event => { event.stopPropagation(); setActive((active + 1) % photos.length); }}>→</button></div>}</div>;
}

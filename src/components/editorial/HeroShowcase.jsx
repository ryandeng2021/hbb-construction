import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Photo from './Photo';
import Arrow from './Arrow';
import { heroCarousel, projects } from '../../data';

const slides = heroCarousel.filter((slide, index, all) => all.findIndex(item => item.image === slide.image) === index);
const wrap = index => (index + slides.length) % slides.length;

export default function HeroShowcase() {
  const [active, setActive] = useState(0);
  const [visited, setVisited] = useState(() => new Set([0, 1, slides.length - 1]));
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reduced, setReduced] = useState(false);
  const loaded = useRef(new Set());
  const pending = useRef(null);
  const hoverTimer = useRef(null);
  const hoverAdvanced = useRef(false);
  const touchStart = useRef(null);
  const go = useCallback(index => {
    const next = wrap(index);
    setVisited(previous => new Set([...previous, next, wrap(next + 1), wrap(next - 1)]));
    if (loaded.current.has(next)) { pending.current = null; setActive(next); } else pending.current = next;
  }, []);
  useEffect(() => {
    document.querySelectorAll('.hbb-showcase-photo img').forEach(image => {
      if(image.complete && image.naturalWidth > 0) loaded.current.add(Number(image.parentElement.dataset.slideIndex));
    });
    if(pending.current !== null && loaded.current.has(pending.current)) { setActive(pending.current); pending.current = null; }
  }, [visited]);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    const visibility = () => setHidden(document.hidden);
    update(); visibility(); query.addEventListener('change', update);
    document.addEventListener('visibilitychange', visibility);
    return () => { query.removeEventListener('change', update); document.removeEventListener('visibilitychange', visibility); clearTimeout(hoverTimer.current); };
  }, []);
  useEffect(() => {
    if (paused || hovered || focused || hidden || reduced) return;
    const timer = setTimeout(() => go(active + 1), 8000);
    return () => clearTimeout(timer);
  }, [active, paused, hovered, focused, hidden, reduced, go]);
  const hoverEdge = (event, direction) => {
    if (event.pointerType !== 'mouse' || reduced) return;
    hoverAdvanced.current = false;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => { go(active + direction); hoverAdvanced.current = true; }, 650);
  };
  const leaveEdge = () => { clearTimeout(hoverTimer.current); hoverAdvanced.current = false; };
  const current = slides[active];
  const project = projects.find(item => item.id === current.id);
  return <section className="ed-hero hbb-showcase" aria-roledescription="carousel" aria-label="HBB featured residences" data-section="hero" onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true); }} onPointerLeave={() => { setHovered(false); leaveEdge(); }} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }} onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); go(active + 1); } if (event.key === 'ArrowLeft') { event.preventDefault(); go(active - 1); } }} onTouchStart={event => { touchStart.current = { x:event.touches[0].clientX,y:event.touches[0].clientY }; }} onTouchEnd={event => { const start=touchStart.current;touchStart.current=null;if(!start)return;const dx=event.changedTouches[0].clientX-start.x,dy=event.changedTouches[0].clientY-start.y;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.3)go(active+(dx<0?1:-1)); }}>
    <div className="hbb-showcase-photos" aria-hidden="true">{slides.map((slide,index) => visited.has(index) && <div key={slide.image} data-slide-index={index} className={`hbb-showcase-photo ${index===active?'is-current':''}`}><Photo src={slide.image} alt="" priority={index===0} sizes="100vw" onLoad={()=>{loaded.current.add(index);if(pending.current===index){pending.current=null;setActive(index);}}} onError={()=>{if(pending.current===index)pending.current=null;}} /></div>)}</div>
    <div className="ed-hero-shade" />
    <div className="ed-hero-copy"><span className="ed-eyebrow">Bay Area residential builders</span><h1>A place to live.<br />A home to love.</h1><p>Custom homes, additions & whole-home remodels.<br />Thoughtfully built, from the ground up.</p><Link className="ed-button ed-button-light" href="/projects">Explore our work <Arrow /></Link></div>
    {[-1,1].map(direction => <button key={direction} type="button" className={`hbb-hero-edge hbb-hero-edge-${direction===1?'next':'previous'}`} aria-label={direction===1?'Next residence':'Previous residence'} onPointerEnter={event=>hoverEdge(event,direction)} onPointerLeave={leaveEdge} onClick={()=>{clearTimeout(hoverTimer.current);if(!hoverAdvanced.current)go(active+direction);}}><span aria-hidden="true">{direction===1?'→':'←'}</span></button>)}
    <div className="ed-hero-bottom"><a href="#hbb-introduction">Discover HBB ↓</a><div className="hbb-hero-controls"><span className="hbb-hero-count">{String(active+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</span><button className="hbb-hero-pause" type="button" onClick={()=>setPaused(!paused)} aria-label={paused?'Play slideshow':'Pause slideshow'}>{paused?'Play':'Pause'}</button></div><Link href={project?`/projects/${project.slug}`:'/projects'} className="hbb-hero-project">{project?`${project.location} · ${project.title}`:current.title} <Arrow /></Link></div>
    <span className="hbb-hero-announcement" aria-live={hovered||focused||paused?'polite':'off'}>{current.title}</span>
  </section>;
}

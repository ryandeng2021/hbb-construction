import { useEffect, useRef } from 'react';

export default function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.remove('reveal-pending'); observer.disconnect(); }
    }, { threshold: 0.08 });
    // Content remains visible without JavaScript and if the observer is unavailable.
    if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add('reveal-pending');
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`ed-reveal ${className}`}>{children}</div>;
}

import { useState, useEffect, useRef } from 'react';
import { badgesData } from '../data';

/**
 * Badges component - displays statistics with rolling number animation
 * Numbers animate when the component comes into view
 */
const Badges = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayNumbers, setDisplayNumbers] = useState(() => Object.fromEntries(badgesData.items.map(item => [item.id, item.number])));
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Animate numbers when visible
  useEffect(() => {
    if (!isVisible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timers = [];

    badgesData.items.forEach((item) => {
      const targetNumber = item.number;
      const duration = 2000; // 2 seconds
      const steps = 60; // Number of animation steps
      const increment = targetNumber / steps;
      let currentStep = 0;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(targetNumber * easeOutQuart);

        setDisplayNumbers((prev) => ({
          ...prev,
          [item.id]: currentValue
        }));

        if (progress < 1) {
          const timer = setTimeout(animate, 16); // ~60fps
          timers.push(timer);
        } else {
          // Ensure final value is set
          setDisplayNumbers((prev) => ({
            ...prev,
            [item.id]: targetNumber
          }));
        }
      };

      // Start animation with a slight delay for staggered effect
      const startDelay = item.id * 100;
      const startTimer = setTimeout(() => {
        animate();
      }, startDelay);
      timers.push(startTimer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [isVisible]);


  return (
    <section ref={sectionRef} className="badges-section">
      <div className="container">
        <div className="row g-4">
          {badgesData.items.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-3">
              <div className="badge-card" data-cue="fadeInUp">
                <div className="badge-number">
                  {item.prefix && <span className="badge-prefix">{item.prefix}</span>}
                  <span className="badge-value">
                    {displayNumbers[item.id] !== undefined
                      ? displayNumbers[item.id].toLocaleString()
                      : item.number.toLocaleString()}
                  </span>
                  {item.suffix && <span className="badge-suffix">{item.suffix}</span>}
                </div>
                <div className="badge-label roboto">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;


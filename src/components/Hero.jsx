import { useState, useEffect, useRef } from 'react';
import NextLink from './NextLink';
import { heroCarousel } from '../data';

/**
 * Hero component - displays a fullscreen hero carousel with auto-rotation,
 * headline, subheadline, and a call-to-action button.
 */
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef(0);

  // Auto-rotate carousel every 2 seconds with seamless looping
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      const nextSlide = (slideRef.current + 1) % (heroCarousel.length + 1);
      slideRef.current = nextSlide;
      
      if (nextSlide === heroCarousel.length) {
        // When we reach the duplicate slide at the end, slide to it
        setCurrentSlide(nextSlide);
        // Then instantly reset to 0 without transition after animation completes
        setTimeout(() => {
          setIsTransitioning(false);
          slideRef.current = 0;
          setCurrentSlide(0);
        }, 1050); // Slightly longer than transition duration (1000ms)
      } else {
        setCurrentSlide(nextSlide);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section data-section="hero">
      {/* Hero carousel container */}
      <div className="swiper-container hero" style={{ height: '90vh', position: 'relative', overflow: 'hidden' }}>
        {/* Carousel slides wrapper for seamless looping */}
        <div
          className="hero-slides-wrapper"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
            display: 'flex',
          }}
        >
          {/* Render all slides including a duplicate first slide at the end for seamless loop */}
          {[...heroCarousel, heroCarousel[0]].map((slide, index) => {
            const displayIndex = index % heroCarousel.length;
            const isActive = index === currentSlide || (currentSlide === heroCarousel.length && index === 0);
            
            return (
              <div
                key={`${slide.id}-${index}`}
                className="hero-slide"
                data-hero-slide={heroCarousel[displayIndex].title}
                style={{
                  minWidth: '100%',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  position: 'relative',
                }}
              >
                {/* Overlay for darkening the background image */}
                <div className="overlay"></div>

                {/* Centered container for text content */}
                <div className="container h-100 d-flex justify-content-center align-items-center position-relative z-2">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="text-center">
                      {/* Main headline with animation */}
                      <h3 
                        className="fs-56 ls-xl text-white mb-3 oswald"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                          transition: 'opacity 0.8s ease-in-out 0.3s, transform 0.8s ease-in-out 0.3s',
                        }}
                      >
                        {heroCarousel[displayIndex].title}
                      </h3>

                      {/* Subheadline with animation */}
                      <p 
                        className="fs-26 text-white mb-5 roboto"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                          transition: 'opacity 0.8s ease-in-out 0.5s, transform 0.8s ease-in-out 0.5s',
                        }}
                      >
                        {heroCarousel[displayIndex].subtitle}
                      </p>

                      {/* Call-to-action button with slide-in animation */}
                      <div 
                        className="d-inline link position-relative z-2"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                          transition: 'opacity 0.8s ease-in-out 0.7s, transform 0.8s ease-in-out 0.7s',
                        }}
                      >
                        <NextLink
                          title="Know More"
                          href="/aboutus"
                          className="btn btn-sm primary-bg text-white rounded d-inline"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel indicators - positioned at the very bottom */}
        <div 
          className="position-absolute start-50 translate-middle-x d-flex gap-2"
          style={{ 
            bottom: '20px',
            zIndex: 10,
            paddingBottom: '10px'
          }}
        >
          {heroCarousel.map((slide, index) => {
            const isActive = index === (currentSlide % heroCarousel.length);
            return (
              <button
                key={slide.id}
                type="button"
                data-hero-slide={slide.title}
                className={`carousel-indicator ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setIsTransitioning(true);
                  slideRef.current = index;
                  setCurrentSlide(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  width: isActive ? '40px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;

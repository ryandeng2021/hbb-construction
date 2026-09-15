import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

/**
 * Flexible Project Content Component
 * Supports hero image, single image sections, two-image sections,
 * three-image sections, video sections, and optional descriptions for each section
 * 
 * @param {Object} props
 * @param {string} props.heroImage - Hero image path
 * @param {string} props.heroAlt - Hero image alt text
 * @param {Array} props.sections - Array of content sections
 *   Each section can have:
 *   - layout: 'one', 'two', or 'three' (for images)
 *   - images: Array of image objects or strings. Image objects can have:
 *     - src: string (image or video path)
 *     - alt: string (alt text)
 *     - isVideo: boolean (true if this is a video, false or undefined for images)
 *     - description: string (optional individual description)
 *   - video: Object with { src: string, alt: string } (takes precedence over images, legacy support)
 *   - description: Optional text description for the section
 */
const ProjectContent = ({ heroImage, heroAlt, sections = [] }) => {
  const [imageDimensions, setImageDimensions] = useState({});
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const containerRefs = useRef({});
  const imageRefs = useRef({});

  // Flatten every still image on the page (hero first, then each section in order) so the
  // lightbox can page through them, and map each render slot to its position in that list.
  const { lightboxImages, lightboxKeys } = useMemo(() => {
    const list = [];
    const keys = {};

    if (heroImage) {
      keys.hero = list.length;
      list.push({ src: heroImage, alt: heroAlt || 'Project Hero' });
    }

    sections.forEach((section, sectionIndex) => {
      if (section.video) return; // Videos keep their own native controls

      const { images } = section;
      const imagesArray = Array.isArray(images) ? images : images ? [images] : [];

      imagesArray.forEach((img, imgIndex) => {
        if (typeof img === 'object' && img?.isVideo === true) return;

        const src = typeof img === 'string' ? img : img?.src;
        if (!src) return;

        keys[`${sectionIndex}-${imgIndex}`] = list.length;
        list.push({
          src,
          alt:
            typeof img === 'string'
              ? `Project image ${imgIndex + 1}`
              : img?.alt || `Project image ${imgIndex + 1}`,
          description: typeof img === 'string' ? null : img?.description || null
        });
      });
    });

    return { lightboxImages: list, lightboxKeys: keys };
  }, [heroImage, heroAlt, sections]);

  // Props that turn an image into a click-to-zoom target
  const zoomProps = useCallback(
    (key) => {
      const targetIndex = lightboxKeys[key];
      if (targetIndex === undefined) return {};

      const open = () => setLightboxIndex(targetIndex);
      return {
        onClick: open,
        onKeyDown: (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            open();
          }
        },
        role: 'button',
        tabIndex: 0,
        title: 'Click to view full screen'
      };
    },
    [lightboxKeys]
  );

  // Calculate dimensions for images in a row
  const calculateImageDimensions = useCallback((sectionIndex, imagesArray, containerElement) => {
    if (!containerElement || imagesArray.length === 0) return;

    const containerWidth = containerElement.offsetWidth;
    
    // Get computed gap from CSS (1rem = 16px on mobile, 1.5rem = 24px on desktop)
    const computedStyle = window.getComputedStyle(containerElement);
    const gapValue = computedStyle.gap || '1rem';
    const gap = parseFloat(gapValue) * (gapValue.includes('rem') ? 16 : 1); // Convert rem to px
    
    const totalGaps = (imagesArray.length - 1) * gap;
    const availableWidth = containerWidth - totalGaps;
    
    if (availableWidth <= 0) return; // Safety check

    // Load images to get their natural dimensions
    const imagePromises = imagesArray.map((img, imgIndex) => {
      return new Promise((resolve) => {
        const imgSrc = typeof img === 'string' ? img : img?.src;
        const isVideo = typeof img === 'object' && img?.isVideo === true;
        
        if (isVideo) {
          // For videos, use a default aspect ratio or load video metadata
          const video = document.createElement('video');
          video.src = imgSrc;
          video.onloadedmetadata = () => {
            resolve({
              index: imgIndex,
              width: video.videoWidth,
              height: video.videoHeight,
              aspectRatio: video.videoWidth / video.videoHeight
            });
          };
          video.onerror = () => {
            // Default aspect ratio if video fails to load
            resolve({
              index: imgIndex,
              width: 16,
              height: 9,
              aspectRatio: 16 / 9
            });
          };
        } else {
          const imgElement = new window.Image();
          imgElement.src = imgSrc;
          imgElement.onload = () => {
            resolve({
              index: imgIndex,
              width: imgElement.naturalWidth,
              height: imgElement.naturalHeight,
              aspectRatio: imgElement.naturalWidth / imgElement.naturalHeight
            });
          };
          imgElement.onerror = () => {
            // Default aspect ratio if image fails to load
            resolve({
              index: imgIndex,
              width: 4,
              height: 3,
              aspectRatio: 4 / 3
            });
          };
        }
      });
    });

    Promise.all(imagePromises).then((dimensions) => {
      // Calculate total aspect ratio sum
      const totalAspectRatio = dimensions.reduce((sum, dim) => sum + dim.aspectRatio, 0);
      
      if (totalAspectRatio === 0) return; // Safety check
      
      // Calculate common height that fits all images
      const commonHeight = availableWidth / totalAspectRatio;
      
      // Calculate individual widths based on aspect ratios
      const newDimensions = {};
      let totalCalculatedWidth = 0;
      
      dimensions.forEach((dim) => {
        const width = commonHeight * dim.aspectRatio;
        totalCalculatedWidth += width;
        newDimensions[`${sectionIndex}-${dim.index}`] = {
          width,
          height: commonHeight
        };
      });
      
      // Verify total width doesn't exceed available width (with small tolerance for rounding)
      if (totalCalculatedWidth > availableWidth + 1) {
        // Scale down proportionally if needed
        const scaleFactor = availableWidth / totalCalculatedWidth;
        Object.keys(newDimensions).forEach(key => {
          newDimensions[key].width = newDimensions[key].width * scaleFactor;
        });
      }

      setImageDimensions(prev => ({
        ...prev,
        ...newDimensions
      }));
    });
  }, []);

  // Effect to calculate dimensions when sections change
  useEffect(() => {
    const observers = [];
    const timeouts = [];
    
    sections.forEach((section, sectionIndex) => {
      const { layout, images, video } = section;
      
      if (video) return; // Skip video-only sections
      
      const imagesArray = Array.isArray(images) ? images : (images ? [images] : []);
      const isTwoImage = layout === 'two' || (imagesArray.length === 2 && layout !== 'three');
      const isThreeImage = layout === 'three' || (imagesArray.length === 3);
      
      if ((isTwoImage || isThreeImage) && imagesArray.length > 0) {
        const containerKey = `section-${sectionIndex}`;
        
        // Wait for container to be available
        const checkContainer = () => {
          const containerElement = containerRefs.current[containerKey];
          if (containerElement) {
            // Use ResizeObserver to recalculate on container resize
            const resizeObserver = new ResizeObserver(() => {
              calculateImageDimensions(sectionIndex, imagesArray, containerElement);
            });
            
            resizeObserver.observe(containerElement);
            observers.push(resizeObserver);
            
            // Initial calculation with a small delay to ensure images are rendered
            const timeoutId = setTimeout(() => {
              calculateImageDimensions(sectionIndex, imagesArray, containerElement);
            }, 100);
            timeouts.push(timeoutId);
          } else {
            // Retry if container not ready
            const retryTimeout = setTimeout(checkContainer, 50);
            timeouts.push(retryTimeout);
          }
        };
        
        checkContainer();
      }
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [sections, calculateImageDimensions]);
  return (
    <div>
      {/* Hero Image Section */}
      {heroImage && (
        <section className="mb-10 project-hero-section">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="project-detail-image">
                <Image
                  src={heroImage}
                  alt={heroAlt || 'Project Hero'}
                  width={1200}
                  height={600}
                  unoptimized={true}
                  className="rounded zoomable-image"
                  {...zoomProps('hero')}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      {sections.map((section, index) => {
        const { layout, images, video, description } = section;
        
        // Check if this section has a video (video takes precedence)
        if (video) {
          return (
            <section key={index} className="mb-10 project-section">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <div className="project-detail-image">
                    <video
                      className="rounded"
                      style={{ maxWidth: '100%', height: 'auto' }}
                      autoPlay
                      muted
                      loop
                      playsInline
                      src={video.src}
                      alt={video.alt || 'Project video'}
                      controls
                    />
                  </div>
                </div>
                {description && (
                  <div className="col-12 mt-3">
                    <p className="roboto fs-16 project-image-description">{description}</p>
                  </div>
                )}
              </div>
            </section>
          );
        }
        
        // Determine layout type
        const isTwoImage = layout === 'two' || (Array.isArray(images) && images.length === 2 && layout !== 'three');
        const isThreeImage = layout === 'three' || (Array.isArray(images) && images.length === 3);
        
        // Normalize images array
        const imagesArray = Array.isArray(images) ? images : (images ? [images] : []);

        return (
          <section key={index} className="mb-10 project-section">
            <div 
              ref={(el) => {
                if (isTwoImage || isThreeImage) {
                  containerRefs.current[`section-${index}`] = el;
                }
              }}
              className={`${isTwoImage || isThreeImage ? 'project-images-container' : 'row g-4'}`}
            >
              {isThreeImage ? (
                // Three Image Layout
                <>
                  {imagesArray.map((img, imgIndex) => {
                    const imgSrc = typeof img === 'string' ? img : img?.src;
                    const imgAlt = typeof img === 'string' ? `Project image ${imgIndex + 1}` : (img?.alt || `Project image ${imgIndex + 1}`);
                    const imgDesc = typeof img === 'string' ? null : img?.description;
                    const isVideo = typeof img === 'object' && img?.isVideo === true;
                    const dimensionKey = `${index}-${imgIndex}`;
                    const dimensions = imageDimensions[dimensionKey];
                    
                    return (
                      <div 
                        key={imgIndex} 
                        className="project-image-wrapper d-flex flex-column align-items-center"
                        style={dimensions ? { 
                          width: `${dimensions.width}px`,
                          flexShrink: 0,
                          flexGrow: 0
                        } : {}}
                      >
                        <div 
                          className="project-detail-image mb-3"
                          style={dimensions ? { 
                            width: `${dimensions.width}px`,
                            height: `${dimensions.height}px`
                          } : {}}
                        >
                          {isVideo ? (
                            <video
                              ref={(el) => {
                                if (el) imageRefs.current[dimensionKey] = el;
                              }}
                              className="rounded project-image-dynamic"
                              style={dimensions ? {
                                width: `${dimensions.width}px`,
                                height: `${dimensions.height}px`,
                                objectFit: 'contain'
                              } : { objectFit: 'contain' }}
                              autoPlay
                              muted
                              loop
                              playsInline
                              src={imgSrc}
                              alt={imgAlt}
                              controls
                            />
                          ) : (
                            <Image
                              ref={(el) => {
                                if (el) imageRefs.current[dimensionKey] = el;
                              }}
                              src={imgSrc}
                              alt={imgAlt}
                              width={dimensions?.width || 400}
                              height={dimensions?.height || 400}
                              unoptimized={true}
                              className="rounded project-image-dynamic zoomable-image"
                              style={dimensions ? {
                                width: `${dimensions.width}px`,
                                height: `${dimensions.height}px`,
                                objectFit: 'contain'
                              } : { objectFit: 'contain' }}
                              {...zoomProps(dimensionKey)}
                            />
                          )}
                        </div>
                        {imgDesc && (
                          <p className="roboto fs-16 text-muted project-image-description">{imgDesc}</p>
                        )}
                      </div>
                    );
                  })}
                  {/* Shared description for three-image layout (only if no individual descriptions) */}
                  {description && !imagesArray.some(img => typeof img !== 'string' && img?.description) && (
                    <div className="w-100 mt-3">
                      <p className="roboto fs-16 project-image-description">{description}</p>
                    </div>
                  )}
                </>
              ) : isTwoImage ? (
                // Two Image Layout
                <>
                  {imagesArray.map((img, imgIndex) => {
                    const imgSrc = typeof img === 'string' ? img : img?.src;
                    const imgAlt = typeof img === 'string' ? `Project image ${imgIndex + 1}` : (img?.alt || `Project image ${imgIndex + 1}`);
                    const imgDesc = typeof img === 'string' ? null : img?.description;
                    const isVideo = typeof img === 'object' && img?.isVideo === true;
                    const dimensionKey = `${index}-${imgIndex}`;
                    const dimensions = imageDimensions[dimensionKey];
                    
                    return (
                      <div 
                        key={imgIndex} 
                        className="project-image-wrapper d-flex flex-column align-items-center"
                        style={dimensions ? { 
                          width: `${dimensions.width}px`,
                          flexShrink: 0,
                          flexGrow: 0
                        } : {}}
                      >
                        <div 
                          className="project-detail-image mb-3"
                          style={dimensions ? { 
                            width: `${dimensions.width}px`,
                            height: `${dimensions.height}px`
                          } : {}}
                        >
                          {isVideo ? (
                            <video
                              ref={(el) => {
                                if (el) imageRefs.current[dimensionKey] = el;
                              }}
                              className="rounded project-image-dynamic"
                              style={dimensions ? {
                                width: `${dimensions.width}px`,
                                height: `${dimensions.height}px`,
                                objectFit: 'contain'
                              } : { objectFit: 'contain' }}
                              autoPlay
                              muted
                              loop
                              playsInline
                              src={imgSrc}
                              alt={imgAlt}
                              controls
                            />
                          ) : (
                            <Image
                              ref={(el) => {
                                if (el) imageRefs.current[dimensionKey] = el;
                              }}
                              src={imgSrc}
                              alt={imgAlt}
                              width={dimensions?.width || 600}
                              height={dimensions?.height || 400}
                              unoptimized={true}
                              className="rounded project-image-dynamic zoomable-image"
                              style={dimensions ? {
                                width: `${dimensions.width}px`,
                                height: `${dimensions.height}px`,
                                objectFit: 'contain'
                              } : { objectFit: 'contain' }}
                              {...zoomProps(dimensionKey)}
                            />
                          )}
                        </div>
                        {imgDesc && (
                          <p className="roboto fs-16 text-muted project-image-description">{imgDesc}</p>
                        )}
                      </div>
                    );
                  })}
                  {/* Shared description for two-image layout (only if no individual descriptions) */}
                  {description && !imagesArray[0]?.description && !imagesArray[1]?.description && (
                    <div className="w-100 mt-3">
                      <p className="roboto fs-16 project-image-description">{description}</p>
                    </div>
                  )}
                </>
              ) : (
                // Single Image Layout
                <>
                  {imagesArray.length > 0 && (
                    <div className="col-12 d-flex flex-column align-items-center">
                      <div className="project-detail-image project-detail-image-single mb-3" style={{ width: '100%' }}>
                        {typeof imagesArray[0] === 'object' && imagesArray[0]?.isVideo === true ? (
                          <video
                            className="rounded"
                            style={{ width: '100%', height: 'auto' }}
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={typeof imagesArray[0] === 'string' ? imagesArray[0] : (imagesArray[0]?.src || imagesArray[0])}
                            alt={typeof imagesArray[0] === 'string' ? 'Project video' : (imagesArray[0]?.alt || 'Project video')}
                            controls
                          />
                        ) : (
                          <Image
                            src={typeof imagesArray[0] === 'string' ? imagesArray[0] : (imagesArray[0]?.src || imagesArray[0])}
                            alt={typeof imagesArray[0] === 'string' ? 'Project image' : (imagesArray[0]?.alt || 'Project image')}
                            width={1200}
                            height={600}
                            unoptimized={true}
                            className="rounded zoomable-image"
                            style={{ width: '100%', height: 'auto' }}
                            {...zoomProps(`${index}-0`)}
                          />
                        )}
                      </div>
                      {(description || (typeof imagesArray[0] !== 'string' && imagesArray[0]?.description)) && (
                        <p className="roboto fs-16 project-image-description">
                          {description || imagesArray[0]?.description}
                        </p>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        );
      })}

      {/* Fullscreen viewer for every still image on the page */}
      <Lightbox
        images={lightboxImages}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
        renderCaption={(image) =>
          image.description ? (
            <div className="gallery-lightbox-caption">
              <p className="mb-0 fs-15 text-white roboto">{image.description}</p>
            </div>
          ) : null
        }
      />
    </div>
  );
};

export default ProjectContent;


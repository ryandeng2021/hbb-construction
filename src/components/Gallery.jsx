import { useState } from 'react';
import Image from 'next/image';
import NextLink from './NextLink';
import Lightbox from './Lightbox';
import { galleryCategories } from '../data/gallery';

/**
 * Gallery component - showcases project photos grouped by area (kitchen, bathroom, etc.)
 * with tabs to switch categories and a lightbox to view images full-size, linked back to
 * the project each photo was taken from.
 */
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0].id);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const currentCategory =
    galleryCategories.find((category) => category.id === activeCategory) || galleryCategories[0];
  const images = currentCategory.images;

  const handleTabClick = (categoryId) => {
    if (categoryId === activeCategory) return;
    setActiveCategory(categoryId);
    setLightboxIndex(null);
  };

  const renderCaption = (image) =>
    image.project ? (
      <div className="gallery-lightbox-caption d-flex align-items-center justify-content-between flex-wrap">
        <div className="gallery-lightbox-caption-text me-3">
          <p className="mb-0 fs-16 fw-bold text-white roboto">{image.project.title}</p>
          {image.project.location && (
            <p className="mb-0 fs-14 text-white-50 roboto">
              <i className="uil uil-map-marker me-1" />
              {image.project.location}
            </p>
          )}
        </div>
        <NextLink
          href={`/projects/${image.project.slug}`}
          className="btn btn-sm btn-outline-light gallery-lightbox-link flex-shrink-0"
          title={
            <>
              View Full Project
              <i className="uil uil-arrow-right ms-1" />
            </>
          }
        />
      </div>
    ) : null;

  return (
    <div>
      {/* Header Section */}
      <div className="text-center mb-8 projects-page-header">
        <div className="d-inline-flex align-items-center mb-3">
          <i className="uil uil-image fs-40 text-main me-2" />
          <h1 className="mb-0 oswald">
            Our <span className="text-main">Gallery</span>
          </h1>
        </div>
        <p className="fs-18 text-main roboto">A Look Inside Our Work</p>
      </div>

      {/* Category Tabs */}
      <div className="d-flex justify-content-center mb-10 flex-wrap">
        <ul className="nav nav-pills nav-pills-bg gallery-filter-tabs flex-wrap justify-content-center">
          {galleryCategories.map((category) => (
            <li key={category.id} className="nav-item">
              <button
                className={`nav-link ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleTabClick(category.id)}
                type="button"
              >
                {category.label}
                <span className="gallery-tab-count">{category.images.length}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Grid */}
      {images.length > 0 ? (
        <div className="row g-4 gallery-grid" key={currentCategory.id}>
          {images.map((image, index) => (
            <div key={image.id} className="col-6 col-md-4 col-lg-3">
              <button
                type="button"
                className="gallery-item-btn border-0 p-0 w-100"
                onClick={() => setLightboxIndex(index)}
                aria-label={`View ${image.alt} full size`}
              >
                <div className="project-card gallery-card h-100">
                  <div className="gallery-image-container position-relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={400}
                      unoptimized={true}
                      className="project-image"
                    />
                    <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center px-2">
                      <i className="uil uil-search-plus fs-30 text-white mb-2" />
                      {image.project && (
                        <span className="fs-14 text-white roboto gallery-overlay-title">
                          {image.project.title}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="fs-18 text-muted roboto mb-0">
            Photos for this category are coming soon.
          </p>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        images={images}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
        renderCaption={renderCaption}
      />
    </div>
  );
};

export default Gallery;

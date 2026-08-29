import { Fragment } from 'react';
import Gallery from 'components/Gallery';
import PageProgress from 'components/PageProgress';
import SEO from 'components/SEO';

/**
 * Gallery page - showcases photos grouped by area (kitchen, bathroom, bedroom, living room, elevation)
 */
const GalleryPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <SEO
        path="/gallery"
        title="Gallery"
        description="Browse photos of HBB Construction's work by area - kitchens, bathrooms, bedrooms, living rooms, and exterior elevations."
        image="/img/1-1.jpeg"
      />

      <main className="content-wrapper overflow-hidden projects-page">
        <section className="wrapper">
          <div className="container py-12 py-md-14">
            <Gallery />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default GalleryPage;

import { Fragment } from 'react';

// Components
import PageProgress from 'components/PageProgress';
import SEO from 'components/SEO';
import About from 'components/About';
import Team from 'components/Team';
import CoreAdvantages from 'components/CoreAdvantages';
import ConstructionTimeline from 'components/ConstructionTimeline';
import NextLink from 'components/NextLink';

// Data
import { aboutSection } from '../src/data';

const AboutUs = () => {
  return (
    <Fragment>
      <PageProgress />
      <SEO
        path="/aboutus"
        title="About Us"
        description="Learn about HBB Construction (Honey Badger Brothers) - our Bay Area team, in-house construction process, and commitment to residential building excellence."
        image="/img/1-1.jpeg"
      />

      <main className="content-wrapper overflow-hidden">
        <section id="about" className="wrapper">
          <div className="container py-12 py-md-14">
            <div className="mb-6">
              <NextLink
                href="/"
                title={
                  <Fragment>
                    <i className="uil uil-arrow-left me-2" />
                    Back to Home
                  </Fragment>
                }
                className="btn btn-outline-primary"
              />
            </div>
            <About {...aboutSection} />
          </div>
        </section>

        <section className="wrapper">
          <div className="container py-12 py-md-14">
            <CoreAdvantages />
          </div>
        </section>

        <section id="construction-timeline" className="wrapper">
          <div className="container py-md-10">
            <ConstructionTimeline />
          </div>
        </section>

        <section id="team" className="wrapper">
          <div className="container py-12 py-md-14">
            <Team />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default AboutUs;

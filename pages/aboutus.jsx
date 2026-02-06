import { Fragment } from 'react';
import Head from 'next/head';

// Components
import PageProgress from 'components/PageProgress';
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
      {/* Page loading progress bar */}
      <PageProgress />

      {/* Meta Information */}
      <Head>
        <title>About Us – HBB Construction</title>
        <meta name="description" content="Learn more about HBB Construction, our team, and our commitment to excellence in residential construction." />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* About Section */}
        <section className="wrapper">
          <div className="container py-12 py-md-14">
            {/* Back Button */}
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

        {/* Core Advantages */}
        <section className="wrapper">
          <div className="container py-12 py-md-14">
            <CoreAdvantages />
          </div>
        </section>

        {/* Construction Timeline */}
        <section id="construction-timeline" className="wrapper">
          <div className="container py-md-10">
            <ConstructionTimeline />
          </div>
        </section>

        {/* Our Team */}
        <section className="wrapper">
          <div className="container py-12 py-md-14">
            <Team />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default AboutUs;


import { Fragment } from 'react';
import Head from 'next/head';

// Components
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import WhyChoose from 'components/WhyChoose';
import Projects from 'components/Projects';
import Process from 'components/Process';
import Badges from 'components/Badges';

// Data
import { aboutSection, badgesData } from '../src/data';

const Home = () => {
  return (
    <Fragment>
      {/* Page loading progress bar */}
      <PageProgress />

      {/* Meta Information */}
      <Head>
        <title>HBB Construction</title>
        <meta name="description" content="Free Next.js website template for builders, contractors & construction firms – built with Bootstrap" />
      </Head>

      <main className="content-wrapper overflow-hidden">

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="about" className="wrapper">
          <div className="container py-8 py-md-10">
            <About {...aboutSection} />
          </div>
        </section>

        {/* Our Projects */}
        <section id="projects" className="wrapper">
          <div className="container py-8 py-md-10">
            <Projects />
          </div>
        </section>

        {/* Badges/Statistics */}
        <section 
          className="wrapper badges-wrapper"
          style={{
            backgroundImage: `url(${badgesData.backgroundImage})`
          }}
        >
          <div className="container py-12 py-md-14">
            <Badges />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="wrapper whychoose-bg">
          <div className="container py-8 py-md-10">
            <WhyChoose />
          </div>
        </section>

        {/* Our Process */}
        <section id="process" className="wrapper">
          <div className="container py-8 py-md-10">
            <Process />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;

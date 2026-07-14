import { Fragment } from 'react';

// Components
import PageProgress from 'components/PageProgress';
import SEO from 'components/SEO';
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
      <PageProgress />
      <SEO
        path="/"
        title="HBB Construction | Residential Builders in the Bay Area"
        description="Bay Area residential construction company specializing in custom homes, remodels, additions, and ADUs. Honey Badger Brothers Construction - built with integrity and precision."
        image="/img/1-1.jpeg"
        includeLocalBusiness
      />

      <main className="content-wrapper overflow-hidden">
        <Hero />

        <section id="about" className="wrapper">
          <div className="container py-md-10">
            <About {...aboutSection} />
          </div>
        </section>

        <section id="projects" className="wrapper">
          <div className="container py-md-10">
            <Projects />
          </div>
        </section>

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

        <section className="wrapper whychoose-bg">
          <div className="container py-md-10">
            <WhyChoose />
          </div>
        </section>

        <section id="process" className="wrapper">
          <div className="container py-md-10">
            <Process />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;

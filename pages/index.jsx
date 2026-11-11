import { Fragment } from 'react';

// Components
import PageProgress from 'components/PageProgress';
import SEO from 'components/SEO';
import Hero from 'components/Hero';
import About from 'components/About';
import WhyChoose from 'components/WhyChoose';
import FeaturedResidences from 'components/editorial/FeaturedResidences';
import PortfolioRibbon from 'components/editorial/PortfolioRibbon';
import Process from 'components/Process';
import Badges from 'components/Badges';
import PromoPopup from 'components/PromoPopup';

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
        image="/img/1-1.webp"
        includeLocalBusiness
      />

      <main id="main-content" className="content-wrapper overflow-hidden">
        <Hero />
        <PromoPopup />

        <section id="about" className="wrapper" data-section="about">
          <div className="container py-md-10">
            <About {...aboutSection} />
          </div>
        </section>

        <FeaturedResidences />
        <PortfolioRibbon />

        <section
          className="wrapper badges-wrapper"
          data-section="badges"
          style={{
            backgroundImage: `url(${badgesData.backgroundImage})`
          }}
        >
          <div className="container py-12 py-md-14">
            <Badges />
          </div>
        </section>

        <section className="wrapper whychoose-bg" data-section="why_choose">
          <div className="container py-md-10">
            <WhyChoose />
          </div>
        </section>

        <section id="process" className="wrapper" data-section="process">
          <div className="container py-md-10">
            <Process />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;

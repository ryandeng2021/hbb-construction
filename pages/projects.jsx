import { Fragment } from 'react';
import Projects from 'components/Projects';
import PageProgress from 'components/PageProgress';
import SEO from 'components/SEO';

/**
 * Projects page - displays the portfolio of all projects
 */
const ProjectsPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <SEO
        path="/projects"
        title="Our Projects"
        description="Explore HBB Construction's portfolio of Bay Area residential projects - custom homes, additions, remodels, and ADUs."
        image="/img/1-1.jpeg"
      />

      <main className="content-wrapper overflow-hidden projects-page">
        <section className="wrapper">
          <div className="container py-12 py-md-14">
            <Projects />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ProjectsPage;

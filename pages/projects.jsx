import { Fragment } from 'react';
import Head from 'next/head';
import Projects from 'components/Projects';
import PageProgress from 'components/PageProgress';

/**
 * Projects page - displays the portfolio of all projects
 */
const ProjectsPage = () => {
  return (
    <Fragment>
      {/* Page loading progress bar */}
      <PageProgress />

      {/* Meta Information */}
      <Head>
        <title>Our Projects – HBB Construction Portfolio</title>
        <meta 
          name="description" 
          content="Explore our portfolio of construction projects including commercial, residential, and industrial developments." 
        />
      </Head>

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


import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'components/NextLink';
import PageProgress from 'components/PageProgress';
import ProjectContent from 'components/ProjectContent';
import { projects } from '../../src/data.js';

/**
 * Individual project detail page
 */
const ProjectDetail = ({ project }) => {
  // If project not found
  if (!project) {
    return (
      <Fragment>
        <PageProgress />
        <Head>
          <title>Project Not Found – HBB Construction</title>
        </Head>
        <main className="content-wrapper">
          <div className="container py-12">
            <div className="text-center">
              <h1 className="mb-4">Project Not Found</h1>
              <p className="mb-4">The project you're looking for doesn't exist.</p>
              <NextLink href="/projects" title="Back to Projects" className="btn btn-primary" />
            </div>
          </div>
        </main>
      </Fragment>
    );
  }

  return (
    <Fragment>
      {/* Page loading progress bar */}
      <PageProgress />

      {/* Meta Information */}
      <Head>
        <title>{project.title} – HBB Construction</title>
        <meta name="description" content={project.description} />
      </Head>

      <main className="content-wrapper overflow-hidden">
        <section className="wrapper">
          <div className="container py-12 py-md-14 container-project-detail">
            {/* Back Button */}
            <div className="mb-6">
              <NextLink 
                href="/projects" 
                title={
                  <Fragment>
                    <i className="uil uil-arrow-left me-2" />
                    Back to Projects
                  </Fragment>
                }
                className="btn btn-outline-primary"
              />
            </div>

            {/* Project Header */}
            <div className="text-center mb-8">
              <span className="badge bg-primary mb-3">{project.category}</span>
              <h1 className="mb-3 oswald">{project.title}</h1>
              <div className="d-flex justify-content-center gap-4 text-muted">
                <span>
                  <i className="uil uil-map-marker me-1" />
                  {project.location}
                </span>
                <span>
                  <i className="uil uil-calendar-alt me-1" />
                  {project.year}
                </span>
                <span>
                  <i className="uil uil-check-circle me-1" />
                  {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                </span>
              </div>
            </div>

            {/* Project Content - Hero Image and Sections */}
            <ProjectContent
              heroImage={project.heroImage || project.image}
              heroAlt={project.title}
              sections={project.content || []}
            />

            {/* Project Overview Description (if no content sections) */}
            {(!project.content || project.content.length === 0) && (
              <div className="row mb-8">
                <div className="col-lg-8 mx-auto">
                  <h2 className="mb-4 oswald">Project Overview</h2>
                  <p className="roboto fs-16 mb-4">{project.description}</p>
                </div>
              </div>
            )}

            {/* Related Projects */}
            <div className="row mt-10">
              <div className="col-12">
                <h2 className="mb-6 text-center oswald">Related Projects</h2>
                <div className="row g-4">
                  {projects
                    .filter(p => p.id !== project.id && p.category === project.category)
                    .slice(0, 3)
                    .map((relatedProject) => (
                      <div key={relatedProject.id} className="col-md-4">
                        <NextLink 
                          href={`/projects/${relatedProject.slug}`}
                          title={
                            <div className="card border-0 shadow-sm h-100 project-card">
                              <div className="card-img-top mb-0 overflow-hidden">
                                <Image
                                  src={relatedProject.image}
                                  alt={relatedProject.title}
                                  width={400}
                                  height={250}
                                  unoptimized={true}
                                  className="w-100"
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                              <div className="card-body">
                                <h3 className="card-title fs-18 fw-bold oswald mb-2">
                                  {relatedProject.title}
                                </h3>
                                <p className="card-text text-muted roboto small mb-0">
                                  {relatedProject.category}
                                </p>
                              </div>
                            </div>
                          }
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

// Generate static paths for all projects
export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false, // Return 404 for pages not generated at build time
  };
}

// Fetch data for each project page
export async function getStaticProps({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  return {
    props: {
      project: project || null,
    },
  };
}

export default ProjectDetail;


import Arrow from 'components/editorial/Arrow';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Photo from 'components/editorial/Photo';
import { projectIntroduction } from 'components/editorial/projectCopy';
import { projectPresentation } from 'components/editorial/projectMedia';
import Reveal from 'components/editorial/Reveal';
import { projectName, projectType } from 'components/editorial/projectHelpers';
import NextLink from 'components/NextLink';
import PageProgress from 'components/PageProgress';
import ProjectContent from 'components/editorial/ProjectGallery';
import SEO from 'components/SEO';
import TourBookingModal from 'components/TourBookingModal';
import { projects } from '../../src/data';
import { absoluteUrl, absoluteAssetUrl, truncateMeta } from '../../src/data/site';
import { tourBooking } from '../../src/data/tourBooking';
import { track } from '../../src/utils/analytics';

/**
 * Individual project detail page
 */
const ProjectDetail = ({ project }) => {
  const [isTourFormOpen, setIsTourFormOpen] = useState(false);

  // Only sites still under construction can be walked
  const offersTours = project?.status === 'ongoing';
  // If project not found
  if (!project) {
    return (
      <Fragment>
        <PageProgress />
        <SEO
          path="/projects"
          title="Project Not Found"
          noindex
        />
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

  const presentation = projectPresentation(project);
  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: truncateMeta(project.description),
    image: absoluteAssetUrl(presentation.cover || project.image),
    url: absoluteUrl(`/projects/${project.slug}`),
    locationCreated: project.location
      ? { '@type': 'Place', name: project.location }
      : undefined,
    dateCreated: project.year ? String(project.year) : undefined,
    creator: {
      '@type': 'Organization',
      name: 'HBB Construction',
    },
  };

  return (
    <Fragment>
      <PageProgress />
      <SEO
        path={`/projects/${project.slug}`}
        title={project.title}
        description={
          project.description ||
          `${project.title} — ${project.category || 'residential project'} by HBB Construction${project.location ? ` in ${project.location}` : ''}.`
        }
        image={presentation.cover || project.image || project.heroImage}
        jsonLd={projectJsonLd}
      />

      <main id="main-content" className="ed-detail" data-section="project_detail" data-project={project.slug}>
        <header className="ed-detail-heading ed-section">
          <Link href="/projects" className="ed-back">← Back to all work</Link>
          <div className="ed-detail-title"><div><span className="ed-eyebrow">{project.location} / {projectType(project)}</span><h1>{projectName(project)}</h1></div><p>{project.year} · {project.status === 'completed' ? 'Completed' : 'In progress'}</p></div>
        </header>
        <div className={`ed-section hbb-project-introduction ${presentation.cover ? '' : 'hbb-introduction-no-cover'}`}>
          {presentation.cover && <div className="ed-detail-hero"><Photo src={presentation.cover} alt={`${project.title} in ${project.location}`} priority sizes="(max-width: 800px) 88vw, 50vw" /></div>}
          <section className="ed-project-overview"><dl>{[['Location',project.location],['Scope',projectType(project)],['Year',project.year],['Builder','HBB Construction']].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><Reveal><p>{projectIntroduction(project)}</p></Reveal></section>
        </div>
        <div className="ed-section ed-detail-content"><ProjectContent heroAlt={`${project.title} in ${project.location}`} media={presentation.media} introduction={projectIntroduction(project)} /></div>
        {offersTours && <section className="ed-section ed-tour" data-section="tour_cta"><span className="ed-eyebrow">See the work in person</span><h2>{tourBooking.heading}</h2><p>{tourBooking.body}</p><button className="ed-button" type="button" onClick={() => { track("tour_form_open", { project: project.slug }); setIsTourFormOpen(true); }}>{tourBooking.buttonLabel} <Arrow /></button></section>}
        <section className="ed-section ed-next-project"><span className="ed-eyebrow">Continue exploring</span>{(() => { const next = projects[(projects.findIndex(p => p.id === project.id) + 1) % projects.length]; return <Link href={`/projects/${next.slug}`}><div><h2>{projectName(next)}</h2><p>{projectType(next)} · {next.location}</p></div><span aria-hidden="true"><Arrow /></span><Photo src={next.image} alt={`${next.title} in ${next.location}`} /></Link>; })()}</section>
      </main>

      <TourBookingModal
        isOpen={isTourFormOpen}
        onClose={() => setIsTourFormOpen(false)}
        projectTitle={project.title}
        projectSlug={project.slug}
        projectLocation={project.location}
      />
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


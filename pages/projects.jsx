import SEO from 'components/SEO';
import Projects from 'components/Projects';
import Reveal from 'components/editorial/Reveal';

export default function ProjectsPage() {
  return <><SEO path="/projects" title="Our Work | Bay Area Homes & Renovations" description="Explore HBB Construction’s Bay Area portfolio of custom homes, additions, remodels and ADUs. Find residences by city and project type." image="/img/1-1.webp" /><main id="main-content" className="ed-portfolio ed-section"><header className="ed-portfolio-intro"><Reveal><h1 className="hbb-portfolio-title">The HBB Portfolio</h1></Reveal><p>New beginnings. Thoughtful transformations.<br />Explore the places we help bring to life.</p></header><Projects /></main></>;
}

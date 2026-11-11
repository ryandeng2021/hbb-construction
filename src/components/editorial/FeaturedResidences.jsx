import Link from 'next/link';
import { projects } from '../../data';
import Photo from './Photo';
import Reveal from './Reveal';
import Arrow from './Arrow';
import { projectType, projectName } from './projectHelpers';

export default function FeaturedResidences() {
  const featured = [20, 24, 27].map(id => projects.find(project => project.id === id)).filter(Boolean);
  return <div className="ed-site hbb-featured-residences"><section id="projects" className="ed-section ed-selected" data-section="projects">{featured.map((project,index)=><Reveal key={project.id} className={`ed-feature ed-feature-${index}`}><Link className="ed-feature-image" href={`/projects/${project.slug}`}><Photo src={project.image} alt={`${projectType(project)} in ${project.location}`} /><span className="ed-image-arrow" aria-hidden="true"><Arrow /></span></Link><div className="ed-feature-copy"><span className="ed-eyebrow">0{index+1} / {projectType(project)}</span><h3><Link href={`/projects/${project.slug}`}>{projectName(project)}</Link></h3><p>{project.description}</p><Link className="ed-text-link" href={`/projects/${project.slug}`}>Explore the residence <Arrow /></Link></div></Reveal>)}</section></div>;
}

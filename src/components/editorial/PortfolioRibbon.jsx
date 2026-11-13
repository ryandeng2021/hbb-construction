import { useState } from 'react';
import Link from 'next/link';
import { projects } from '../../data';
import Photo from './Photo';
import Arrow from './Arrow';

export default function PortfolioRibbon() {
  const [paused,setPaused]=useState(false);
  return <section className={`hbb-portfolio-ribbon ${paused?'is-paused':''}`} data-section="portfolio_ribbon" aria-label="Explore the full HBB portfolio"><div className="hbb-ribbon-heading"><Link href="/projects">View Our Portfolio <Arrow /></Link><button type="button" onClick={()=>setPaused(!paused)} aria-label={paused?'Play portfolio thumbnails':'Pause portfolio thumbnails'}>{paused?'Play':'Pause'}</button></div><div className="hbb-ribbon-window"><div className="hbb-ribbon-track">{[0,1].map(copy=><div className="hbb-ribbon-group" key={copy} aria-hidden={copy===1?true:undefined}>{projects.map(project=><Link key={project.id} href={`/projects/${project.slug}`} tabIndex={copy===1?-1:undefined} aria-label={`${project.location}: ${project.title}`}><Photo src={project.image} alt="" sizes="160px" /><span>{project.location}</span></Link>)}</div>)}</div></div></section>;
}

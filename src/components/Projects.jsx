import Arrow from './editorial/Arrow';
import { useState } from 'react';
import Link from 'next/link';
import { projects } from '../data';
import { track } from '../utils/analytics';
import Photo from './editorial/Photo';
import { projectPresentation } from './editorial/projectMedia';
import { projectType, projectName } from './editorial/projectHelpers';

export default function Projects() {
  const [city, setCity] = useState('All cities');
  const [type, setType] = useState('All project types');
  const [status, setStatus] = useState('All projects');
  const cities = [...new Set(projects.map(p => p.location))].sort();
  const types = [...new Set(projects.map(projectType))].sort();
  const filtered = projects.filter(p => (city === 'All cities' || p.location === city) && (type === 'All project types' || projectType(p) === type) && (status === 'All projects' || p.status === status));
  const reset = () => { setCity('All cities'); setType('All project types'); setStatus('All projects'); };
  return <>
    <div className="ed-filters"><div><label htmlFor="project-city">Location</label><select id="project-city" value={city} onChange={e => (setCity(e.target.value), track('project_filter', { city: e.target.value }))}><option>All cities</option>{cities.map(c => <option key={c}>{c}</option>)}</select></div><div><label htmlFor="project-type">Project type</label><select id="project-type" value={type} onChange={e => (setType(e.target.value), track('project_filter', { filter: e.target.value }))}><option>All project types</option>{types.map(t => <option key={t}>{t}</option>)}</select></div><div><label htmlFor="project-status">Status</label><select id="project-status" value={status} onChange={e => (setStatus(e.target.value), track('project_filter', { status: e.target.value }))}><option>All projects</option><option value="completed">Completed</option><option value="ongoing">In progress</option></select></div><button type="button" onClick={reset} className="ed-reset">Reset filters ↺</button></div>
    <p className="ed-results" role="status">{filtered.length} {filtered.length === 1 ? 'residence' : 'residences'}</p>
    <div className="ed-project-grid">{filtered.map(project => <Link key={project.id} href={`/projects/${project.slug}`} className="ed-project-card"><div className="ed-project-photo"><Photo src={projectPresentation(project).cover || project.image} alt={`${projectType(project)} in ${project.location}`} /><span className="ed-image-arrow" aria-hidden="true"><Arrow /></span></div><div className="ed-project-caption"><div><h2>{projectName(project)}</h2><p>{projectType(project)} · {project.year}{project.status === 'ongoing' ? ' · In progress' : ''}</p></div><span aria-hidden="true"><Arrow /></span></div></Link>)}</div>
    {!filtered.length && <div className="ed-empty"><h2>No residences match this selection.</h2><p>Try another city or project type to explore more of our work.</p><button className="ed-button" onClick={reset} type="button">Show all projects <Arrow /></button></div>}
  </>;
}

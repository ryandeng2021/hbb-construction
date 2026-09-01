import { useState } from 'react';
import Image from 'next/image';
import NextLink from './NextLink';
import { projects } from '../data';

/**
 * Projects component - displays a portfolio of projects with filtering tabs
 * and a grid of project images that link to individual project pages.
 *
 * @returns JSX.Element
 */
// Buckets each project's free-form category text into one of the filter tabs
const getCategoryGroup = (category = '') => {
  const normalized = category.toLowerCase();
  if (normalized.includes('adu')) return 'adu';
  if (normalized.includes('construction')) return 'new-construction';
  return 'remodel-addition';
};

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'remodel-addition', label: 'Remodel & Addition' },
  { key: 'new-construction', label: 'New Construction' },
  { key: 'adu', label: 'ADU' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter projects based on active tab
  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(project => getCategoryGroup(project.category) === activeFilter);

  return (
    <div>
      {/* Header Section */}
      <div className="text-center mb-8 projects-page-header">
        <div className="d-inline-flex align-items-center mb-3">
          <i className="uil uil-hard-hat fs-40 text-main me-2" />
          <h1 className="mb-0 oswald">
            Our <span className="text-main">Projects</span>
          </h1>
        </div>
        <p className="fs-18 text-main roboto">Our Art Of Work</p>
      </div>

      {/* Filter Tabs */}
      <div className="d-flex justify-content-center mb-10">
        <ul className="nav nav-pills nav-pills-bg project-filter-tabs">
          {FILTERS.map(filter => (
            <li className="nav-item" key={filter.key}>
              <button
                className={`nav-link ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
                type="button"
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Grid */}
      <div className="row g-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-4">
            <NextLink 
              href={`/projects/${project.slug}`} 
              title={
                <div className="card border-0 shadow-sm h-100 project-card">
                  <div className="card-img-top mb-0 overflow-hidden position-relative project-image-container">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      unoptimized={true}
                      className="project-image"
                    />
                    <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <i className="uil uil-search-plus fs-30 text-white" />
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title fs-30 fw-bold oswald mb-2">{project.title}</h3>
                    <p className="card-text text-muted roboto mb-0 small">
                      <i className="uil uil-map-marker me-1" />
                      {project.location}
                      <span className="mx-2">•</span>
                      <i className="uil uil-calendar-alt me-1" />
                      {project.year}
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


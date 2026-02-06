import React from 'react';
import { constructionTimeline } from '../data';

/**
 * ConstructionTimeline component - displays construction process timeline
 * Shows 7 steps in two rows with connecting lines
 * 
 * @returns JSX.Element
 */
const ConstructionTimeline = () => {
  const { projectInfo, steps } = constructionTimeline;
  
  // Split steps into two rows: first 4 in upper row, last 3 in lower row
  const upperRowSteps = steps.slice(0, 4);
  const lowerRowSteps = steps.slice(4, 7);

  return (
    <div className="construction-timeline">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="d-inline-flex align-items-center mb-3">
          <i className="uil uil-building fs-40 text-primary me-2" />
          <h1 className="mb-0 oswald">
            Construction <span className="text-primary">Process</span>
          </h1>
        </div>
      </div>

      {/* Project Info Section */}
      <div className="construction-timeline-info">
        <div className="timeline-info-item">
          <strong>Timeline:</strong> {projectInfo.timeline}
        </div>
        <div className="timeline-info-item">
          <strong>Cost Range:</strong> {projectInfo.costRange}
        </div>
        <div className="timeline-info-item">
          <strong>Price Includes:</strong> {projectInfo.priceIncludes}
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="construction-timeline-steps">
        {/* Upper Row - Steps 1-4 */}
        <div className="timeline-row timeline-row-upper">
          {upperRowSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="timeline-step">
                <div className="timeline-step-number">{step.number}</div>
                <div className="timeline-step-content">
                  <h3 className="timeline-step-title oswald">{step.title}</h3>
                  <div className="timeline-step-duration roboto text-muted">{step.duration}</div>
                  <p className="timeline-step-description roboto">{step.description}</p>
                </div>
              </div>
              {/* Connector arrow (except after last item) */}
              {index < upperRowSteps.length - 1 && (
                <div className="timeline-connector">
                  <i className="uil uil-arrow-right timeline-arrow"></i>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Lower Row - Steps 5-7 */}
        <div className="timeline-row timeline-row-lower">
          {lowerRowSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="timeline-step">
                <div className="timeline-step-number">{step.number}</div>
                <div className="timeline-step-content">
                  <h3 className="timeline-step-title oswald">{step.title}</h3>
                  <div className="timeline-step-duration roboto text-muted">{step.duration}</div>
                  <p className="timeline-step-description roboto">{step.description}</p>
                </div>
              </div>
              {/* Connector arrow (except after last item) */}
              {index < lowerRowSteps.length - 1 && (
                <div className="timeline-connector">
                  <i className="uil uil-arrow-right timeline-arrow"></i>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionTimeline;


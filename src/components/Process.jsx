import React, { useState, useEffect } from 'react';
import { processSteps } from '../data';

/**
 * Process component - displays workflow steps as flip cards
 * Cards flip on hover to show more details
 * Cards are displayed in rows from left to right
 * 
 * @returns JSX.Element
 */
const Process = () => {
  const [itemsPerRow, setItemsPerRow] = useState(processSteps.itemsPerRow || 4);

  useEffect(() => {
    // Detect mobile screen size and adjust itemsPerRow
    const handleResize = () => {
      if (window.innerWidth <= 991.98) {
        setItemsPerRow(2); // 2 items per row on mobile
      } else {
        setItemsPerRow(processSteps.itemsPerRow || 4); // Desktop itemsPerRow
      }
    };

    // Set initial value
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="d-inline-flex align-items-center mb-3">
          <i className="uil uil-processor fs-40 text-primary me-2" />
          <h1 className="mb-0 oswald">
            Our <span className="text-primary">Process</span>
          </h1>
        </div>
        {processSteps.description && (
          <p className="lead roboto text-muted mt-4">{processSteps.description}</p>
        )}
      </div>

      {/* Process Steps Grid */}
      <div className="process-workflow">
        {(() => {
          // Sort steps by id to ensure correct order (1-6)
          const sortedSteps = [...processSteps.steps].sort((a, b) => a.id - b.id);
          const rows = [];
          
          // Group steps into rows dynamically based on itemsPerRow
          for (let i = 0; i < sortedSteps.length; i += itemsPerRow) {
            rows.push(sortedSteps.slice(i, i + itemsPerRow));
          }
          
          return rows.map((row, rowIndex) => {
            const isLastRow = rowIndex === rows.length - 1;
            
            return (
              <div 
                key={rowIndex} 
                className="process-row"
              >
                {row.map((step, stepIndex) => {
                  const originalIndex = sortedSteps.findIndex(s => s.id === step.id);
                  const isLastInRow = stepIndex === row.length - 1;
                  
                  // Show down connector on the last card of each row (except last row)
                  const shouldConnectDown = !isLastRow && isLastInRow;
                  const shouldConnectUp = false; // Disabled to prevent duplicate vertical arrows
                  
                  return (
                    <React.Fragment key={step.id}>
                      <div className={`process-step-wrapper ${shouldConnectDown ? 'has-down-connection' : ''} ${shouldConnectUp ? 'has-up-connection' : ''}`}>
                        {/* Vertical connector from above */}
                        {shouldConnectUp && (
                          <div className="process-vertical-connector-up">
                            <div className="process-connector-down">
                              <i className="uil uil-arrow-down" />
                            </div>
                          </div>
                        )}
                        
                        {/* Process Card */}
                        <div className="process-card-container">
                          <div className="process-card">
                            {/* Front of Card */}
                            <div className="process-card-front">
                              <div className="process-card-number">
                                {step.number || (originalIndex + 1 < 10 ? `0${originalIndex + 1}` : originalIndex + 1)}
                              </div>
                              <h3 className="process-card-title oswald">{step.title}</h3>
                              {step.duration && (
                                <div className="process-card-duration roboto text-muted">
                                  {step.duration}
                                </div>
                              )}
                              {step.icon && (
                                <div className="process-card-icon">
                                  <i className={step.icon} />
                                </div>
                              )}
                            </div>
                            
                            {/* Back of Card */}
                            <div className="process-card-back">
                              <h3 className="process-card-back-title oswald">{step.title}</h3>
                              <p className="process-card-description roboto">{step.description}</p>
                              {step.details && step.details.length > 0 && (
                                <ul className="process-card-details">
                                  {step.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="roboto">{detail}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            );
          });
        })()}
      </div>
    </div>
  );
};

export default Process;

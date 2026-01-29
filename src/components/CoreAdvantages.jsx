import { Fragment } from 'react';
import Image from 'next/image';
import { coreAdvantages } from '../data';

/**
 * CoreAdvantages component - displays advantages in a 2-column grid
 * Each advantage has a heading, description, and image (image on left, text on right)
 */
const CoreAdvantages = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="oswald mb-0">
          {coreAdvantages.title}
        </h1>
      </div>

      {/* Advantages Grid - 2 columns per row */}
      <div className="row g-4">
        {coreAdvantages.items.map((advantage) => (
          <div key={advantage.id} className="col-md-6">
            <div className="core-advantage-item">
              <div className="row g-3 align-items-center">
                {/* Image Column - Always on Left */}
                <div className="col-5">
                  <div className="core-advantage-image">
                    <Image
                      src={advantage.image}
                      alt={advantage.heading.replace(/\n/g, ' ')}
                      width={300}
                      height={200}
                      unoptimized={true}
                      className="w-100 rounded"
                      style={{
                        objectFit: 'cover',
                        height: '200px'
                      }}
                    />
                  </div>
                </div>

                {/* Content Column - Always on Right */}
                <div className="col-7">
                  <div className="core-advantage-content">
                    <h3 className="oswald fs-20 fw-bold mb-2">
                      {advantage.heading.split('\n').map((line, i) => (
                        <Fragment key={i}>
                          {line}
                          {i < advantage.heading.split('\n').length - 1 && <br />}
                        </Fragment>
                      ))}
                    </h3>
                    <p className="roboto mb-0 small">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreAdvantages;


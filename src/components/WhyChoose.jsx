import Image from 'next/image';
import { whyChoose, whyChooseSection } from '../data';

/**
 * WhyChoose component - displays a section highlighting reasons to choose the company,
 * including an image and a list of key points.
 *
 * @returns JSX.Element
 */
const WhyChoose = () => {
  return (
    <div className="row gx-lg-8 align-items-center">
      {/* Image Section - shown on larger screens second */}
      <div className="order-lg-2 col-lg-6">
        <Image
          src={whyChooseSection.image.src}
          alt={whyChooseSection.image.alt}
          width={whyChooseSection.image.width}
          height={whyChooseSection.image.height}
          unoptimized={true} // disables Next.js optimization for this image
          className="position-static"
          style={{objectFit: 'contain', maxInlineSize: '100%'}}
        />
      </div>

      {/* Text Content Section - shown first on larger screens */}
      <div className="col-lg-6 why-choose-text-content">
        {/* Section label */}
        <h3 className="fs-16 text-main d-inline rounded-pill oswald">
          {whyChooseSection.subHeading}
        </h3>

        {/* Main headline */}
        <h2 className="mb-5 mt-3 justify-content-start oswald why-choose-heading">
          {whyChooseSection.heading}
          <span className='why-choose-span' >{whyChooseSection.span}</span>
          {whyChooseSection.location}
        </h2>

        {/* List of reasons with icons */}
        <div>
          <ul className="icon-list bullet-bg mb-0">
            {whyChoose.map(({ id, title, description }) => (
              <li key={id}>
                <div className="d-flex align-items-center">
                  {/* Check icon */}
                  <i className="uil uil-check primary-bg text-white p-1" />
                  <h3 className="ms-2 fw-bold fs-20 oswald">{title}</h3>
                </div>
                <p className="roboto why-choose-description">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

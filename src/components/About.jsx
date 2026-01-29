import NextLink from './NextLink';
import Image from 'next/image';

const About = (props) => {
  const {
    heading,
    headingH1,
    subHeading,
    para,
    para2,
    para3,
    imgPosition,
    src,
    btnTitle,
    btnUrl,
    video,
    span,
  } = props;

  // Conditionally render video or image
  const renderMedia = () => {
    if (video) {
      return (
        <video
          className="mr-5"
          style={{ maxWidth: '100%', borderRadius: '10px' }}
          autoPlay
          muted
          loop
          src={video?.src}
          alt={video?.alt}
          controls
        />
      );
    } else {
      return (
        <Image
          alt={`${headingH1 || heading} ${span} | HBB Construction`}
          src={src}
          width={600}
          height={700}
          unoptimized
          className="position-static"
          style={{objectFit: 'contain'}}
        />
      );
    }
  };

  return (
    <div className="row gx-lg-8 align-items-center">
      {/* Media Section (Image or Video) */}
      <div className={`${imgPosition === 'right' ? 'order-lg-2' : 'order-lg-1'} col-lg-6`} style={{overflow: 'hidden'}}>
        {renderMedia()}
      </div>

      {/* Content Section */}
      <div className={`${imgPosition === 'right' ? 'order-lg-1' : 'order-lg-2'} col-lg-6`}>
        {/* Heading H1 with Optional Span */}
        {headingH1 && (
          <h1 className="mb-3 mt-4 justify-content-start oswald">
            {headingH1}
            {span && <span className="ms-2">{span}</span>}
          </h1>
        )}

        {/* Heading H2 (if H1 not provided) */}
        {!headingH1 && heading && (
          <h2 className="mb-3 mt-3 justify-content-start fs-34 fw-bold oswald">
            {heading}
            {span && <span className="ms-2 fs-34 fw-bold oswald">{span}</span>}
          </h2>
        )}

        {/* Main and Additional Paragraphs */}
        {para && <p className="mb-8 text-justify roboto">{para}</p>}
        {para2 && <p className="mb-3 text-justify roboto">{para2}</p>}
        {para3 && <p className="mb-3 text-justify roboto">{para3}</p>}

        {/* Optional Button */}
        {btnTitle && btnUrl && (
          <div className="mt-5">
            <NextLink
              title={btnTitle}
              href={btnUrl}
              className="btn btn-md bg-primary text-white rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;

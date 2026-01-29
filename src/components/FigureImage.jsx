import Image from 'next/image';

/**
 * FigureImage component wraps Next.js Image inside a <div> element.
 * It ensures responsive width and preserves aspect ratio.
 * 
 * @param {Object} props
 * @param {string} props.className - CSS classes for the <div> wrapper
 * @param {string} props.src - Image source URL/path
 * @param {number} props.width - Image width (required by Next.js Image)
 * @param {number} props.height - Image height (required by Next.js Image)
 * @param {Object} others - Other props forwarded to <div>
 */
const FigureImage = (props) => {
  const { className, src, width, height, ...others } = props;

  return (
    // Wrapper <div> element, can receive custom classes and other props
    <div className={className} {...others}>
      <Image
        src={src}
        alt="Page Not Found | HBB Construction"  // Provide meaningful alt text or consider passing as prop
        width={width}
        height={height}
        unoptimized={true} // Disable optimization (useful for external or dynamic images)
        style={{
          width: '100%',  // Responsive width
          height: 'auto'  // Maintain aspect ratio
        }}
      />
    </div>
  );
};

export default FigureImage;

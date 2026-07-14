import { getAssetPath } from '../utils/path';

export const whyChooseSection = {
  subHeading: 'Why Choose Us ?',
  heading: 'Transforming Residential',
  span: ' Construction',
  location: ' in Bay Area',
  image: {
    src: getAssetPath('/img/6-1.jpg'),
    alt: 'Transforming Residential Construction in Bay Area | HBB CONSTRUCTION',
    width: 600,
    height: 700
  }
};

// Reasons to choose the company - could be shown on homepage or services page
export const whyChoose = [

  {
    id: 1,
    title: 'In-House Expertise, End-to-End Control',
    description:
      'Design, structural engineering, and construction are handled in-house, ensuring seamless coordination from concept to completion.'
  },
  {
    id: 2,
    title: 'Self-Performed Structural Work',
    description:
      'Foundation and framing are completed by our own crews using company-owned equipment, allowing for tighter quality control and more reliable schedules.'
  },
  {
    id: 3,
    title: 'Experienced, Dedicated Teams',
    description:
      'With specialized crews for structure, electrical, and interior finishes, each phase is executed by skilled professionals focused on precision and efficiency.'
  },
  {
    id: 4,
    title: '70+ Successfully Built Projects',
    description: 'With over 30 completed residential and commercial projects, we bring proven experience, reliable execution, and consistent results to every build.'
  }
];

// Projects data - 9 projects for the portfolio
// 
// Content Structure:
// - heroImage: Hero image displayed at the top (optional, falls back to 'image')
// - content: Array of sections, each section can have:
//   - layout: 'one', 'two', or 'three' (defaults to 'one' if not specified, for images only)
//   - images: Array of image objects or strings
//     - If string: just the image path
//     - If object: { src: 'path', alt: 'text', description: 'optional text under image' }
//   - video: Object with { src: 'path', alt: 'text' } (takes precedence over images if both are present)
//   - description: Optional shared description for the section
// 
// Examples:
// Single image: { layout: 'one', images: ['/img/image.webp'], description: 'Optional text' }
// Two images: { layout: 'two', images: ['/img/img1.webp', '/img/img2.webp'] }
// Two images with individual descriptions: 
//   { layout: 'two', images: [
//     { src: '/img/img1.webp', alt: 'Image 1', description: 'Text for image 1' },
//     { src: '/img/img2.webp', alt: 'Image 2', description: 'Text for image 2' }
//   ]}
// Three images: { layout: 'three', images: ['/img/img1.webp', '/img/img2.webp', '/img/img3.webp'] }
// Three images with individual descriptions:
//   { layout: 'three', images: [
//     { src: '/img/img1.webp', alt: 'Image 1', description: 'Text for image 1' },
//     { src: '/img/img2.webp', alt: 'Image 2', description: 'Text for image 2' },
//     { src: '/img/img3.webp', alt: 'Image 3', description: 'Text for image 3' }
//   ]}
// Video section: { layout: 'one', video: { src: '/video/project.mp4', alt: 'Project Video' }, description: 'Optional text' }

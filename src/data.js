import { getAssetPath } from './utils/path';

// Background images used across the website
// Note: getAssetPath will automatically prefix with basePath in production
export const backgroundImages = {
  hero: getAssetPath('/img/1-1.jpeg'),
  // footer: getAssetPath('/img/bg-sp.jpg'),
  imgBg: getAssetPath('/img/img-bg.webp'),
  // whyChoose: getAssetPath('/img/bg-sp.jpeg'), 
  icon: getAssetPath('/img/logo.svg')
};

// Hero carousel images
// Note: getAssetPath will automatically prefix with basePath in production
export const heroCarousel = [
  {
    id: 1,
    image: getAssetPath('/img/1-1.jpeg'),
    title: 'Residential Construction Company in Bay Area',
    subtitle: "We Don't Just Build Homes, We Shape Your Future."
  },
  {
    id: 15,
    image: getAssetPath('/img/14-2.jpg'),
    title: 'Single Family Home Remodel',
    subtitle: 'Building Excellence, One Project at a Time.'
  },
  {
    id: 2,
    image: getAssetPath('/img/2-1.jpeg'),
    title: 'Quality Construction Services',
    subtitle: 'Built with integrity. Delivered with precision.'
  },
  {
    id: 3,
    image: getAssetPath('/img/3-1.jpeg'),
    title: 'Your Trusted Construction Partner',
    subtitle: 'Transforming Visions into Reality.'
  },
  {
    id: 4,
    image: getAssetPath('/img/4-1.jpg'),
    title: 'Transforming Residential Construction in California',
    subtitle: 'Thoughtfully built homes, made to last.'
  },
  {
    id: 5,
    image: getAssetPath('/img/5-1.jpeg'),
    title: 'Transforming Residential Construction in California',
    subtitle: 'Custom homes. Exceptional execution.'
  },
  {
    id: 6,
    image: getAssetPath('/img/6-1.jpg'),
    title: 'Transforming Residential Construction in California',
    subtitle: 'Homes crafted with care and attention to detail.'
  },
  {
    id: 6,
    image: getAssetPath('/img/7-1.jpeg'),
    title: 'Transforming Residential Construction in California',
    subtitle: 'Precision-built spaces for modern living.'
  }
];

// Navigation links used across the website
export const usefulLinks = [
  { id: 1, title: 'Home' },
  { id: 2, title: 'About Us' },
  { id: 3, title: 'Projects' },
  { id: 4, title: 'Contact Us' }, // fixed id gap from 3 to 5
  { id: 5, title: 'Privacy Policy' } // fixed id gap from 5 to 7
];

// Navigation menu items with dropdowns
export const navigationMenu = [
  {
    id: 1,
    title: 'Home',
    href: '/',
    hasDropdown: false
  },
  {
    id: 2,
    title: 'About',
    href: '/aboutus',
    hasDropdown: true,
    dropdownItems: [
      { id: 1, title: 'About', href: '/aboutus/#about' },
      { id: 2, title: 'Team', href: '/aboutus/#team' },
      { id: 3, title: 'Service', href: '/#process' },
    ]
  },
  {
    id: 3,
    title: 'Projects',
    href: '/#projects',
    hasDropdown: false
  },
  {
    id: 4,
    title: 'Contact Us',
    href: '/#contact',
    hasDropdown: false
  }
];

// Process/Workflow steps data
export const processSteps = {
  description: 'Our streamlined process ensures quality, efficiency, and satisfaction at every stage of your project.',
  itemsPerRow: 3, // Number of items per row on desktop (will adapt on mobile)
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Site Assessment',
      icon: 'uil uil-map-marker',
      duration: 'Free | 1-2 hours',
      description: 'On-site evaluation of your house, structure, and lot. We provide feasibility advice and general direction based on regulations and your needs.',
    },
    {
      id: 2,
      number: '02',
      title: 'Proposal & Quote',
      icon: 'uil uil-file-alt',
      duration: 'Free | 1 week',
      description: 'Clear construction quote and project scope to help you understand budget and timeline.',
    },
    {
      id: 3,
      number: '03',
      title: 'On-Site Project Visit',
      icon: 'uil uil-eye',
      duration: 'Free | 2-3 hours',
      description: 'Visit ongoing projects to see construction quality, craftsmanship, and site management firsthand.',
    },
    {
      id: 4,
      number: '04',
      title: 'Permit Submission',
      icon: 'uil uil-file-check-alt',
      duration: '3-8 weeks',
      description: 'Coordinate design, structural, and engineering documents for city permit submission. Approval usually takes 3-6 months, including review comments and revisions.',
    },
    {
      id: 5,
      number: '05',
      title: 'Pre-Construction',
      icon: 'uil uil-clipboard-notes',
      duration: '3-8 weeks',
      description: 'Schedule, material confirmation, site protection, neighbor notifications, and safety planning.',
    },
    {
      id: 6,
      number: '06',
      title: 'Construction Phase',
      icon: 'uil uil-home',
      duration: '3-6 months',
      description: 'Complete workflow from foundation to structure, MEP, and interior/exterior finishes. Regular progress updates provided.',
    }
  ]
};

// Badges/Statistics data
export const badgesData = {
  backgroundImage: getAssetPath('/img/bg-sp.jpg'),
  items: [
    {
      id: 1,
      number: 30,
      suffix: '+',
      label: 'Successfully Built Homes'
    },
    {
      id: 2,
      number: 15,
      suffix: '+',
      label: 'Years of Experience'
    },
    {
      id: 3,
      number: 10,
      suffix: '+',
      label: 'Cities & Jurisdictions Navigated'
    },
    {
      id: 4,
      number: 8000,
      prefix: '$',
      suffix: 'M',
      label: 'Construction Value'
    }
  ]
};

// Footer data
export const footerData = {
  logo: {
    src: getAssetPath('/img/logo.svg'),
    alt: 'Logo | HBB Construction',
    width: 200,
    height: 80
  },
  description: 'HBB Construction is a trusted residential construction company in Bay Area, delivering high-quality, innovative, and reliable home-building solutions.',
  contact: {
    address: '1580 Oakland Road C207, San Jose, CA 95131 United States',
    email: 'ryand@hbbconstruction.com',
    phones: [
      '+1 (650) 996-0715'
    ]
  },
  map: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.4080535995095!2d-121.89412435000001!3d37.380181150000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc0c39ac6955%3A0xdf362ab74221c698!2s1580%20Oakland%20Rd%2C%20San%20Jose%2C%20CA%2095131!5e0!3m2!1szh-CN!2sus!4v1768456666567!5m2!1szh-CN!2sus',
    width: 300,
    height: 250,
    title: 'Google Map Location'
  },
  copyright: {
    companyName: 'HBB Construction',
    text: 'All rights reserved'
  }
};

// Why Choose Us section data
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
    title: '30+ Successfully Built Projects',
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
export const projects = [
  {
    id: 14,
    title: 'Single Family Home Remodel',
    slug: 'project-13',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/14-2.jpg'),
    description: 'Large openings allow daylight to penetrate deep into the interior, enhancing spatial depth and clarity.',
    location: 'Los Altos',
    year: '2026',
    heroImage: getAssetPath('/img/14-2.jpg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/14-18.jpg'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
        description: 'This project stands out with its expansive land area and spacious layout, allowing for a simple design approach witout elaborate decorations. The overall aesthetic is serene and understated, reflecting a tranquil beauty. The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/video/14.mp4'),
            alt: 'Single Family Home Remodel overview',
            isVideo: true
          },
          {
            src: getAssetPath('/img/14-18.jpg'),
            alt: 'Single Family Home Remodel overview'
          },
        ],
        description: 'This project stands out with its expansive land area and spacious layout, allowing for a simple design approach witout elaborate decorations. The overall aesthetic is serene and understated, reflecting a tranquil beauty. The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/14-3.jpeg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/14-4.jpeg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/14-5.jpeg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/14-6.jpeg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/14-7.jpeg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/14-8.jpg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/14-9.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/14-10.jpeg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/14-10.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/14-11.jpeg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/14-12.jpeg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/14-13.jpg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/14-14.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/14-15.jpg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/14-16.jpeg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/14-1.jpg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
    ]
  },
  {
    id: 1,
    title: 'Single Family Home Rebuild',
    slug: 'peoject-1',
    category: 'House Demo and Rebuild',
    status: 'completed',
    image: getAssetPath('/img/1-1.jpeg'),
    description: 'This project stands out with its expansive land area and spacious layout, allowing for a simple design approach without elaborate decorations. The overall aesthetic is serene and understated, reflecting a tranquil beauty. The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.',
    location: 'Pleasanton',
    year: '2024',
    heroImage: getAssetPath('/img/1-1.jpeg'),
    content: [
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/1-2.png'),
            alt: 'Building exterior view'
          },
          {
            src: getAssetPath('/img/1-3.jpeg'),
            alt: 'Construction site overview'
          }
        ],
        description: 'The project showcases modern architectural design with sustainable building practices.'
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/1-4.jpeg'),
            alt: 'Interior construction details'
          }
        ],
        description: 'State-of-the-art construction techniques ensure durability and energy efficiency.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/1-5.jpg'),
            alt: 'Building facade',
            description: 'Modern glass facade provides natural lighting and energy efficiency.'
          },
          {
            src: getAssetPath('/img/1-6.jpeg'),
            alt: 'Structural framework',
            description: 'Reinforced structure ensures long-term stability.'
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/1-7.jpg'),
            alt: 'Building facade',
          },
          {
            src: getAssetPath('/img/1-8.jpeg'),
            alt: 'Structural framework',
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/1-9.jpeg'),
            alt: 'Interior construction details'
          }
        ],
      },
    ]
  },
  {
    id: 2,
    title: 'Single Family Home Rebuild',
    slug: 'project-2',
    category: 'House Demo and Rebuild',
    status: 'Completed',
    image: getAssetPath('/img/2-1.jpeg'),
    description: 'Large-scale residential complex with modern amenities and eco-friendly design principles.',
    location: 'Palo Alto',
    year: '2024',
    heroImage: getAssetPath('/img/2-1.jpeg'),
    content: [
      {
        heroImage: '/public/img/2-1.jpeg',
        content: [
          {
            layout: 'two',
            images: [
              {
                src: getAssetPath('/img/2-2.jpeg'),
            alt: 'Building exterior view'
              },
              {
                src: getAssetPath('/img/2-3.jpeg'),
            alt: 'Construction site overview'
              }
            ],
            description: 'TA calm and luminous interior where space, light, and structure work in quiet harmony.'
          },
          {
            layout: 'one',
            images: [
              {
                src: getAssetPath('/img/2-4.jpeg'),
            alt: 'Interior construction details'
              }
            ],
            description: 'The living room is conceived as an open, light-filled volume that anchors daily life.'
          },
          {
            layout: 'two',
            images: [
              {
                src: getAssetPath('/img/2-5.jpg'),
            alt: 'Building facade',
                description: 'Modern glass facade provides natural lighting and energy efficiency.'
              },
              {
                src: getAssetPath('/img/2-6.jpg'),
            alt: 'Structural framework',
              }
            ]
          },
          {
            layout: 'two',
            images: [
              {
                src: getAssetPath('/img/2-7.png'),
            alt: 'Building facade',
                description: 'Floor-to-ceiling glazing allows daylight to wash gently across the space throughout the day.'
              },
              {
                src: getAssetPath('/img/2-8.png'),
            alt: 'Structural framework',
                description: 'The space feels generous yet intimate, defined more by light than by walls.'
              }
            ]
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/2-9.jpg'),
            alt: 'Apartment interiors'
          },
          {
            src: getAssetPath('/img/2-10.jpeg'),
            alt: 'Community spaces'
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/2-11.jpg'),
            alt: 'Landscaping and outdoor areas'
          }
        ]
      },
      {
        layout: 'three',
        images: [
          {
            src: getAssetPath('/img/2-12.jpeg'),
            alt: 'Apartment interiors'
          },
          {
            src: getAssetPath('/img/2-13.jpeg'),
            alt: 'Community spaces'
          },
          {
            src: getAssetPath('/img/2-14.jpeg'),
            alt: 'Landscaping and outdoor areas'
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/2-15.jpeg'),
            alt: 'Landscaping and outdoor areas'
          }
        ]
      },
    ]
  },
  {
    id: 3,
    title: 'Single Family Home Remodel',
    slug: 'project-3',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/3-1.jpeg'),
            description: 'This project stands out with its expansive land area and spacious layout, allowing for a simple design approach without elaborate decorations. The overall aesthetic is serene and understated, reflecting a tranquil beauty. The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.',
    location: 'Belmont',
    year: '2023',
    heroImage: getAssetPath('/img/3-1.jpeg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/3-4.jpeg'),
            alt: 'Warehouse exterior overview'
          }
        ],
        description: 'An interior environment designed for everyday living, elevated through clarity and restraint.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/3-2.jpeg'),
            alt: 'Interior storage area',
            description: 'High-ceiling storage areas maximize vertical space utilization.'
          },
          {
            src: getAssetPath('/img/3-3.jpg'),
            alt: 'Loading dock facilities',
            description: 'The dining area connects seamlessly to the living space, encouraging openness and flow.'
          }
        ]
      },
    ]
  },
  {
    id: 4,
    title: 'Single Family Home Remodel',
    slug: 'project-4',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/4-1.jpg'),
            description: 'Designed around light, air, and openness, the project reflects a distinctly Californian way of life.',
    location: 'San Jose',
    year: '2024',
    heroImage: getAssetPath('/img/4-1.jpg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/4-2.png'),
            alt: 'Interior spaces'
          },
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/4-3.jpeg'),
            alt: 'Interior  spaces'
          }
        ],
        description: 'The interior is designed to change in character as light conditions shift over time.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/4-4.png'),
            alt: 'Conference facilities',
            description: 'A restrained material palette reinforces a calm and timeless interior atmosphere.'
          },
          {
            src: getAssetPath('/img/4-5.png'),
            alt: 'Common areas and amenities',
            description: 'A calm, material-focused domestic environment.'
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/4-6.jpeg'),
            alt: 'Building infrastructure'
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/4-7.jpeg'),
            alt: 'Conference facilities',
          },
          {
            src: getAssetPath('/img/4-8.jpeg'),
            alt: 'Common areas and amenities',
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/4-9.jpg'),
            alt: 'Building infrastructure'
          }
        ]
      },
    ]
  },
  {
    id: 5,
    title: 'Luxury Residential Remodel',
    slug: 'Project 5',
    category: 'Residential',
    status: 'completed',
    image: getAssetPath('/img/5-1.jpeg'),
            description: 'Natural light and simple geometry frame the dining experience with quiet elegance.',
    location: 'San Jose',
    year: '2023',
    heroImage: getAssetPath('/img/5-1.jpeg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/5-2.jpeg'),
            alt: 'House exterior'
          }
        ],
        description: 'This project features a highly modern fireplace, necessitating careful consideration during framing to accommodate specific fireplace requirements as desired by the homeowner. Framing also included provisions for a recessed TV above the fireplace.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/5-3.png'),
            alt: 'House interior',
            description: 'The vaulted ceiling expands the sense of volume, allowing the space to breathe vertically.'
          },
          {
            src: getAssetPath('/img/5-4.png'),
            alt: 'Panoramic city views',
            description: 'Another distinctive feature is the large skylight above the kitchen, which required precise execution from our construction team. The final result showcases an impressive and stylish design.'
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/5-5.jpeg'),
            alt: 'Building lobby and concierge'
          }
        ],
      }
    ]
  },
  {
    id: 6,
    title: 'Single Family Home Addition',
    slug: 'project-6',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/6-1.jpg'),
            description: 'The main focus of this project is interior work, with a strong emphasis on the kitchen renovation as per the homeowners\' priorities. We maintained ongoing discussions with the homeowner to ensure that every detail and desired ambiance was meticulously crafted. The kitchen features a specially designed, ultra-modern range hood that aligns with contemporary tastes. Our dedicated efforts ensured the realization of this luxurious kitchen, leaving the homeowner thoroughly satisfied.',
    location: 'San Mateo',
    year: '2024',
    heroImage: getAssetPath('/img/6-1.jpg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/6-3.jpg'),
            alt: 'New retail wing development'
          }
        ],
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/6-4.jpg'),
            alt: 'Entertainment complex'
          }
        ],
        description: 'The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/6-5.jpg'),
            alt: 'Food court area',
            description: 'A modern, light-filled space with a sleek, minimalistic design.'
          },
          {
            src: getAssetPath('/img/6-6.jpg'),
            alt: 'Parking facility expansion',
            description: 'A spacious and open area with a modern, minimalistic design.'
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/6-7.jpg'),
            alt: 'Food court area',
            description: 'The house reflects a contemporary interpretation of Californian residential architecture.'
          },
          {
            src: getAssetPath('/img/6-8.jpg'),
            alt: 'Parking facility expansion',
            description: 'The interior prioritizes lived experience over formal expression.'
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/6-2.jpg'),
            alt: 'Mall expansion construction'
          }
        ],
      },
    ]
  },
  {
    id: 7,
    title: 'Single Family Home Addition',
    slug: 'Project 7',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/7-3.jpeg'),
            description: 'The main focus of this project is interior work, with a strong emphasis on the kitchen renovation as per the homeowner\'s priorities. We maintained ongoing discussions with the homeowner to ensure that every detail and desired ambiance was meticulously crafted. The kitchen features a specially designed, ultra-modern range hood that aligns with contemporary tastes. \nOur dedicated efforts ensured the realization of this luxurious kitchen, leaving the homeowner thoroughly satisfied.',
    location: 'Newark',
    year: '2023',
    heroImage: getAssetPath('/img/7-3.jpeg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/7-4.jpeg'),
            alt: 'Campus overview'
          }
        ],
        description: 'A restrained material palette reinforces a calm and timeless interior atmosphere.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/7-5.jpeg'),
            alt: 'Science laboratories'
          },
          {
            src: getAssetPath('/img/7-6.jpg'),
            alt: 'Sports and recreation facilities'
          }
        ],
        description: 'The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/7-1.jpeg'),
            alt: 'Academic buildings',
            description: 'The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
          },
          {
            src: getAssetPath('/img/7-2.jpeg'),
            alt: 'Library and research facilities',
            description: 'The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
          }
        ]
      }
    ],
  },
  {
    id: 8,
    title: 'Single Family Home Remodel',
    slug: 'Project 8',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/8-1.jpeg'),
            description: 'In this project, all materials chosen by the homeowner are not locally sourced, necessitating a departure from standard construction processes. We had to plan plumbing and electrical layouts based on the specifications of the products purchased by the homeowner. As a result, our communication with the client was nearly real-time throughout the construction process. Through persistent effort, we successfully achieved the exact look and feel the client envisioned for their home.',
    location: 'Cupertino',
    year: '2024',
    heroImage: getAssetPath('/img/8-1.jpeg'),
    content: [
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/8-2.jpeg'),
            alt: 'Hospital building exterior'
          },
          {
            src: getAssetPath('/img/8-3.jpeg'),
            alt: 'Medical facility construction'
          }
        ],
        description: 'The house responds to the mild California climate by blurring the boundary between indoor and outdoor living.'
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/8-4.jpeg'),
            alt: 'Operating theaters and medical equipment'
          }
        ],
        description: 'The interior spaces are designed to be bright and airy, with large windows and high ceilings that allow natural light to flow in.'
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/8-5.jpeg'),
            alt: 'Patient rooms',
          },
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/8-6.jpeg'),
            alt: 'Emergency department',
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/8-7.jpeg'),
            alt: 'Outpatient clinics and diagnostic centers'
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/8-8.jpeg'),
            alt: 'Patient rooms',
          },
          {
            src: getAssetPath('/img/8-9.jpeg'),
            alt: 'Emergency department',
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/8-10.jpeg'),
            alt: 'Patient rooms',
          },
          {
            src: getAssetPath('/img/8-11.jpeg'),
            alt: 'Emergency department',
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/8-12.jpeg'),
            alt: 'Outpatient clinics and diagnostic centers'
          }
        ],
      },
    ]
  },
  {
    id: 9,
    title: 'Single Family Home Remodel',
    slug: 'Project 9',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/10-1.jpg'),
            description: 'This modern-style residence, located in Palo Alto, features a 9-foot high ceiling that maximizes natural light and enhances the spaciousness of the interior. The homeowner prioritized stylish and cohesive material selections that are both sleek and tactile. Throughout the construction process, we closely collaborated with the homeowner, referencing blueprints and confirming potential outcomes in advance to ensure efficiency and meet their expectations.',
    location: 'Palo Alto',
    year: '2023',
    heroImage: getAssetPath('/img/10-1.jpg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/10-2.jpg'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/10-3.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/10-4.jpg'),
            alt: 'Commercial office spaces',

          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/10-5.jpg'),
            alt: 'Retail and dining spaces'
          },
          {
            src: getAssetPath('/img/10-6.jpg'),
            alt: 'Public plaza and green spaces'
          }
        ],
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/10-7.jpg'),
            alt: 'Parking and infrastructure'
          }
        ],
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/10-8.jpg'),
            alt: 'Parking and infrastructure'
          }
        ],
        description: 'Outdoor spaces are treated as extensions of the interior rather than secondary areas.'
      }
    ]
  },
  {
    id: 10,
    title: 'Detached ADU',
    slug: 'project-9',
    category: 'ADU',
    status: 'completed',
    image: getAssetPath('/img/11-5.png'),
            description: 'This project features a compact residential unit similar to a condo. Due to limited storage space, the homeowner desired more storage options. After discussions with the homeowner, our team created a sunken space similar to a basement using concrete, and raised the crawl space. This solution not only ensured compliance with building codes but also maximized storage capacity. Additionally, it effectively mitigates termite risks to a certain extent.',
    location: 'San Jose',
    year: '2023',
    heroImage: getAssetPath('/img/11-1.jpeg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/11-2.png'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/11-3.jpeg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/11-4.png'),
            alt: 'Commercial office spaces',
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/11-5.png'),
            alt: 'Retail and dining spaces'
          },
          {
            src: getAssetPath('/img/11-6.jpg'),
            alt: 'Public plaza and green spaces'
          }
        ],
        description: 'Natural light plays a central role in shaping the interior atmosphere throughout the day.'
      }
    ]
  },
  {
    id: 11,
    title: 'Single Family Home Remodel',
    slug: 'project-10',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/12-8.jpg'),
            description: 'The focal point of this project is the bathroom, where the client opted for a striking black and white contrast in design. This bold contrast enhances the visual impact of the design. The bathtub is built-in, requiring framing during the construction phase to accommodate plumbing needs. The vanity in the bathroom features a floating design, necessitating a supporting frame. While floating cabinets offer easy cleaning, they provide less storage space compared to traditional designs.',
    location: 'Fremont',
    year: '2023',
    heroImage: getAssetPath('/img/12-8.jpg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/12-2.webp'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/12-3.jpeg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/12-4.jpeg'),
            alt: 'Commercial office spaces',
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/12-5.jpg'),
            alt: 'Retail and dining spaces'
          },
          {
            src: getAssetPath('/img/12-6.jpg'),
            alt: 'Public plaza and green spaces'
          }
        ],
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/12-7.jpg'),
            alt: 'Parking and infrastructure'
          }
        ],

      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/12-1.jpeg'),
            alt: 'Parking and infrastructure'
          }
        ],
      }
    ]
  },
  {
    id: 12,
    title: 'Detached ADU',
    slug: 'project-11',
    category: 'ADU ',
    status: 'completed',
    image: getAssetPath('/img/13-1.jpg'),
            description: 'his project features a compact residential unit similar to a condo. Due to limited storage space, the homeowner desired more storage options. After discussions with the homeowner, our team created a sunken space similar to a basement using concrete, and raised the crawl space. This solution not only ensured compliance with building codes but also maximized storage capacity. Additionally, it effectively mitigates termite risks to a certain extent.',
    location: 'San Jose',
    year: '2022',
    heroImage: getAssetPath('/img/13-1.jpg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/13-5.jpg'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
        description: 'Large openings allow daylight to penetrate deep into the interior, enhancing spatial depth and clarity.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/13-3.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/13-4.jpg'),
            alt: 'Commercial office spaces',
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/13-2.jpg'),
            alt: 'Retail and dining spaces'
          }
        ],
        description: 'Architectural elements such as overhangs and recessed openings mediate climate and privacy.'
      }
    ]
  },
  {
    id: 13,
    title: 'Single Family Home Remodel',
    slug: 'project-12',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/15-1.jpeg'),
            description: 'Large openings allow daylight to penetrate deep into the interior, enhancing spatial depth and clarity.',
    location: 'San Jose',
    year: '2023',
    heroImage: getAssetPath('/img/15-1.jpeg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/15-2.jpeg'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
        description: 'Natural light plays a central role in shaping the interior atmosphere throughout the day.'
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/15-3.jpg'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/15-4.jpg'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/15-5.jpeg'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/15-6.jpg'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/15-7.jpeg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/15-8.jpeg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/15-9.jpg'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/15-10.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/15-12.jpg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/15-14.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/15-13.jpg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/15-11.jpg'),
            alt: 'Single Family Home Remodel overview'
          }
        ]
      }
    ]
  },
];

// About section data
export const aboutSection = {
  headingH1: 'Welcome to ',
  span: 'HBB Construction',
  para: 'We are INTELLIGENT DESIGN CONSTRUCTION COMPANY. Our designs merge aesthetics with practicality, creating environments that reflect your style.',
  para2: 'Explore our portfolio and envision your home\'s transformation.',
  video: {
    src: getAssetPath('/video/pic-1.mp4'),
    alt: 'HBB Construction Video'
  }
};

// Core Advantages data
export const coreAdvantages = {
  title: 'Core Advantages',
  items: [
    {
      id: 1,
      heading: 'Expert Team\nIn-House Construction',
      description: 'We handle all foundation and framing work in-house, ensuring full control over quality and schedule.',
      image: getAssetPath('/img/14-2.jpg')
    },
    {
      id: 2,
      heading: 'End-to-End Service\nSeamless Delivery',
      description: 'From survey and design to construction, our team manages every step efficiently and smoothly.',
      image: getAssetPath('/img/14-3.jpeg')
    },
    {
      id: 3,
      heading: 'Cost-Effective\nHigh Value',
      description: 'Owning our crews and equipment reduces outsourcing, lowers costs, and maximizes ROI.',
      image: getAssetPath('/img/14-4.jpeg')
    },
    {
      id: 4,
      heading: 'Experienced & Reliable',
      description: 'Years of diverse project experience ensure smooth execution and design realization.',
      image: getAssetPath('/img/14-8.jpg')
    }
  ]
};

// Team rows - 2D array structure where each row is an array of member objects
// Each row can have any number of members
export const teamRows = [
  [
    // Row 1: 3 members
    {
      id: 1,
      name: 'Ryan',
      title: 'Managing Director',
      image: getAssetPath('/img/team/kevin-patterson.webp'),
            bio: 'Ryan Deng brings over 15 years of experience in construction management and strategic leadership. Under his guidance, HBB CONSTRUCTION has grown into a leading construction company known for excellence and innovation.',
      email: 'ryand@hbbconstruction.com',
      phone: '+1 (650) 996-0715',
      experience: '15+ Years',
      specialties: ['Project Management', 'BConstruction & Technical Skills', 'Project Oversight']
    },

    {
      id: 2,
      name: 'Copper',
      title: 'Principal',
      image: getAssetPath('/img/team/john-mitchell.webp'),
            bio: 'John Mitchell is a seasoned project manager with expertise in coordinating complex construction projects from inception to completion. His attention to detail and leadership skills ensure projects are delivered on time and within budget.',
      email: 'copper@hbbconstruction.com',
      phone: '+1 (555) 234-5678',
      experience: '15+ Years',
      specialties: ['Project Coordination', 'Team Management', 'Quality Control']
    },
    {
      id: 3,
      name: 'Lynn',
      title: 'Project Manager',
      image: getAssetPath('/img/team/david-ramirez.webp'),
            bio: 'David Ramirez is a highly skilled engineer specializing in structural design and site management. His technical expertise and problem-solving abilities have been instrumental in the success of numerous high-profile projects.',
      email: 'lynn@hbbconstruction.com',
      phone: '+1 (555) 345-6789',
      experience: '3+ Years',
      specialties: ['Structural Engineering', 'Site Management', 'Technical Design']
    },
    {
      id: 4,
      name: 'Bai',
      title: 'Project Manager',
      image: getAssetPath('/img/team/david-ramirez.webp'),
            bio: 'David Ramirez is a highly skilled engineer specializing in structural design and site management. His technical expertise and problem-solving abilities have been instrumental in the success of numerous high-profile projects.',
      email: 'bai@hbbconstruction.com',
      phone: '+1 (555) 345-6789',
      experience: '3+ Years',
      specialties: ['Structural Engineering', 'Site Management', 'Technical Design']
    },
  ],
  [
    // Row 3: 3 members
    {
      id: 5,
      name: 'Suzy',
      title: 'Design Manager',
      image: getAssetPath('/img/team/david-ramirez.webp'),
            bio: 'Suzy Zhang is a highly skilled architectual designer specializing in residential and commercial design. Her technical expertise and problem-solving abilities have been instrumental in the success of numerous high-profile projects.',
      email: 'suzy@hbbconstruction.com',
      phone: '+1 (267) 292-1638',
      experience: '3+ Years',
      specialties: ['Architectual Design', 'Residential Design', 'Commercial Design']
    },
  ],
  [
    {
      id: 11,
      name: 'Construction Team',
      title: 'In-House Construction Crew',
      image: getAssetPath('/img/team/construction-team.webp'),
            bio: 'Our in-house construction team consists of approximately 20 skilled professionals, organized into specialized groups to handle all aspects of project construction. With extensive experience, the team ensures high-quality execution and seamless coordination across all phases of construction.',
      experience: 'Approx. 20 Team Members',
      specialties: [
        'Structural Construction',
        'Site Management',
        'Foundation & Framing',
        'Demolition',
        'Grading',
        'Insulation'
      ]
    },
    {
      id: 12,
      name: 'Structural Team',
      title: 'Structural & Site Specialists',
      image: getAssetPath('/img/team/structural-team.webp'),
            bio: 'The structural team, composed of 14 experienced members, is responsible for foundation, framing, demolition, grading, and insulation work. They can flexibly take on additional structure-related tasks as needed, ensuring construction quality and efficient on-site progress.',
      experience: '14 Team Members',
      specialties: [
        'Foundation',
        'Framing',
        'Demolition',
        'Grading',
        'Insulation',
        'Structural Coordination'
      ]
    },
    {
      id: 13,
      name: 'Electrical Team',
      title: 'Licensed Electrical Crew',
      image: getAssetPath('/img/team/electrical-team.webp'),
            bio: 'Our electrical team, consisting of 2 skilled members, handles both rough-in and finish wiring for residential and commercial projects. All work complies with California electrical codes and safety standards, ensuring reliable performance and long-term system integrity.',
      experience: '2 Team Members',
      specialties: [
        'Electrical Rough-In',
        'Finish Wiring',
        'Code Compliance',
        'Safety Standards'
      ]
    },
    {
      id: 14,
      name: 'Interior Finishes Team',
      title: 'Interior Construction Specialists',
      image: getAssetPath('/img/team/interior-team.webp'),
            bio: 'Our interior finishes team, composed of 4 members, focuses on the final stages of construction. They deliver high-quality workmanship across drywall, trim, painting, and flooring, ensuring attention to detail, material precision, and a refined final presentation.',
      experience: '4 Team Members',
      specialties: [
        'Drywall',
        'Trim Work',
        'Painting',
        'Flooring',
        'Final Detailing'
      ]
    }
  ]
];

// Flattened array of all team members (computed from teamRows)
// Useful for pages that need to search/filter all members
export const teamMembers = teamRows.flat();

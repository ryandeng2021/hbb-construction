import { getAssetPath } from '../../utils/path';

export const project2 = {
    id: 2,
    title: 'New Construction',
    slug: 'project-2',
    category: 'New Construction',
    status: 'completed',
    image: getAssetPath('/img/2-1.webp'),
    description: "This Palo Alto rebuild pairs a sculptural entry with sunlit living spaces, translating the client's brief into a home that feels both grounded and airy.",
    location: 'Palo Alto',
    year: '2024',
    heroImage: getAssetPath('/img/2-1.webp'),
    content: [
      {
        heroImage: '/public/img/2-1.webp',
        content: [
          {
            layout: 'two',
            images: [
              {
                src: getAssetPath('/img/2-2.webp'),
                alt: 'Building exterior view'
              },
              {
                src: getAssetPath('/img/2-3.webp'),
                alt: 'Construction site overview'
              }
            ],
            description: 'The new entry facade balances solid and glazed volumes, announcing a calm, contemporary presence from the street.'
          },
          {
            layout: 'one',
            images: [
              {
                src: getAssetPath('/img/2-4.jpeg'),
                alt: 'Interior construction details'
              }
            ],
            description: 'Viewed from outside, the massing steps back in stages, softening the transition between the street and the private entry.'
          },
          {
            layout: 'two',
            images: [
              {
                src: getAssetPath('/img/2-5.webp'),
                alt: 'Building facade',
                description: 'In the kitchen, a continuous run of cabinetry and stone countertops creates a clean, efficient backdrop for everyday cooking.'
              },
              {
                src: getAssetPath('/img/2-6.webp'),
                alt: 'Structural framework',
              }
            ]
          },
          {
            layout: 'two',
            images: [
              {
                src: getAssetPath('/img/2-7.webp'),
                alt: 'Building facade',
                description: 'Full-height glazing along the living room lets afternoon light spill deep into the room, softening every surface it touches.'
              },
              {
                src: getAssetPath('/img/2-8.webp'),
                alt: 'Structural framework',
                description: "Furniture is kept low and spare here, so the living room's height and openness remain the space's defining feature."
              }
            ]
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/2-9.webp'),
            alt: 'Apartment interiors'
          },
          {
            src: getAssetPath('/img/2-10.webp'),
            alt: 'Community spaces'
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/2-11.webp'),
            alt: 'Landscaping and outdoor areas'
          }
        ]
      },
      {
        layout: 'three',
        images: [
          {
            src: getAssetPath('/img/2-12.webp'),
            alt: 'Apartment interiors'
          },
          {
            src: getAssetPath('/img/2-13.webp'),
            alt: 'Community spaces'
          },
          {
            src: getAssetPath('/img/2-14.webp'),
            alt: 'Landscaping and outdoor areas'
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/2-15.webp'),
            alt: 'Landscaping and outdoor areas'
          }
        ]
      },
    ]
  };

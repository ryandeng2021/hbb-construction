import { getAssetPath } from '../../utils/path';

export const project2 = {
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
  };

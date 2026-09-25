import { getAssetPath } from '../../utils/path';

export const project10 = {
    id: 10,
    title: 'New Detached ADU',
    slug: 'project-10',
    category: 'ADU',
    status: 'completed',
    image: getAssetPath('/img/11-5.webp'),
    description: 'A compact detached ADU in San Jose that trades square footage for smart storage, tucking a concrete sunken level beneath a raised crawl space for extra room and lasting durability.',
    location: 'San Jose',
    year: '2023',
    heroImage: getAssetPath('/img/11-1.webp'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/11-2.webp'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/11-3.webp'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/11-4.webp'),
            alt: 'Commercial office spaces',
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/11-5.webp'),
            alt: 'Retail and dining spaces'
          },
          {
            src: getAssetPath('/img/11-6.webp'),
            alt: 'Public plaza and green spaces'
          }
        ],
        description: 'The kitchen opens directly into the living area, letting the two spaces share light and sightlines as one continuous gathering space.'
      }
    ]
  };

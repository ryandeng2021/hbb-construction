import { getAssetPath } from '../../utils/path';

export const project10 = {
    id: 10,
    title: 'New Detached ADU',
    slug: 'project-10',
    category: 'ADU',
    status: 'completed',
    image: getAssetPath('/img/11-5.png'),
    description: 'A compact detached ADU in San Jose that trades square footage for smart storage, tucking a concrete sunken level beneath a raised crawl space for extra room and lasting durability.',
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
        description: 'The kitchen opens directly into the living area, letting the two spaces share light and sightlines as one continuous gathering space.'
      }
    ]
  };

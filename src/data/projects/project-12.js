import { getAssetPath } from '../../utils/path';

export const project12 = {
    id: 12,
    title: 'New Detached ADU',
    slug: 'project-12',
    category: 'ADU ',
    status: 'completed',
    image: getAssetPath('/img/13-1.jpg'),
    description: 'A detached backyard ADU in San Jose built on a raised, reinforced foundation that quietly solves the homeowner\'s storage shortage while guarding against moisture and pests.',
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
        description: 'This general living space benefits from generous windows that draw daylight deep into the room, keeping the layout open and airy throughout the day.'
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
        description: 'The bathroom\'s walls and fixtures were carefully aligned to keep sightlines clean, giving the small footprint a calmer, more organized feel.'
      }
    ]
  };

import { getAssetPath } from '../../utils/path';

export const project9 = {
    id: 9,
    title: 'Single Family Home Remodel & Addition',
    slug: 'project-9',
    category: 'House Remodel & Addition ',
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
  };

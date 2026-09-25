import { getAssetPath } from '../../utils/path';

export const project9 = {
    id: 9,
    title: 'Remodel & Addition',
    slug: 'project-9',
    category: 'House Remodel & Addition ',
    status: 'completed',
    image: getAssetPath('/img/10-1.webp'),
    description: "Nine-foot ceilings run throughout this Palo Alto remodel, giving every room extra volume to showcase the homeowner's sleek material choices.",
    location: 'Palo Alto',
    year: '2023',
    heroImage: getAssetPath('/img/10-1.webp'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/10-2.webp'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/10-3.webp'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/10-4.webp'),
            alt: 'Commercial office spaces',

          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/10-5.webp'),
            alt: 'Retail and dining spaces'
          },
          {
            src: getAssetPath('/img/10-6.webp'),
            alt: 'Public plaza and green spaces'
          }
        ],
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/10-7.webp'),
            alt: 'Parking and infrastructure'
          }
        ],
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/10-8.webp'),
            alt: 'Parking and infrastructure'
          }
        ],
        description: 'In the primary bedroom, the raised ceiling and simple palette combine to make the room feel restful rather than cramped.'
      }
    ]
  };

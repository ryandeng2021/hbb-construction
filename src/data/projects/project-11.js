import { getAssetPath } from '../../utils/path';

export const project11 = {
    id: 11,
    title: 'Remodel & Addition',
    slug: 'project-11',
    category: 'House Remodel & Addition',
    status: 'completed',
    image: getAssetPath('/img/12-8.jpg'),
    description: 'A Fremont remodel and addition anchored by a striking black-and-white bathroom, where a built-in soaking tub and a floating vanity create a sleek, gallery-like retreat.',
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
  };

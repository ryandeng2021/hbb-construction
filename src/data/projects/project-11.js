import { getAssetPath } from '../../utils/path';

export const project11 = {
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
  };

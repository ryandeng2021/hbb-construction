import { getAssetPath } from '../../utils/path';

export const project5 = {
    id: 5,
    title: 'Luxury Residential Remodel & Addition',
    slug: 'project-5',
    category: 'Residential Remodel & Addition',
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
  };

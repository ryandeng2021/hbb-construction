import { getAssetPath } from '../../utils/path';

export const project5 = {
    id: 5,
    title: 'Remodel & Addition',
    slug: 'project-5',
    category: 'Residential Remodel & Addition',
    status: 'completed',
    image: getAssetPath('/img/5-1.jpeg'),
    description: 'A luxury remodel in San Jose centers on a sculpted fireplace and a skylit kitchen, pairing dramatic architectural moments with warm, livable detail.',
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
        description: "The great room's fireplace anchors the space, its sculpted mantel and recessed television keeping the wall uncluttered."
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/5-3.png'),
            alt: 'House interior',
            description: 'Ceilings vault upward through this space, drawing the eye up and making the room feel taller than its footprint suggests.'
          },
          {
            src: getAssetPath('/img/5-4.png'),
            alt: 'Panoramic city views',
            description: 'A wide skylight floods the kitchen with overhead daylight, washing the counters and cabinetry in even, shadow-free light.'
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

import { getAssetPath } from '../../utils/path';

export const project3 = {
    id: 3,
    title: 'Single Family Home Remodel & Addition',
    slug: 'project-3',
    category: 'House Remodel & Addition',
    status: 'completed',
    image: getAssetPath('/img/3-1.jpeg'),
    description: 'This project stands out with its expansive land area and spacious layout, allowing for a simple design approach without elaborate decorations. The overall aesthetic is serene and understated, reflecting a tranquil beauty. The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.',
    location: 'Belmont',
    year: '2023',
    heroImage: getAssetPath('/img/3-1.jpeg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/3-4.jpeg'),
            alt: 'Warehouse exterior overview'
          }
        ],
        description: 'An interior environment designed for everyday living, elevated through clarity and restraint.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/3-2.jpeg'),
            alt: 'Interior storage area',
            description: 'High-ceiling storage areas maximize vertical space utilization.'
          },
          {
            src: getAssetPath('/img/3-3.jpg'),
            alt: 'Loading dock facilities',
            description: 'The dining area connects seamlessly to the living space, encouraging openness and flow.'
          }
        ]
      },
    ]
  };

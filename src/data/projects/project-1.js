import { getAssetPath } from '../../utils/path';

export const project1 = {
    id: 1,
    title: 'Single Family Home Rebuild',
    slug: 'peoject-1',
    category: 'House Demo and Rebuild',
    status: 'completed',
    image: getAssetPath('/img/1-1.jpeg'),
    description: 'This project stands out with its expansive land area and spacious layout, allowing for a simple design approach without elaborate decorations. The overall aesthetic is serene and understated, reflecting a tranquil beauty. The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.',
    location: 'Pleasanton',
    year: '2024',
    heroImage: getAssetPath('/img/1-1.jpeg'),
    content: [
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/1-2.png'),
            alt: 'Building exterior view'
          },
          {
            src: getAssetPath('/img/1-3.jpeg'),
            alt: 'Construction site overview'
          }
        ],
        description: 'The project showcases modern architectural design with sustainable building practices.'
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/1-4.jpeg'),
            alt: 'Interior construction details'
          }
        ],
        description: 'State-of-the-art construction techniques ensure durability and energy efficiency.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/1-5.jpg'),
            alt: 'Building facade',
            description: 'Modern glass facade provides natural lighting and energy efficiency.'
          },
          {
            src: getAssetPath('/img/1-6.jpeg'),
            alt: 'Structural framework',
            description: 'Reinforced structure ensures long-term stability.'
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/1-7.jpg'),
            alt: 'Building facade',
          },
          {
            src: getAssetPath('/img/1-8.jpeg'),
            alt: 'Structural framework',
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/1-9.jpeg'),
            alt: 'Interior construction details'
          }
        ],
      },
    ]
  };

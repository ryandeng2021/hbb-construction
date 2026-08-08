import { getAssetPath } from '../../utils/path';

const description = 'This project stands out with its expansive land area and spacious layout, allowing for a simple design approach witout elaborate decorations. The overall aesthetic is serene and understated, reflecting a tranquil beauty. The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.';

export const project21 = {
    id: 21,
    title: 'Single Family Home Addition & Remodel',
    slug: 'project-21',
    category: 'House Addition & Remodel',
    status: 'completed',
    image: getAssetPath('/img/21-1.webp'),
    description: 'Large openings allow daylight to penetrate deep into the interior, enhancing spatial depth and clarity.',
    location: 'San Jose',
    year: '2026',
    heroImage: getAssetPath('/img/21-1.webp'),
    content: [
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/21-2.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/21-3.webp'), alt: 'Single Family Home Remodel overview' }
        ],
        description
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/21-4.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/21-5.webp'), alt: 'Single Family Home Remodel overview' }
        ],
        description
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/21-6.webp'), alt: 'Residential units' },
          { src: getAssetPath('/img/21-7.webp'), alt: 'Residential units' }
        ]
      },
      {
        layout: 'one',
        images: [
          { src: getAssetPath('/img/21-8.webp'), alt: 'Residential units' }
        ]
      },
    ]
  };

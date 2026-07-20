import { getAssetPath } from '../../utils/path';

export const project19 = {
    id: 19,
    title: 'Single Family Home Addition & Remodel',
    slug: 'project-19',
    category: 'House Addition & Remodel',
    status: 'completed',
    image: getAssetPath('/img/19-1.png'),
    description: 'Large openings allow daylight to penetrate deep into the interior, enhancing spatial depth and clarity.',
    location: 'San Jose',
    year: '2026',
    heroImage: getAssetPath('/img/19-1.png'),
    content: [
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/19-2.png'),
            alt: 'Single Family Home Remodel overview'
          },
          {
            src: getAssetPath('/img/19-3.png'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
        description: 'This project stands out with its expansive land area and spacious layout, allowing for a simple design approach witout elaborate decorations. The overall aesthetic is serene and understated, reflecting a tranquil beauty. The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/19-4.png'),
            alt: 'Single Family Home Remodel overview'
          },
          {
            src: getAssetPath('/img/19-5.png'),
            alt: 'Single Family Home Remodel overview'
          },
        ],
        description: 'This project stands out with its expansive land area and spacious layout, allowing for a simple design approach witout elaborate decorations. The overall aesthetic is serene and understated, reflecting a tranquil beauty. The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/19-7.png'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/19-8.png'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/19-9.png'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/19-10.png'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/19-11.png'),
            alt: 'Commercial office spaces',
          },
        ]
      },
    ]
  };

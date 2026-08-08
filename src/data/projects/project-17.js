import { getAssetPath } from '../../utils/path';

export const project17 = {
    id: 17,
    title: 'Single Family Home Addition & Remodel',
    slug: 'project-17',
    category: 'House Addition & Remodel',
    status: 'completed',
    image: getAssetPath('/img/17-1.jpg'),
    description: 'Large openings allow daylight to penetrate deep into the interior, enhancing spatial depth and clarity.',
    location: 'San Jose',
    year: '2026',
    heroImage: getAssetPath('/img/17-1.jpg'),
    content: [
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/17-2.jpg'),
            alt: 'Single Family Home Remodel overview'
          },
          {
            src: getAssetPath('/img/17-3.jpg'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
        description: 'White cabinetry provides a bright, seamless backdrop, while natural wood accents introduce warmth and texture. The contrast enhances visual depth without overwhelming the overall sense of calm and simplicity.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/17-4.jpg'),
            alt: 'Single Family Home Remodel overview'
          },
          {
            src: getAssetPath('/img/17-5.jpg'),
            alt: 'Single Family Home Remodel overview'
          },
        ],
        description: 'This project stands out with its expansive land area and spacious layout, allowing for a simple design approach witout elaborate decorations. The overall aesthetic is serene and understated, reflecting a tranquil beauty. The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/17-6.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/17-7.jpg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/17-9.jpg'),
            alt: 'Commercial office spaces',
          },
          {
            src: getAssetPath('/img/17-10.jpg'),
            alt: 'Residential units',
          },
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/17-11.jpg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/17-15.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/17-16.jpg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/17-12.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/17-13.jpg'),
            alt: 'Residential units',
          },
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/17-14.jpg'),
            alt: 'Residential units',
          },
        ]
      },
    ]
  };

import { getAssetPath } from '../../utils/path';

export const project18 = {
    id: 18,
    title: 'Addition & Remodel',
    slug: 'project-18',
    category: 'House Addition & Remodel',
    status: 'completed',
    image: getAssetPath('/img/18-1.webp'),
    description: 'A Sunnyvale addition and remodel that pairs an updated kitchen with reworked bathrooms and living areas, giving the home a more open, modern everyday flow.',
    location: 'Sunnyvale',
    year: '2026',
    heroImage: getAssetPath('/img/18-1.webp'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/video/18-v.mp4'),
            alt: 'Project walkthrough',
            isVideo: true
          }
        ],
        description: 'A short walkthrough of the finished home.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/18-2.webp'),
            alt: 'Single Family Home Remodel overview'
          },
          {
            src: getAssetPath('/img/18-3.webp'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
        description: 'The living room flows straight into the newly remodeled kitchen, creating one open space where the family can cook, gather, and relax together.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/18-4.webp'),
            alt: 'Single Family Home Remodel overview'
          },
          {
            src: getAssetPath('/img/18-5.webp'),
            alt: 'Single Family Home Remodel overview'
          },
        ],
        description: 'A refreshed bathroom sits just steps from the new kitchen, both finished with the same clean, modern fixtures for a consistent feel throughout.'
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/18-7.webp'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/18-8.webp'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/18-9.webp'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/18-10.webp'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/18-11.webp'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/18-15.webp'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/18-6.webp'),
            alt: 'Residential units',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/18-12.webp'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/18-14.webp'),
            alt: 'Residential units',
          },
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/18-13.webp'),
            alt: 'Residential units',
          },
        ]
      },
    ]
  };

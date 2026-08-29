import { getAssetPath } from '../../utils/path';

export const project18 = {
    id: 18,
    title: 'Addition & Remodel',
    slug: 'project-18',
    category: 'House Addition & Remodel',
    status: 'completed',
    image: getAssetPath('/img/18-1.jpg'),
    description: 'A Sunnyvale addition and remodel that pairs an updated kitchen with reworked bathrooms and living areas, giving the home a more open, modern everyday flow.',
    location: 'Sunnyvale',
    year: '2026',
    heroImage: getAssetPath('/img/18-1.jpg'),
    content: [
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/18-2.jpg'),
            alt: 'Single Family Home Remodel overview'
          },
          {
            src: getAssetPath('/img/18-3.jpg'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
        description: 'The living room flows straight into the newly remodeled kitchen, creating one open space where the family can cook, gather, and relax together.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/18-4.jpg'),
            alt: 'Single Family Home Remodel overview'
          },
          {
            src: getAssetPath('/img/18-5.jpg'),
            alt: 'Single Family Home Remodel overview'
          },
        ],
        description: 'A refreshed bathroom sits just steps from the new kitchen, both finished with the same clean, modern fixtures for a consistent feel throughout.'
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/18-7.jpg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/18-8.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/18-9.jpg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/18-10.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/18-11.jpg'),
            alt: 'Commercial office spaces',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/18-15.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/18-6.jpg'),
            alt: 'Residential units',
          },
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/18-12.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/18-14.jpg'),
            alt: 'Residential units',
          },
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/18-13.jpg'),
            alt: 'Residential units',
          },
        ]
      },
    ]
  };

import { getAssetPath } from '../../utils/path';

export const project22 = {
    id: 22,
    title: 'Addition & Remodel',
    slug: 'project-22',
    category: 'House Addition & Remodel',
    status: 'completed',
    image: getAssetPath('/img/22-1.webp'),
    description: "This Palo Alto remodel threads a new staircase and spa-style bathroom through the home's existing living spaces with restrained, tailored detailing.",
    location: 'Palo Alto',
    year: '2026',
    heroImage: getAssetPath('/img/22-1.webp'),
    content: [
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/22-2.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/22-3.webp'), alt: 'Single Family Home Remodel overview' }
        ],
        description: 'A walk-in shower and adjacent closet were rebuilt together, giving this suite efficient storage right beside the vanity.'
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/22-4.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/22-5.webp'), alt: 'Single Family Home Remodel overview' }
        ],
        description: "The living room's new sightline leads straight to a remodeled bathroom finished in cool, contemporary tile."
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/22-6.webp'), alt: 'Residential units' },
          { src: getAssetPath('/img/22-7.webp'), alt: 'Residential units' }
        ]
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/22-8.webp'), alt: 'Residential units' },
          { src: getAssetPath('/img/22-9.webp'), alt: 'Residential units' }
        ]
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/22-10.webp'), alt: 'Residential units' },
          { src: getAssetPath('/img/22-11.webp'), alt: 'Residential units' }
        ]
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/22-12.webp'), alt: 'Residential units' },
          { src: getAssetPath('/img/22-14.webp'), alt: 'Residential units' }
        ]
      },
      {
        layout: 'one',
        images: [
          { src: getAssetPath('/img/22-15.webp'), alt: 'Residential units' }
        ]
      },
    ]
  };

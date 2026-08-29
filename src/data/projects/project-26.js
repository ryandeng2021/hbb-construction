import { getAssetPath } from '../../utils/path';

export const project26= {
    id: 2    ,
    title: 'Addition & Remodel',
    slug: 'project-26',
    category: 'House Addition & Remodel',
    status: 'completed',
    image: getAssetPath('/img/26-1.webp'),
    description: 'This Sunnyvale addition blends a refreshed living room with newly finished bathrooms, built for effortless, everyday family living.',
    location: 'Sunnyvale',
    year: '2026',
    heroImage: getAssetPath('/img/26-1.webp'),
    content: [
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/26-2.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/26-3.webp'), alt: 'Single Family Home Remodel overview' }
        ],
        description: "The living room's new built-ins sit near a compact bathroom addition finished with simple, modern fixtures."
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/26-4.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/26-5.webp'), alt: 'Single Family Home Remodel overview' }
        ],
           layout: 'two',
        images: [
          { src: getAssetPath('/img/26-6.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/26-7.webp'), alt: 'Single Family Home Remodel overview' }
        ],
       },
        {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/26-8.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/26-9.webp'), alt: 'Single Family Home Remodel overview' }
        ],
           layout: 'two',
        images: [
          { src: getAssetPath('/img/26-10.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/26-11.webp'), alt: 'Single Family Home Remodel overview' }
        ],
       },
        {
        layout: 'one',
        images: [
          { src: getAssetPath('/img/26-12.webp'), alt: 'Single Family Home Remodel overview' },
        ],
       },
    ]
  };

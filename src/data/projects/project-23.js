import { getAssetPath } from '../../utils/path';

export const project23 = {
    id: 23    ,
    title: 'Addition & Remodel',
    slug: 'project-23',
    category: 'WholeHouse Remodel',
    status: 'completed',
    image: getAssetPath('/img/23-1.webp'),
    description: 'A full interior overhaul in Cupertino carries one warm material palette from the entry kitchen through the bedrooms and baths beyond.',
    location: 'Cupertino',
    year: '2026',
    heroImage: getAssetPath('/img/23-1.webp'),
    content: [
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/23-2.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/23-3.webp'), alt: 'Single Family Home Remodel overview' }
        ],
        description: 'The refreshed front elevation sets the tone for the kitchen renovation just inside, both sharing the same crisp material language.'
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/23-4.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/23-5.webp'), alt: 'Single Family Home Remodel overview' }
        ],
        description: 'Kitchen and living room were opened into each other, so the island now anchors both cooking and casual seating.'
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/23-6.webp'), alt: 'Residential units' },
          { src: getAssetPath('/img/23-7.webp'), alt: 'Residential units' }
        ]
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/23-8.webp'), alt: 'Residential units' },
          { src: getAssetPath('/img/23-9.webp'), alt: 'Residential units' }
        ]
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/23-10.webp'), alt: 'Residential units' },
          { src: getAssetPath('/img/23-11.webp'), alt: 'Residential units' }
        ]
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/23-12.webp'), alt: 'Residential units' },
          { src: getAssetPath('/img/23-13.webp'), alt: 'Residential units' }
        ]
      },
    ]
  };

import { getAssetPath } from '../../utils/path';

export const project4 = {
    id: 4,
    title: 'Single Family Home Remodel',
    slug: 'project-4',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/4-1.jpg'),
    description: 'Designed around light, air, and openness, the project reflects a distinctly Californian way of life.',
    location: 'San Jose',
    year: '2024',
    heroImage: getAssetPath('/img/4-1.jpg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/4-2.png'),
            alt: 'Interior spaces'
          },
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/4-3.jpeg'),
            alt: 'Interior  spaces'
          }
        ],
        description: 'The interior is designed to change in character as light conditions shift over time.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/4-4.png'),
            alt: 'Conference facilities',
            description: 'A restrained material palette reinforces a calm and timeless interior atmosphere.'
          },
          {
            src: getAssetPath('/img/4-5.png'),
            alt: 'Common areas and amenities',
            description: 'A calm, material-focused domestic environment.'
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/4-6.jpeg'),
            alt: 'Building infrastructure'
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/4-7.jpeg'),
            alt: 'Conference facilities',
          },
          {
            src: getAssetPath('/img/4-8.jpeg'),
            alt: 'Common areas and amenities',
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/4-9.jpg'),
            alt: 'Building infrastructure'
          }
        ]
      },
    ]
  };

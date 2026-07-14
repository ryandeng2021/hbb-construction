import { getAssetPath } from '../../utils/path';

export const project7 = {
    id: 7,
    title: 'Single Family Home Addition',
    slug: 'Project 7',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/7-3.jpeg'),
    description: 'The main focus of this project is interior work, with a strong emphasis on the kitchen renovation as per the homeowner\'s priorities. We maintained ongoing discussions with the homeowner to ensure that every detail and desired ambiance was meticulously crafted. The kitchen features a specially designed, ultra-modern range hood that aligns with contemporary tastes. \nOur dedicated efforts ensured the realization of this luxurious kitchen, leaving the homeowner thoroughly satisfied.',
    location: 'Newark',
    year: '2023',
    heroImage: getAssetPath('/img/7-3.jpeg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/7-4.jpeg'),
            alt: 'Campus overview'
          }
        ],
        description: 'A restrained material palette reinforces a calm and timeless interior atmosphere.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/7-5.jpeg'),
            alt: 'Science laboratories'
          },
          {
            src: getAssetPath('/img/7-6.jpg'),
            alt: 'Sports and recreation facilities'
          }
        ],
        description: 'The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/7-1.jpeg'),
            alt: 'Academic buildings',
            description: 'The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
          },
          {
            src: getAssetPath('/img/7-2.jpeg'),
            alt: 'Library and research facilities',
            description: 'The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
          }
        ]
      }
    ],
  };

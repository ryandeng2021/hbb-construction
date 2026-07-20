import { getAssetPath } from '../../utils/path';

export const project6 = {
    id: 6,
    title: 'Single Family Home Addition',
    slug: 'project-6',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/6-1.jpg'),
    description: 'The main focus of this project is interior work, with a strong emphasis on the kitchen renovation as per the homeowners\' priorities. We maintained ongoing discussions with the homeowner to ensure that every detail and desired ambiance was meticulously crafted. The kitchen features a specially designed, ultra-modern range hood that aligns with contemporary tastes. Our dedicated efforts ensured the realization of this luxurious kitchen, leaving the homeowner thoroughly satisfied.',
    location: 'San Mateo',
    year: '2024',
    heroImage: getAssetPath('/img/6-1.jpg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/6-3.jpg'),
            alt: 'New retail wing development'
          }
        ],
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/6-4.jpg'),
            alt: 'Entertainment complex'
          }
        ],
        description: 'The client is highly satisfied with the overall construction, as it perfectly captures the original design concept of the house.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/6-5.jpg'),
            alt: 'Food court area',
            description: 'A modern, light-filled space with a sleek, minimalistic design.'
          },
          {
            src: getAssetPath('/img/6-6.jpg'),
            alt: 'Parking facility expansion',
            description: 'A spacious and open area with a modern, minimalistic design.'
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/6-7.jpg'),
            alt: 'Food court area',
            description: 'The house reflects a contemporary interpretation of Californian residential architecture.'
          },
          {
            src: getAssetPath('/img/6-8.jpg'),
            alt: 'Parking facility expansion',
            description: 'The interior prioritizes lived experience over formal expression.'
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/6-2.jpg'),
            alt: 'Mall expansion construction'
          }
        ],
      },
    ]
  };

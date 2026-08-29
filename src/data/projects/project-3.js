import { getAssetPath } from '../../utils/path';

export const project3 = {
    id: 3,
    title: 'Remodel & Addition',
    slug: 'project-3',
    category: 'House Remodel & Addition',
    status: 'completed',
    image: getAssetPath('/img/3-1.jpeg'),
    description: 'A Belmont remodel and addition keeps its expanded footprint quiet and cohesive, favoring restrained detailing over any single showpiece room.',
    location: 'Belmont',
    year: '2023',
    heroImage: getAssetPath('/img/3-1.jpeg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/3-4.jpeg'),
            alt: 'Warehouse exterior overview'
          }
        ],
        description: 'This interior view shows how the addition reads as one continuous space, its finishes matched seamlessly to the original structure.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/3-2.jpeg'),
            alt: 'Interior storage area',
            description: "The kitchen's tall upper cabinetry stretches storage toward the ceiling while keeping the counters below open and workable."
          },
          {
            src: getAssetPath('/img/3-3.jpg'),
            alt: 'Loading dock facilities',
            description: 'Just beyond the range, the dining area opens directly off the kitchen, turning meal prep and gathering into one shared moment.'
          }
        ]
      },
    ]
  };

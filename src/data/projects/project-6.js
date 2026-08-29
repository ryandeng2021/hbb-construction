import { getAssetPath } from '../../utils/path';

export const project6 = {
    id: 6,
    title: 'Remodel',
    slug: 'project-6',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/6-1.jpg'),
    description: 'This San Mateo remodel is built around one showpiece kitchen, finished with a sculptural range hood the homeowners had long envisioned.',
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
        description: 'Custom cabinetry lines the kitchen from counter to ceiling, giving the homeowners the storage and polish they asked for.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/6-5.jpg'),
            alt: 'Food court area',
            description: "An oversized island anchors the kitchen's layout, giving the room a natural gathering point for cooking and conversation."
          },
          {
            src: getAssetPath('/img/6-6.jpg'),
            alt: 'Parking facility expansion',
            description: "Pendant lighting over the counters keeps the kitchen bright without competing with the room's minimal cabinetry."
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/6-7.jpg'),
            alt: 'Food court area',
            description: "The custom range hood becomes the kitchen's focal point, its bold form set against otherwise quiet, pared-back surfaces."
          },
          {
            src: getAssetPath('/img/6-8.jpg'),
            alt: 'Parking facility expansion',
            description: 'Even the smallest details, from hardware to trim, were chosen to keep the kitchen feeling deliberate and uncluttered.'
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

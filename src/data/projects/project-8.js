import { getAssetPath } from '../../utils/path';

export const project8 = {
    id: 8,
    title: 'Remodel & Addition',
    slug: 'project-8',
    category: 'House Remodel & Addition',
    status: 'completed',
    image: getAssetPath('/img/8-1.jpeg'),
    description: 'In Cupertino, imported finishes chosen by the homeowner drove every plumbing and electrical decision, resulting in a home built to exact specification.',
    location: 'Cupertino',
    year: '2024',
    heroImage: getAssetPath('/img/8-1.jpeg'),
    content: [
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/8-2.jpeg'),
            alt: 'Hospital building exterior'
          },
          {
            src: getAssetPath('/img/8-3.jpeg'),
            alt: 'Medical facility construction'
          }
        ],
        description: 'Wide openings connect the kitchen directly to the yard, letting the indoor counters and outdoor patio function as one continuous space.'
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/8-4.jpeg'),
            alt: 'Operating theaters and medical equipment'
          }
        ],
        description: 'Tall windows above the kitchen counters pull in steady daylight, keeping the imported stone surfaces bright throughout the day.'
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/8-5.jpeg'),
            alt: 'Patient rooms',
          },
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/8-6.jpeg'),
            alt: 'Emergency department',
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/8-7.jpeg'),
            alt: 'Outpatient clinics and diagnostic centers'
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/8-8.jpeg'),
            alt: 'Patient rooms',
          },
          {
            src: getAssetPath('/img/8-9.jpeg'),
            alt: 'Emergency department',
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/8-10.jpeg'),
            alt: 'Patient rooms',
          },
          {
            src: getAssetPath('/img/8-11.jpeg'),
            alt: 'Emergency department',
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/8-12.jpeg'),
            alt: 'Outpatient clinics and diagnostic centers'
          }
        ],
      },
    ]
  };

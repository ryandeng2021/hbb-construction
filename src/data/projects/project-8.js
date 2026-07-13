import { getAssetPath } from '../../utils/path';

export const project8 = {
    id: 8,
    title: 'Single Family Home Remodel',
    slug: 'Project 8',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/8-1.jpeg'),
    description: 'In this project, all materials chosen by the homeowner are not locally sourced, necessitating a departure from standard construction processes. We had to plan plumbing and electrical layouts based on the specifications of the products purchased by the homeowner. As a result, our communication with the client was nearly real-time throughout the construction process. Through persistent effort, we successfully achieved the exact look and feel the client envisioned for their home.',
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
        description: 'The house responds to the mild California climate by blurring the boundary between indoor and outdoor living.'
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/8-4.jpeg'),
            alt: 'Operating theaters and medical equipment'
          }
        ],
        description: 'The interior spaces are designed to be bright and airy, with large windows and high ceilings that allow natural light to flow in.'
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

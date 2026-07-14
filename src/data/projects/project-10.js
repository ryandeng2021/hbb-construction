import { getAssetPath } from '../../utils/path';

export const project10 = {
    id: 10,
    title: 'Detached ADU',
    slug: 'project-9',
    category: 'ADU',
    status: 'completed',
    image: getAssetPath('/img/11-5.png'),
    description: 'This project features a compact residential unit similar to a condo. Due to limited storage space, the homeowner desired more storage options. After discussions with the homeowner, our team created a sunken space similar to a basement using concrete, and raised the crawl space. This solution not only ensured compliance with building codes but also maximized storage capacity. Additionally, it effectively mitigates termite risks to a certain extent.',
    location: 'San Jose',
    year: '2023',
    heroImage: getAssetPath('/img/11-1.jpeg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/11-2.png'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/11-3.jpeg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/11-4.png'),
            alt: 'Commercial office spaces',
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/11-5.png'),
            alt: 'Retail and dining spaces'
          },
          {
            src: getAssetPath('/img/11-6.jpg'),
            alt: 'Public plaza and green spaces'
          }
        ],
        description: 'Natural light plays a central role in shaping the interior atmosphere throughout the day.'
      }
    ]
  };

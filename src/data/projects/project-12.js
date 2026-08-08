import { getAssetPath } from '../../utils/path';

export const project12 = {
    id: 12,
    title: 'New Detached ADU',
    slug: 'project-12',
    category: 'ADU ',
    status: 'completed',
    image: getAssetPath('/img/13-1.jpg'),
    description: 'his project features a compact residential unit similar to a condo. Due to limited storage space, the homeowner desired more storage options. After discussions with the homeowner, our team created a sunken space similar to a basement using concrete, and raised the crawl space. This solution not only ensured compliance with building codes but also maximized storage capacity. Additionally, it effectively mitigates termite risks to a certain extent.',
    location: 'San Jose',
    year: '2022',
    heroImage: getAssetPath('/img/13-1.jpg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/13-5.jpg'),
            alt: 'Single Family Home Remodel overview'
          }
        ],
        description: 'Large openings allow daylight to penetrate deep into the interior, enhancing spatial depth and clarity.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/13-3.jpg'),
            alt: 'Residential units',
          },
          {
            src: getAssetPath('/img/13-4.jpg'),
            alt: 'Commercial office spaces',
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/13-2.jpg'),
            alt: 'Retail and dining spaces'
          }
        ],
        description: 'Architectural elements such as overhangs and recessed openings mediate climate and privacy.'
      }
    ]
  };

import { getAssetPath } from '../../utils/path';

export const project21 = {
    id: 21,
    title: 'Addition & Remodel',
    slug: 'project-21',
    category: 'House Addition & Remodel',
    status: 'completed',
    image: getAssetPath('/img/21-1.webp'),
    description: "A compact Palo Alto remodel introduces a brighter kitchen and refreshed bath while preserving the home's original modest scale and charm.",
    location: 'Palo Alto',
    year: '2026',
    heroImage: getAssetPath('/img/21-1.webp'),
    content: [
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/21-2.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/21-3.webp'), alt: 'Single Family Home Remodel overview' }
        ],
        description: 'A skylight brightens the bathroom just steps from the newly opened kitchen, tying the two renovated spaces together.'
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/21-4.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/21-5.webp'), alt: 'Single Family Home Remodel overview' }
        ],
        description: 'The primary bedroom gains a built-in closet system, turning what was cramped storage into an organized dressing area.'
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/21-6.webp'), alt: 'Residential units' },
          { src: getAssetPath('/img/21-7.webp'), alt: 'Residential units' }
        ]
      },
      {
        layout: 'one',
        images: [
          { src: getAssetPath('/img/21-8.webp'), alt: 'Residential units' }
        ]
      },
    ]
  };

import { getAssetPath } from '../../utils/path';

export const project25= {
    id: 25    ,
    title: 'Addition & Remodel',
    slug: 'project-25',
    category: 'WholeHouse Remodel',
    status: 'completed',
    image: getAssetPath('/img/25-1.webp'),
    description: 'A Los Gatos whole-house remodel unifies the living room and bathrooms around clean lines and a calm, neutral material story.',
    location: 'Los Gatos',
    year: '2026',
    heroImage: getAssetPath('/img/25-1.webp'),
    content: [
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/25-2.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/25-3.webp'), alt: 'Single Family Home Remodel overview' }
        ],
        description: 'A sunlit living room sits just around the corner from a fully rebuilt bathroom finished in soft, neutral stone.'
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/25-4.webp'), alt: 'Single Family Home Remodel overview' },
          { src: getAssetPath('/img/25-5.webp'), alt: 'Single Family Home Remodel overview' }
        ],
      }
    ]
  };

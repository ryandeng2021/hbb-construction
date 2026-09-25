import { getAssetPath } from '../../utils/path';

export const project4 = {
    id: 4,
    title: 'Remodel',
    slug: 'project-4',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/4-1.webp'),
    description: 'Centered on light and openness, this San Jose remodel gives every room an easy, California-casual connection to the outdoors.',
    location: 'San Jose',
    year: '2024',
    heroImage: getAssetPath('/img/4-1.webp'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/4-2.webp'),
            alt: 'Interior spaces'
          },
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/4-3.webp'),
            alt: 'Interior  spaces'
          }
        ],
        description: "Morning and evening light change the kitchen's mood dramatically, the same counters reading warm at sunrise and cool by dusk."
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/4-4.webp'),
            alt: 'Conference facilities',
            description: "A single stone finish carries through the bathroom's walls and floor, giving the room an unbroken, spa-like calm."
          },
          {
            src: getAssetPath('/img/4-5.webp'),
            alt: 'Common areas and amenities',
            description: "Fixtures here are kept minimal and matte-finished, so the bathroom's materials do the talking rather than the hardware."
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/4-6.webp'),
            alt: 'Building infrastructure'
          }
        ]
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/4-7.webp'),
            alt: 'Conference facilities',
          },
          {
            src: getAssetPath('/img/4-8.webp'),
            alt: 'Common areas and amenities',
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/4-9.webp'),
            alt: 'Building infrastructure'
          }
        ]
      },
    ]
  };

import { getAssetPath } from '../../utils/path';

export const project30 = {
    id: 30,
    title: 'New Construction',
    slug: 'project-30',
    category: 'New Construction',
    status: 'ongoing',
    image: getAssetPath('/img/30-1.webp'),
    description: 'A ground-up custom home in Menlo Park, currently in the framing stage. Tours are open to prospective clients who want to see how we build before the walls close up.',
    location: 'Menlo Park',
    year: '2026',
    heroImage: getAssetPath('/img/30-1.webp'),
    content: [
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/30-1.webp'), alt: 'New construction framing, Menlo Park' },
          { src: getAssetPath('/img/30-4.webp'), alt: 'Scaffolding around the framed structure' }
        ],
        description: "This Menlo Park home is being built from the ground up and is currently in the framing stage. The roofline, second-floor volumes, and window openings are all in place, so you can already read the shape of the finished house."
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/30-5.webp'), alt: 'Side elevation with scaffolding' },
          { src: getAssetPath('/img/30-2.webp'), alt: 'Walking the site during construction' }
        ],
        description: "We walk the site with our clients at every major milestone. Framing is the best moment to catch changes - moving a window or adjusting an opening costs very little now, and a great deal once drywall is up."
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/30-7.webp'), alt: 'Vaulted ceiling framing' },
          { src: getAssetPath('/img/30-3.webp'), alt: 'Stair framing' }
        ],
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/30-6.webp'), alt: 'Window opening framed to the garden' },
          { src: getAssetPath('/img/30-10.webp'), alt: 'Large window opening with tree views' }
        ],
        description: "Every opening was positioned around the mature trees on the lot. Standing inside the frame is the only way to really judge a view, which is exactly why we like showing houses at this stage."
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/30-8.webp'), alt: 'Interior corner framing' },
          { src: getAssetPath('/img/30-9.webp'), alt: 'Framed interior with window' }
        ],
      },
      {
        layout: 'two',
        images: [
          { src: getAssetPath('/img/30-11.webp'), alt: 'Interior framing detail' },
          { src: getAssetPath('/img/30-12.webp'), alt: 'Framed opening looking out' }
        ],
      },
    ]
  };

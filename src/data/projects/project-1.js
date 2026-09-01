import { getAssetPath } from '../../utils/path';

export const project1 = {
    id: 1,
    title: 'Rebuild',
    slug: 'project-1',
    category: 'New Construction',
    status: 'completed',
    image: getAssetPath('/img/1-1.jpeg'),
    description: "A full teardown rebuild in Pleasanton delivers generous room-to-room flow and an unhurried, understated exterior that lets the site's scale speak for itself.",
    location: 'Pleasanton',
    year: '2024',
    heroImage: getAssetPath('/img/1-1.jpeg'),
    content: [
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/1-2.png'),
            alt: 'Building exterior view'
          },
          {
            src: getAssetPath('/img/1-3.jpeg'),
            alt: 'Construction site overview'
          }
        ],
        description: "The rebuilt exterior presents clean lines and a low-key palette, letting the home's generous footprint read as calm rather than showy."
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/1-4.jpeg'),
            alt: 'Interior construction details'
          }
        ],
        description: 'A single elevation view captures how the new massing sits comfortably on its expansive lot, understated and well-proportioned.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/1-5.jpg'),
            alt: 'Building facade',
            description: "Broad window openings along the front elevation pull daylight toward the entry without disrupting the facade's quiet symmetry."
          },
          {
            src: getAssetPath('/img/1-6.jpeg'),
            alt: 'Structural framework',
            description: "The living room's open framing keeps sightlines long, giving the family space an easy, uncluttered sense of scale."
          }
        ],
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/1-7.jpg'),
            alt: 'Building facade',
          },
          {
            src: getAssetPath('/img/1-8.jpeg'),
            alt: 'Structural framework',
          }
        ]
      },
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/1-9.jpeg'),
            alt: 'Interior construction details'
          }
        ],
      },
    ]
  };

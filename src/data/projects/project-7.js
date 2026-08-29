import { getAssetPath } from '../../utils/path';

export const project7 = {
    id: 7,
    title: 'Addition',
    slug: 'project-7',
    category: 'House Remodel',
    status: 'completed',
    image: getAssetPath('/img/7-3.jpeg'),
    description: "Set in Newark, this addition revolves around a rebuilt kitchen whose hand-built range hood became the room's defining design statement.",
    location: 'Newark',
    year: '2023',
    heroImage: getAssetPath('/img/7-3.jpeg'),
    content: [
      {
        layout: 'one',
        images: [
          {
            src: getAssetPath('/img/7-4.jpeg'),
            alt: 'Campus overview'
          }
        ],
        description: 'Cabinetry throughout the kitchen was chosen for a calm, cohesive palette that reads the same from every angle of the room.'
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/7-5.jpeg'),
            alt: 'Science laboratories'
          },
          {
            src: getAssetPath('/img/7-6.jpg'),
            alt: 'Sports and recreation facilities'
          }
        ],
        description: "The kitchen's finishes carry an unmistakably contemporary edge, from the hood's sculpted form to the honed stone backsplash behind it."
      },
      {
        layout: 'two',
        images: [
          {
            src: getAssetPath('/img/7-1.jpeg'),
            alt: 'Academic buildings',
            description: 'From the street, the addition reads as a natural extension of the original house, matched in scale and roofline.'
          },
          {
            src: getAssetPath('/img/7-2.jpeg'),
            alt: 'Library and research facilities',
            description: 'New siding and trim were matched precisely to the existing exterior, so the addition blends in rather than standing apart.'
          }
        ]
      }
    ],
  };

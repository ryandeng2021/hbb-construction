import { getAssetPath } from '../../utils/path';

export const project34 = {
  id: 34,
  title: 'Home Remodel',
  slug: 'project-34',
  category: 'House Remodel',
  status: 'completed',
  year: '2026',
  image: getAssetPath('/img/34-5.webp'),
  heroImage: getAssetPath('/img/34-5.webp'),
  location: 'San Jose',
  description: 'A San Jose remodel pairing white and warm wood kitchen cabinetry with a stone-topped island, linear lighting and softly finished bathrooms.',
  content: [
    {
      layout: 'three',
      images: [
        { src: getAssetPath('/img/34-1.webp'), alt: 'White and wood San Jose kitchen with a stone-topped island and stainless refrigerator' },
        { src: getAssetPath('/img/34-2.webp'), alt: 'San Jose kitchen island with a black faucet and linear pendant light' },
        { src: getAssetPath('/img/34-3.webp'), alt: 'White upper cabinets and wood lower cabinets along the San Jose kitchen work surface' }
      ],
      description: 'White upper cabinets and warm wood below set the tone for the kitchen. A large stone-topped island provides a central work surface, with a slim black pendant suspended above.'
    },
    {
      layout: 'two',
      images: [
        { src: getAssetPath('/img/34-4.webp'), alt: 'Kitchen island sink and linear pendant facing white and wood cabinetry' },
        { src: getAssetPath('/img/34-5.webp'), alt: 'Light stone island countertop with a black sink and faucet' }
      ],
      description: 'The light stone countertop and backsplash carry through the kitchen, while the black faucet and pendant provide a simple contrast to the cabinetry.'
    },
    {
      layout: 'three',
      images: [
        { src: getAssetPath('/img/34-6.webp'), alt: 'Kitchen aisle with wood base cabinets, light stone counters and white upper cabinetry' },
        { src: getAssetPath('/img/34-7.webp'), alt: 'Built-in stainless ovens beside white cabinetry and a wood drawer bank' },
        { src: getAssetPath('/img/34-8.webp'), alt: 'Stainless cooking appliances integrated into the San Jose kitchen cabinets' }
      ],
      description: 'Tall storage, built-in ovens and a stainless range hood are integrated into the cabinet layout. The same white, wood and stone palette continues around the room.'
    },
    {
      layout: 'two',
      images: [
        { src: getAssetPath('/img/34-9.webp'), alt: 'San Jose bathroom with a floating wood vanity and rounded mirror' },
        { src: getAssetPath('/img/34-10.webp'), alt: 'Glass-enclosed shower with large-format neutral tile and a recessed niche' }
      ],
      description: 'The bathrooms use softly toned tile, wood vanities and light counters. Rounded mirrors soften the geometry, and clear glass keeps the shower areas visually open.'
    },
    {
      layout: 'three',
      images: [
        { src: getAssetPath('/img/34-11.webp'), alt: 'Floating wood vanity with a light countertop and rounded mirror' },
        { src: getAssetPath('/img/34-12.webp'), alt: 'Double-sink wood vanity with two rounded mirrors in the San Jose remodel' },
        { src: getAssetPath('/img/34-13.webp'), alt: 'Glass tub enclosure with neutral tile and brushed metal fittings' }
      ],
      description: 'A double vanity and a glass tub enclosure continue the bathroom palette, with practical storage and simple brushed metal fittings.'
    }
  ]
};

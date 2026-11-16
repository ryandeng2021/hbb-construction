import { getAssetPath } from '../../utils/path';

export const project33 = {
  id: 33,
  title: 'Whole-Home Remodel',
  slug: 'project-33',
  category: 'House Remodel',
  status: 'completed',
  year: '2026',
  scope: 'Whole-home remodel',
  image: getAssetPath('/img/33-1.webp'),
  heroImage: getAssetPath('/img/33-1.webp'),
  location: 'Hillsborough',
  description: 'A whole-home remodel in Hillsborough, featuring rich wood cabinetry, a generous kitchen island, bold stone accents and a coordinated palette of warm, natural tones.',
  content: [
    {
      layout: 'two',
      images: [
        { src: getAssetPath('/img/33-2.webp'), alt: 'Hillsborough kitchen with a wood-clad island and light countertop' },
        { src: getAssetPath('/img/33-3.webp'), alt: 'Professional range and stainless hood framed by glass-front kitchen cabinets' }
      ],
      description: 'Warm wood cabinetry wraps the kitchen, with a generous island and light work surfaces at its center. A stainless range hood and glass-front upper cabinets add contrast to the simple cabinet lines.'
    },
    {
      layout: 'two',
      images: [
        { src: getAssetPath('/img/33-4.webp'), alt: 'Full-height wood cabinetry and integrated storage in the Hillsborough kitchen' },
        { src: getAssetPath('/img/33-5.webp'), alt: 'Tall wood pantry doors beside the kitchen island' }
      ],
      description: 'Full-height cabinetry brings the storage and appliances into one consistent wood palette, carrying the kitchen finishes across the room.'
    },
    {
      layout: 'two',
      images: [
        { src: getAssetPath('/img/33-6.webp'), alt: 'Kitchen island sink facing built-in ovens and a patterned stone backsplash' },
        { src: getAssetPath('/img/33-7.webp'), alt: 'Veined stone counter and backsplash beside the built-in kitchen appliances' }
      ],
      description: 'A boldly patterned stone backsplash gives the serving counter its own identity. The surrounding wood cabinetry and built-in appliances keep the composition connected to the main kitchen.'
    },
    {
      layout: 'two',
      images: [
        { src: getAssetPath('/img/33-8.webp'), alt: 'Close view of the veined stone backsplash over a wood cabinet' },
        { src: getAssetPath('/img/33-9.webp'), alt: 'Built-in stainless appliances set into full-height wood cabinetry' }
      ]
    },
    {
      layout: 'two',
      images: [
        { src: getAssetPath('/img/33-10.webp'), alt: 'Window-lit sink counter with wood cabinets and a patterned stone backsplash' },
        { src: getAssetPath('/img/33-11.webp'), alt: 'Wood sink cabinetry below a pair of white-framed windows in Hillsborough' }
      ],
      description: 'A separate window-lit sink area repeats the wood cabinetry and stone finishes, bringing the same material palette into the supporting work space.'
    }
  ]
};

import { getAssetPath } from '../utils/path';

export const coreAdvantages = {
  title: 'Core Advantages',
  items: [
    {
      id: 1,
      heading: 'Expert Team\nIn-House Construction',
      description: 'We handle all foundation and framing work in-house, ensuring full control over quality and schedule.',
      image: getAssetPath('/img/14-2.jpg')
    },
    {
      id: 2,
      heading: 'End-to-End Service\nSeamless Delivery',
      description: 'From survey and design to construction, our team manages every step efficiently and smoothly.',
      image: getAssetPath('/img/14-3.jpeg')
    },
    {
      id: 3,
      heading: 'Cost-Effective\nHigh Value',
      description: 'Owning our crews and equipment reduces outsourcing, lowers costs, and maximizes ROI.',
      image: getAssetPath('/img/14-4.jpeg')
    },
    {
      id: 4,
      heading: 'Experienced & Reliable',
      description: 'Years of diverse project experience ensure smooth execution and design realization.',
      image: getAssetPath('/img/14-8.jpg')
    }
  ]
};

// Team rows - 2D array structure where each row is an array of member objects
// Each row can have any number of members

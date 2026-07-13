import { getAssetPath } from '../utils/path';

export const backgroundImages = {
  hero: getAssetPath('/img/1-1.jpeg'),
  // footer: getAssetPath('/img/bg-sp.jpg'),
  imgBg: getAssetPath('/img/img-bg.webp'),
  // whyChoose: getAssetPath('/img/bg-sp.jpeg'), 
  icon: getAssetPath('/img/logo.svg')
};

// Hero carousel images
// Note: getAssetPath will automatically prefix with basePath in production
export const heroCarousel = [
  {
    id: 1,
    image: getAssetPath('/img/1-1.jpeg'),
    title: 'Residential Construction Company in Bay Area',
    subtitle: "We Don't Just Build Homes, We Shape Your Future."
  },
  {
    id: 15,
    image: getAssetPath('/img/14-2.jpg'),
    title: 'Single Family Home Remodel',
    subtitle: 'Building Excellence, One Project at a Time.'
  },
  {
    id: 2,
    image: getAssetPath('/img/2-1.jpeg'),
    title: 'Quality Construction Services',
    subtitle: 'Built with integrity. Delivered with precision.'
  },
  {
    id: 3,
    image: getAssetPath('/img/3-1.jpeg'),
    title: 'Your Trusted Construction Partner',
    subtitle: 'Transforming Visions into Reality.'
  },
  {
    id: 4,
    image: getAssetPath('/img/4-1.jpg'),
    title: 'Transforming Residential Construction in California',
    subtitle: 'Thoughtfully built homes, made to last.'
  },
  {
    id: 5,
    image: getAssetPath('/img/5-1.jpeg'),
    title: 'Transforming Residential Construction in California',
    subtitle: 'Custom homes. Exceptional execution.'
  },
  {
    id: 6,
    image: getAssetPath('/img/6-1.jpg'),
    title: 'Transforming Residential Construction in California',
    subtitle: 'Homes crafted with care and attention to detail.'
  },
  {
    id: 6,
    image: getAssetPath('/img/7-1.jpeg'),
    title: 'Transforming Residential Construction in California',
    subtitle: 'Precision-built spaces for modern living.'
  }
];

// Navigation links used across the website
export const usefulLinks = [
  { id: 1, title: 'Home' },
  { id: 2, title: 'About Us' },
  { id: 3, title: 'Projects' },
  { id: 4, title: 'Contact Us' }, // fixed id gap from 3 to 5
  { id: 5, title: 'Privacy Policy' } // fixed id gap from 5 to 7
];

// Navigation menu items with dropdowns
export const navigationMenu = [
  {
    id: 1,
    title: 'Home',
    href: '/',
    hasDropdown: false
  },
  {
    id: 2,
    title: 'About',
    href: '/aboutus',
    hasDropdown: true,
    dropdownItems: [
      { id: 1, title: 'About', href: '/aboutus/#about' },
      { id: 2, title: 'Team', href: '/aboutus/#team' },
      { id: 3, title: 'Service', href: '/#process' },
    ]
  },
  {
    id: 3,
    title: 'Projects',
    href: '/#projects',
    hasDropdown: false
  },
  {
    id: 4,
    title: 'Contact Us',
    href: '/#contact',
    hasDropdown: false
  }
];

// Process/Workflow steps data

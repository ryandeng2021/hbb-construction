import { getAssetPath } from '../utils/path';

export const backgroundImages = {
  hero: getAssetPath('/img/1-1.webp'),
  // footer: getAssetPath('/img/bg-sp.webp'),
  imgBg: getAssetPath('/img/img-bg.webp'),
  // whyChoose: getAssetPath('/img/bg-sp.webp'), 
  icon: getAssetPath('/img/logo.png')
};

// Small promo card that pops up shortly after the home page opens. Its clip is the
// portrait Kling render (1080x1504, bottom watermark strip cropped off), shown small
// so it stays sharp - full-screen it looked soft.
export const promoPopup = {
  video: getAssetPath('/video/hero-intro-mobile.mp4'),
  poster: getAssetPath('/video/hero-intro-mobile-poster.webp'),
  eyebrow: 'Honey Badger Brothers Construction',
  title: 'Planning to build or remodel?',
  body: 'Get a free quote for your remodel, addition, ADU or new home - or come tour one of our builds in progress.',
  quoteLabel: 'Get a Free Quote',
  tourLabel: 'Book a Tour',
  // Text on the small button left in the corner after the card is closed
  minimizedLabel: 'Free Quote',
  // Wait this long after the page opens before showing the card
  delayMs: 1500
};

// Hero carousel images
// Note: getAssetPath will automatically prefix with basePath in production
export const heroCarousel = [
  {
    id: 20,
    image: getAssetPath('/img/20-1.webp'),
    title: 'New Construction in Los Altos',
    subtitle: 'Ground-up homes, built down to the last detail.'
  },
  {
    id: 19,
    image: getAssetPath('/img/19-1.webp'),
    title: 'Whole-House Addition & Remodel',
    subtitle: 'More space and more light, without losing the home you know.'
  },
  {
    id: 24,
    image: getAssetPath('/img/24-2.webp'),
    title: 'Addition & Remodel in Hillsborough',
    subtitle: 'Sprawling living, kitchen, and bedroom wings under one roof.'
  },
  {
    id: 27,
    image: getAssetPath('/img/27-7.webp'),
    title: 'Whole-Home Remodel in Los Altos',
    subtitle: 'Fewer rooms, a noticeably better way to live.'
  },
  {
    id: 1,
    image: getAssetPath('/img/1-1.webp'),
    title: 'Residential Construction Company in Bay Area',
    subtitle: "We Don't Just Build Homes, We Shape Your Future."
  },
  {
    id: 15,
    image: getAssetPath('/img/14-2.webp'),
    title: 'Single Family Home Remodel',
    subtitle: 'Building Excellence, One Project at a Time.'
  },
  {
    id: 2,
    image: getAssetPath('/img/2-1.webp'),
    title: 'Quality Construction Services',
    subtitle: 'Built with integrity. Delivered with precision.'
  },
  {
    id: 3,
    image: getAssetPath('/img/3-1.webp'),
    title: 'Your Trusted Construction Partner',
    subtitle: 'Transforming Visions into Reality.'
  },
  {
    id: 4,
    image: getAssetPath('/img/4-1.webp'),
    title: 'Transforming Residential Construction in California',
    subtitle: 'Thoughtfully built homes, made to last.'
  },
  {
    id: 5,
    image: getAssetPath('/img/5-1.webp'),
    title: 'Transforming Residential Construction in California',
    subtitle: 'Custom homes. Exceptional execution.'
  },
  {
    id: 6,
    image: getAssetPath('/img/6-1.webp'),
    title: 'Transforming Residential Construction in California',
    subtitle: 'Homes crafted with care and attention to detail.'
  },
  {
    id: 7,
    image: getAssetPath('/img/7-1.webp'),
    title: 'Transforming Residential Construction in California',
    subtitle: 'Precision-built spaces for modern living.'
  }
];

// Navigation links used across the website
export const usefulLinks = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'About Us', url: '/aboutus' },
  { id: 3, title: 'Projects', url: '/projects' },
  { id: 4, title: 'Gallery', url: '/gallery' },
  { id: 5, title: 'Contact Us', url: '/#contact' },
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
    href: '/projects',
    hasDropdown: false
  },
  {
    id: 4,
    title: 'Gallery',
    href: '/gallery',
    hasDropdown: false
  },
  {
    id: 5,
    title: 'Contact Us',
    href: '/#contact',
    hasDropdown: false,
    // Opens the contact form popup; href stays as the fallback before the page has loaded
    opensContactForm: true
  }
];

// Process/Workflow steps data

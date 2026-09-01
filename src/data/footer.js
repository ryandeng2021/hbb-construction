import { getAssetPath } from '../utils/path';

export const footerData = {
  logo: {
    src: getAssetPath('/img/logo.svg'),
    alt: 'Logo | HBB Construction',
    width: 200,
    height: 80
  },
  description: 'HBB Construction is a trusted residential construction company in Bay Area, delivering high-quality, innovative, and reliable home-building solutions.',
  contact: {
    address: '3006 Lawrence Expy, Santa Clara, CA, 95051, United States',
    email: 'project@hbbconstruction.com'
  },
  map: {
    embedUrl: 'https://www.google.com/maps?q=3006+Lawrence+Expy,+Santa+Clara,+CA+95051&z=17&output=embed',
    width: 300,
    height: 250,
    title: 'Google Map Location'
  },
  copyright: {
    companyName: 'HBB Construction',
    text: 'All rights reserved'
  }
};

// Why Choose Us section data

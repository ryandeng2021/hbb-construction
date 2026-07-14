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
    address: '1580 Oakland Road C207, San Jose, CA 95131 United States',
    email: 'ryand@hbbconstruction.com',
    phones: [
      '+1 (650) 996-0715'
    ]
  },
  map: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.4080535995095!2d-121.89412435000001!3d37.380181150000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc0c39ac6955%3A0xdf362ab74221c698!2s1580%20Oakland%20Rd%2C%20San%20Jose%2C%20CA%2095131!5e0!3m2!1szh-CN!2sus!4v1768456666567!5m2!1szh-CN!2sus',
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

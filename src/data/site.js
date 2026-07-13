/**
 * Site-wide SEO and indexing configuration.
 * Update SITE_URL if the production domain changes.
 */
/** Production origin (no trailing slash). GitHub Pages project site. */
export const SITE_URL = 'https://suzycheung1115-lang.github.io';

/** Path prefix in production (matches next.config.js repositoryName). */
export const SITE_BASE_PATH = '/hbb-construction';

export const SITE_NAME = 'HBB Construction';

export const DEFAULT_TITLE = 'HBB Construction | Residential Builders in the Bay Area';

export const DEFAULT_DESCRIPTION =
  'HBB Construction is a Bay Area residential construction company specializing in custom homes, remodels, additions, and ADUs. Built with integrity and precision.';

export const DEFAULT_OG_IMAGE = '/img/1-1.jpeg';

export const BUSINESS = {
  name: 'HBB Construction',
  legalName: 'Honey Badger Brothers Construction',
  description: DEFAULT_DESCRIPTION,
  email: 'ryand@hbbconstruction.com',
  phone: '+1-650-996-0715',
  address: {
    streetAddress: '1580 Oakland Road C207',
    addressLocality: 'San Jose',
    addressRegion: 'CA',
    postalCode: '95131',
    addressCountry: 'US',
  },
  areaServed: 'San Francisco Bay Area',
  sameAs: [],
};

/**
 * Absolute URL for a site path (handles basePath + trailing slash).
 * @param {string} path - Path like '/' or '/projects/foo'
 */
export const absoluteUrl = (path = '/') => {
  const base = `${SITE_URL}${SITE_BASE_PATH}`;
  if (!path || path === '/') return `${base}/`;
  const clean = path.startsWith('/') ? path : `/${path}`;
  // Prefer trailing slash to match next.config trailingSlash
  const withSlash = clean.endsWith('/') ? clean : `${clean}/`;
  return `${base}${withSlash}`;
};

/**
 * Absolute URL for a public asset (OG images, etc.).
 * @param {string} path - Asset path like '/img/1-1.jpeg'
 */
export const absoluteAssetUrl = (path) => {
  if (!path) return absoluteUrl('/');
  if (path.startsWith('http')) return path;
  // Strip any existing basePath from getAssetPath results
  const withoutBase = path.replace(new RegExp(`^${SITE_BASE_PATH}`), '');
  const clean = withoutBase.startsWith('/') ? withoutBase : `/${withoutBase}`;
  return `${SITE_URL}${SITE_BASE_PATH}${clean}`;
};

/**
 * Truncate text for meta descriptions (~155 chars).
 * @param {string} text
 * @param {number} max
 */
export const truncateMeta = (text, max = 155) => {
  if (!text) return DEFAULT_DESCRIPTION;
  const flat = String(text).replace(/\s+/g, ' ').trim();
  if (flat.length <= max) return flat;
  return `${flat.slice(0, max - 1).trim()}...`;
};

/**
 * LocalBusiness / GeneralContractor JSON-LD
 */
export const getLocalBusinessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: BUSINESS.name,
  alternateName: BUSINESS.legalName,
  description: BUSINESS.description,
  url: absoluteUrl('/'),
  logo: absoluteAssetUrl('/img/logo.svg'),
  image: absoluteAssetUrl(DEFAULT_OG_IMAGE),
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  address: {
    '@type': 'PostalAddress',
    ...BUSINESS.address,
  },
  areaServed: {
    '@type': 'Place',
    name: BUSINESS.areaServed,
  },
  priceRange: '$$',
});

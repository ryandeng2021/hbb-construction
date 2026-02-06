/**
 * Utility function to get the correct path for static assets with basePath
 * This ensures basePath is included for GitHub Pages deployment
 * 
 * IMPORTANT: Update BASE_PATH to match your repository name
 * Set to '' for user/organization sites (no repo name in URL)
 */

// BasePath for GitHub Pages - update this to match your repository name
// This should match the repositoryName in next.config.js
// Set to '' for root domain deployment (e.g., www.hbbconstruction.com)
const BASE_PATH = process.env.NODE_ENV === 'production' ? '' : '';

/**
 * Gets the basePath for the current environment
 * @returns {string} - The basePath (e.g., '/hbb-construction' or '')
 */
export const getBasePath = () => {
  // In browser, try to get from Next.js __NEXT_DATA__
  if (typeof window !== 'undefined') {
    try {
      const nextData = window.__NEXT_DATA__;
      if (nextData && nextData.assetPrefix) {
        return nextData.assetPrefix;
      }
    } catch (e) {
      // Fallback
    }
  }
  
  // Use the constant (set at build time)
  return BASE_PATH;
};

/**
 * Prefixes a path with the basePath if needed
 * Use this for CSS variables, inline styles, or any paths that Next.js doesn't automatically prefix
 * 
 * @param {string} path - The asset path (e.g., '/img/logo.svg')
 * @returns {string} - The path with basePath prefix if needed
 */
export const getAssetPath = (path) => {
  // If path is empty, invalid, or already absolute, return as is
  if (!path || path.startsWith('http') || path.startsWith('//') || path.startsWith('data:')) {
    return path || '';
  }
  
  const basePath = getBasePath();
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // If we have a basePath and path doesn't already include it, add it
  if (basePath && !cleanPath.startsWith(basePath)) {
    return `${basePath}${cleanPath}`;
  }
  
  return cleanPath;
};


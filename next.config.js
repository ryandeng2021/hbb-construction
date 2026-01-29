// Only apply basePath when building for production (GitHub Pages)
// In development, basePath is not needed
const isProduction = process.env.NODE_ENV === 'production';
const repositoryName = 'hbb-construction'; // Update this to match your GitHub repository name

const nextConfig = {
  reactStrictMode: false,
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true
  },
  // GitHub Pages basePath - only set in production builds
  // If your site is at https://username.github.io/hbb-construction/
  // then basePath should be '/hbb-construction'
  ...(isProduction && { basePath: `/${repositoryName}` }),
  trailingSlash: true, // Recommended for GitHub Pages
};

module.exports = nextConfig;

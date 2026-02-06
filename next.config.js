// Only apply basePath when building for production (GitHub Pages)
// In development, basePath is not needed
const isProduction = process.env.NODE_ENV === 'production';

// ⚠️ IMPORTANT: Determine your GitHub Pages URL structure:
// 
// OPTION 1: Project site (repository name in URL)
//   URL: https://username.github.io/repository-name/
//   Action: Set repositoryName to 'repository-name' (without the leading slash)
//   Example: const repositoryName = 'hbb-construction';
//
// OPTION 2: User/Organization site (no repository name in URL)  
//   URL: https://username.github.io/  (or https://organization.github.io/)
//   Action: Set repositoryName to '' (empty string) or null
//   Example: const repositoryName = '';
//
// To find out: Check your GitHub Pages URL after deployment
// If images are at: https://username.github.io/img/logo.svg → Use OPTION 2 (empty string)
// If images are at: https://username.github.io/repo-name/img/logo.svg → Use OPTION 1 (set repo name)

const repositoryName = ''; // ⚠️ Set to your repository name OR '' for user/org site (empty for root domain deployment)

const nextConfig = {
  reactStrictMode: false,
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true
  },
  // GitHub Pages basePath - only set in production builds and if repositoryName is provided
  ...(isProduction && repositoryName && { 
    basePath: `/${repositoryName}`,
    assetPrefix: `/${repositoryName}`, // Also set assetPrefix for static assets
  }),
  trailingSlash: true, // Recommended for GitHub Pages
};

module.exports = nextConfig;

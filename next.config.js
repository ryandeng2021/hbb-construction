const nextConfig = {
  reactStrictMode: false,
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true
  },
  // GitHub Pages basePath - update this to match your repository name
  // If your site is at https://username.github.io/hbb-construction/
  // then basePath should be '/hbb-construction'
  basePath: '/hbb-construction',
  trailingSlash: true, // Recommended for GitHub Pages
};

module.exports = nextConfig;

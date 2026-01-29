# HBB Construction

A modern, responsive website for HBB Construction built with Next.js, React, and Bootstrap 5.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14+ and React 18+
- **Responsive Design**: Mobile-first approach using Bootstrap 5
- **Static Export**: Optimized for GitHub Pages deployment
- **Performance**: Fast loading times with optimized images and assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 📄 Pages

- **Home**: Hero section, about, projects showcase, and company highlights
- **About Us**: Company information and team details
- **Projects**: Portfolio of construction projects with detailed project pages
- **Team**: Team member profiles with individual pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.14
- **UI Library**: React 18.3.1
- **Styling**: Bootstrap 5.3.3 + SCSS
- **Build Tool**: Next.js built-in bundler
- **Deployment**: GitHub Pages (static export)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hbb-construction
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deploy

### Development
```bash
npm run dev      # Start development server
```

### Production Build
```bash
npm run build    # Build for production (includes SCSS compilation)
```

The build process:
1. Compiles SCSS files to CSS
2. Builds Next.js static export
3. Outputs to `out/` directory

### Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions. The workflow (`.github/workflows/deploy-website.yml`) automatically:

1. Builds the Next.js static site
2. Deploys to GitHub Pages on every push to `main`

To deploy manually:
1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy

## 📁 Project Structure

```
hbb-construction/
├── pages/              # Next.js pages
│   ├── index.jsx      # Home page
│   ├── aboutus.jsx    # About page
│   ├── projects.jsx    # Projects listing
│   ├── projects/      # Dynamic project pages
│   └── team/          # Dynamic team member pages
├── src/
│   ├── components/    # React components
│   ├── assets/scss/   # SCSS source files
│   ├── data.js        # Site data and content
│   └── styles/        # Additional CSS files
├── public/            # Static assets
│   ├── img/          # Images
│   ├── css/          # Compiled CSS
│   └── fonts/        # Font files
├── .github/
│   └── workflows/     # GitHub Actions workflows
└── next.config.js     # Next.js configuration
```

## ⚙️ Configuration

### Next.js Config

The project is configured for static export in `next.config.js`:
- `output: 'export'` - Enables static site generation
- `images.unoptimized: true` - Required for static export

### GitHub Pages

If your repository name is not `hbb-construction`, update the `basePath` in `next.config.js`:
```javascript
basePath: '/your-repository-name',
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (not used for static export)
- `npm run sass` - Compile SCSS to CSS
- `npm run lint` - Run ESLint

## 🔧 Customization

### Updating Content

Edit `src/data.js` to update:
- Company information
- Projects
- Team members
- Badges and achievements

### Styling

- SCSS files are in `src/assets/scss/`
- Compiled CSS outputs to `public/css/`
- Run `npm run sass` to recompile SCSS

### Components

All reusable components are in `src/components/`:
- `Header.jsx` / `Navbar.jsx` - Navigation
- `Hero.jsx` - Hero section
- `About.jsx` - About section
- `Projects.jsx` - Projects showcase
- `Footer.jsx` - Footer
- And more...

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For issues or questions, please contact the project maintainers.

---

Built with ❤️ using Next.js and React

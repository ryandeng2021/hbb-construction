/**
 * Generates public/sitemap.xml from static routes + project/team slugs.
 * Run automatically before `next build` via npm run generate:sitemap
 *
 * Uses CommonJS so it can load the compiled project data without JSX tooling.
 * Project/team lists are read from the source index files via a lightweight parse,
 * with a hardcoded fallback of known static pages.
 */
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://suzycheung1115-lang.github.io';
const BASE_PATH = '/hbb-construction';
const today = new Date().toISOString().slice(0, 10);

const root = path.join(__dirname, '..');

function extractSlugs(filePath, exportNameHint) {
  const src = fs.readFileSync(filePath, 'utf8');
  const slugs = [];
  const re = /slug:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = re.exec(src)) !== null) {
    slugs.push(match[1]);
  }
  return [...new Set(slugs)];
}

function collectProjectSlugs() {
  const projectsDir = path.join(root, 'src', 'data', 'projects');
  const files = fs.readdirSync(projectsDir).filter((f) => /^project-.*\.js$/.test(f));
  const slugs = [];
  for (const file of files) {
    slugs.push(...extractSlugs(path.join(projectsDir, file)));
  }
  return [...new Set(slugs)];
}

function collectTeamSlugs() {
  const teamPath = path.join(root, 'src', 'data', 'team.js');
  if (!fs.existsSync(teamPath)) return [];
  // Only members with an explicit slug field are routed (see pages/team/[slug].jsx)
  return extractSlugs(teamPath);
}

function loc(pathname) {
  const clean = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return `${SITE_URL}${BASE_PATH}${clean}`;
}

function urlEntry(pathname, priority = '0.7', changefreq = 'monthly') {
  return `  <url>
    <loc>${loc(pathname)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/aboutus/', priority: '0.9', changefreq: 'monthly' },
  { path: '/projects/', priority: '0.9', changefreq: 'weekly' },
  { path: '/gallery/', priority: '0.8', changefreq: 'weekly' },
];

const projectSlugs = collectProjectSlugs();
const teamSlugs = collectTeamSlugs();

const entries = [
  ...staticRoutes.map((r) => urlEntry(r.path, r.priority, r.changefreq)),
  ...projectSlugs.map((slug) => urlEntry(`/projects/${slug}/`, '0.8', 'monthly')),
  ...teamSlugs.map((slug) => urlEntry(`/team/${slug}/`, '0.6', 'yearly')),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

const outPath = path.join(root, 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log(
  `Wrote ${outPath} (${staticRoutes.length} static + ${projectSlugs.length} projects + ${teamSlugs.length} team)`
);

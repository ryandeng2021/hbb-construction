# SEO & Google indexing

## What was added

- Shared SEO component: `src/components/SEO.jsx` (title, description, canonical, Open Graph, Twitter, JSON-LD)
- Site config: `src/data/site.js` (`SITE_URL`, default meta, LocalBusiness schema helpers)
- Favicons: `public/favicon.ico` + `public/img/favicon/*` (Chrome tab icon)
- `public/robots.txt` — allows crawling and points to the sitemap
- `public/sitemap.xml` — regenerated on every production build via `npm run generate:sitemap`

## Production URL

Configured as:

`https://suzycheung1115-lang.github.io/hbb-construction/`

If the live domain changes, update:

1. `SITE_URL` / `SITE_BASE_PATH` in `src/data/site.js`
2. `Sitemap:` line in `public/robots.txt`
3. Constants at the top of `scripts/generate-sitemap.js`

## After deploy — submit to Google

1. Open [Google Search Console](https://search.google.com/search-console)
2. Add property for `https://suzycheung1115-lang.github.io/hbb-construction/` (URL-prefix property)
3. Verify ownership (HTML meta tag, or Google Analytics, or DNS if you use a custom domain later)
4. Under **Sitemaps**, submit:

   `https://suzycheung1115-lang.github.io/hbb-construction/sitemap.xml`

5. Use **URL Inspection** on the homepage and a few project pages → **Request indexing**

Indexing is not instant; Google decides crawl timing. Keeping titles/descriptions accurate and the sitemap current helps.

## Local checks

```bash
npm run generate:sitemap
npm run dev
```

Then confirm:

- Tab shows the HBB logo
- View source / DevTools → `<title>`, `meta description`, `link rel="canonical"`, `og:*`
- `http://localhost:3000/robots.txt` and `/sitemap.xml` serve correctly (from `public/`)

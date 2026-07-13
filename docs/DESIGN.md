# Design recommendations (deferred)

Documented for a later visual polish pass. Do **not** treat this as an active backlog unless scheduled.

## Color & atmosphere

- Palette is almost pure black / gray / white; photos carry the brand but UI chrome feels flat.
- Add one warm accent (bronze, charcoal-green, or muted ochre) for buttons, active filters, and hover states so CTAs remain visible on dark hero slides.
- Soften pure white section backgrounds with a very light warm gray (`#f6f5f2`–`#faf9f7`) so the page feels less like stock Bootstrap.

## Typography

- Both “display” (`.oswald`) and body (`.roboto`) currently map to Century Gothic — same face, same weight feel.
- Section headings are forced to gray `#727272` at 34px — weak hierarchy next to strong photography.
- Prefer darker, tighter headlines and slightly more open body text (or a real display + body pair).
- Hero titles wrap awkwardly on mobile; shorten copy or tune line-height / letter-spacing for small screens.

## Photography treatment

- Hero overlay is a flat `rgba(0,0,0,0.5)` — muddy. Prefer a subtle bottom/center gradient so homes stay vivid and type stays readable.
- Project cards use soft shadows, zoom, and a dark overlay with a search icon — reads as template UI. Cleaner: less card chrome, image-led cells, quiet captions, light zoom only (~1.03).

## Surfaces & detail

- Stats as white floating cards, pill filters, and process flip-cards add “UI kit” noise against luxury residential photos.
- Flatten: less shadow, less radius, fewer pills; let materials in the photos set the mood.
- Footer `lightgray` + empty map block feels unfinished next to the rest of the brand.

## Motion

- Hero advances every ~2s with ~1s transitions — restless, not premium.
- Prefer slower fades (5–7s dwell), gentler crossfades, quieter hovers.

## CTA contrast

- Black “Know More” button on dark hero overlay has poor contrast.
- Use a light / outline button and stronger label (“View Projects” / “Get a Quote”).

## Content consistency (trust + polish)

- Align marketing claims (e.g. project counts in Why Choose vs Badges).
- Fix badge display if `$8000M` was intended as `$80M` (or similar).
- Prefer descriptive project image `alt` text (location + work type).

## Out of scope for this file

SEO, favicon, sitemap, and robots were implemented separately. See `src/data/site.js`, `src/components/SEO.jsx`, `public/robots.txt`, and `public/sitemap.xml`.

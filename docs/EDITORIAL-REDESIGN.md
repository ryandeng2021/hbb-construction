# HBB layout redesign, revision 3

Source: `ryandeng2021/hbb-construction` at `34129e0`.
Branch: `design/editorial-portfolio`. No production deployment or remote push.

## User direction

Retain the new typography and project layout, use white rather than cream
backgrounds, and give the home page its own identity rather than copying the
reference site. Preserve the original navigation, full footer, map-backed
animated statistics, Gallery interactions and Free Quote interface. Change
layout without discarding the original subject matter.

## Implementation

- Restores the existing Header/Navbar and Footer components on every page.
- Home uses a full-bleed residence carousel with crossfades, pause, edge-hover,
  keyboard and swipe controls, plus alternating selected-project features,
  the original introduction video and text, the original
  map-backed statistics with an explicit map image layer, a six-stage
  rendered conceptual construction visualization, the
  original advantages and six process stages, and a Gallery link.
- The construction visualization follows design, foundation, framing, dry-in,
  rough-ins and completion, based on NAHB and APA references. Six controls allow
  manual exploration. Reduced-motion settings disable automatic playback and
  crossfade motion. It is labeled as a concept, not as an actual HBB project.
  See CONSTRUCTION-VISUALIZATION.md for sources, provenance and limitations.
- Existing homepage promotional card, Free Quote/contact forms, construction-tour
  requests and analytics remain connected; QA does not submit real enquiries.
- Portfolio retains all 29 projects with combined location/type/status filters.
- Project descriptions, photos, videos, metadata and original URLs are retained.
  Full-size photo viewing supports keyboard navigation and focus restoration.
- Gallery retains the existing category tabs, photo viewer and source-project
  links, with a new responsive grid and responsive image derivatives.
- Statistics values remain as supplied. Their server-rendered and reduced-motion
  fallbacks show final values instead of zeros. Existing inconsistent project
  count wording and the construction value still require owner confirmation;
  this design revision does not invent replacement numbers.

## Development

`npm ci` then `npm run dev`; production export: `npm run build`.
Responsive WebP files and `src/data/image-variants.json` are included. Regenerate
with `python scripts/prepare-editorial-images.py` (Python 3 and Pillow).
The deployment build does not require Python.

The changes ZIP overlays the same source version; it contains changed/new source
and responsive derivatives, not replacement project data or original media.
Main automatically deploys the public site, so review before merging.

## Preview and validation

Small WebP preview images accompany the complete source-change archive. The
previous project screenshot was 23 MB, which could make image previews slow;
preview images are now resized and compressed separately from source images.
Production export and browser validation cover the home page, combined filters,
project routes, photo viewer, original contact/tour dialogs, Gallery tabs and
viewer links, mobile navigation, responsive widths and reduced motion.
External form submission and Google Maps network availability are not tested.

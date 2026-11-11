# Private interactive preview

Production HBB domain/repository are unchanged. The separate owner-private Sites
project is `appgprj_6af398cc44c08191ba895a1dedcad251`; its hosting manifest is in
`/workspace/sites/hbb-live-preview/.openai/hosting.json`. Reuse that project and
its existing repository for future preview updates; do not register another Site.

The original editable Next.js source remains `/workspace/hbb-current`.
The preview source repository tracks a complete static export in `dist/`.
It is a snapshot and must be republished after source edits; the user's machine
cannot reliably reach the cloud executor's localhost URL.

Snapshot preparation:
- Successful `npm run build` in the original checkout.
- Copy `out/` into the preview project's `dist/`.
- Carry corrected `public/img/construction-sequence.png` into the snapshot.
- Compress the 32 MB introduction video below 25 MiB for static hosting; preserve
  the original video in the editable project.
- Remove Google Analytics loader tags from preview HTML to avoid counting private
  review traffic in the company's production analytics.

The environment lacks the packaged Sites source helper. An initial 207 MiB Git
push exceeded the explicit 64 MiB per-push limit. The fresh preview repository
was populated in seven incremental commits/pushes, each below that limit.
Subsequent edits should be ordinary incremental commits on the existing history.
Keep credentials in memory and pass through hidden stdin; never store tokens.
The initial private deployment archive corresponds to pushed source commit
`f7d0d0a8745e9ad15ac7ed91a50d7166818293cb`.

Package `.openai/hosting.json` and `dist/` from the exact pushed commit in the
archive; use the native owner-private save/deploy operation and verify status.
No archive-only unsynchronized source publication, no force pushes, and no
changes to the HBB live domain or audience.

Verified successful publication:
- URL: https://hbb-design-review.snowychurn8.chatgpt.site
- Deployment: appgdep_6af39a2da0ec81919cf3e472a2787dba
- Saved version: appgprj_6af398cc44c08191ba895a1dedcad251~appgver_657fead731148191a422e3645af2e7f9
- Native deployment status: succeeded.

Latest verified preview update: public-home restoration with three alternating
residences and rightward portfolio thumbnail ribbon. Original Cormorant Garamond
is served locally; revised Portfolio/Gallery layouts use that same family.
- Source commit: dfdd2eb067611f22df9ed05daa95db99886910de
- Deployment: appgdep_6af3fb84baf08191b1338517d2284801
- Version: appgprj_6af398cc44c08191ba895a1dedcad251~appgver_46adb1c3dbf48191bb1ed9cce8dc5ea1
- Status: succeeded; URL unchanged.

Latest verified preview update: compact project media, three columns on desktop,
full portrait frames within half-screen height, landscape-first project covers,
and removal of the three requested editorial heading blocks.
- Source commit: 48e08bc5f429593b2ed305ec409ebecaa214ee94
- Deployment: appgdep_6af3feb20ff081919ee6df05dde724eb
- Version: appgprj_6af398cc44c08191ba895a1dedcad251~appgver_9eff382f833c8191b759d3c8e89aa53a
- Status: succeeded; URL and owner-private audience unchanged.
- Validation: production build, all 29 project media conservation/layout checks,
  desktop/mobile size bounds, and photo lightbox keyboard/focus checks passed.

Latest verified preview update: varied photographic spreads replacing uniform
contact sheets; intrinsic-width/equal-height desktop rows, two/three-image rhythm,
and bottom-aligned outside copy with deliberate whitespace.
- Source commit: 5bfa64c465a11c48e9002ca29ad4973583097921
- Deployment: appgdep_6af401001e7c8191a206e0a934df0b58
- Version: appgprj_6af398cc44c08191ba895a1dedcad251~appgver_9a846839631481918f50de1a7c0587f0
- Status: succeeded; same URL and owner-private audience.
- Build and browser checks across all 29 projects passed; see PHOTOGRAPHIC-SPREADS.md.

Latest verified update: full-width project spreads, photo corner arrows removed,
portfolio title promoted to project-card size, shortened quote popup.
- Source commit: ffafb9b0253a653f6a13bb01fa64e9cfaaee2f78
- Deployment: appgdep_6af4029a5e348191a51afa58ff6c4a77
- Version: appgprj_6af398cc44c08191ba895a1dedcad251~appgver_15a46e9135dc81918fe339b0ce25ee4b
- Status: succeeded; URL/audience unchanged; all 29 project checks and popup render passed.

Latest verified update: original uncropped image proportions within full-width
spreads; split left-photo/right-description-and-facts introduction; smaller project
title and larger year/status. Includes project-20 explicit 1-second video poster.
- Source commit: 574420f4ed95b6817bea59f31d74419d37325afe
- Deployment: appgdep_6af404532c9c8191ba746d5d6bdf19a1
- Version: appgprj_6af398cc44c08191ba895a1dedcad251~appgver_3d66be65413c81918427ba532f88b738
- Status: succeeded; same URL/audience. Build, 29-project media/layout checks,
  mobile intrinsic-ratio/overflow checks and lightbox keyboard/focus passed.

Latest verified update: project facts above short introductions, occasional concise
gallery notes every three/four rows, duplicate under-cover copy removed.
- Source commit: eefb407543355617455aa3e93cf8665e21ca4df9
- Deployment: appgdep_6af4075c4dd48191a1bb76bc7f614c54
- Version: appgprj_6af398cc44c08191ba895a1dedcad251~appgver_d7c50f92c94481918eac43f9d18328c0
- Status: succeeded; URL and owner-private audience unchanged.
- Validation: build; all 29 project facts/cadence/four-line desktop note checks;
  natural ratios, media conservation, mobile layout and lightbox checks passed.

Latest verified update: corrected project-18 location and display introduction
from Sunnyvale to San Jose. Requested replacement cover awaits missing second
user image; current cover intentionally retained pending identification.
- Source commit: b7b4a0a051f1efb3a6283b0f255441b743c65463
- Deployment: appgdep_6af40d9c375881918d03affe1b2484e4
- Version: appgprj_6af398cc44c08191ba895a1dedcad251~appgver_77834aa0d4dc8191aa45ff167b189dbc
- Status: succeeded; same URL/audience. Build and exported city/title checks passed.

Latest verified update: owner identified the photo immediately after the existing
project-18 cover. Selected /img/18-1.webp (kitchen with island and skylight) via
explicit coverImage, overriding the automatic landscape choice. San Jose remains
correct; previous /img/18-7.webp skylight cover stays in the gallery.
- Source commit: f5f30922b27433b3098ad6424e5f5bfeefe56411
- Deployment: appgdep_6af4afc685d481918c0c26bad526c057
- Version: appgprj_6af398cc44c08191ba895a1dedcad251~appgver_0ee60be76c9081919e03b1c7f6a623f6
- Status: succeeded; same URL/audience. Build and exported cover/city/gallery checks passed.

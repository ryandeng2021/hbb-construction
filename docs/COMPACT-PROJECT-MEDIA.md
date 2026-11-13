# Compact project pages

Owner direction: remove the homepage Our Work / Our Art Of Work title block,
the large portfolio slogan, and the project overview's About the residence /
A closer look headings. Retain the project facts and substantive descriptions.

Project media now use a continuous three-column contact sheet on desktop,
two columns on narrower screens, and full-row video tiles on phones. Tiles
stay below half the viewport height; photographs and videos use contain so
portrait media are fully visible without cropping. Explicit zoom is retained.

A cover is selected from a genuine landscape photo of the same project.
Displaced original covers are retained in the grid; promoted media are not
repeated. Every original asset and caption remains available. The Menlo Park
project has no landscape photo, so it starts with the compact grid instead of
an enlarged portrait cover. Source project data and media files are unchanged.

Still image dimensions come from the existing responsive-image manifest;
video dimensions are probed at preparation time and stored in
src/data/video-dimensions.json. No client-side preloading of entire video files
is needed to establish the layout. Videos remain click-to-play with posters.

Validation covers all 29 project routes, conservation of original media URLs,
landscape-only covers, three columns, viewport height limits, mobile overflow,
and keyboard photo navigation/focus restoration. Public typography and the
previously restored homepage sections remain unchanged.

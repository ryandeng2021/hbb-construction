# Construction visualization and reference review

Revision 3 uses a six-stage, AI-generated conceptual architectural visualization.
It is not a model of an HBB project, a structural design, or a substitute for a
coordinated architectural/engineering model. The website labels it as a concept
visualization. Original HBB project photography is unchanged.

The visual maintains a common single-story home, footprint, gables, entry and
window/garage openings. Stages are design/layout, foundation, framing, dry-in,
rough-ins and completion. The cutaway in the rough-in stage is explanatory;
actual work and inspection timing vary. Exact as-built sequencing would require
the same project's drawings/BIM, progress photos and finish documentation.

Primary research:
- NAHB / Grand County Builders' Association, Home Building Overview:
  https://www.nahb.org/-/media/NAHB/advocacy/docs/industry-issues/disaster-resources/home-building-overview.pdf
  Design/preconstruction → site/foundation → shell → rough-ins → finishes → closeout.
- APA, Engineered Wood Construction Guide: Wall Construction:
  https://www.apawood.org/guides-tools-training/technical-document-library/construction-guides/e30x-wc-engineered-wood-excerpt-wall-construction/
  Wood structural panels, wall bracing/shear walls and sheathing systems.

Generated asset: public/img/construction-sequence.png, six aligned panels in a
3 × 2 sprite sheet. Original Library artifact retained in /workspace/generated_images.
The site uses CSS viewports and crossfades; it does not generate or interpolate
new framing geometry at runtime. One image request supplies all six stages.

## Lessons from the reference, without copying its appearance

Reviewed https://www.greenberg.construction/ and Golden Way project detail.
Useful patterns are a concise project brief and clear builder/designer credits,
a named single point of contact, a guided visit to experience work, client reviews
linked to their original platforms, and service-specific entry points. HBB's
existing free quote and ongoing-site tour are retained. No unverified testimonials,
architecture credits, showroom claims or awards are invented.

## User direction retained

White background, first-version typography and alternating project features,
original full-bleed multi-image hero, subtle edge-hover navigation and mobile
swiping, original navigation, Gallery behavior, full footer, map-backed animated
statistics and Free Quote. Existing map file is displayed explicitly as an image
layer, with adjusted crop and its original tones so its Bay Area geography and project dots
remain visible around the statistics.

## Correction: window opening in rough-in/insulation stage

The owner identified that the first rendering filled the living-room window
opening with insulation and services. Replaced the sprite with the corrected
render: the living-room window remains present in the same facade location;
insulation and services are confined to surrounding opaque wall cavities.
Prevention: visually compare every opening against the adjacent dry-in and
finished stages before accepting a generated construction sequence. Do not
accept attractive renderings as a substitute for this continuity check.
Original and corrected generation artifacts remain in the Library directory.

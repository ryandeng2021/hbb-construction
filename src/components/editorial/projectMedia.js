import images from '../../data/image-variants.json';
import videos from '../../data/video-dimensions.json';
import { galleryCaption } from './projectCopy';

export const mediaDimensions = item => (item.isVideo ? videos[item.src] : images[item.src]) || {};
export const isLandscapeImage = src => images[src]?.width > images[src]?.height;

// Presentation only: source project content and media files remain unchanged.
export function projectPresentation(project) {
  const media = (project.content || []).flatMap((section, sectionIndex) => {
    const entries = section.video ? [{ ...section.video, isVideo: true }] : Array.isArray(section.images) ? section.images : section.images ? [section.images] : [];
    return entries.map((entry, index) => {
      const item = typeof entry === 'string' ? { src:entry } : { ...entry };
      return { ...item, key:`${sectionIndex}-${index}`, notes:[item.description, index===entries.length-1 ? section.description : null].filter(Boolean) };
    });
  }).filter(item=>item.src);
  const original = project.heroImage || project.image;
  const cover = project.coverImage || (isLandscapeImage(original) ? original : media.find(item=>!item.isVideo && isLandscapeImage(item.src))?.src || null);
  if(original && original!==cover && !media.some(item=>item.src===original))media.unshift({src:original,alt:`${project.title} in ${project.location}`,key:'original-cover',notes:[]});
  const coverNotes = media.filter(item=>item.src===cover).flatMap(item=>item.notes);
  return { cover, coverNotes, media:media.filter(item=>item.src!==cover) };
}

// Keep complete frames: row widths follow intrinsic aspect ratios, not fixed cards.
export function projectGalleryRows(media, introduction) {
  let nextCopyRow = 3;
  let copyNumber = 0;
  let pendingNotes = [];
  const rows = [];
  const cadence = [3, 2, 3, 2, 2];
  let offset = 0;
  while (offset < media.length) {
    let count = Math.min(cadence[rows.length % cadence.length], media.length - offset);
    const hasCopy = rows.length === nextCopyRow || (rows.length < 3 && offset + count >= media.length);
    if (hasCopy) count = Math.min(2, media.length - offset);
    if (media.length - offset - count === 1 && count === 2) count = 3;
    const items = media.slice(offset, offset + count).map(item => {
      const { width, height } = mediaDimensions(item);
      return { ...item, ratio: width && height ? width / height : 1.5 };
    });
    pendingNotes.push(...items.flatMap(item => item.notes || []));
    const notes = hasCopy ? [galleryCaption(pendingNotes, introduction)] : [];
    if (hasCopy) { pendingNotes = []; nextCopyRow += copyNumber++ % 2 === 0 ? 3 : 4; }
    const side = copyNumber % 2 === 1 ? 'left' : 'right';
    const noteRatio = notes.length ? 1.05 : 0;
    const ratios = items.map(item => item.ratio);
    if (notes.length) side === 'left' ? ratios.unshift(noteRatio) : ratios.push(noteRatio);
    rows.push({ items, notes, side, ratios, totalRatio: ratios.reduce((sum, ratio) => sum + ratio, 0) });
    offset += count;
  }
  return rows;
}

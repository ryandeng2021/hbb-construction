"""Generate static responsive WebP variants. Requires Python 3 and Pillow.
Run from the repository root: python scripts/prepare-editorial-images.py
Original images remain available for the full-resolution gallery viewer.
"""
import json
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parent.parent
output = root / 'public/img/responsive'
output.mkdir(parents=True, exist_ok=True)
manifest = {}
def prepare(source):
    if source.suffix.lower() not in ('.jpg', '.jpeg', '.png', '.webp'):
        return
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert('RGB')
        variants = []
        for width in (640, 1280, 1920):
            target_width = min(width, image.width)
            if variants and variants[-1][1] == target_width:
                continue
            target = output / f'{source.name}-{target_width}.webp'
            resized = image.resize((target_width, round(image.height * target_width / image.width)), Image.Resampling.LANCZOS)
            resized.save(target, 'WEBP', quality=80, method=4)
            variants.append((f'/img/responsive/{target.name}', target_width))
        manifest[f'/img/{source.name}'] = {
            'fallback': next((url for url, width in variants if width >= 1280), variants[-1][0]),
            'srcSet': ', '.join(f'{url} {width}w' for url, width in variants),
            'width': image.width,
            'height': image.height,
        }
with ThreadPoolExecutor(max_workers=4) as pool:
    list(pool.map(prepare, sorted((root / 'public/img').iterdir())))
(root / 'src/data/image-variants.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(f'Prepared responsive variants for {len(manifest)} images.')

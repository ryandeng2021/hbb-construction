import manifest from '../../data/image-variants.json';

export default function Photo({ src, alt, priority = false, sizes = '(max-width: 700px) 100vw, 50vw', className = '', onLoad, onError }) {
  const variants = manifest[src];
  return <img src={variants?.fallback || src} srcSet={variants?.srcSet} sizes={sizes} width={variants?.width} height={variants?.height} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} decoding="async" className={className} onLoad={onLoad} onError={onError} />;
}

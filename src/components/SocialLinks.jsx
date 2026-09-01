// Array of social link objects containing id, label, and URL
const links = [
  {
    id: 1,
    label: 'Xiaohongshu (RED)',
    url: 'https://xhslink.cn/o/ARCwOPkFYJI'
  }
];

// Xiaohongshu doesn't have an icon in the uil icon set, so it's drawn as a small
// inline badge instead - sized in em units so it scales the same way the uil
// icons it replaced did (via the fs-30 class).
const XhsIcon = () => (
  <svg
    className="fs-30 rounded bg-white shadow-lg p-1"
    style={{ width: '1em', height: '1em' }}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#FF2442" />
    <text x="12" y="16" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="9" fill="#ffffff">RED</text>
  </svg>
);

/**
 * SocialLinks component renders a list of social media icons with links.
 *
 * @param {object} props
 * @param {string} [props.className='nav social mt-4'] - Additional class names for the nav container.
 * @returns JSX.Element
 */
const SocialLinks = ({ className = 'nav social mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, label, url }) => (
        <a
          key={id}
          href={url}
          className="shadow"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${label} page`}
        >
          <XhsIcon />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;

import Head from 'next/head';
import {
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
  absoluteAssetUrl,
  truncateMeta,
  getLocalBusinessJsonLd,
} from '../data/site';

/**
 * Shared SEO head tags: title, description, canonical, Open Graph, Twitter, optional JSON-LD.
 *
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string} [props.description]
 * @param {string} [props.path] - Page path for canonical / og:url (e.g. '/projects')
 * @param {string} [props.image] - OG image path or absolute URL
 * @param {boolean} [props.noindex]
 * @param {object|object[]} [props.jsonLd] - Extra JSON-LD graph(s)
 * @param {boolean} [props.includeLocalBusiness] - Include LocalBusiness schema (home)
 */
const SEO = ({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  jsonLd,
  includeLocalBusiness = false,
}) => {
  const pageTitle = title
    ? title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`
    : DEFAULT_TITLE;
  const pageDescription = truncateMeta(description || DEFAULT_DESCRIPTION);
  const canonical = absoluteUrl(path);
  const ogImage = absoluteAssetUrl(image);

  const graphs = [];
  if (includeLocalBusiness) graphs.push(getLocalBusinessJsonLd());
  if (jsonLd) graphs.push(...(Array.isArray(jsonLd) ? jsonLd : [jsonLd]));

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {graphs.map((graph, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
    </Head>
  );
};

export default SEO;

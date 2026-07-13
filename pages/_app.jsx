import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';
import { backgroundImages } from '../src/data';
import { getAssetPath } from '../src/utils/path';
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION, SITE_NAME } from '../src/data/site';

// Import global styles and third-party CSS
import 'animate.css';
import 'styles/smooth-scroll.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8
      });
      scrollCue.update();
    })();
  }, [pathname]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
        <Head>
          <style dangerouslySetInnerHTML={{
            __html: `
              :root {
                --bg-hero: url('${getAssetPath(backgroundImages.hero)}');
                --bg-footer: url('${getAssetPath(backgroundImages.footer || '')}') no-repeat bottom left;
                --bg-img-bg: url('${getAssetPath(backgroundImages.imgBg)}');
                --bg-why-choose: url('${getAssetPath(backgroundImages.whyChoose || '')}');
                --img-icon: url('${getAssetPath(backgroundImages.icon)}');
              }
            `
          }} />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Fallback defaults — page-level <SEO /> overrides these */}
          <title>{DEFAULT_TITLE}</title>
          <meta name="description" content={DEFAULT_DESCRIPTION} />
          <meta name="author" content={SITE_NAME} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
         </Head>
        <Layout>
          <ThemeProvider>
            {/* Always render the page (needed for SSR meta/SEO). Loader is client-only overlay. */}
            <Component {...pageProps} />
            {loading ? <div className="page-loader" /> : null}
          </ThemeProvider>
        </Layout>
    </Fragment>
  );
}

export default MyApp;

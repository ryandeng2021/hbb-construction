import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';
import { backgroundImages } from '../src/data';

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

  // Dynamically import Bootstrap JS on client-side only (to avoid SSR issues)
  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  // Initialize scrollCue plugin on route change
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

  // Disable loading state once component mounts
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
        <Head>
          {/* Inject background image URLs as CSS variables */}
          <style dangerouslySetInnerHTML={{
            __html: `
              :root {
                --bg-hero: url('${backgroundImages.hero}');
                --bg-footer: url('${backgroundImages.footer}') no-repeat bottom left;
                --bg-img-bg: url('${backgroundImages.imgBg}');
                --bg-why-choose: url('${backgroundImages.whyChoose}');
                --img-icon: url('${backgroundImages.icon}');
              }
            `
          }} />
          {/* Basic meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* TODO: Replace 'Location' and 'Construction' with your actual business info */}
          <title>HBB Construction</title>
          <meta
            name="description"
            content="Free Next.js website template for builders, contractors & construction firms – built with Bootstrap"
          />

          {/* Open Graph tags for social sharing */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="HBB Construction" />

         </Head>
        <Layout>
          <ThemeProvider>
            {/* Show loader while app is loading */}
            {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
          </ThemeProvider>
        </Layout>
    </Fragment>
  );
}

export default MyApp;

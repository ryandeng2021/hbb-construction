import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Fragment } from 'react';
import { GA_MEASUREMENT_ID, analyticsEnabled } from '../src/utils/analytics';

// BasePath for GitHub Pages - should match next.config.js
// Set to '' for root domain deployment (e.g., www.hbbconstruction.com)
const BASE_PATH = process.env.NODE_ENV === 'production' ? '' : '';

export default class SandBox extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Analytics 4 — measurement ID in src/utils/analytics.js */}
          {analyticsEnabled && (
            <Fragment>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`,
                }}
              />
            </Fragment>
          )}

          {/* Preserve the public site's Cormorant Garamond, served locally. */}
          <link rel="preload" href="/fonts/cormorant-garamond/CormorantGaramond-variable.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
          <style dangerouslySetInnerHTML={{ __html: `
            @font-face { font-family: 'Cormorant Garamond'; src: url('/fonts/cormorant-garamond/CormorantGaramond-variable.ttf') format('truetype'); font-style: normal; font-weight: 300 700; font-display: swap; }
            @font-face { font-family: 'Cormorant Garamond'; src: url('/fonts/cormorant-garamond/CormorantGaramond-Italic-variable.ttf') format('truetype'); font-style: italic; font-weight: 300 700; font-display: swap; }
          ` }} />

          {/* Favicon — Chrome tab + bookmarks */}
          <link rel="icon" href={`${BASE_PATH}/favicon.ico`} sizes="32x32" />
          <link rel="icon" type="image/png" href={`${BASE_PATH}/img/favicon/favicon-96x96.png`} sizes="96x96" />
          <link rel="apple-touch-icon" sizes="180x180" href={`${BASE_PATH}/img/favicon/apple-touch-icon.png`} />
          <link rel="manifest" href={`${BASE_PATH}/img/favicon/site.webmanifest`} />
          <meta name="theme-color" content="#111111" />

          {/* Icon fonts with basePath prefix */}
          <style dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'Unicons';
                src: url('${BASE_PATH}/fonts/unicons/Unicons.woff2') format('woff2'), 
                     url('${BASE_PATH}/fonts/unicons/Unicons.woff') format('woff');
                font-weight: normal;
                font-style: normal;
                font-display: block;
              }
              @font-face {
                font-family: 'Custom';
                src: url('${BASE_PATH}/fonts/custom/Custom.woff2') format('woff2'), 
                     url('${BASE_PATH}/fonts/custom/Custom.woff') format('woff');
                font-weight: normal;
                font-style: normal;
                font-display: block;
              }
            `
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

SandBox.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => App,
      enhanceComponent: (Component) => Component
    });

  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};

import Document, { Html, Head, Main, NextScript } from 'next/document';

// BasePath for GitHub Pages - should match next.config.js
// Set to '' for root domain deployment (e.g., www.hbbconstruction.com)
const BASE_PATH = process.env.NODE_ENV === 'production' ? '' : '';

export default class SandBox extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon — Chrome tab + bookmarks */}
          <link rel="icon" href={`${BASE_PATH}/favicon.ico`} sizes="32x32" />
          <link rel="icon" type="image/png" href={`${BASE_PATH}/img/favicon/favicon-96x96.png`} sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href={`${BASE_PATH}/img/favicon/favicon.svg`} />
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

import Document, { Html, Head, Main, NextScript } from 'next/document';

// BasePath for GitHub Pages - should match next.config.js
// Set to '' for root domain deployment (e.g., www.hbbconstruction.com)
const BASE_PATH = process.env.NODE_ENV === 'production' ? '' : '';

export default class SandBox extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon and icons for different platforms */}
          <link rel="icon" type="image/png" href={`${BASE_PATH}/img/favicon/favicon-96x96.png`} sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href={`${BASE_PATH}/img/favicon/favicon.svg`} />
          <link rel="shortcut icon" href={`${BASE_PATH}/img/favicon/favicon.ico`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`${BASE_PATH}/img/favicon/apple-touch-icon.png`} />
          <link rel="manifest" href={`${BASE_PATH}/img/favicon/site.webmanifest`} />
          {/* Century Gothic is a system font, no need for Google Fonts import */}
          {/* If you need to load Century Gothic from a CDN or local file, add it here */}
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
          {/* Main React app content will be injected here */}
          <Main />
          {/* Scripts required by Next.js will be injected here */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Optional: Customize initial document props (mostly used for server-side rendering extensions)
SandBox.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // Enhance app/component rendering if needed
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => App,               // You can wrap your App component here
      enhanceComponent: (Component) => Component // You can wrap individual components here
    });

  // Get default initial props from Next.js
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};

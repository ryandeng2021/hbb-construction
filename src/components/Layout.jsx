import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';


/**
 * Layout component wraps the page content with
 * a consistent Header and Footer on every page.
 * 
 * @param {React.ReactNode} children - The page content to render between header and footer.
 */
const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const redesigned = pathname === "/projects" || pathname === "/projects/[slug]" || pathname === "/gallery" || pathname === "/ask-hbb";
  return (
    <React.Fragment>
      {/* Site header */}
      <Header />

      {/* Main page content */}
      {redesigned ? <div className="ed-site">{children}</div> : children}

      {/* Site footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { usefulLinks, footerData, backgroundImages } from '../data';

/**
 * Widget component renders a titled list of links
 * @param {Array} list - Array of link objects { id, url, title }
 * @param {string} title - Widget title
 */
const Widget = ({ list, title }) => (
  <div className="widget">
    <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">{title}</h4>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ id, title: linkTitle, url }) => (
        <li key={id} className="roboto">
          <NextLink href={url || '/'} title={linkTitle} />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="contact" 
      className="border-top footer-bg overflow-hidden"
      style={{
        backgroundImage: backgroundImages.footer
          ? `url(${backgroundImages.footer})`
          : undefined,
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundColor: 'lightgray',
        minHeight: '400px'
      }}
    >
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">

          {/* Logo and Company Description */}
          <div className="col-xl-3">
            <div className="widget d-flex flex-column align-items-center">
              <div className="mb-5 d-flex justify-content-md-center justify-content-xxl-start w-100">
                <Image
                  src={footerData.logo.src}
                  alt={footerData.logo.alt}
                  width={footerData.logo.width}
                  height={footerData.logo.height}
                  unoptimized={true} // Prevents Next.js image optimization
                  className="text-center"
                />
              </div>
              <p className="lead mb-2 text-md-center text-xl-start fs-18 roboto">
                {footerData.description}
              </p>
            </div>

            {/* Social Media Links */}
            <div className="d-flex align-items-xl-start align-items-md-center flex-column">
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Quick Links Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <Widget list={usefulLinks} title="Quick Links" />
          </div>

          {/* Contact Information Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Contact Us</h4>

              {/* Address */}
              <div className="d-flex mb-3 align-items-start">
                <i className="uil uil-location-pin-alt fs-30 text-main" />
                <address className="ms-2 m-0 mt-1 roboto">
                  {footerData.contact.address}
                </address>
              </div>

              {/* Email */}
              <div className="d-flex mb-3 align-items-center">
                <i className="uil uil-envelope fs-26 text-main" />
                <a href={`mailto:${footerData.contact.email}`} className="link-body ms-2 roboto">
                  {footerData.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Google Map</h4>
              <iframe
                src={footerData.map.embedUrl}
                width={footerData.map.width}
                height={footerData.map.height}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={footerData.map.title}
              />
            </div>
          </div>

          {/* Horizontal separator */}
          <hr className="mt-4 mt-md-4 mb-7" />

          {/* Footer copyright */}
          <div className="d-md-flex align-items-center justify-content-center">
            <p className="mb-2 mb-lg-0 text-center roboto">
              © {currentYear} {footerData.copyright.companyName}. {footerData.copyright.text}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

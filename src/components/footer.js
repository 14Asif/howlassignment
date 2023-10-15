// components/Footer.js
import React from 'react';
import Classes from './footer.module.css';

// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.socialIcons}>
        <FontAwesomeIcon icon={faFacebookF} className={Classes.icon} />
        <FontAwesomeIcon icon={faTwitter} className={Classes.icon} />
        <FontAwesomeIcon icon={faYoutube} className={Classes.icon} />
        <FontAwesomeIcon icon={faLinkedinIn} className={Classes.icon} />
      </div>
      <div className={Classes.footerLinks}>
        <a href="#">PRESS</a>
        <a href="#">CAREERS</a>
        <a href="#">JOIN THE PACK</a>
        <a href="#">Sign up to our newsletter</a>
      </div>
      <div className={Classes.creditNote}>
        All rights reserved. Designed, developed & powered by HOWL Digital Agency
      </div>
    </footer>
  );
}

export default Footer;

// Import necessary React functionality and CSS module for styles
import React from "react";
import Classes from "./footer.module.css";

// Importing necessary icons and FontAwesomeIcon component from Font Awesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

// Footer functional component
function Footer() {
  return (
    // Main footer container
    <footer className={Classes.footerContainer}>
      {/* // Social media icons container */}
      <div className={Classes.socialIcons}>
        <FontAwesomeIcon icon={faFacebookF} className={Classes.icon} />
        <FontAwesomeIcon icon={faTwitter} className={Classes.icon} />
        <FontAwesomeIcon icon={faYoutube} className={Classes.icon} />
        <FontAwesomeIcon icon={faLinkedinIn} className={Classes.icon} />
      </div>
      {/* // Footer links section */}
      <div className={Classes.footerLinks}>
        <a href="#">PRESS</a>
        <a href="#">CAREERS</a>
        <a href="#">JOIN THE PACK</a>
        <a href="#">Sign up to our newsletter</a>
      </div>
      {/* // Credit note section */}
      <div className={Classes.creditNote}>
        All rights reserved. Designed, developed & powered by HOWL Digital
        Agency
      </div>
    </footer>
  );
}

// Exporting the Footer component to be used elsewhere
export default Footer;

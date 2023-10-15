// components/Footer.js
import React from 'react';
import Classes from './footer.module.css';

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.socialIcons}>
        {/* You can replace these with actual icons */}
        <span>f</span> 
        <span>t</span> 
        <span>y</span> 
        <span>in</span>
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

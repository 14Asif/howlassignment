import React, { useState, useEffect } from 'react';
import classes from './header.module.css';

function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: scrollY > 50 ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
  };

  return (
    <header className={classes.headercontainer} style={headerStyle}>
      <div className={classes.logo}>
        <img src="./images/howl_logo.png" alt="HOWL Logo" />
      </div>
      <div className={classes.menuicon}>
        ☰
      </div>
    </header>
  );
}

export default Header;

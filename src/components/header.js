// components/Header.js
import React from 'react';
import classes from './header.module.css'
function Header() {
  return (
    <header className={classes.headercontainer}>
      <div className={classes.logo}>
        HOWL
      </div>
      <div className={classes.menuicon}>
        ☰
      </div>
    </header>
  );
}

export default Header;

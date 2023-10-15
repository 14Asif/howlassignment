// Import necessary React functionalities and CSS module for styles
import React, { useState, useEffect } from "react";
import classes from "./header.module.css";

// Header functional component
function Header() {
  // State variable to keep track of the vertical scroll position
  const [scrollY, setScrollY] = useState(0);

  // useEffect hook to set up and clean up the scroll event listener
  useEffect(() => {
    // Function to update the state with the current scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add the scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure this hook runs once after initial render

  // Conditional styling for the header based on the scroll position
  const headerStyle = {
    backgroundColor: scrollY > 50 ? "rgba(255, 255, 255, 0.8)" : "transparent",
  };

  return (
    // Header component with dynamic styling based on scroll position
    <header className={classes.headercontainer} style={headerStyle}>
      <div className={classes.logo}>
        <img src="./images/howl_logo.png" alt="HOWL Logo" />
      </div>

      <div className={classes.menuicon}>☰</div>
    </header>
  );
}

// Exporting the Header component to be used elsewhere
export default Header;

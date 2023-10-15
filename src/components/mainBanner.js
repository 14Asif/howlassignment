
import React from "react";
import "./mainbanner.css";
const MainBanner = () => {
  return (
    <div className="growth-partners-section">
      <div className="text-container">
        <p className="leading-text">We exist because we want to help you navigate and harness the potential of this ever-changing digital landscape.</p>
        <h1>Your Growth Partners</h1>
        <p className="trailing-text">It's not a game of guesses, it's a game of numbers where growth is the ultimate goal. We leverage cutting-edge technology and data-driven insights to help you answer questions that unlock growth.</p>
      </div>
      <img src="./images/homeimg-1.jpg" alt="Group working" className="group-image" />
    </div>
  );
};

export default MainBanner;

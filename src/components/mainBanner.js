import React from 'react';
import './mainbanner.css';


function GrowthPartners() {
    return (
      <>
        <div className="growthPartners-container">
            <div className="text-section">
                <p className="intro-text">
                    We exist because we want to help you navigate
                    and harness the potential of this ever-changing
                    digital landscape.
                </p>
                <div>
                <h1 className="title1" style={{marginTop:"1px",marginBottom:"1px"}}>Your </h1>
                <h1 className="title2"  style={{marginTop:"1px",marginBottom:"1px"}}> Growth</h1>
                <h1 className="title3"  style={{marginTop:"1px",marginBottom:"1px"}}>Partners</h1>
                </div>
            
            </div>
            <div className="image-section">
              <div>
              <img src="./images/page_60.png" alt="Team working" className="main-image" />
                <img src="./images/page_62.png" alt="Team discussion" className="second-images" />
              </div>
            </div>
            {/* <div>
              <p className="sub-text">
                    It's not a game of guesses, it's a game of numbers where growth is the
                    ultimate goal. We leverage cutting-edge technology and data-driven
                    insights to help you answer questions that unlock growth.
                </p>
              </div> */}
        </div>
          
              </>
    );
}

export default GrowthPartners;

// components/ClientsSection.js

import React from "react";
import "./ClientSection.css";

const ClientsSection = () => {
  return (
    <div className="clients-section">
      <h2>Clients we work with</h2>
      {/* // Mapping through an array of image paths to render each client image */}
      <div className="clients-grid">
        {" "}
    
        {[
          "./images/page_3.png",
          "./images/page_5.png",
          "./images/page_7.png",

          "./images/page_9.png",
          "./images/page_11.png",
          "./images/page_13.png",
          "./images/page_15.png",
          "./images/page_17.png",
          "./images/page_19.png",
          "./images/page_21.png",
          "./images/page_23.png",
          "./images/page_25.png",
          "./images/page_27.png",
          "./images/page_9.png",
        ].map((image, index) => (
          <div
            key={index} // Using index as key 
            className="client-image"
            style={{ animationDelay: `${index * 0.1}s` }} // Applying animation delay based on the index
          >
            <img src={image} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;

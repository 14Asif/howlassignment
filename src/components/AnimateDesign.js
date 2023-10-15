import React from 'react';
import './AnimateDesign.css';


const AnimationDesign = () => {
    return (
        <div className="container">
            <div className="headers">
                <h1>STRATEGY AND CONSULTING</h1>
                <h1>ONLINE MARKETING EXPERIENCES</h1>
                {/* ... add other headers ... */}
            </div>

            <div className="flowchart">
                <div className="flow-row">
                    <div className="flow-element">
                        Consumer Research & Mapping
                    </div>
                    <div className="flow-element">
                        Customer Experience Study & Strategy
                    </div>
                    {/* ... add other elements in this row ... */}
                </div>
                {/* ... add other flowchart rows ... */}
            </div>
        </div>
    );
}

export default AnimationDesign;

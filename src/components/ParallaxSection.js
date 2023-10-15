// components/ParallaxSection.js

import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Classes from './parallax.module.css'
const ParallaxSection = () => {
    return (
    <div className={Classes.parallaxSection}>
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                <div className={Classes.content}>Strategy & Consulting</div>
            </Parallax>
            <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
                <div className={Classes.content}>Another Section</div>
            </Parallax>
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                <div className={Classes.content}>Strategy & Consulting</div>
            </Parallax>
            <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
                <div className={Classes.content}>Another Section</div>
            </Parallax>
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                <div className={Classes.content}>Strategy & Consulting</div>
            </Parallax>
            <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
                <div className={Classes.content}>Another Section</div>
            </Parallax>
            {/* Add more sections as needed */}
        </div>
    );
};

export default ParallaxSection;

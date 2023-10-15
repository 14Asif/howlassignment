import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";

// Styling using styled-components
const SectionWipesStyled = styled.div`
  overflow: hidden;
  font-family: "Arial", sans-serif;

  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
    color: #fff;
    padding: 80px;
  }

  .panel h1 {
    font-size: 80px;
    margin-top: 20vh;
  }

  .panel.blue {
    background-color: #212322;
  }

  .panel.content {
    background-color: #212322;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 100px;
    margin-left: -100px;
  }

  .panel.content .left,
  .panel.content .right {
    width: 100%;
  }

  .panel.content .left h1 {
    font-size: 50px;
  }

  .panel.content .right p {
    font-size: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    .panel.content {
      flex-direction: column;
      padding: 50px;
    }

    .panel.content .left,
    .panel.content .right {
      width: 100%;
      margin-bottom: 20px;
      margin-left: 50px !important;
    }

    .panel h1 {
      font-size: 50px;
      margin-top: 10vh;
    }

    .panel.content .left h1 {
      font-size: 40px;
    }

    .panel.content .right p {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 480px) {
    .panel h1 {
      font-size: 40px;
      margin-top: 5vh;
    }

    .panel.content .left h1 {
      font-size: 30px;
    }

    .panel.content .right p {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
`;

const SectionWipes = () => (
  // The main styled container component
  <SectionWipesStyled>
    {/* Controller from 'react-scrollmagic', globalSceneOptions defines some global settings for every scene */}
    <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
      {/* Each Scene component represents an interaction or an animation for a specific scroll position */}
      <Scene pin duration={"100%"}>
        <div className="panel content">
          <div className="left">
            <h1>STRATEGY & CONSULTING</h1>
          </div>
          <div className="right">
            <p>Out-of-the-box defines our thinking, not our solutions.</p>
            <p>
              From mapping out business and functional requirements, to
              developing the infrastructure to optimize traditionally fragmented
              processes, we help you create integrated, future-proofed commerce
              solutions.
            </p>
            <p>Paid Search & Media</p>
            <p>Data Optimization & Innovation</p>

            <p>Dive Deeper</p>
          </div>
        </div>
      </Scene>
      <Scene pin duration={"100%"}>
        <div className="panel content">
          <div className="left">
            <h1>EXPERIENCE</h1>
          </div>
          <div className="right">
            <p>Out-of-the-box defines our thinking, not our solutions.</p>
            <p>
              From mapping out business and functional requirements, to
              developing the infrastructure to optimize traditionally fragmented
              processes, we help you create integrated, future-proofed commerce
              solutions.
            </p>
            <p>Paid Search & Media</p>
            <p>Data Optimization & Innovation</p>
            <p>Dive Deeper</p>
          </div>
        </div>
      </Scene>
      <Scene pin duration={"100%"}>
        <div className="panel content">
          <div className="left">
            <h1>DATA INSIGHTS & ANALYTICS</h1>
          </div>
          <div className="right">
            <p>Out-of-the-box defines our thinking, not our solutions.</p>
            <p>
              From mapping out business and functional requirements, to
              developing the infrastructure to optimize traditionally fragmented
              processes, we help you create integrated, future-proofed commerce
              solutions.
            </p>
            <p>Paid Search & Media</p>
            <p>Data Optimization & Innovation</p>
            <p>Dive Deeper</p>
          </div>
        </div>
      </Scene>
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;

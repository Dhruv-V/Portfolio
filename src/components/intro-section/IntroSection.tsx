import React from "react";
import "./IntroSection.scss";
import Projects from "./Projects/Projects";

const IntroProjects = () => {
  return (
    <div className="intro-projects">
      <div className="intro">
        <h1>Hey, I'm</h1>
        <h1>Dhruv Vashishth</h1>
        <p>
          A dedicated and results-driven Software Developer specializing in
          building scalable applications.
        </p>
      </div>
      <Projects />
    </div>
  );
};

export default IntroProjects;

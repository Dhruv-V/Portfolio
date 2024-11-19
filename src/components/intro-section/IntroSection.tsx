import React from "react";
import "./IntroSection.scss";
import Projects from "./Projects/Projects";

const IntroProjects = () => {
  return (
    <div className="intro-projects">
      <div className="intro">
        <h1>Hi, I'm Dhruv</h1>
        <p>
          A dedicated and results-driven Software Developer with experience in
          front-end and back-end development, specializing in building scalable
          applications using modern technologies like React, React Native, AWS,
          and TypeScript. Recognized for delivering user-centric solutions and
          optimizing workflows in dynamic project environments
        </p>
      </div>
      {/* <div className="projects">
        <h2>SELECTED PROJECTS</h2>
        <ul>
          <li>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Personalized Task Manager
            </a>
            <p>
              {" "}
              A task management app that allows users to create, organize, and
              prioritize their tasks with a personalized touch. It can include
            </p>
          </li>
          <li>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Expense Tracker with Insights
            </a>
            <p>
              A web application to help users track their expenses, categorize
              them, and visualize spending habits through interactive charts and
              insights.
            </p>
          </li>
          <li>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recipe Sharing Platform
            </a>
            <p>
              {" "}
              A platform for users to share and discover recipes, focusing on
              community interactions and recommendations.
            </p>
          </li>
        </ul>
      </div> */}
      <Projects />
    </div>
  );
};

export default IntroProjects;

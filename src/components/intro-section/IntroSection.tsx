import React from 'react';
import './IntroSection.scss';

const IntroProjects = () => {
  return (
    <div className="intro-projects">
      <div className="intro">
        <h1>Hi, I'm Dhruv</h1>
        <p>A brief intro about yourself...</p>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <ul>
          <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Project 1</a></li>
          <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Project 2</a></li>
          <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Project 3</a></li>
        </ul>
      </div>
    </div>
  );
};

export default IntroProjects;

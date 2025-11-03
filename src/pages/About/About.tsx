import React from "react";
import "./About.scss";
import profileImage from "../../assets/images/dkv.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src={profileImage} alt="Dhruv Vashishth" className="about-image" />
        <div className="about-intro-container">
          <h1>Dhruv Vashishth</h1>
          <p className="about-intro">
            Software Developer passionate about crafting intuitive, scalable
            applications with expertise in React, React Native, and backend
            technologies like Node.js and AWS. I thrive in team-oriented
            environments, focusing on delivering user-centered solutions that
            drive impact.
          </p>
        </div>
      </div>
      <div className="about-content">
        <div className="about-section">
          <h2>Education</h2>
          <p>
            Bachelor of Technology in Computer Science (GPA: 8.01)
            <br />
            Deenbandhu Choturam University of Science and Technology, Haryana,
            India (2019–2023)
          </p>
        </div>

        <div className="about-section">
          <h2>Professional Experience</h2>
          <p>
            Currently working as a Software Developer at Veersa Technology. Over
            the past year, I’ve led and contributed to impactful projects like
            *Kquark* and *HealthEdge*, excelling in front-end development with
            React Native, form handling with React Hook Form, and cloud
            solutions with AWS.
          </p>
        </div>

        <div className="about-section">
          <h2>Skills</h2>
          <ul>
            <li>
              <strong>Languages:</strong> JavaScript, TypeScript, C++, Node.js
            </li>
            <li>
              <strong>Frameworks & Libraries:</strong> React, React Native,
              Express.js, Redux, Zustand
            </li>
            <li>
              <strong>Cloud Technologies:</strong> AWS Amplify, Amazon RDS,
              Lambda, S3
            </li>
            <li>
              <strong>Other Tools:</strong> Git, Agile methodologies, CI/CD
              pipelines
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Interests</h2>
          <p>
            Beyond coding, I’m an avid sports enthusiast who enjoys playing
            cricket, football, and badminton. I believe in staying active and
            value the camaraderie that sports bring.
          </p>
        </div>

        <div className="about-links">
          <a href="https://dhruv-v.github.io/dhruv-resume/resume.pdf">Resume</a>
          <a href="https://www.linkedin.com/in/dhruv-vashishth-274694206/">
            LinkedIn
          </a>
          <a href="https://github.com/Dhruv-V">GitHub</a>
          <a href="mailto:magmers9@gmail.com">magmers9@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./IntroSection.scss";
import Projects from "./Projects/Projects";

const IntroProjects = () => {
  return (
    <div className="intro-projects">
      <div className="intro">
        <h1 className="greeting">Hey, I'm</h1>
        <h1 className="name">Dhruv Vashishth</h1>
        <p className="title">Frontend Developer</p>
        <p className="bio">
          Frontend Developer with 2+ years of experience building scalable web
          and mobile applications using React, React Native, and TypeScript.
          Specialized in performance optimization, state management, and
          creating reusable component libraries.
        </p>
        <div className="quick-stats">
          <div className="stat">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Screens</span>
          </div>
          <div className="stat">
            <span className="stat-number">60%</span>
            <span className="stat-label">Faster</span>
          </div>
        </div>
      </div>
      <Projects />

      {/* Bottom Decorative Section with Animations */}
      <div className="bottom-decoration">
        {/* Layered Animated Waves */}
        <svg
          viewBox="0 0 1440 200"
          className="wave-svg wave-1"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(102, 126, 234, 0.15)"
            d="M0,96L48,101.3C96,107,192,117,288,122.7C384,128,480,128,576,117.3C672,107,768,85,864,80C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
        <svg
          viewBox="0 0 1440 180"
          className="wave-svg wave-2"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(118, 75, 162, 0.1)"
            d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,90.7C672,75,768,53,864,58.7C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,180L1392,180C1344,180,1248,180,1152,180C1056,180,960,180,864,180C768,180,672,180,576,180C480,180,384,180,288,180C192,180,96,180,48,180L0,180Z"
          />
        </svg>

        {/* Floating Tech Stack Badges */}
        <div className="floating-badges">
          <div className="tech-badge badge-1">React</div>
          <div className="tech-badge badge-2">TypeScript</div>
          <div className="tech-badge badge-3">Zustand</div>
          <div className="tech-badge badge-4">React Native</div>
          <div className="tech-badge badge-5">Redux</div>
          <div className="tech-badge badge-6">Tailwind</div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      </div>
    </div>
  );
};

export default IntroProjects;

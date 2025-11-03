import React from "react";
import {
  personalInfo,
  skills,
  experience,
  education,
  achievements,
} from "../../data/resumeData";
import profileImage from "../../assets/images/initial.png";
import "./About.scss";

const About = () => {
  return (
    <div className="about-page">
      {/* Profile Section */}
      <section className="about-profile">
        <div className="profile-image-container">
          <img
            src={profileImage}
            alt="Dhruv Vashishth"
            className="profile-image"
          />
        </div>
        <div className="profile-info">
          <h2>Dhruv Vashishth</h2>
          <p className="profile-title">{personalInfo.title}</p>
          <p className="profile-location">📍 {personalInfo.location}</p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="about-bio">
        <h3>About Me</h3>
        <p className="bio-text">{personalInfo.bio}</p>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <h3>Technical Skills</h3>

        <div className="skill-group">
          <h4>Frontend Development</h4>
          <div className="skills-grid">
            {skills.frontend.slice(0, 6).map((skill) => (
              <div key={skill.name} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h4>State Management & Tools</h4>
          <div className="skills-list">
            {skills.frontend.slice(4, 12).map((skill) => (
              <span key={skill.name} className="skill-tag">
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h4>Backend & Tools</h4>
          <div className="skills-list">
            {[...skills.backend, ...skills.tools].map((skill) => (
              <span key={skill.name} className="skill-tag">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-experience">
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="exp-header">
              <h4>{exp.role}</h4>
              <span className="exp-period">{exp.period}</span>
            </div>
            <p className="exp-company">
              {exp.company} • {exp.type}
            </p>

            {exp.projects.map((project, pIndex) => (
              <div key={pIndex} className="project-detail">
                {project.name && <h5>{project.name}</h5>}
                {"period" in project && project.period && (
                  <span className="project-period">{project.period}</span>
                )}
                {project.stack && project.stack.length > 0 && (
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <ul className="achievements-list">
                  {project.achievements
                    .slice(0, 4)
                    .map((achievement, aIndex) => (
                      <li key={aIndex}>{achievement}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="about-education">
        <h3>Education</h3>
        <div className="education-item">
          <h4>{education.degree}</h4>
          <p className="institution">{education.institution}</p>
          <p className="location">{education.location}</p>
          <p className="period">
            {education.period} • GPA: {education.gpa}
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="about-achievements">
        <h3>Achievements</h3>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <span className="achievement-icon">{achievement.icon}</span>
              <h4>{achievement.title}</h4>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Links */}
      <section className="about-contact">
        <h3>Let's Connect</h3>
        <div className="contact-links">
          <a href={`mailto:${personalInfo.email}`} className="contact-link">
            Email
          </a>
          <a
            href={personalInfo.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
          <a
            href={personalInfo.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

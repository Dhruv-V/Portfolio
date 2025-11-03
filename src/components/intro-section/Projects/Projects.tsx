import React from "react";
import "./Projects.scss";
import { FaArrowRight } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { projects } from "../../../utils/projects";

const Projects = () => {
  const scrollToSection = (id?: string) => {
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="projects">
      <div className="project-header">
        <h2>SELECTED PROJECTS.</h2>
        <GrProjects />
      </div>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="project-tile">
            <div
              onClick={() => scrollToSection(project.id)}
              className="project-link"
            >
              {project.title}
              {/* <span className="arrow"> */}
              <div>
                <FaArrowRight />
              </div>
              {/* </span> */}
            </div>
            {/* <p className="project-description">{project.description}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

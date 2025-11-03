import React from "react";
import ProjectImage from "../../../components/ProjectImage/ProjectImage";
import "./ProjectTile.scss";

const ProjectTile = ({ project, index, totalProjects }: any) => {
  const isContentLeft = index % 2 === 0;

  return (
    <div
      className={`project-container ${
        isContentLeft ? "content-left" : "content-right"
      }`}
    >
      {/* Project Details */}
      <div id={project.id} className="project-content">
        <h2>{`Project ${index + 1}/${totalProjects}`}</h2>
        <h1>{project.title}</h1>
        {/* <div className="links">
          <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </div> */}
        <p>{project.description}</p>
        <h3>Tech Stack</h3>
        <ul>
          {project.techStack.map((tech: any) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <h3>Key Features</h3>
        <ul>
          {project.points.map((point: any, idx: any) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Project Images */}
      <div className="project-images">
        <ProjectImage projectId={project.id} title={project.title} />
      </div>
    </div>
  );
};

export default ProjectTile;

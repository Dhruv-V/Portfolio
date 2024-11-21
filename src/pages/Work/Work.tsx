import { projects } from "../../utils/projects";
import ProjectTile from "./project-tile/ProjectTile";

const Work = () => {
  return (
    <div id="work" className="work-page">
      {projects.map((project, index) => (
        <ProjectTile
          key={project.id}
          project={project}
          index={index}
          totalProjects={projects.length}
        />
      ))}
    </div>
  );
};

export default Work;

import { SideProject } from "../shared/interfaces/SectionsInterfaces";

export default function ProjectCard({ project }: { project: SideProject }) {
  return (
    <div className="project-card">
      <span>{project.year}</span>
      <div className="thumb" style={{ backgroundImage: `url("${project.image}")` }} />
      <div className="info">
        <h3>
          {project.uri ? (
            <a href={project.uri} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

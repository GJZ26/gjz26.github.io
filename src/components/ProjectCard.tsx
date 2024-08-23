import { project } from "../features/SideProjects";

export default function ProjectCard({project}:{project:project}){
    return(
        <div className="project-card">
            <span>{project.year}</span>
            <div className="thumb"/>
            <div className="info">
                <h3>
                    {
                     project.uri ? (<a href={project.uri} target="_blank"  rel="noopener noreferrer">{project.title}</a>):project.title
                    }
                </h3>
                <p>
                    {project.description}
                </p>
            </div>
        </div>
    )
}
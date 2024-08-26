import ProjectCard from "../components/ProjectCard";
import { SideProjectData } from "../shared/interfaces/SectionsInterfaces";
import "../styles/features/SideProjects.styl";

export default function SideProjects({ data }: { data: SideProjectData }) {
  return (
    <div className="projects">
      {data.map((proj, index) => (
        <ProjectCard project={proj} key={index} />
      ))}
    </div>
  );
}

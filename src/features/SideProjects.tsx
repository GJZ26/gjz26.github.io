import ProjectCard from "../components/ProjectCard";
import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import { SideProjectData } from "../shared/interfaces/SectionsInterfaces";
import "../styles/features/SideProjects.styl";

export default function SideProjects({ data }: { data: SideProjectData }) {
  const { systemTranslations } = useSystemTranslations();
  return data.length === 0 ? (
    <p className="empty-alert">{systemTranslations.empty_side_projects}</p>
  ) : (
    <div className="projects">
      {data.map((proj, index) => (
        <ProjectCard project={proj} key={index} />
      ))}
    </div>
  );
}

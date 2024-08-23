import ProjectCard from "../components/ProjectCard";
import "../styles/features/SideProjects.styl";

export interface project {
  title: string;
  uri?: string;
  description: string;
  year: number;
}

const projects: Array<project> = [
  {
    title: "Nombre del Proyecto",
    uri: "https://google.com/",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    year: 2023,
  },

  {
    title: "Nombre del Proyecto",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    year: 2021,
  },

  {
    title: "Nombre del Proyecto 4",
    uri: "https://google.com/",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    year: 2026,
  },
];

export default function SideProjects() {
  return (
    <div className="projects">
      {projects.map((proj, index) => (
        <ProjectCard project={proj} key={index} />
      ))}
    </div>
  );
}

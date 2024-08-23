import GenericLayout from "../layouts/GenericLayout";
import About from "../features/About";
import Head from "../features/Head";
import "../styles/pages/Main.styl";
import Experience from "../features/Experience";
import Certificates from "../features/Certificates";
import SideProjects from "../features/SideProjects";

export default function Main() {
  //console.log(window.matchMedia('(prefers-color-scheme: dark)'))
  return (
    <div className="content">
      <Head />
      <GenericLayout title="Sobre Mi" children={<About />} />
      <GenericLayout title="Experiencia" children={<Experience />} />
      <GenericLayout title="Certificados" children={<Certificates />} />
      <GenericLayout title="Proyectos Personales" children={<SideProjects />} />
    </div>
  );
}

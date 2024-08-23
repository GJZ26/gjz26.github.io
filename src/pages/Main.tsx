import GenericLayout from "../layouts/GenericLayout";
import About from "../features/About";
import Head from "../features/Head";
import "../styles/pages/Main.styl";
import Experience from "../features/Experience";

export default function Main() {
  //console.log(window.matchMedia('(prefers-color-scheme: dark)'))
  return (
    <div className="content">
      <Head />
      <GenericLayout title="Sobre Mi" children={<About />} />
      <GenericLayout title="Experiencia" children={<Experience />} />
    </div>
  );
}

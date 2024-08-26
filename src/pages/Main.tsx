import GenericLayout from "../layouts/GenericLayout";
import About from "../features/About";
import Head from "../features/Head";
import "../styles/pages/Main.styl";
import Experience from "../features/Experience";
import Certificates from "../features/Certificates";
import SideProjects from "../features/SideProjects";
import Links from "../features/Links";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Minimap from "../components/Minimap";
import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import useUserData from "../shared/hooks/useUserData";

export default function Main() {
  const { systemTranslations } = useSystemTranslations();
  const { userData } = useUserData();

  return (
    <>
      <Header />
      <Minimap />
      <div className="content">
        <Head />
        <GenericLayout
          title={systemTranslations.about}
          children={<About data={userData.sections.about} />}
        />
        <GenericLayout
          title={systemTranslations.experiences}
          children={<Experience data={userData.sections.experiences} />}
        />
        <GenericLayout
          title={systemTranslations.certificates}
          children={<Certificates data={userData.sections.certificates} />}
        />
        <GenericLayout
          title={systemTranslations.side_project}
          children={<SideProjects data={userData.sections.side_project} />}
        />
        <GenericLayout
          title={systemTranslations.links}
          children={<Links data={userData.sections.links} />}
        />
      </div>
      <Footer />
    </>
  );
}

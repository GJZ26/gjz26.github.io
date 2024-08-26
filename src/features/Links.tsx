import ButtonLink from "../components/ButtonLink";
import { LinksData } from "../shared/interfaces/SectionsInterfaces";
import "../styles/features/Links.styl";

export default function Links({ data }: { data: LinksData }) {
  return (
    <div className="links">
      <div className="links-button">
        {data.map((btn, index) => (
          <ButtonLink btn={btn} key={index} />
        ))}
      </div>
      <div className="cvs">
        <a href="#" download={true} className="main">
          Descargar CV en Español
        </a>
        <a href="#" download={true} className="second">
          Descargar CV en Inglés
        </a>
      </div>
    </div>
  );
}

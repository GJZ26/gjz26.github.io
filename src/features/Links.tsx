import ButtonLink from "../components/ButtonLink";
import "../styles/features/Links.styl";

export interface linkButtonInterface {
  text: string;
  link: string;
}

const btns_samples: Array<linkButtonInterface> = [
  {
    text: "Envíame un correo",
    link: "mailto:some@mail.com",
  },
  {
    text: "Conectemos por LinkedIn",
    link: "https://linkedin.com",
  },
  {
    text: "Sígueme en GitHub",
    link: "https://github.com",
  },
];

export default function Links() {
  return (
    <div className="links">
      <div className="links-button">
        {btns_samples.map((bnt, index) => (
          <ButtonLink btn={bnt} key={index} />
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

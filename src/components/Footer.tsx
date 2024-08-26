import useConfig from "../shared/hooks/useConfig";
import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import "../styles/components/Footer.styl";

export default function Footer() {
  const year = new Date().getFullYear();
  const { systemTranslations } = useSystemTranslations();
  const { config } = useConfig();
  return (
    <footer>
      <div>{/* Un Div Intensionalmente Vacío :D */}</div>
      <span>GJZ26 @ {year}</span>
      <div className="app-info">
        <span className="version">
          {systemTranslations.version} {config.version}
        </span>
        <a href="https://github.com/GJZ26/Portfolio"> {systemTranslations.source}</a>
      </div>
    </footer>
  );
}

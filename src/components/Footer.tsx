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
      {config.global.showCredit ? <span>GJZ26 @ {year}</span> : ""}

      <div className="app-info">
        {config.global.showVersion ? (
          <span className="version">
            {systemTranslations.version} {config.version}
          </span>
        ) : (
          ""
        )}

        {config.global.showSource ? (
          <a href="https://github.com/GJZ26/Portfolio">
            {" "}
            {systemTranslations.source}
          </a>
        ) : (
          ""
        )}
      </div>
    </footer>
  );
}

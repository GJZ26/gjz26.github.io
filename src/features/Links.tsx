import ButtonLink from "../components/ButtonLink";
import useConfig from "../shared/hooks/useConfig";
import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import { CVSData, LinksData } from "../shared/interfaces/SectionsInterfaces";
import "../styles/features/Links.styl";

export default function Links({
  data,
  cvs,
}: {
  data: LinksData;
  cvs?: CVSData;
}) {
  const { systemTranslations, rawContext } = useSystemTranslations();
  const { config } = useConfig();

  function renderCVLinks() {
    if (config.links.showCV && cvs) {
      return (
        <div className="cvs">
          <a href={cvs.main.uri} download={true} className="main">
            {systemTranslations.download_cv_in}{" "}
            {rawContext[cvs.main.lang].language}
          </a>
          {cvs.secondary && (
            <a href={cvs.secondary.uri} download={true} className="second">
              {systemTranslations.download_cv_in}{" "}
              {rawContext[cvs.secondary.lang].language}
            </a>
          )}
        </div>
      );
    }
    return null;
  }

  function renderLinksButtons() {
    return (
      <div className="links-button">
        {data.map((btn, index) => (
          <ButtonLink btn={btn} key={index} />
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return <p className="empty-alert">{systemTranslations.empty_links}</p>;
  }

  return (
    <div className="links">
      {renderLinksButtons()}
      {renderCVLinks()}
    </div>
  );
}

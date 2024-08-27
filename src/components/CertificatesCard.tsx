import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import { Certificate } from "../shared/interfaces/SectionsInterfaces";

export default function CertificatesCard({
  certificate,
}: {
  certificate: Certificate;
}) {
  const { systemTranslations } = useSystemTranslations();
  return (
    <div className="cert-card">
      <div className="main">
        {certificate.badge ? (
          <div
            className="badge"
            style={{ backgroundImage: `url("${certificate.badge}")` }}
          />
        ) : (
          ""
        )}
        <h3 className={certificate.badge ? "" : "only"}>
          <a href={certificate.uri} target="_blank" rel="noopener noreferrer">
            {certificate.title}
          </a>
        </h3>
      </div>
      <div className="foot">
        {certificate.skills && certificate.skills.length > 0 ? (
          <span>
            {systemTranslations.skills}:{" "}
            {certificate.skills.map((skill, index) =>
              !skill
                ? ""
                : certificate.skills && index !== certificate.skills.length - 1
                ? `${skill}, `
                : `${skill}.`
            )}
          </span>
        ) : (
          ""
        )}
        <div>
          <span>
            {systemTranslations.month[certificate.date.month]}{" "}
            {certificate.date.year}
          </span>
          <span>{certificate.issuer}</span>
        </div>
      </div>
    </div>
  );
}

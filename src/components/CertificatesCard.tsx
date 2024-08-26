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
        <div className="badge" style={{ backgroundImage: `url("${certificate.badge}")` }} />
        <h3>
          <a href={certificate.uri} target="_blank" rel="noopener noreferrer">
            {certificate.title}
          </a>
        </h3>
      </div>
      <div className="foot">
        <span>
          Habilidades:{" "}
          {certificate.skills
            ? certificate.skills.map((skill, index) =>
                certificate.skills && index !== certificate.skills.length - 1
                  ? `${skill}, `
                  : `${skill}.`
              )
            : ""}
        </span>
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

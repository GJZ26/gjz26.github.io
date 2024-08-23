import { certificate } from "../features/Certificates";

const month = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export default function CertificatesCard({
  certificate,
}: {
  certificate: certificate;
}) {
  return (
    <div className="cert-card">
      <div className="main">
        <div className="badge" data-uri={certificate.badge} />
        <h3>
          <a href={certificate.uri} target="_blank" rel="noopener noreferrer">
            {certificate.title}
          </a>
        </h3>
      </div>
      <div className="foot">
        <span>
          Habilidades:{" "}
          {certificate.skills.map((skill, index) =>
            index !== certificate.skills.length - 1 ? `${skill}, ` : `${skill}.`
          )}
        </span>
        <div>
          <span>
            {month[certificate.date.month - 1]} {certificate.date.year}
          </span>
          <span>{certificate.issuer}</span>
        </div>
      </div>
    </div>
  );
}

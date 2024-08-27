import "../styles/features/Certificates.styl";
import CertificatesCard from "../components/CertificatesCard";
import { CertificateData } from "../shared/interfaces/SectionsInterfaces";
import useSystemTranslations from "../shared/hooks/useSystemTranslations";

export default function Certificates({ data }: { data: CertificateData }) {
  const { systemTranslations } = useSystemTranslations();

  return data.length === 0 ? (
    <p className="empty-alert">{systemTranslations.empty_certificates}</p>
  ) : (
    <div className="certificates">
      {data.map((cert, index) => {
        return <CertificatesCard certificate={cert} key={index} />;
      })}
    </div>
  );
}

import "../styles/features/Certificates.styl";
import CertificatesCard from "../components/CertificatesCard";
import { CertificateData } from "../shared/interfaces/SectionsInterfaces";

export default function Certificates({ data }: { data: CertificateData }) {
  return (
    <div className="certificates">
      {data.map((cert, index) => {
        return <CertificatesCard certificate={cert} key={index} />;
      })}
    </div>
  );
}

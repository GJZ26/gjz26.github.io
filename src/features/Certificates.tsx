import "../styles/features/Certificates.styl";
import CertificatesCard from "../components/CertificatesCard";
import { DateMonth } from "./Experience";

export interface certificate {
  title: string;
  date: DateMonth;
  uri: string;
  skills: Array<string>;
  issuer: string;
  badge?: string;
}

const certs: Array<certificate> = [
  {
    title: "Programa especializado: Análisis de Datos de Google",
    date: {
      month: 1,
      year: 2023,
    },
    uri: "https://google.com",
    skills: ["Excel", "R", "Fortran"],
    issuer: "Google",
  },
  {
    title: "Análisis de Datos de Google",
    date: {
      month: 12,
      year: 2021,
    },
    uri: "https://google.com",
    skills: ["Excel", "R"],
    issuer: "Google",
  },
  {
    title: "Programa especializado",
    date: {
      month: 8,
      year: 2019,
    },
    uri: "https://google.com",
    skills: ["Excel"],
    issuer: "Google",
  },
];

export default function Certificates() {
  return (
    <div className="certificates">
      {certs.map((cert, index) => {
        return <CertificatesCard certificate={cert} key={index}/>;
      })}
    </div>
  );
}

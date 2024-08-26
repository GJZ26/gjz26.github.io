import { AboutData } from "../shared/interfaces/SectionsInterfaces";
import "../styles/features/About.styl";

export default function About({ data }: { data: AboutData }) {
  return <p className="about">{data}</p>;
}

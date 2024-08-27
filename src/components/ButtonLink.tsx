import { LinkButton } from "../shared/interfaces/SectionsInterfaces";

export default function ButtonLink({ btn }: { btn: LinkButton }) {
  return (
    <a href={btn.uri} className="btn" target="_blank" rel="noopener noreferrer">
      {btn.icon ? btn.icon() : ""}
      {btn.text}
    </a>
  );
}

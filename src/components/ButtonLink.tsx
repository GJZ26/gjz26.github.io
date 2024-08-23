import { linkButtonInterface } from "../features/Links";

export default function ButtonLink({ btn }: { btn: linkButtonInterface }) {
  return (
    <a
      href={btn.link}
      className="btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      {btn.text}
    </a>
  );
}

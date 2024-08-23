import { Experience } from "../features/Experience";

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

const modes = {
  remote: "Remoto",
  "on-site": "Presencial",
  hybrid: "Híbrido",
};

export default function TimelineSegment({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="segment">
      <span className="date">
        {month[experience.start_date.month].slice(0, 3)}{" "}
        {experience.start_date.year} -{" "}
        {month[experience.end_date.month].slice(0, 3)}{" "}
        {experience.end_date.year}
      </span>
      <div className="mode">
        <span>{experience.location}</span>
        <span>{modes[experience.mode]}</span>
      </div>
      <h3>
        {experience.uri ? (
          <a href={experience.uri} target="_blank" rel="noopener noreferrer">
            {experience.company}
          </a>
        ) : (
          experience.company
        )}
      </h3>
      <span className="role">{experience.role}</span>
      <p>{experience.description}</p>
      <div className="stack">
        {experience.stack.map((tech) => (
          <div className="pills">{tech}</div>
        ))}
      </div>
    </div>
  );
}

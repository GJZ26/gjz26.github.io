import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import { Experience } from "../shared/interfaces/SectionsInterfaces";

export default function TimelineSegment({
  experience,
}: {
  experience: Experience;
}) {
  const { systemTranslations } = useSystemTranslations();

  return (
    <div className="segment">
      <span className="date">
        {systemTranslations.month[experience.duration.init.month].slice(0, 3)}{" "}
        {experience.duration.init.year} -{" "}
        {experience.duration.current
          ? systemTranslations.present
          : systemTranslations.month[experience.duration.end.month].slice(
              0,
              3
            ) + ` ${experience.duration.end.year}`}
      </span>
      <div className="mode">
        <span>
          {experience.location?.state}, {experience.location?.country}
        </span>
        <span>{systemTranslations[experience.mode]}</span>
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
        {experience.skills !== undefined
          ? experience.skills.map((tech, index) => (
              <div className="pills" key={index}>
                {tech}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

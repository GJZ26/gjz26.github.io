import useConfig from "../shared/hooks/useConfig";
import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import { Experience } from "../shared/interfaces/SectionsInterfaces";

export default function TimelineSegment({
  experience,
}: {
  experience: Experience;
}) {
  const { systemTranslations } = useSystemTranslations();
  const { config } = useConfig();

  return (
    <div className="segment">
      <span className="date">
        {config.experience.abreviate_month
          ? systemTranslations.month[experience.duration.init.month].slice(0, 3)
          : systemTranslations.month[experience.duration.init.month]}{" "}
        {experience.duration.init.year} -{" "}
        {experience.duration.current
          ? systemTranslations.present
          : (config.experience.abreviate_month
              ? systemTranslations.month[experience.duration.end.month].slice(
                  0,
                  3
                )
              : systemTranslations.month[experience.duration.end.month]) +
            ` ${experience.duration.end.year}`}
      </span>
      <div className="mode">
        {experience.location &&
        (experience.location.country || experience.location.state) ? (
          <span>
            {experience.location?.state}
            {experience.location.country && experience.location.state
              ? ", "
              : " "}
            {experience.location?.country}
          </span>
        ) : (
          ""
        )}
        {experience.mode ? (
          <span>{systemTranslations[experience.mode]}</span>
        ) : (
          ""
        )}
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
          ? experience.skills.map((tech, index) =>
              tech && config.experience.max_skills_listed > index ? (
                <div className="pills" key={index}>
                  {tech}
                </div>
              ) : (
                ""
              )
            )
          : ""}
        {experience.skills &&
        config.experience.max_skills_listed < experience.skills.length ? (
          <div className="pills">
            {experience.skills.length - config.experience.max_skills_listed}+
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

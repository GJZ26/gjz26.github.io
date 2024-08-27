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

  function renderDate() {
    const startMonth = config.experience.abreviate_month
      ? systemTranslations.month[experience.duration.init.month].slice(0, 3)
      : systemTranslations.month[experience.duration.init.month];
    const startYear = experience.duration.init.year;

    const endDate = experience.duration.current
      ? systemTranslations.present
      : `${
          config.experience.abreviate_month
            ? systemTranslations.month[experience.duration.end.month].slice(
                0,
                3
              )
            : systemTranslations.month[experience.duration.end.month]
        } ${experience.duration.end.year}`;

    return (
      <span className="date">
        {startMonth} {startYear} - {endDate}
      </span>
    );
  }

  function renderLocation() {
    const state = experience.location?.state;
    const country = experience.location?.country;

    if (state || country) {
      return (
        <span>
          {state}
          {state && country ? ", " : " "}
          {country}
        </span>
      );
    }
    return null;
  }

  function renderMode() {
    if (experience.mode) {
      return <span>{systemTranslations[experience.mode]}</span>;
    }
    return null;
  }

  function renderCompany() {
    if (experience.uri) {
      return (
        <a href={experience.uri} target="_blank" rel="noopener noreferrer">
          {experience.company}
        </a>
      );
    }
    return experience.company;
  }

  function renderSkills() {
    if (!experience.skills) return null;

    return (
      <>
        {experience.skills.map((tech, index) => {
          if (tech && index < config.experience.max_skills_listed) {
            return (
              <div className="pills" key={index}>
                {tech}
              </div>
            );
          }
          return null;
        })}
        {config.experience.max_skills_listed < experience.skills.length && (
          <div className="pills">
            {experience.skills.length - config.experience.max_skills_listed}+
          </div>
        )}
      </>
    );
  }

  return (
    <div className="segment">
      {renderDate()}
      <div className="mode">
        {renderLocation()}
        {renderMode()}
      </div>
      <h3>{renderCompany()}</h3>
      <span className="role">{experience.role}</span>
      <p>{experience.description}</p>
      <div className="stack">{renderSkills()}</div>
    </div>
  );
}

import TimelineSegment from "../components/TimelineSegment";
import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import { ExperienceData } from "../shared/interfaces/SectionsInterfaces";
import "../styles/features/Experience.styl";

export default function Experience({ data }: { data: ExperienceData }) {
  const { systemTranslations } = useSystemTranslations();
  return (
    <div className="timeline">
      {data.length === 0 ? (
        <p className="empty-alert">{systemTranslations.empty_experience}</p>
      ) : (
        data.map((experience, index) => (
          <TimelineSegment experience={experience} key={index} />
        ))
      )}
    </div>
  );
}

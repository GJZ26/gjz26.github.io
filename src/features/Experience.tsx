import TimelineSegment from "../components/TimelineSegment";
import { ExperienceData } from "../shared/interfaces/SectionsInterfaces";
import "../styles/features/Experience.styl";

export default function Experience({ data }: { data: ExperienceData }) {
  return (
    <div className="timeline">
      {data.map((experience, index) => (
        <TimelineSegment experience={experience} key={index} />
      ))}
    </div>
  );
}

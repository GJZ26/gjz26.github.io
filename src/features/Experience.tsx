import TimelineSegment from "../components/TimelineSegment";
import "../styles/features/Experience.styl";

export interface DateMonth {
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  year: number;
}
export interface Experience {
  uri?: string;
  company: string;
  role: string;
  description: string;
  location: string;
  mode: "remote" | "on-site" | "hybrid";
  stack: Array<string>;
  start_date: DateMonth;
  end_date: DateMonth;
}

const exp: Array<Experience> = [
  {
    company: "Royalty Capital LLC",
    role: "Desarrollador Front-end",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    location: "Yucatán, México",
    mode: "remote",
    stack: ["React", "React", "React", "React", "React"],
    start_date: {
      month: 4,
      year: 2023,
    },
    end_date: {
      month: 8,
      year: 2024,
    },
  },
  {
    uri: "https://google.com.mx",
    company: "Royalty Capital LLC",
    role: "Desarrollador Front-end",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    location: "Yucatán, México",
    mode: "on-site",
    stack: ["React", "React", "React", "React", "React"],
    start_date: {
      month: 1,
      year: 2023,
    },
    end_date: {
      month: 5,
      year: 2024,
    },
  },
  {
    company: "Royalty Capital LLC",
    role: "Desarrollador Front-end",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    location: "Yucatán, México",
    mode: "hybrid",
    stack: ["React", "React", "React", "React", "React"],
    start_date: {
      month: 6,
      year: 2023,
    },
    end_date: {
      month: 10,
      year: 2024,
    },
  },
];

export default function Experience() {
  return (
    <div className="timeline">
      {exp.map((experience) => (
        <TimelineSegment experience={experience} />
      ))}
    </div>
  );
}

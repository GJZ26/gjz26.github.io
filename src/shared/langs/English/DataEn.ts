import EmailIcon from "../../../assets/icons/EmailIcon";
import GitHubIcon from "../../../assets/icons/GitHubIcon";
import LinkedInIcon from "../../../assets/icons/LinkedInIcon";
import {
  CertificateData,
  CVSData,
  ExperienceData,
  Info,
  LinksData,
  Location,
  SideProjectData,
} from "../../interfaces/SectionsInterfaces";

const name = "Adolfo";
const lastname = "González Juárez";
const role = "Software Developer";
const aka = "GJZ26";
const image = undefined; //"https://thispersondoesnotexist.com/";

const location: Location = {
  country: "Mexico",
  state: "Chiapas",
};

const about =
  `I'm Adolfo, a back-end web developer with +${new Date().getFullYear() - 2021} years of experience. I love to face challenges and work on projects that allow me to grow and have fun in the process. I enjoy sharing my progress with people who, like me, are passionate about technology.`;

/*
  #############################
  #  Professional experience  #
  #############################
*/
const experiences: ExperienceData = [
  {
    company: "Confidential Company",
    role: "Full-stack Developer",
    description:
      "I developed the first version of a platform for clients, I was in charge of the integration of email automation for subscriptions and OTP codes.",
    duration: {
      init: {
        month: "Nov",
        year: 2023,
      },
      end: {
        month: "Feb",
        year: 2024,
      },
      current: false,
    },
    location: {
      country: "Mexico",
      state: "Yucatan",
    },
    mode: "remote",
    skills: ["PHP", "Laravel", "MariaDB"],
  },
  {
    company: "Régimen de Chiapas",
    role: "Internal Developer",
    description:
      "I developed a script to automate the review and publication of relevant content for the company, optimizing 70% of the work process. In addition to making improvements in the dissemination strategies of the company thanks to SEO optimization.",
    duration: {
      init: {
        month: "Aug",
        year: 2023,
      },
      end: {
        month: "Oct",
        year: 2023,
      },
      current: false,
    },
    location: {
      country: "Mexico",
      state: "Chiapas",
    },
    mode: "on_site",
    skills: ["Python", "Flask", "Wordpress"],
    uri: "https://regimendechiapas.com.mx/",
  },
  {
    company: "Universidad Autónoma de Chiapas",
    role: "Back-end Developer",
    description:
      "I led a development team in the creation of server-side services, in addition to contributing from the initial phases of the project to ensure the efficiency and quality of the development.",
    duration: {
      init: {
        month: "Apr",
        year: 2023,
      },
      end: {
        month: "Jun",
        year: 2023,
      },
      current: false,
    },
    location: {
      country: "Mexico",
      state: "Chiapas",
    },
    mode: "hybrid",
    skills: ["PHP", "Laravel", "MySQL"],
    uri: "https://www.unach.mx/",
  },
  {
    company: "Escrow Recovery Services LLC.",
    role: "Front-end Developer",
    description:
      "I designed and built a landing page using modern Javascript library, increasing the loading time by 90%.",
    duration: {
      init: {
        month: "Feb",
        year: 2023,
      },
      end: {
        month: "Feb",
        year: 2023,
      },
      current: false,
    },
    location: {
      country: "Mexico",
      state: "Yucatan",
    },
    mode: "remote",
    skills: ["React", "CSS", "Javascript"],
  },
  {
    company: "Royalty Capital LLC.",
    role: "Front-end Developer",
    description:
      "I built a landing page from scratch, with the help of pre-existing designs. I used javascript frameworks and CSS pre-processors to improve the performance and maintainability of the product, increasing the loading speed and reducing website maintenance costs.",
    duration: {
      init: {
        month: "Jan",
        year: 2022,
      },
      end: {
        month: "Feb",
        year: 2022,
      },
      current: false,
    },
    location: {
      country: "United States",
      state: "New York",
    },
    mode: "remote",
    skills: ["React", "Javascript", "Stylus"],
    uri: "https://royaltycllc.com/",
  },
];

/*
  #############################
  #        Certificates       #
  #############################
*/
const certificates: CertificateData = [
  {
    title: "Specialized program: Google Data Analysis",
    date: {
      month: "Aug",
      year: 2024,
    },
    issuer: "Google",
    uri: "https://www.coursera.org/account/accomplishments/specialization/P2TJENBFS0VI",
    badge:
      "/src/assets/images/self-certificado-de-analisis-de-datos-de-google.png",
    skills: ["Data Analysis", "SQL", "DataViz"],
  },
  {
    title: "Specialized Program: Google Cybersecurity",
    date: {
      month: "Aug",
      year: 2024,
    },
    issuer: "Google",
    uri: "https://www.coursera.org/account/accomplishments/specialization/DTTYM72PC6HS",
    badge:
      "/src/assets/images/self-certificado-de-ciberseguridad-de-google.png",
    skills: ["Linux", "SIEM", "IDS"],
  },
  {
    title: "AWS Academy Cloud Architecting",
    date: {
      month: "Mar",
      year: 2024,
    },
    issuer: "Amazon Web Services (AWS)",
    uri: "https://www.credly.com/badges/1fb69f3c-d6a1-48ce-b77a-883cacccdac3/linked_in_profile",
    badge:
      "/src/assets/images/self-aws-academy-graduate-aws-academy-cloud-architecting.png",
    skills: ["Architecting Solutions", "Building Infrastructure"],
  },
  {
    title: "AWS Academy Cloud Foundations",
    date: {
      month: "Mar",
      year: 2023,
    },
    issuer: "Amazon Web Services (AWS)",
    uri: "https://www.credly.com/badges/997d982b-1143-4e69-9953-95cd35fa4996/linked_in_profile",
    badge:
      "/src/assets/images/self-aws-academy-graduate-aws-academy-cloud-foundations.png",
    skills: ["AWS Architecture", "AWS Core Services", "AWS Support"],
  },
];

/*
  #############################
  #       Side Projects       #
  #############################
*/
const side_project: SideProjectData = [
  {
    title: "Generative Calendar",
    year: 2024,
    description:
      "The Generative Calendar is a genetic algorithm that analyzes the best alternative schedules for students in irregular states (Academic use only).",
    image: undefined,
    uri: "https://github.com/GJZ26/Generative-Calendar",
  },
  {
    title: "HideNSeek",
    year: 2023,
    description:
      "A rudimentary video game engine built from scratch with JS.",
    uri: "https://github.com/GJZ26/HideNSeek",
  },
  {
    title: "PyE Tools",
    year: 2023,
    description:
      "Python module with a set of functions that help you to make frequency distribution tables in an easy and beautiful way.",
    uri: "https://github.com/GJZ26/Probabilidad-Y-Estadistica",
  },
];

/*
  #############################
  #           Links           #
  #############################
*/
export const links: LinksData = [
  {
    text: "Send me an E-Mail",
    uri: "mailto:adolfogj26@gmail.com",
    icon: EmailIcon,
  },
  {
    text: "Let's connect on LinkedIn",
    uri: "https://www.linkedin.com/in/gjz26/",
    icon: LinkedInIcon,
  },
  {
    text: "Follow me on GitHub",
    uri: "https://github.com/GJZ26",
    icon: GitHubIcon,
  },
];

/*
  #############################
  #           CVS             #
  #############################
*/

export const cvs: CVSData = {
  main: {
    lang: "en",
    uri: "#",
  },
  secondary: {
    lang: "es",
    uri: "#",
  },
};

export const DataEn: Info = {
  name,
  lastname,
  role,
  aka,
  image,
  location,
  sections: {
    about,
    experiences,
    certificates,
    side_project,
    links,
  },
  cvs,
};

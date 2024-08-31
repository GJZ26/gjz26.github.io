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

import Generative_Calendar from "../../../assets/images/generative_calendar.png";
import HideNSeek from "../../../assets/images/hidenseek.png";
import PyeTools from "../../../assets/images/pyetools.png";
import TCPChatServer from '../../../assets/images/tcpchat.png'

import DataAnalysisGoogle from '../../../assets/images/self-certificado-de-analisis-de-datos-de-google.png'
import CiberSecurityGoogle from '../../../assets/images/self-certificado-de-ciberseguridad-de-google.png'
import AWSCloudArchitecting from '../../../assets/images/self-aws-academy-graduate-aws-academy-cloud-architecting.png'
import AWSCloudFoundations from '../../../assets/images/self-aws-academy-graduate-aws-academy-cloud-foundations.png'

const name = "Adolfo";
const lastname = "González Juárez";
const role = "Software Developer";
const aka = "GJZ26";
const image = undefined; //"https://thispersondoesnotexist.com/";

const location: Location = {
  country: "Mexico",
  state: "Chiapas",
};

const about = `Software developer specialized in web development, passionate about creating scalable and efficient solutions. I focus on the optimization, security and viability of each project. Always looking to learn and improve, I enjoy adopting new technologies to take my work to the next level. Welcome!`;

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
      "I developed the first version of a client platform, leading the integration of automations for sending emails, subscriptions, and OTP codes, improving efficiency and user experience.",
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
      "Automated the review and publication of relevant content, optimizing the process by 70%. Implemented improvements in the company's dissemination strategies through advanced SEO optimization.",
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
      "I led a development team in the creation of server-side services, ensuring efficiency and quality from the initial phases of the project.",
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
      "I designed and developed a landing page with modern JavaScript libraries, achieving a 90% increase in loading speed.",
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
      "I built a landing page from scratch, using JavaScript frameworks and CSS preprocessors to improve the performance and maintainability of the product, increasing loading speed and reducing maintenance costs.",
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
      DataAnalysisGoogle,
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
      CiberSecurityGoogle,
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
      AWSCloudArchitecting,
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
      AWSCloudFoundations,
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
      "Genetic algorithm designed to optimize schedules of students in irregular situations, facilitating time management for the university student community.",
    image: Generative_Calendar,
    uri: "https://github.com/GJZ26/Generative-Calendar",
  },
  {
    title: "HideNSeek",
    year: 2023,
    description:
      "Rudimentary video game engine built from scratch with JavaScript, including rendering mechanics, object tracking and render distance (Unfinished).",
    uri: "https://github.com/GJZ26/HideNSeek",
    image: HideNSeek,
  },
  {
    title: "PyE Tools",
    year: 2023,
    description:
      "Módulo en Python que proporciona funciones para crear tablas de distribución de frecuencia y realizar procedimientos probabilísticos de manera eficiente.",
    uri: "https://github.com/GJZ26/Probabilidad-Y-Estadistica",
    image: PyeTools,
  },
  {
    title: "TCP-Chat Server",
    description:
      "Terminal-based messaging service developed with JavaScript and Node.js, optimized for unstable connections and resource-constrained computers. Designed to provide unencrypted chat in terminal environments.",
    year: 2023,
    uri:"https://github.com/GJZ26/TCP-Chat-Server/",
    image: TCPChatServer,
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

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
const role = "Desarrollador de Software";
const aka = "GJZ26";
const image = undefined; //"https://thispersondoesnotexist.com/";

const location: Location = {
  country: "México",
  state: "Chiapas",
};

const about = `¡Hola! Soy Adolfo, un desarrollador web back-end con +${
  new Date().getFullYear() - 2021
} años de experiencia. Me encanta enfrentar desafíos y trabajar en proyectos que me permitan crecer y divertirme en el proceso. Disfruto compartir mis avances con personas que, como yo, sienten pasión por la tecnología.`;

/*
  #############################
  #  Professional experience  #
  #############################
*/
const experiences: ExperienceData = [
  {
    company: "Empresa Confidencial",
    role: "Desarrollador Full-stack",
    description:
      "Desarrollé la primera versión de una plataforma para clientes, estuve a cargo de la integración de automatizaciones de envío de correo de electrónicos para suscripciones y códigos OTP",
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
      country: "México",
      state: "Yucatán",
    },
    mode: "remote",
    skills: ["PHP", "Laravel", "MariaDB"],
  },
  {
    company: "Régimen de Chiapas",
    role: "Desarrollador Interno",
    description:
      "Desarrollé un script para automatizar la revisión y publicación de contenido relevante para la empresa, optimizando un 70% el proceso de trabajo. Además de realizar mejoras en las estrategias de difusión de la empresa gracias a la optimización del SEO.",
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
      country: "México",
      state: "Chiapas",
    },
    mode: "on_site",
    skills: ["Python", "Flask", "Wordpress"],
    uri: "https://regimendechiapas.com.mx/",
  },
  {
    company: "Universidad Autónoma de Chiapas",
    role: "Desarrollador Back-end",
    description:
      "Lideré a un equipo de desarrollo en la creación de servicios del lado del servidor, además de contribuir desde las fases iniciales del proyecto para asegurar la eficiencia y calidad del desarrollo.",
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
      country: "México",
      state: "Chiapas",
    },
    mode: "hybrid",
    skills: ["PHP", "Laravel", "MySQL"],
    uri: "https://www.unach.mx/",
  },
  {
    company: "Escrow Recovery Services LLC.",
    role: "Desarrollador Front-end",
    description:
      "Diseñé y construí una página de aterrizaje utilizando modernas librería de Javascript, incrementando el tiempo de carga un 90%.",
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
      country: "México",
      state: "Yucatán",
    },
    mode: "remote",
    skills: ["React", "CSS", "Javascript"],
  },
  {
    company: "Royalty Capital LLC.",
    role: "Desarrollador Front-end",
    description:
      "Construí una página de aterrizaje desde cero, con ayuda de diseños pre-existente. Usé frameworks de javascript y pre-procesadores de CSS para mejorar el performance y mantenibilidad del producto, incrementando la velocidad de carga y reduciendo costes de mantenimiento del sitio web.",
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
      country: "Estados Unidos",
      state: "Nueva York",
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
    title: "Programa especializado: Análisis de Datos de Google",
    date: {
      month: "Aug",
      year: 2024,
    },
    issuer: "Google",
    uri: "https://www.coursera.org/account/accomplishments/specialization/P2TJENBFS0VI",
    badge:
      "/src/assets/images/self-certificado-de-analisis-de-datos-de-google.png",
    skills: ["Análisis de Datos", "SQL", "DataViz"],
  },
  {
    title: "Programa especializado: Ciberseguridad de Google",
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
    title: "Calendario Generativo",
    year: 2024,
    description:
      "El Calendario Generativo es un algoritmo genético que analiza la mejor alternativa de horarios para estudiantes en estados de irregular. (Sólo uso académico.)",
    image: undefined,
    uri: "https://github.com/GJZ26/Generative-Calendar",
  },
  {
    title: "HideNSeek",
    year: 2023,
    description:
      "Un rudimentario motor de videojuegos construido desde 0 con JS. (Inconcluso)",
    uri: "https://github.com/GJZ26/HideNSeek",
  },
  {
    title: "PyE Tools",
    year: 2023,
    description:
      "Son un conjunto de funciones que te ayudan a realizar tablas de distribución de frecuencia de forma fácil y bonita.",
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
    text: "Envíame un E-Mail",
    uri: "mailto:adolfogj26@gmail.com",
    icon: EmailIcon,
  },
  {
    text: "Conectemos por LinkedIn",
    uri: "https://www.linkedin.com/in/gjz26/",
    icon: LinkedInIcon,
  },
  {
    text: "Sígueme en GitHub",
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
    lang: "es",
    uri: "#",
  },
  secondary: {
    lang: "en",
    uri: "#",
  },
};

export const DataEs: Info = {
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

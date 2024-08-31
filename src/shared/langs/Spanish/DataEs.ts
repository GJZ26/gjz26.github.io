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
import TCPChatServer from "../../../assets/images/tcpchat.png";

import DataAnalysisGoogle from '../../../assets/images/self-certificado-de-analisis-de-datos-de-google.png'
import CiberSecurityGoogle from '../../../assets/images/self-certificado-de-ciberseguridad-de-google.png'
import AWSCloudArchitecting from '../../../assets/images/self-aws-academy-graduate-aws-academy-cloud-architecting.png'
import AWSCloudFoundations from '../../../assets/images/self-aws-academy-graduate-aws-academy-cloud-foundations.png'

const name = "Adolfo";
const lastname = "González Juárez";
const role = "Desarrollador de Software";
const aka = "GJZ26";
const image = undefined; //"https://thispersondoesnotexist.com/";

const location: Location = {
  country: "México",
  state: "Chiapas",
};

const about = `Desarrollador de software especializado en desarrollo web, apasionado por crear soluciones escalables y eficientes. Me enfoco en la optimización, seguridad y viabilidad de cada proyecto. Siempre en busca de aprender y mejorar, disfruto adoptando nuevas tecnologías para llevar mis trabajos al siguiente nivel. ¡Bienvenid@!`;

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
      "Desarrollé la primera versión de una plataforma cliente, liderando la integración de automatizaciones para el envío de correos electrónicos, suscripciones, y códigos OTP, mejorando la eficiencia y la experiencia del usuario.",
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
      "Automaticé la revisión y publicación de contenido relevante, optimizando el proceso en un 70%. Implementé mejoras en las estrategias de difusión de la empresa mediante la optimización avanzada de SEO.",
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
      "Lideré un equipo de desarrollo en la creación de servicios del lado del servidor, asegurando eficiencia y calidad desde las fases iniciales del proyecto.",
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
      "Diseñé y desarrollé una landing page con modernas librerías de JavaScript, logrando un incremento del 90% en la velocidad de carga.",
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
      "Construí una landing page desde cero, utilizando frameworks de JavaScript y preprocesadores de CSS para mejorar el rendimiento y la mantenibilidad del producto, aumentando la velocidad de carga y reduciendo costes de mantenimiento.",
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
      DataAnalysisGoogle,
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
    title: "Calendario Generativo",
    year: 2024,
    description:
      "Algoritmo genético diseñado para optimizar horarios de estudiantes en situación irregular, facilitando la gestión del tiempo para la comunidad estudiantil universitaria.",
    image: Generative_Calendar,
    uri: "https://github.com/GJZ26/Generative-Calendar",
  },
  {
    title: "HideNSeek",
    year: 2023,
    description:
      "Motor de videojuegos rudimentario construido desde cero con JavaScript, que incluye mecánicas de renderizado, seguimiento de objetos y distancia de renderizado. (Inconcluso)",
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
      "Servicio de mensajería basado en terminal desarrollado con JavaScript y Node.js, optimizado para conexiones inestables y equipos con recursos limitados. Diseñado para ofrecer chat sin cifrado en entornos terminales.",
    year: 2023,
    uri: "https://github.com/GJZ26/TCP-Chat-Server/",
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

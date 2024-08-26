/**
 * Here you will find the translations to all the interface phrases.
 * Please translate the UI texts to the language you are trying to add.
 *
 * The available languages are changed from the src/shared/config/Config.ts file and recorded in the src/shared/config/SystemData.ts file.
 */

import { LanguageTranslation } from "../../interfaces/LangInterface";

export const SystemDemo: LanguageTranslation = {
  title: "Simple Web Portfolio", // The text that is displayed in the browser tab
  language: "Demo", // How the language should be displayed in the header bar!
  theme: "Theme",
  about: "About Me",
  experiences: "Experience",
  certificates: "Certificates",
  side_project: "Side Projects",
  links: "Links",
  version: "Version",
  source: "Source",
  month: {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  },
  remote: "Remote",
  on_site: "On-Site",
  hybrid: "Hybrid",
  present: "Present",
  dark: "Dark",
  light: "Light",
  debug: "Debug",
};

import { Config } from "../interfaces/ConfigInterface";
import { version } from "../../../package.json";

export const defaultConfig: Config = {
  version,
  global: {
    translatable: true,
    allowChangeTheme: true,
    currentTheme: "dark",
    currentLang: "demo",
    showCredit: true,
    showVersion: true,
    showSource: true,
    showMinimap: true,
    inactiveHours: {
      start_hour: "00:00",
      end_hour: "12:00",
    },
    timeZone: "America/Mexico_City",
  },
  head: {
    showTimeZone: true,
    indicateStatus: true,
  },
  experience: {
    abreviate_month: false,
  },
  links: {
    showCV: true,
  },
};

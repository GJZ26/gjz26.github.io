import { AvailableLangs } from "../config/LangsAvailables";
import { ThemesAvailables } from "../config/ThemesAvailables";
import { HourRange } from "./TimeInterface";
import { TimeZone } from "./TimeZones";

export interface Config {
  readonly version: string;
  global: {
    translatable: boolean;
    allowChangeTheme: boolean;

    currentTheme: ThemesAvailables;
    currentLang: AvailableLangs;

    showCredit: boolean;
    showVersion: boolean;
    showSource: boolean;
    showMinimap: boolean;

    timeZone?: TimeZone;
    inactiveHours?: HourRange;
  };

  head: {
    showTimeZone: boolean;
    indicateStatus: boolean;
  };
  experience: {
    max_skills_listed: number;
    abreviate_month: boolean;
  };
  links: {
    showCV: boolean;
  };
}

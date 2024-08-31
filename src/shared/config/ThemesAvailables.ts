export type ThemesAvailables =
  // | "mist"
  | "warm_ash"
  // | "crimson_nocturne"
  // | "zebra"
  | "alba_sky"
  // | "emerald_oasis"
  // | "debug"

// For custom themes, add your attributes and classes from the styles/Themes.styl file.
// Add the keyword in the ThemesAvailables type and in the Themes constant, put the value of the class of your theme
export const Themes: Record<ThemesAvailables, string> = {
  // Dark
  // mist: "mist",
  warm_ash: "warm_ash",
  // crimson_nocturne: "crimson_nocturne",
  // Light
  // zebra: "zebra",
  alba_sky: "alba_sky",
  // emerald_oasis: "emerald_oasis",

  // Other
  // debug: "debug",
};

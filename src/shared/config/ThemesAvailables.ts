export type ThemesAvailables =
  // | "mist"
  | "warm_ash"
  // | "crimson_nocturne"
  // | "zebra"
  | "alba_sky";
// | "emerald_oasis"
// | "debug";

export interface ThemeManifest {
  scheme: "dark" | "light" | "other";
}

// For custom themes, add your attributes and classes from the styles/Themes.styl file.
// Add the keyword in the ThemesAvailables type and in the Themes constant, put the value of the class of your theme
export const Themes: Record<ThemesAvailables, ThemeManifest> = {
  warm_ash: {
    scheme: "dark",
  },

  alba_sky: {
    scheme: "light",
  },
};

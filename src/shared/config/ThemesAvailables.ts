export type ThemesAvailables =
  | "mist"
  | "warm_ash"
  | "crimson_nocturne"
  | "zebra"
  | "alba_sky"
  | "emerald_oasis"
  | "debug";

export interface ThemeManifest {
  scheme: "dark" | "light" | "other";
}

// For custom themes, add your attributes and classes from the styles/Themes.styl file.
// Add the keyword in the ThemesAvailables type and in the Themes constant, put the value of the class of your theme
export const Themes: Record<ThemesAvailables, ThemeManifest> = {
  mist: {
    scheme: "dark",
  },

  warm_ash: {
    scheme: "dark",
  },

  crimson_nocturne: {
    scheme: "dark",
  },

  zebra: {
    scheme: "light",
  },
  
  alba_sky: {
    scheme: "light",
  },

  emerald_oasis: {
    scheme: "light",
  },

  debug: {
    scheme: "other",
  },
};

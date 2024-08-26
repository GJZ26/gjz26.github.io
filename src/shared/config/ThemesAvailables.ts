export type ThemesAvailables = "dark" | "light" | "debug";

// For custom themes, add your attributes and classes from the styles/Themes.styl file. 
// Add the keyword in the ThemesAvailables type and in the Themes constant, put the value of the class of your theme
export const Themes: Record<ThemesAvailables, string> = {
  dark: "dark",
  light: "light",
  debug: "debug",
};

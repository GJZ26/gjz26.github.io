import { useContext } from "react";
import { SystemConfigContext } from "../context/SystemConfigContext";
import { AvailableLangs } from "../config/LangsAvailables";
import { Themes, ThemesAvailables } from "../config/ThemesAvailables";

export default function useConfig() {
  const context = useContext(SystemConfigContext);
  if (!context) {
    throw new Error(
      "No se ha podido acceder a las configuraciones por defeceto de la página"
    );
  }

  const changeLang = (lang: AvailableLangs) => {
    const updatedConfig = {
      ...context.configs,
      global: {
        ...context.configs.global,
        currentLang: lang,
      },
    };

    context.setConfig(updatedConfig);
  };

  const changeTheme = (theme: ThemesAvailables) => {
    const updatedConfig = {
      ...context.configs,
      global: {
        ...context.configs.global,
        currentTheme: theme,
      },
    };
    document.documentElement.className = Themes[theme];
    context.setConfig(updatedConfig);
  };

  return { config: context.configs, changeLang, changeTheme };
}

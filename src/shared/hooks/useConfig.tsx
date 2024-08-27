import { useContext } from "react";
import { SystemConfigContext } from "../context/SystemConfigContext";
import { AvailableLangs } from "../config/LangsAvailables";
import { Themes, ThemesAvailables } from "../config/ThemesAvailables";

export default function useConfig() {
  const context = useContext(SystemConfigContext);
  if (!context) {
    throw new Error(
      "No se ha podido acceder a las configuraciones por defecto de la página"
    );
  }

  const { configs, setConfig } = context;

  const changeLang = (lang: AvailableLangs) => {
    const updatedConfig = {
      ...configs,
      global: {
        ...configs.global,
        currentLang: lang,
      },
    };
    setConfig(updatedConfig);
  };

  const changeTheme = (theme: ThemesAvailables) => {
    const updatedConfig = {
      ...configs,
      global: {
        ...configs.global,
        currentTheme: theme,
      },
    };
    document.documentElement.className = Themes[theme];
    setConfig(updatedConfig);
  };

  return { config: configs, changeLang, changeTheme };
}

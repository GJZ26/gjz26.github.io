import { useContext, useCallback } from "react";
import { SystemConfigContext } from "../context/SystemConfigContext";
import { AvailableLangs } from "../config/LangsAvailables";
import { ThemesAvailables } from "../config/ThemesAvailables";

export default function useConfig() {
  const { configs, setConfig } = useContext(SystemConfigContext) ?? (() => {
    throw new Error("No se ha podido acceder a las configuraciones por defecto de la página");
  })();

  const changeLang = useCallback((lang: AvailableLangs) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      global: {
        ...prevConfig.global,
        defaultLang: lang,
      },
    }));
  }, [setConfig]);

  const changeTheme = useCallback((theme: ThemesAvailables) => {
    document.documentElement.className = theme;
    setConfig((prevConfig) => ({
      ...prevConfig,
      global: {
        ...prevConfig.global,
        defaultTheme: theme,
      },
    }));
  }, [setConfig]);

  return { config: configs, changeLang, changeTheme };
}

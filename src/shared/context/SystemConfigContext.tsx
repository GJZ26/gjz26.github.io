import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { Config } from "../interfaces/ConfigInterface";
import { defaultConfig } from "../config/Config";
import {
  ThemeManifest,
  Themes,
  ThemesAvailables,
} from "../config/ThemesAvailables";
import { SystemData } from "../config/SystemData";
import { AvailableLangs } from "../config/LangsAvailables";

interface SystemConfigContextValue {
  configs: Config;
  setConfig: Dispatch<SetStateAction<Config>>;
}

export const SystemConfigContext = createContext<
  SystemConfigContextValue | undefined
>(undefined);

export function SystemConfigContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const searchOrDefaultTheme = useCallback(
    (mode: ThemeManifest["scheme"]): ThemesAvailables | undefined => {
      return Object.keys(Themes).find(
        (key) => Themes[key as ThemesAvailables].scheme === mode
      ) as ThemesAvailables;
    },
    []
  );

  if (defaultConfig.global.useSystemThemeScheme) {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentThemeScheme = Themes[defaultConfig.global.defaultTheme].scheme;

    if (
      (darkMode && currentThemeScheme !== "dark") ||
      (!darkMode && currentThemeScheme !== "light")
    ) {
      defaultConfig.global.defaultTheme =
        searchOrDefaultTheme(darkMode ? "dark" : "light") ??
        defaultConfig.global.defaultTheme;
    }
  }

  if (defaultConfig.global.useSystemLanguage) {
    const systemLang = Intl.DateTimeFormat()
      .resolvedOptions()
      .locale.split("-")[0];
    defaultConfig.global.defaultLang =
      (Object.keys(SystemData).find((langCode) =>
        systemLang.includes(langCode)
      ) as AvailableLangs) || defaultConfig.global.defaultLang;
  }

  const [configs, setConfig] = useState(defaultConfig);
  const value = useMemo(() => ({ configs, setConfig }), [configs]);

  useEffect(() => {
    document.documentElement.className = configs.global.defaultTheme;

    const fav = document.createElement("link");
    fav.rel = "icon";
    fav.href = configs.global.favicon || "#";

    document.head.appendChild(fav);

    return () => {
      document.head.removeChild(fav);
    };
  }, [configs.global.defaultTheme, configs.global.favicon]);

  return (
    <SystemConfigContext.Provider value={value}>
      {children}
    </SystemConfigContext.Provider>
  );
}

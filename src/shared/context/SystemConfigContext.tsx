import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Config } from "../interfaces/ConfigInterface";
import { defaultConfig } from "../config/Config";

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
  const [configs, setConfig] = useState(defaultConfig);
  const value = { configs, setConfig };

  // Seteamos las configuraciones por defecto!
  useEffect(() => {
    document.documentElement.className = configs.global.currentTheme;
    const fav = document.createElement("link");
    fav.rel = "icon";
    fav.href = configs.global.favicon || "#";
    document.head.appendChild(fav);
  }, []);

  return (
    <SystemConfigContext.Provider value={value}>
      {children}
    </SystemConfigContext.Provider>
  );
}

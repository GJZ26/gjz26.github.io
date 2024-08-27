import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
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
  const value = useMemo(() => ({ configs, setConfig }), [defaultConfig]);

  // Seteamos las configuraciones por defecto!
  document.documentElement.className = configs.global.currentTheme;

  return (
    <SystemConfigContext.Provider value={value}>
      {children}
    </SystemConfigContext.Provider>
  );
}

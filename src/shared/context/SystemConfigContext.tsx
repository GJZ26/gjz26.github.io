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

  return (
    <SystemConfigContext.Provider value={value}>
      {children}
    </SystemConfigContext.Provider>
  );
}

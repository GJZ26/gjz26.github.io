import { createContext } from "react";
import { AppTranslation } from "../interfaces/LangInterface";
import { SystemData } from "../config/SystemData";
import useConfig from "../hooks/useConfig";

export const SystemTranslationsContext =
  createContext<AppTranslation>(SystemData);

export function SystemTranslationsContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const { config } = useConfig();

  document.title = SystemData[config.global.currentLang].title;

  return (
    <SystemTranslationsContext.Provider value={SystemData}>
      {children}
    </SystemTranslationsContext.Provider>
  );
}

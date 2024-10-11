import { useContext } from "react";
import { SystemTranslationsContext } from "../context/SystemTranslationsContext";
import useConfig from "./useConfig";

export default function useSystemTranslations() {
  const context = useContext(SystemTranslationsContext);
  const { config } = useConfig();

  if (!context) {
    throw new Error("Cannot access to system translations!");
  }

  return {
    rawContext: context,
    systemTranslations: context[config.global.defaultLang],
  };
}

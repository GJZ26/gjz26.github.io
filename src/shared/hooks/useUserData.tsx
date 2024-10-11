import { useContext } from "react";
import { userDataContext } from "../context/UserDataContext";
import useConfig from "./useConfig";

export default function useUserData() {
  const context = useContext(userDataContext);

  const config = useConfig();

  if (!context) {
    throw new Error("Contexto no encontrado :D");
  }

  return { userData: context[config.config.global.defaultLang] };
}

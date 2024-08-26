import { createContext } from "react";
import { UserData } from "../config/UserData";
import { TranslatedInfo } from "../interfaces/LangInterface";

export const userDataContext = createContext<TranslatedInfo>(UserData);

export function UserDataContextProvider({ children }: { children: JSX.Element }) {
  return (
    <userDataContext.Provider value={UserData}>
      {children}
    </userDataContext.Provider>
  );
}

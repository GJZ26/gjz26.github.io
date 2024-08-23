import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";
import "./styles/Base.styl";
import "./styles/Themes.styl";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);

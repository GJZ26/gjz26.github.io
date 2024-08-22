import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Routes";
import "./assets/styles/Global.styl";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);

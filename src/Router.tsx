import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

export default function Router() {
  // No es necesario por ahora, pero posiblemente quiera incorporar una descripción por proyectos, blog, etc!
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  // No es necesario por ahora, pero posiblemente quiera incorporar una descripción por proyectos, blog, etc!
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hola mundo</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

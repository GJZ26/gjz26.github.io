import "../styles/components/Footer.styl";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>{/* Un Div Intensionalmente Vacío :D */}</div>
      <span>GJZ26 @ {year}</span>
      <div className="app-info">
        <span className="version">Versión 1.0.0</span>
        <a href="#"> Código Fuente</a>
      </div>
    </footer>
  );
}

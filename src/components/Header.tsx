import "../styles/components/Header.styl";

export default function Header() {
  return (
    <header>
      <div className="theme-picker">
        <span>Tema</span>
        <select name="theme" id="theme">
          <option value="dark">Oscuro</option>
          <option value="light">Claro</option>
        </select>
      </div>
      <div className="lang-picker">
        <label htmlFor="es">
          Español
          <input type="radio" name="lang" id="es" checked />
        </label>
        <label htmlFor="en">
          English
          <input type="radio" name="lang" id="en" />
        </label>
      </div>
    </header>
  );
}

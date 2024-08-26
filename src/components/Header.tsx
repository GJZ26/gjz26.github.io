import { AvailableLangs } from "../shared/config/LangsAvailables";
import { Themes, ThemesAvailables } from "../shared/config/ThemesAvailables";
import useConfig from "../shared/hooks/useConfig";
import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import "../styles/components/Header.styl";

export default function Header() {
  const { systemTranslations, rawContext } = useSystemTranslations();
  const { config, changeLang, changeTheme } = useConfig();

  return (
    <header>
      <div className="theme-picker">
        <span>{systemTranslations.theme}</span>
        <select
          name="theme"
          id="theme"
          onInput={(event) => {
            console.log((event.target as any).value)
            changeTheme((event.target as any).value as ThemesAvailables);
          }}
        >
          {Object.keys(Themes).map((theme, index) => {
            const changeThemeTo = () => changeTheme(theme as ThemesAvailables);

            return (
              <option value={theme} onClick={changeThemeTo} key={index}>
                {systemTranslations[theme as ThemesAvailables]}
              </option>
            );
          })}
        </select>
      </div>
      <div className="lang-picker">
        {Object.keys(rawContext).map((key, index) => {
          const translateTo = () => changeLang(key as AvailableLangs);
          return (
            <label htmlFor={key} key={index}>
              {rawContext[key as AvailableLangs].language}
              <input
                type="radio"
                name="lang"
                id={key}
                defaultChecked={config.global.currentLang === key}
                onClick={translateTo}
              />
            </label>
          );
        })}
        {/* <label htmlFor="es">
          Español
          <input type="radio" name="lang" id="es" defaultChecked />
        </label>
        <label htmlFor="en">
          English
          <input type="radio" name="lang" id="en" />
        </label> */}
      </div>
    </header>
  );
}

import { AvailableLangs } from "../shared/config/LangsAvailables";
import { Themes, ThemesAvailables } from "../shared/config/ThemesAvailables";
import useConfig from "../shared/hooks/useConfig";
import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import "../styles/components/Header.styl";

export default function Header() {
  const { systemTranslations, rawContext } = useSystemTranslations();
  const { config, changeLang, changeTheme } = useConfig();

  function renderThemePicker() {
    if (!config.global.allowChangeTheme) {
      return <div></div>;
    }

    return (
      <div className="theme-picker">
        <span>{systemTranslations.theme}</span>
        <select
          name="theme"
          id="theme"
          onInput={(event) => {
            changeTheme((event.target as any).value as ThemesAvailables);
          }}
          defaultValue={config.global.defaultTheme}
        >
          {Object.keys(Themes).map((theme, index) => (
            <option value={theme} key={index}>
              {systemTranslations[theme as ThemesAvailables]}
            </option>
          ))}
        </select>
      </div>
    );
  }

  function renderLangPicker() {
    if (!config.global.translatable) {
      return null;
    }

    return (
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
                defaultChecked={config.global.defaultLang === key}
                onClick={translateTo}
              />
            </label>
          );
        })}
      </div>
    );
  }

  return (
    <header>
      {renderThemePicker()}
      {renderLangPicker()}
    </header>
  );
}

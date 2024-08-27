import { useEffect, useState } from "react";
import "../styles/components/Minimap.styl";
import useUserData from "../shared/hooks/useUserData";
import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import { Info } from "../shared/interfaces/SectionsInterfaces";
import useConfig from "../shared/hooks/useConfig";

export default function Minimap() {
  const { config } = useConfig();

  if (!config.global.showMinimap) {
    return <></>;
  }

  const { userData } = useUserData();
  const { systemTranslations } = useSystemTranslations();
  const [current, setCurrent] = useState(0);

  const systemKeys = Object.keys(systemTranslations);

  const sections = Object.keys(userData.sections).map((key) => {
    if (systemKeys.includes(key)) {
      return systemTranslations[key as keyof Info["sections"]];
    }
  });

  const ids = sections.map((name) => name?.toLowerCase().replace(/ /g, "_"));

  const updateCurrentSection = () => {
    const limit = window.innerHeight / 10;
    const headings = document.querySelectorAll<HTMLElement>("h3[id]");

    let currentId = "";

    for (const heading of headings) {
      if (heading.getBoundingClientRect().y > limit) {
        break;
      }
      currentId = heading.id;
    }

    const newIndex = ids.indexOf(currentId);
    if (newIndex !== current) {
      setCurrent(newIndex);
    }

    if (`#${currentId}` !== window.location.hash) {
      history.replaceState(null, "", `#${currentId}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateCurrentSection);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", updateCurrentSection);
    };
  }, [current, ids, updateCurrentSection]);

  return (
    <div className="minimap">
      {Object.keys(userData.sections).map((section, index) => (
        <a
          key={section}
          href={`./#${ids[index]}`}
          className={`${index === current ? "focus" : ""}`}
        >
          {systemTranslations[section as keyof Info["sections"]]}
        </a>
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import "../styles/components/Minimap.styl";

const sections = [
  "Sobre Mi",
  "Experiencia",
  "Certificados",
  "Proyectos Personales",
  "Enlaces",
];

export default function Minimap() {
  const [current, setCurrent] = useState(0);

  const ids = sections.map((name) => name.toLowerCase().replace(/ /g, "_"));

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
  }, [current, ids]);

  return (
    <div className="minimap">
      {sections.map((section, index) => (
        <a
          key={section}
          href={`./#${ids[index]}`}
          className={`${index === current ? "focus" : ""}`}
        >
          {section}
        </a>
      ))}
    </div>
  );
}

import "../styles/features/About.styl";

export default function About() {
  const today = new Date();

  return (
    <p className="about">
      ¡Hola! Soy Adolfo, un desarrollador web back-end con +
      {today.getFullYear() - 2021} años de experiencia. Me encanta enfrentar
      desafíos y trabajar en proyectos que me permitan crecer y divertirme en el
      proceso. Disfruto compartir mis avances con personas que, como yo, sienten
      pasión por la tecnología.
    </p>
  );
}

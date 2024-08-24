import "../styles/layout/GenericLayout.styl";

export default function GenericLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactElement;
}) {
  return (
    <div className="generic-layout">
      <h3 id={title.toLowerCase().replace(/ /g, "_")}>{title}</h3>
      {children}
    </div>
  );
}

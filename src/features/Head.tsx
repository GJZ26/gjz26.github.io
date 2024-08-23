import "../styles/features/Head.styl";
import Time from "../components/utils/Time";

export default function Head() {
  return (
    <div className="head">
      <div className="user-image" />
      <div className="head-content">
        <h1>Adolfo González Juárez</h1>
        <h2>Desarrollador de Software</h2>
        <div className="extra-info">
          <span>@GJZ26</span>
          <span>Chiapas, México</span>
          <Time />
        </div>
      </div>
    </div>
  );
}

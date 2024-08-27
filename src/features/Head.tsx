import "../styles/features/Head.styl";
import Time from "../components/utils/Time";
import useUserData from "../shared/hooks/useUserData";

export default function Head() {
  const { userData } = useUserData();

  function renderUserImage() {
    if (userData.image) {
      return (
        <div
          className="user-image"
          style={{ backgroundImage: `url("${userData.image}")` }}
        />
      );
    }
    return null;
  }

  function renderAKA() {
    if (userData.aka) {
      return <span>@{userData.aka}</span>;
    }
    return null;
  }

  function renderLocation() {
    if (
      userData.location &&
      (userData.location.state || userData.location.country)
    ) {
      return (
        <span>
          {userData.location?.state}
          {userData.location.state && userData.location.country ? ", " : ""}
          {userData.location?.country}
        </span>
      );
    }
    return null;
  }

  return (
    <div className="head">
      {renderUserImage()}
      <div className={`head-content ${userData.image ? "" : "only"}`}>
        <h1>
          {userData.name} {userData.lastname}
        </h1>
        <h2>{userData.role}</h2>
        <div className="extra-info">
          {renderAKA()}
          {renderLocation()}
          <Time />
        </div>
      </div>
    </div>
  );
}

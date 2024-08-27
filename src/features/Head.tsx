import "../styles/features/Head.styl";
import Time from "../components/utils/Time";
import useUserData from "../shared/hooks/useUserData";

export default function Head() {
  const { userData } = useUserData();

  return (
    <div className="head">
      {userData.image ? (
        <div
          className="user-image"
          style={{ backgroundImage: `url("${userData.image}")` }}
        />
      ) : (
        ""
      )}
      <div className={`head-content ${userData.image ? "" : "only"}`}>
        <h1>
          {userData.name} {userData.lastname}
        </h1>
        <h2>{userData.role}</h2>
        <div className="extra-info">
          {userData.aka ? <span>@{userData.aka}</span> : ""}
          {userData.location &&
          (userData.location.state || userData.location.country) ? (
            <span>
              {userData.location?.state}
              {userData.location.state && userData.location.country ? ", " : ""}
              {userData.location?.country}
            </span>
          ) : (
            ""
          )}
          <Time />
        </div>
      </div>
    </div>
  );
}

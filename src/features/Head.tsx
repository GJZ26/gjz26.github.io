import "../styles/features/Head.styl";
import Time from "../components/utils/Time";
import useUserData from "../shared/hooks/useUserData";

export default function Head() {
  const { userData } = useUserData();

  return (
    <div className="head">
      <div
        className="user-image"
        style={{ backgroundImage: `url("${userData.image}")` }}
      />
      <div className="head-content">
        <h1>
          {userData.name} {userData.lastname}
        </h1>
        <h2>{userData.role}</h2>
        <div className="extra-info">
          <span>@{userData.aka}</span>
          <span>
            {userData.location?.state}, {userData.location?.country}
          </span>
          <Time />
        </div>
      </div>
    </div>
  );
}

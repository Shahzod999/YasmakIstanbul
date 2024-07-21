import { getInitials } from "../../utils/helper";
import "./card.scss";

const ProfileInfo = ({ userInfo, onLogOut }) => {
  return (
    <div className="profileInfo">
      <div>{getInitials(userInfo?.fullName)}</div>

      <div className="profileInfo_name">
        <p>{userInfo?.fullName}</p>
        <button onClick={onLogOut}>logout</button>
      </div>
    </div>
  );
};

export default ProfileInfo;

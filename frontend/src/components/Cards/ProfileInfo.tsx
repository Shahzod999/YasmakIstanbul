import { getInitials } from "../../utils/helper";
import "./card.scss";

const ProfileInfo = ({ onLogOut }) => {
  return (
    <div className="profileInfo">
      <div>{getInitials("Shahzod Ibragimov")}</div>

      <div className="profileInfo_name">
        <p>Shahzod</p>
        <button onClick={onLogOut}>logout</button>
      </div>
    </div>
  );
};

export default ProfileInfo;

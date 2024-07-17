import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogOut }) => {
  return (
    <div>
      <div>{getInitials("Shahzod Ibragimov")}</div>

      <div>
        <p>Shahzod</p>
        <button onClick={onLogOut}>logout</button>
      </div>
    </div>
  );
};

export default ProfileInfo;

import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div>
      <input value={value} onChange={onChange} placeholder={placeholder || "Password"} type={isShowPassword ? "text" : "password"} />

      <div onClick={toggleShowPassword}>{isShowPassword ? <FaRegEye size={22} /> : <FaRegEyeSlash size={22} />}</div>
    </div>
  );
};

export default PasswordInput;

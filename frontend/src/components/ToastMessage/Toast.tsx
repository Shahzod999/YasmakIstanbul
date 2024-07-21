import { useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div style={{ opacity: `${isShown ? "100" : "0"}` }}>
      <div>
        <div>{type === "delete" ? <MdDeleteOutline /> : <LuCheck />}</div>
        <p style={{ color: `${type == "add" ? "red" : "green"}` }}>{message}</p>
      </div>
    </div>
  );
};

export default Toast;

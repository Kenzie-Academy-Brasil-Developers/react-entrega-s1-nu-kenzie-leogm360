import "./index.css";
import { FaTrash } from "react-icons/fa";

const ButtonDelete = ({ callback, value }) => {
  return (
    <button
      onClick={() => callback(value)}
      className="button-delete"
      value={value}
      type="button"
    >
      <FaTrash className=".pointer--events" />
    </button>
  );
};

export default ButtonDelete;

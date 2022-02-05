import "./index.css";

const ButtonGrey = ({ children, className, callback, entry, value }) => {
  return (
    <button
      onClick={(event) => callback(entry ? entry : event.target.value)}
      className={className ? `button-grey ${className}` : "button-grey"}
      value={value}
      type="button"
    >
      {children}
    </button>
  );
};

export default ButtonGrey;

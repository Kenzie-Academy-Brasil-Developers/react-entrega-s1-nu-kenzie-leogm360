import "./index.css";

const ButtonPrimary = ({ children, className, callback, entry, value }) => {
  return (
    <button
      onClick={(event) => callback(entry ? entry : event.target.value)}
      className={className ? `button-primary ${className}` : "button-primary"}
      value={value}
      type="button"
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;

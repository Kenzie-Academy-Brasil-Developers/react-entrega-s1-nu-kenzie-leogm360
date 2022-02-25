import "./index.css";
import ButtonGrey from "../../../components/Buttons/ButtonGrey/index.jsx";

const Header = ({ changePages }) => {
  return (
    <header className="home-page-header">
      <figure>
        <img
          src={require("../../../img/nu-kenzie-logo-dark.png")}
          alt="Nu Kenzie logotype"
        />
      </figure>

      <div>
        <ButtonGrey callback={changePages}>Início</ButtonGrey>
      </div>
    </header>
  );
};

export default Header;

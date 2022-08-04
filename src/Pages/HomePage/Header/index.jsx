import "./index.css";
import ButtonGrey from "../../../components/Buttons/ButtonGrey/index.jsx";

const Header = ({ changePages }) => {
  return (
    <header className="home-page-header">
      <div className="home-page-header__container">
        <figure>
          <img
            src={require("../../../img/nu-kenzie-logo-dark.png")}
            alt="Nu Kenzie logotype"
          />
        </figure>

        <div>
          <ButtonGrey callback={changePages}>Início</ButtonGrey>
        </div>
      </div>
    </header>
  );
};

export default Header;

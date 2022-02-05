import "./index.css";
import ButtonPrimary from "../Buttons/ButtonPrimary/index.jsx";

const LandingPage = ({ changePages }) => {
  return (
    <main className="main">
      <section className="section">
        <article className="article">
          <figure className="logo-container">
            <img
              className="logo-container__image"
              src={require("../../img/nu-kenzie-logo-light.png")}
              alt="Nu Kenzie logotype"
            />
          </figure>

          <div className="catchphrase-container">
            <h1 className="catchphrase-container__title">
              Centralize o controle de suas finanças
            </h1>
          </div>

          <div className="complement-container">
            <p className="complement-container__paragraph">
              de forma rápida e segura
            </p>
          </div>

          <div className="lading-page-button-container">
            <ButtonPrimary
              className={"lading-page--button"}
              callback={changePages}
            >
              Iniciar
            </ButtonPrimary>
          </div>
        </article>

        <aside className="aside">
          <figure className="mockup-container">
            <img
              className="mockup-container__image"
              src={require("../../img/landing-page-logo.png")}
              alt="Nu Kenzie app illustration"
            />
          </figure>
        </aside>
      </section>
    </main>
  );
};

export default LandingPage;

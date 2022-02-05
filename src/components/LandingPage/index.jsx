import "./index.css";

const LandingPage = ({ changePages }) => {
  return (
    <main className="main">
      <section className="section">
        <article className="article">
          <figure className="figure-container">
            <img
              className="figure-container__image"
              src={require("../../img/nu-kenzie-logo-light.png")}
              alt="Nu Kenzie logotype"
            />
          </figure>

          <div className="title-container">
            <h1 className="title-container__title">
              Centralize o controle de suas finanças
            </h1>
          </div>

          <div className="paragraph-container">
            <p className="paragraph-container__paragraph">
              de forma rápida e segura
            </p>
          </div>

          <div className="button-container">
            <button
              onClick={() => changePages()}
              className="button-container__button"
              type="button"
            >
              Iniciar
            </button>
          </div>
        </article>

        <aside className="aside">
          <figure className="figure-container">
            <img
              className="figure-container__image"
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

import "./index.css";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/index.jsx";
import ButtonGrey from "../../../../components/Buttons/ButtonGrey/index.jsx";

const Header = ({ setTransactions }) => {
  const handleAll = () => {
    const all = JSON.parse(localStorage.transactions);

    setTransactions(all);
  };

  const handleFilter = (type) => {
    const all = JSON.parse(localStorage.transactions);

    setTransactions(all.filter(({ entryType }) => entryType === type));
  };

  return (
    <header className="transactions-header">
      <div className="header-title-container">
        <h1 className="header-title-container__title">Resumo financeiro</h1>
      </div>

      <div className="all-container">
        <ButtonPrimary callback={handleAll}>Todos</ButtonPrimary>
      </div>

      <div className="entrys-container">
        <ButtonGrey callback={handleFilter} value="Entrada">
          Entradas
        </ButtonGrey>
      </div>

      <div className="entrys-container">
        <ButtonGrey callback={handleFilter} value="Despesa">
          Despesas
        </ButtonGrey>
      </div>
    </header>
  );
};

export default Header;

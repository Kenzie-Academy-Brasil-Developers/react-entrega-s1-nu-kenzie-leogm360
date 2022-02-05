import "./index.css";
import { useState } from "react";
import ButtonPrimary from "../../../Buttons/ButtonPrimary/index.jsx";

const Form = ({ handleTransactions }) => {
  const [entry, setEntry] = useState({
    description: "",
    moneyValue: "",
    entryType: "",
  });

  const handleNewEntrys = (target) => {
    switch (target.name) {
      case "fdescription":
        setEntry({
          description: target.value,
          moneyValue: entry.moneyValue,
          entryType: entry.entryType,
        });

        break;

      case "fmoneyValue":
        setEntry({
          description: entry.description,
          moneyValue: target.value,
          entryType: entry.entryType,
        });

        break;

      case "fentryType":
        setEntry({
          description: entry.description,
          moneyValue: entry.moneyValue,
          entryType: target.value,
        });

        break;

      default:
        break;
    }
  };

  return (
    <form className="form">
      <div className="description-container">
        <label className="description-container__label" htmlFor="description">
          Descrição
        </label>

        <input
          onChange={(event) => handleNewEntrys(event.target)}
          className="description-container__input"
          type="text"
          name="fdescription"
          id="description"
          placeholder="Digite aqui sua descrição"
        />
      </div>

      <div className="example-container">
        <p className="example-container__paragraph">Ex: Compra de roupas</p>
      </div>

      <div className="value-entry-container">
        <div className="value-container">
          <label className="value-container__label" htmlFor="money-value">
            Valor
          </label>

          <div className="input-container">
            <input
              onChange={(event) => handleNewEntrys(event.target)}
              className="input-container__input"
              type="text"
              name="fmoneyValue"
              id="money-value"
              placeholder="174.23"
            />

            <span className="input-container__span">R$</span>
          </div>
        </div>

        <div className="entry-container">
          <label className="entry-container_label" htmlFor="entry-type">
            Tipo de valor
          </label>
          <select
            onChange={(event) => handleNewEntrys(event.target)}
            className="entry-container_select"
            name="fentryType"
            id="entry-type"
          >
            <option value="null">Selecione</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>

      <div className="add-transaction-container">
        <ButtonPrimary
          className="add-transaction--button"
          callback={handleTransactions}
          entry={entry}
        >
          Inserir Valor
        </ButtonPrimary>
      </div>
    </form>
  );
};

export default Form;

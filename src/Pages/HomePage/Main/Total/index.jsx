import "./index.css";

const Total = ({ transactions }) => {
  const handleTotalValue = () => {
    const total = transactions.reduce((acc, entry) => {
      if (entry.entryType === "Entrada") {
        acc += parseFloat(entry.moneyValue);
      } else {
        acc -= parseFloat(entry.moneyValue);
      }

      return acc;
    }, 0);

    return `R$ ${total.toFixed(2).replace(".", ",")}`;
  };

  return transactions.length > 0 ? (
    <aside className="aside-container">
      <div className="inner-aside-container">
        <span className="inner-aside-container__text">Valor total:</span>

        <span className="inner-aside-container__value">
          {handleTotalValue()}
        </span>
      </div>
    </aside>
  ) : (
    <></>
  );
};

export default Total;

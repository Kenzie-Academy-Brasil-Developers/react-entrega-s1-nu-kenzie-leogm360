import "./index.css";
import ButtonDelete from "../../../Buttons/ButtonDelete/index.jsx";

const Transactions = ({ transactions, setTransactions }) => {
  const handleDelete = (entryDescription) => {
    const all = JSON.parse(localStorage.transactions);

    const filteredAll = all.filter(
      ({ description }) => description !== entryDescription
    );
    console.log(filteredAll);
    setTransactions(filteredAll);

    localStorage.setItem("transactions", JSON.stringify(filteredAll));
  };

  return transactions.length > 0 ? (
    <ul className="transactions-body">
      {transactions.map(({ description, moneyValue, entryType }) => {
        return (
          <li
            key={description}
            className={`transactions-item ${
              entryType === "Entrada" ? "item--incomes" : "item--expenses"
            }`}
          >
            <div className="item-top">
              <div className="item-title-container">
                <h2 className="item-title-container__title">{description}</h2>
              </div>

              <div className="item-value-container">
                <span className="item-value-container__span">
                  {`R$ ${moneyValue.replace(".", ",")}`}
                </span>
              </div>

              <div className="item-delete-container">
                <ButtonDelete
                  className={"pointer--events"}
                  callback={handleDelete}
                  value={description}
                />
              </div>
            </div>

            <div className="item-bottom">
              <span className="item-bottom__span">{entryType}</span>
            </div>
          </li>
        );
      })}
    </ul>
  ) : (
    <ul className="transactions-body">
      <li className="empty-card">
        <span className="empty-card__rec1"></span>
        <span className="empty-card__rec2"></span>
      </li>

      <li className="empty-card">
        <span className="empty-card__rec1"></span>
        <span className="empty-card__rec2"></span>
      </li>

      <li className="empty-card">
        <span className="empty-card__rec1"></span>
        <span className="empty-card__rec2"></span>
      </li>

      <li className="empty-card">
        <span className="empty-card__rec1"></span>
        <span className="empty-card__rec2"></span>
      </li>
    </ul>
  );
};

export default Transactions;

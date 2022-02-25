import "./index.css";
import Form from "./Form/index.jsx";
import Total from "./Total/index.jsx";
import Header from "./Header/index.jsx";
import Transactions from "./Transactions/index.jsx";

const Main = ({ transactions, setTransactions, handleTransactions }) => {
  return (
    <main className="inital-page-main">
      <section className="form-container">
        <Form
          transactions={transactions}
          handleTransactions={handleTransactions}
        />

        <Total transactions={transactions} />
      </section>

      <section className="transactions-container">
        <Header setTransactions={setTransactions} />

        <Transactions
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </section>
    </main>
  );
};

export default Main;

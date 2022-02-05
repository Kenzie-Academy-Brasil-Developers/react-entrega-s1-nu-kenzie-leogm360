import { useState } from "react";
import Header from "./Header/index.jsx";
import Main from "./Main/index.jsx";

const HomePage = ({ changePages }) => {
  const [transactions, setTransactions] = useState(
    localStorage.getItem("transactions")
      ? JSON.parse(localStorage.getItem("transactions"))
      : []
  );

  const handleTransactions = (entry) => {
    setTransactions([...transactions, entry]);

    localStorage.setItem(
      "transactions",
      JSON.stringify([...transactions, entry])
    );
  };

  return (
    <>
      <Header changePages={changePages} />

      <Main
        transactions={transactions}
        setTransactions={setTransactions}
        handleTransactions={handleTransactions}
      />
    </>
  );
};

export default HomePage;

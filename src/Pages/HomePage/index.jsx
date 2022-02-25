import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header/index.jsx";
import Main from "./Main/index.jsx";

const HomePage = ({ changePages }) => {
  const [transactions, setTransactions] = useState(
    localStorage.getItem("transactions")
      ? JSON.parse(localStorage.getItem("transactions"))
      : []
  );

  const handleTransactions = (entry) => {
    const isEmpty = Object.values(entry).some((string) => string === "");

    if (isEmpty) {
      toast.error("Todos os campos são obrigatórios!");
    } else {
      setTransactions([...transactions, entry]);

      localStorage.setItem(
        "transactions",
        JSON.stringify([...transactions, entry])
      );
    }
  };

  return (
    <>
      <ToastContainer />

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

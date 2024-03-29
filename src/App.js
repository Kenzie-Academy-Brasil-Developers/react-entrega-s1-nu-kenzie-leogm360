import { useState } from "react";
import HomePage from "./Pages/HomePage/index.jsx";
import LandingPage from "./Pages/LandingPage/index.jsx";

function App() {
  const [isInLandingPage, setIsInLandingPage] = useState(true);

  const changePages = () => {
    setIsInLandingPage(!isInLandingPage);
  };

  return isInLandingPage ? (
    <>
      <LandingPage changePages={changePages} />
    </>
  ) : (
    <>
      <HomePage changePages={changePages} />
    </>
  );
}

export default App;

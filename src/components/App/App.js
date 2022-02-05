import { useState } from "react";
import LandingPage from "../LandingPage/index.jsx";
import HomePage from "../HomePage/index.jsx";

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

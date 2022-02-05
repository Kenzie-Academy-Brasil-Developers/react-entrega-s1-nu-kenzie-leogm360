import { useState } from "react";
import LandingPage from "../LandingPage/index.jsx";
import IndexInitialPage from "../InitialPage/index.jsx";

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
      <IndexInitialPage changePages={changePages} />
    </>
  );
}

export default App;

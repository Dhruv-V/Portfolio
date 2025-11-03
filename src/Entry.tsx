import React, { useState } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import App from "./App";

const Entry = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleLandingPageEnd = () => {
    setShowLandingPage(false);
  };

  return (
    <>
      {showLandingPage && <LandingPage onAnimationEnd={handleLandingPageEnd} />}
      <App />
    </>
  );
};

export default Entry;

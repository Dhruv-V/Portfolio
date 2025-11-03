import React from "react";
import "./App.scss";
import Navbar from "./components/navigation-bar/Navbar";
import IntroProjects from "./components/intro-section/IntroSection";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div>
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Static Intro and Projects Section */}
      <IntroProjects />

      {/* Scrollable Content */}
      <div className="scrollable-content">
        {/* <About /> */}
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import "./App.scss"; // Import your CSS/SCSS file
import Navbar from "./components/navigation-bar/Navbar";
import IntroProjects from "./components/intro-section/IntroSection";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import Overlay from "./components/intro-section/Overlay";

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

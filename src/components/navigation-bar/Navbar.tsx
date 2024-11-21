import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import SlidingWindow from "../sliding-window/SlidingWindow";
import { url } from "inspector";
import initial from "../../assets/images/initial.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id?: string) => {
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false); // Close the slider on scroll
      }
    };

    // Add scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      <SlidingWindow
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        width={"60%"}
        heading="Dhruv Vashishth"
      >
        <div>lets get to know me</div>
      </SlidingWindow>
      <div className="initial-container">
        <img className="initial-img" src={initial} alt="dkv" />
        <div className="initial-name">DKV.</div>
      </div>
      <nav className="navbar">
        <ul>
          <li onClick={() => scrollToSection()}>Home</li>
          <li onClick={() => setIsOpen((prev) => !prev)}>About</li>
          <li onClick={() => scrollToSection("work")}>Work</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

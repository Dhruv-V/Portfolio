import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  const scrollToSection = (id?: string) => {
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
    }
  };

  return (
    <nav className="navbar">
      <ul>
      <li onClick={() => scrollToSection()}>Home</li> 
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('work')}>Work</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

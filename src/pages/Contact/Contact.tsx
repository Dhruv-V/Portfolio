import React from "react";
import "./Contact.scss";

const Contact = () => {
  const handleSendEmail = () => {
    const email = "magmers9@gmail.com";
    const subject = "Hey, I would like to connect";
    const body = "I am reaching out to you regarding...";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  return (
    <footer id="contact" className="footer">
      <div className="footer-heading">
        <p className="footer-greeting">Nice to meet you,</p>
        <h2 className="footer-connect">Let's connect</h2>
      </div>
      <button className="footer-button" onClick={handleSendEmail}>
        Send Email
      </button>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/dhruv-vashishth-274694206/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="https://github.com/Dhruv-V" target="_blank">
          GitHub
        </a>
        <a
          href="https://dhruv-v.github.io/dhruv-resume/resume.pdf"
          target="_blank"
        >
          Resume
        </a>
        <a>magmers9@gmail.com</a>
        <a href="tel:+917827167251">+91-7827167251</a>
      </div>
      <p className="footer-copyright">&copy; 2024 DHRUV VASHISHTH</p>
    </footer>
  );
};

export default Contact;

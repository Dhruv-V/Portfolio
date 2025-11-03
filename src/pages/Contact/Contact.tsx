import React, { useState } from "react";
import EmailModal from "../../components/EmailModal/EmailModal";
import "./Contact.scss";

const Contact = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleOpenEmailModal = () => {
    setIsEmailModalOpen(true);
  };

  const handleCloseEmailModal = () => {
    setIsEmailModalOpen(false);
  };

  return (
    <>
      <footer id="contact" className="footer">
        <div className="footer-heading">
          <p className="footer-greeting">Nice to meet you,</p>
          <h2 className="footer-connect">Let's connect</h2>
        </div>
        <button className="footer-button" onClick={handleOpenEmailModal}>
          Send Me a Message
        </button>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/dhruv-vashishth-274694206/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Dhruv-V"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://dhruv-v.github.io/dhruv-resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a href="mailto:dhruvvashishth009@gmail.com">
            dhruvvashishth009@gmail.com
          </a>
          <a href="tel:+917827167251">+91-7827167251</a>
        </div>
        <p className="footer-copyright">&copy; 2025 DHRUV VASHISHTH</p>
      </footer>

      <EmailModal isOpen={isEmailModalOpen} onClose={handleCloseEmailModal} />
    </>
  );
};

export default Contact;

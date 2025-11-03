import React, { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./EmailModal.scss";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// EmailJS Configuration
// IMPORTANT: Replace these with your actual EmailJS credentials
// Get them from: https://dashboard.emailjs.com/
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_xtcs24s",
  TEMPLATE_ID: "template_awt7y2l",
  PUBLIC_KEY: "7yDw-Xa3yQOnRsJPU",
};

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("idle");

    try {
      // Send email directly using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "dhruvvashishth009@gmail.com", // Your email
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Close modal after 3 seconds
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");

      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="email-modal-overlay" onClick={onClose}>
      <div className="email-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <h2>Send Me a Message</h2>
        <p className="modal-description">
          I'll get back to you as soon as possible!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Collaboration"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              required
            />
          </div>

          <button type="submit" className="submit-button" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success-message">
              ✓ Message sent successfully! I'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="error-message">
              ✗ Failed to send message. Please try again or email me at
              dhruvvashishth009@gmail.com
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EmailModal;

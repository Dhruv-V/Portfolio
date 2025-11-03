import React, { useState, FormEvent } from "react";
import "./EmailModal.scss";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Web3Forms - Simpler than EmailJS, no OAuth needed!
// Get your free key from: https://web3forms.com (30 seconds)
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // Replace with your key

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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          // Optional: Add more fields
          to_email: "dhruvvashishth009@gmail.com",
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Email sent successfully!");
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setStatus("idle");
          onClose();
        }, 3000);
      } else {
        console.error("Failed to send:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");

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


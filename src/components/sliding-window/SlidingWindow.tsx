import React from "react";
import "./SlidingWindow.scss";

const SlidingWindow = ({
  isOpen,
  setIsOpen,
  width,
  heading,
  children,
}: {
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
  width?: any;
  heading?: string;
  children: any;
}) => {
  return (
    <div className="sliding-container">
      <div
        className={`sliding-window ${isOpen ? "open" : "closed"}`}
        style={{ width: width ?? "300px" }}
      >
        <div className="sliding-header">
          <h2>{heading ?? "Welcome"}</h2>
          <div className="close-btn" onClick={() => setIsOpen(false)}>
            CLOSE
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SlidingWindow;

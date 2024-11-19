import React from "react";
import ReactDOM from "react-dom/client";
import Entry from "./Entry";
import "./fonts.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Entry />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterFunc from "./pages/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterFunc />
  </React.StrictMode>
);

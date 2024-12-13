import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Define the element to render
const element = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

root.render(element);

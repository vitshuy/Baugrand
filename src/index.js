import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter basename="/baugrand">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

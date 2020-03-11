import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route path="/" component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import { GlobalCSS } from "./components";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <GlobalCSS />
    <div>
      <Route path="/" component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

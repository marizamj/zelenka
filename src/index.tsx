import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/index.css";
import App from "./App";
import { Form } from "./components";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/form-partners" component={Form} />
      <Route path="/form-all" component={Form} />
      <Route path="/form-success" component={Form} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

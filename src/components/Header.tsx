import * as React from "react";
import "../css/Header.css";

import logo from "../images/logo.png";

// TODO should be clickable
const Header = () => (
  <div className="header">
    <div className="title-img" />
    <div className="logo-container">
      <img src={logo} className="logo" alt="ЗЕЛЕНКА" />
      <p className="logo-text">
        Показываем хирургию и медицину так, чтобы не тошнило
      </p>
    </div>
  </div>
);

export default Header;

import * as React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

const Header = () => (
  <header className="header">
    <div className="title-img" />
    <div className="logo-container">
      <Link to="/">
        <img src={logo} className="logo" alt="ЗЕЛЕНКА" />
      </Link>
      <p className="logo-text">
        Показываем хирургию и медицину так, чтобы не тошнило
      </p>
    </div>
  </header>
);

export default Header;

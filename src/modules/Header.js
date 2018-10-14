import React, { Component } from "react";
import "../css/Header.css";

import logo from "../images/logo.png";
import title_img from "../images/title-img.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={title_img} className="title-img" alt="background" />
        <div className="logo-container">
          <img src={logo} className="logo" alt="ЗЕЛЕНКА" />
          <p className="logo-text">
            Показываем хирургию и медицину так, чтобы не тошнило
          </p>
        </div>
      </div>
    );
  }
}

export default Header;

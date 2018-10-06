import React, { Component } from "react";
import "../css/Header.css";

import logo from "../images/logo.png";
import title_img from "../images/title-img.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={title_img} className="title-img" />
        <div className="logo-container">
          <p className="logo-text">Программа о хирургии и медицине</p>
          <img src={logo} className="logo" />
          <p className="logo-text">Показываем так, чтобы не тошнило</p>
        </div>
      </div>
    );
  }
}

export default Header;

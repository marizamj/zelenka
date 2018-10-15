import React, { Component } from "react";
import "../css/Partners.css";

import nlv from "../images/logo-nlv.jpg";

class Partners extends Component {
  state = { visibleName: null };

  render() {
    const { visibleName } = this.state;

    return (
      <div className="partners">
        <h2>Уже работают с нами</h2>
        <div className="partner-container">
          <span
            className={`partner-name ${
              visibleName === "nlv" ? "opacity1" : "opacity0"
            }`}
          >
            Клиника лазерной коррекции зрения «Новый взгляд»
          </span>
          <a
            href="http://www.nlv.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={nlv}
              alt="Клиника лазерной коррекции зрения «Новый взгляд»"
              className="partner-logo"
              onMouseEnter={() => this.setState({ visibleName: "nlv" })}
              onMouseLeave={() => this.setState({ visibleName: null })}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Partners;

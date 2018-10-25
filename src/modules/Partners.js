import React, { Component } from "react";
import "../css/Partners.css";

import { partners } from "../lib/partners.js";

class Partners extends Component {
  state = { visibleName: null };

  render() {
    const { visibleName } = this.state;

    return (
      <div className="partners">
        <h2>Уже работают с нами</h2>

        {partners.map(partner => (
          <div className="partner-container" key={partner.id}>
            <span
              className={`partner-name ${
                visibleName === partner.id ? "opacity1" : "opacity0"
              }`}
            >
              {partner.title}
            </span>
            <a href={partner.url} target="_blank" rel="noopener noreferrer">
              <img
                src={partner.img}
                alt={partner.title}
                className="partner-logo"
                onMouseEnter={() => this.setState({ visibleName: partner.id })}
                onMouseLeave={() => this.setState({ visibleName: null })}
              />
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Partners;

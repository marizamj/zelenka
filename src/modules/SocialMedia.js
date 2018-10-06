import React, { Component } from "react";
import "../css/SocialMedia.css";

import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";

class SocialMedia extends Component {
  render() {
    return (
      <div className="sm">
        <img
          src={youtube}
          alt="YouTube"
          className="sm-btn"
          style={{ marginRight: "17vw" }}
        />
        <img
          src={instagram}
          alt="Instagram"
          className="sm-btn"
          style={{ marginRight: "12vw" }}
        />
        <img src={facebook} alt="Facebook" className="sm-btn" />
      </div>
    );
  }
}

export default SocialMedia;

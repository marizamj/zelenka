import React, { Component } from "react";
import "../css/SocialMedia.css";

import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";

class SocialMedia extends Component {
  render() {
    return (
      <div className="sm">
        <a
          href="https://www.youtube.com/channel/UCIxnXifkJRTPOIe4AQM_fBQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={youtube}
            alt="YouTube"
            className="sm-btn"
            style={{ marginRight: "5.5em" }}
          />
        </a>
        {/* <a
          href="https://www.youtube.com/channel/UCIxnXifkJRTPOIe4AQM_fBQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagram}
            alt="Instagram"
            className="sm-btn"
            style={{ marginRight: "12vw" }}
          />
        </a> */}
        <a
          href="https://www.facebook.com/3elenka.online/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" className="sm-btn" />
        </a>
      </div>
    );
  }
}

export default SocialMedia;

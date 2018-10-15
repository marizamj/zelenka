import React, { Component } from "react";
import "../css/Video.css";

class Video extends Component {
  render() {
    return (
      <div className="video">
        <h2>Первый выпуск</h2>
        <iframe
          className="iframe"
          title="First video"
          src="https://www.youtube.com/embed/rQvIR1oL1vE"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Video;

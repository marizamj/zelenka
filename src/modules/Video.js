import React, { Component } from "react";
import { reactKey } from "../lib/misc";
import "../css/Video.css";

class Video extends Component {
  render() {
    const { videos } = this.props;
    return (
      <div className="video-container">
        {videos.map(({ title, src }) => (
          <div className="video" key={reactKey({ title, src })}>
            <h2>{title}</h2>
            <iframe
              className="iframe"
              title={title}
              src={src}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Video;

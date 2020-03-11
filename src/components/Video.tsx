import * as React from "react";
import { reactKey } from "../lib/misc";
import "../css/Video.css";
import { VideoData } from "../types";

interface Props {
  videos: VideoData[];
}

const Video = ({ videos }: Props) => (
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

export default Video;
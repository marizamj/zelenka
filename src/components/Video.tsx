/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { breakpoints, reactKey } from "../lib/misc";
import { VideoData } from "../types";

interface Props {
  videos: VideoData[];
}

const Video = ({ videos }: Props) => (
  <div css={videoContainerStyle}>
    {videos.map(({ title, src }) => (
      <div css={videoStyle} key={reactKey({ title, src })}>
        <h2>{title}</h2>
        <iframe
          css={iframeStyle}
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

const videoContainerStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const videoStyle = css`
  text-align: center;
  margin: 0 2em 0 2em;
`;

const iframeStyle = css`
  width: 560px;
  height: 315px;
  ${breakpoints.maxWidth560} {
    width: 300px;
    height: 200px;
  }
`;

export default Video;

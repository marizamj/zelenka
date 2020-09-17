/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import smBackImg from "../images/sm-back.png";
import facebook from "../images/facebook.png";
// import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import { breakpoints } from "../lib/misc";

const SocialMedia = () => (
  <div css={smStyle}>
    <a
      href="https://www.youtube.com/channel/UCIxnXifkJRTPOIe4AQM_fBQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={youtube}
        alt="YouTube"
        css={smBtnStyle}
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
            css={smBtnStyle}
            style={{ marginRight: "12vw" }}
          />
        </a> */}
    <a
      href="https://www.facebook.com/3elenka.online/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={facebook} alt="Facebook" css={smBtnStyle} />
    </a>
  </div>
);

const smStyle = css`
  font-size: 2em;
  position: relative;
  background: url(${smBackImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  height: 250px;
  ${breakpoints.maxWidth1023} {
    font-size: 1.5em;
    height: 190px;
    margin-top: -20px;
    margin-left: 0;
  }
`;

const smBtnStyle = css`
  height: 2em;
  position: absolute;
  top: 130px;
  right: 0;
  margin-right: 3em;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  ${breakpoints.maxWidth1023} {
    top: 100px;
  }
`;

export default SocialMedia;

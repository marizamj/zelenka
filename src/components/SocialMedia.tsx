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
      tabIndex={-1}
    >
      <input
        type="image"
        alt="Перейти в Ютьюб"
        src={youtube}
        css={smBtnStyle}
      />
    </a>
    <a
      href="https://www.facebook.com/3elenka.online/"
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
    >
      <input
        type="image"
        alt="Перейти в фейсбук"
        src={facebook}
        css={smBtnStyle}
      />
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

  a:first-of-type {
    input {
      margin-right: 13em;
    }
  }
  ${breakpoints.maxWidth1023} {
    font-size: 1.5em;
    height: 190px;
    margin-top: -20px;
    margin-left: 0;

    a:first-of-type {
      input {
        margin-right: 11em;
      }
    }
  }
`;

const smBtnStyle = css`
  height: 5em;
  position: absolute;
  top: 130px;
  right: 0;
  margin-right: 7em;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  ${breakpoints.maxWidth1023} {
    top: 100px;
    height: 4em;
    margin-right: 6em;
  }
`;

export default SocialMedia;

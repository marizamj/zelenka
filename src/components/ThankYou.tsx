/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import thankYouImg from "../images/thank-you.png";
import { breakpoints } from "../lib/misc";

const ThankYou = () => (
  <div css={thankYouStyle}>
    <p>Спасибо! Мы ответим вам в ближайшее время. Соня и Юля</p>
    <img alt="Cпасибо!" src={thankYouImg} css={thankYouImgStyle} />
  </div>
);

const thankYouStyle = css`
  text-align: center;
  font-size: 1.5em;
  ${breakpoints.maxWidth1023} {
    font-size: 1.3em;
  }
`;

const thankYouImgStyle = css`
  width: 500px;
  ${breakpoints.maxWidth1023} {
    width: 300px;
  }
`;

export default ThankYou;

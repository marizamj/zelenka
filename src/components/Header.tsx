/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { breakpoints } from "../lib/misc";

import logo from "../images/logo.png";
import topBottle from "../images/top-bottle.png";

const Header = () => (
  <header css={headerStyle}>
    <div css={titleImgStyle} />
    <div css={logoContainerStyle}>
      <img src={logo} css={logoStyle} alt="ЗЕЛЕНКА" />
      <p css={logoTextStyle}>
        Показываем хирургию и медицину так, чтобы не тошнило
      </p>
    </div>
  </header>
);

const headerStyle = css`
  position: relative;
  height: 150px;
  ${breakpoints.maxWidth1023} {
    z-index: 10;
  }
`;

const titleImgStyle = css`
  position: absolute;
  left: -50px;
  width: 400px;
  height: 400px;
  background: url(${topBottle});
  background-repeat: no-repeat;
  background-size: contain;
  ${breakpoints.maxWidth1023} {
    width: 350px;
    height: 350px;
    top: -125px;
  }
`;

const logoContainerStyle = css`
  text-align: center;
  position: absolute;
  width: 100%;
  top: 3em;
`;

const logoTextStyle = css`
  text-shadow: 0px 0px 1px #ffffff;
  font-size: 1.5em;
  font-weight: bold;
  margin: 10px;
  text-align: center;
  color: #c92121;
  ${breakpoints.maxWidth1023} {
    font-size: 1.3em;
  }
`;

const logoStyle = css`
  width: 300px;
  ${breakpoints.maxWidth1023} {
    width: 250px;
  }
`;

export default Header;

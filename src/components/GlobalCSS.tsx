/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";

const GlobalCSS = () => <Global styles={globalStyle} />;

const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
    font-family: "PT Sans", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 320px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  h1,
  h2 {
    color: #c92121;
    margin: 100px 0px 50px 0px;
  }

  *:focus {
    outline: none;
    box-shadow: 0 0 0 1px white, 0 0 0 4px #398a85;
    border-radius: 2px;
    transition: box-shadow 0.2s ease;
  }
`;

export default GlobalCSS;

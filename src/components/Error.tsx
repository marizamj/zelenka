/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { breakpoints } from "../lib/misc";

const Error = () => (
  <div css={errorStyle} data-testid="error">
    Что-то пошло не так. Пожалуйста, напишите нам на почту{" "}
    <a href="mailto:zelenkanasha@gmail.com">zelenkanasha@gmail.com</a> или в{" "}
    <a
      href="https://www.facebook.com/3elenka.online/"
      target="_blank"
      rel="noopener noreferrer"
    >
      фейсбук
    </a>
    .
  </div>
);

const errorStyle = css`
  color: #c92121;
  text-align: center;
  margin: auto;
  margin-top: 1em;
  font-size: 1.5em;
  max-width: 800px;
  padding: 1em;

  a {
    color: #c92121;
  }

  ${breakpoints.maxWidth1023} {
    font-size: 1.3em;
  }
`;

export default Error;

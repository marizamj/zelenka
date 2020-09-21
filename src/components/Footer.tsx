/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Footer = ({ currentYear }: { currentYear?: number }) => (
  <footer css={footerStyle} data-testid="footer">
    &#169; 2018-{currentYear || new Date().getFullYear()} zelenka.online{" "}
    <a href="mailto:zelenkanasha@gmail.com">zelenkanasha@gmail.com</a>
  </footer>
);

const footerStyle = css`
  border-top: 1px solid #398a85;
  padding: 1em;
  margin-top: 2em;
`;

export default Footer;

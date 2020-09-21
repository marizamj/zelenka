/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import partners from "../lib/partners";
import { reactKey, breakpoints } from "../lib/misc";

const Partners = () => (
  <div css={partnersStyle}>
    <h2>Уже работают с нами</h2>

    {partners.map(({ id, title, url, img }) => (
      <div
        css={partnerContainerStyle}
        key={reactKey({ id, title, url, img })}
        role="link"
        onClick={() => window.open(url, "_blank")}
        tabIndex={0}
      >
        <img src={img} alt={title} css={partnerLogoStyle} />
        <span css={partnerNameStyle}>{title}</span>
      </div>
    ))}
  </div>
);

const partnersStyle = css`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  h2 {
    flex: 1 0 100%;
    margin-bottom: 1em;
  }
  ${breakpoints.maxWidth1023} {
    h2 {
      margin-bottom: 2em;
    }
  }
  ${breakpoints.maxWidth700} {
    display: initial;
  }
`;

const partnerContainerStyle = css`
  position: relative;
  padding: 2em 2em 4em 2em;
  margin-bottom: 2em;
  cursor: pointer;

  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;

const partnerNameStyle = css`
  color: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 1em;
`;

const partnerLogoStyle = css`
  cursor: pointer;
  height: 130px;
`;

export default Partners;

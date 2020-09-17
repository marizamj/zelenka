/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import partners from "../lib/partners";
import { reactKey, breakpoints } from "../lib/misc";

const Partners = () => {
  const [visibleName, setVisibleName] = useState("");

  return (
    <div css={partnersStyle}>
      <h2>Уже работают с нами</h2>

      {partners.map(({ id, title, url, img }) => (
        <div
          css={partnerContainerStyle}
          key={reactKey({ id, title, url, img })}
        >
          <span css={partnerNameStyle(visibleName, id)}>{title}</span>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img
              src={img}
              alt={title}
              css={partnerLogoStyle}
              onMouseEnter={() => setVisibleName(id)}
              onMouseLeave={() => setVisibleName("")}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

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
  padding: 4em 2em;
`;

const partnerNameStyle = (visibleName: string, id: string) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 1em;
  opacity: ${visibleName === id ? 1 : 0};
  transition: opacity 0.2s ease;
  ${breakpoints.maxWidth1023} {
    opacity: 1;
  }
`;

const partnerLogoStyle = css`
  cursor: pointer;
  height: 130px;
`;

export default Partners;

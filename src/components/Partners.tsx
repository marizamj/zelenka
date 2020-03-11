import * as React from "react";
import "../css/Partners.css";

import partners from "../lib/partners";
import { reactKey } from "../lib/misc";

const Partners = () => {
  const [visibleName, setVisibleName] = React.useState("");

  return (
    <div className="partners">
      <h2>Уже работают с нами</h2>

      {partners.map(({ id, title, url, img }) => (
        <div
          className="partner-container"
          key={reactKey({ id, title, url, img })}
        >
          <span
            className={`partner-name ${
              visibleName === id ? "opacity1" : "opacity0"
            }`}
          >
            {title}
          </span>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img
              src={img}
              alt={title}
              className="partner-logo"
              onMouseEnter={() => setVisibleName(id)}
              onMouseLeave={() => setVisibleName("")}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Partners;

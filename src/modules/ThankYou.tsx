import * as React from "react";
import "../css/ThankYou.css";

import thankYouImg from "../images/thank-you.png";

const ThankYou = () => (
  <div className="thankYou">
    <p>Спасибо! Мы ответим вам в ближайшее время. Соня и Юля</p>
    <img alt="Cпасибо!" src={thankYouImg} className="thankYouImg" />
  </div>
);

export default ThankYou;

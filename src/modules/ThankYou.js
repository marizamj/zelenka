import React, { Component } from "react";
import "../css/ThankYou.css";

import thankYouImg from "../images/thank-you.png";

class ThankYou extends Component {
  render() {
    return (
      <div className="thankYou">
        <p>Спасибо! Мы ответим вам в ближайшее время. Соня и Юля</p>
        <img src={thankYouImg} className="thankYouImg" />
      </div>
    );
  }
}

export default ThankYou;

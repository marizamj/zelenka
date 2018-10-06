import React, { Component } from "react";
import "../css/BottleBtn.css";

class BottleBtn extends Component {
  render() {
    const { up, image, left, right, onClick } = this.props;

    const downClass = left
      ? "bottleImgDown downLeft"
      : "bottleImgDown downRight";

    return (
      <div className="bottleBtn" onClick={onClick}>
        <img
          src={image}
          className={up ? "bottleImgUp" : downClass}
          style={{ transformOrigin: `bottom ${left ? "left" : "right"}` }}
        />
      </div>
    );
  }
}

export default BottleBtn;

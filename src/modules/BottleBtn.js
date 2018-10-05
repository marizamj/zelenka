import React, { Component } from "react";
import "../css/BottleBtn.css";

class BottleBtn extends Component {
  //   state = { up: true };

  //   togglePosition = () => {
  //     this.setState({ up: !this.state.up });
  //   };

  render() {
    // const { up } = this.state;
    const { up, image, left, right, onClick } = this.props;

    const downClass = left
      ? "bottleImgDown downLeft"
      : "bottleImgDown downRight";

    return (
      <div className="bottleBtn" onClick={onClick}>
        <img
          src={image}
          className={up ? "bottleImgUp" : downClass}
          //   onClick={this.togglePosition}
        />
      </div>
    );
  }
}

export default BottleBtn;

import React, { Component } from "react";
import "../css/App.css";

import Header from "./Header";
import Video from "./Video";
import SocialMedia from "./SocialMedia";
import BottleBtn from "./BottleBtn";
import Form from "./Form";

import leftBottle from "../images/left-bottle.png";
import rightBottle from "../images/right-bottle.png";

class App extends Component {
  state = { openForm: null };

  toggleForm = type =>
    this.setState({ openForm: this.state.openForm === type ? null : type });

  render() {
    const { openForm } = this.state;

    return (
      <div className="container">
        <Header />
        <SocialMedia />
        <div className="bottleBtnContainer">
          <BottleBtn
            onClick={() => this.toggleForm("partners")}
            image={leftBottle}
            up={openForm !== "partners"}
            left
          />
          <BottleBtn
            onClick={() => this.toggleForm("friends")}
            image={rightBottle}
            up={openForm !== "friends"}
            right
          />
        </div>
        {openForm && <Form type={openForm} />}
        <Video />
      </div>
    );
  }
}

export default App;

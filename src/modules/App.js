import React, { Component } from "react";
import "../css/App.css";

import Header from "./Header";
import Video from "./Video";
import SocialMedia from "./SocialMedia";
import Form from "./Form";
import Partners from "./Partners";

import btnPartners from "../images/btn-partners.png";
import btnAll from "../images/btn-all.png";

class App extends Component {
  state = { openForm: "partners" };

  toggleForm = type => {
    window.location.hash = "#";
    this.setState({ openForm: type });
  };

  render() {
    const { openForm } = this.state;

    return (
      <div className="container">
        <Header />
        <SocialMedia />
        <div className="btnContainer">
          <img
            src={btnPartners}
            alt="Партнерам"
            className="btnImg"
            onClick={() => this.toggleForm("partners")}
          />
          <img
            src={btnAll}
            alt="Всем"
            className="btnImg"
            onClick={() => this.toggleForm("all")}
          />
        </div>
        <Form
          type={openForm}
          thankYouMsg={window.location.hash === "#submitted"}
        />
        <Video />
        <Partners />
      </div>
    );
  }
}

export default App;

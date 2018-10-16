import React, { Component } from "react";
import { UnmountClosed as Collapse } from "react-collapse";
import "../css/App.css";

import Form from "./Form";
import Header from "./Header";
import Video from "./Video";
import SocialMedia from "./SocialMedia";
import ThankYou from "./ThankYou";
import Partners from "./Partners";

import btnPartners from "../images/btn-partners.png";
import btnAll from "../images/btn-all.png";

class App extends Component {
  state = {
    openForm: "partners",
    error: false,
    formIsSend: false,
    loading: false
  };

  buttons = React.createRef();

  toggleForm = type =>
    this.setState({ formIsSend: false, error: false, openForm: type });

  handleSubmit = data => {
    this.setState({ formIsSend: false, loading: true, error: false });

    fetch("https://zelenka-back-drjfmctccl.now.sh/form", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then(response => {
        this.setState({
          formIsSend: response.ok,
          loading: false,
          error: false
        });
        window.scrollTo({ top: this.buttons.current.offsetTop });
      })
      .catch(error => {
        console.error(error);
        this.setState({ formIsSend: false, loading: false, error: true });
      });
  };

  render() {
    const { openForm, formIsSend, loading, error } = this.state;

    return (
      <div className="container">
        <Header />
        <SocialMedia />

        <div className="btnContainer" ref={this.buttons}>
          <img
            src={btnPartners}
            alt="Партнерам"
            className={`btnImg ${openForm === "partners" && "selected"}`}
            onClick={() => this.toggleForm("partners")}
          />
          <img
            src={btnAll}
            alt="Всем"
            className={`btnImg ${openForm === "all" && "selected"}`}
            onClick={() => this.toggleForm("all")}
          />
        </div>
        <Collapse isOpened={formIsSend}>
          <ThankYou />
        </Collapse>
        <Collapse isOpened={!formIsSend}>
          <Form
            type={openForm}
            handleSubmit={this.handleSubmit}
            loading={loading}
            error={error}
          />
        </Collapse>
        <Video />
        <Partners />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { UnmountClosed as Collapse } from "react-collapse";
import "../css/App.css";
import sendForm from "../lib/sendForm";

import Error from "./Error";
import Form from "./Form";
import Header from "./Header";
import Video from "./Video";
import SocialMedia from "./SocialMedia";
import ThankYou from "./ThankYou";
import Partners from "./Partners";

import btnPartners from "../images/btn-partners.png";
import btnAll from "../images/btn-all.png";
import spinner from "../images/spinner.png";

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

    window.scrollTo({ top: this.buttons.current.offsetTop });

    sendForm(data)
      .then(res =>
        this.setState({ formIsSend: res.ok, loading: false, error: !res.ok })
      )
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

        {error && <Error />}
        {formIsSend && !error && <ThankYou />}

        {loading && (
          <div className="loading">
            <p>Отправляем...</p>
            <img
              className="spinner"
              alt="Пожалуйста, подождите"
              src={spinner}
            />
          </div>
        )}

        <Collapse isOpened={!formIsSend && !error && !loading}>
          <Form
            type={openForm}
            handleSubmit={this.handleSubmit}
            loading={loading}
          />
        </Collapse>
        <Video />
        <Partners />
      </div>
    );
  }
}

export default App;

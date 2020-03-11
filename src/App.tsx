import React, { Component } from "react";
import { UnmountClosed as Collapse } from "react-collapse";
import "./css/App.css";
import sendForm from "./lib/sendForm";
import videos from "./lib/videos";

import {
  Error,
  Form,
  Header,
  Video,
  SocialMedia,
  ThankYou,
  Partners
} from "./components";

import btnPartners from "./images/btn-partners.png";
import btnAll from "./images/btn-all.png";
import spinner from "./images/spinner.png";
import { FormType } from "./types";

class App extends Component {
  state = {
    openForm: "partners" as FormType,
    error: false,
    formIsSend: false,
    loading: false
  };

  // TODO
  // buttons = React.createRef();

  toggleForm = (type: FormType) =>
    this.setState({ formIsSend: false, error: false, openForm: type });

  handleSubmit = (data: FormData) => {
    this.setState({ formIsSend: false, loading: true, error: false });

    // TODO make this work with TS
    // window.scrollTo({ top: this.buttons.current.offsetTop });

    if (process.env.NODE_ENV === "development") {
      this.setState({ formIsSend: true, loading: false, error: false });
    } else {
      sendForm(data)
        .then(res =>
          this.setState({ formIsSend: res.ok, loading: false, error: !res.ok })
        )
        .catch(error => {
          console.error(error);
          this.setState({ formIsSend: false, loading: false, error: true });
        });
    }
  };

  render() {
    const { openForm, formIsSend, loading, error } = this.state;

    return (
      <div className="container">
        <Header />
        <SocialMedia />

        <div className="btnContainer">
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
            // loading={loading} // TODO not used?
          />
        </Collapse>
        <Video videos={videos} />
        <Partners />
      </div>
    );
  }
}

export default App;

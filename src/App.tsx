import React from "react";
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
import { FormType, FormData } from "./types";

const App = () => {
  const buttons = React.useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState({
    openForm: "partners" as FormType,
    error: false,
    formIsSent: false,
    loading: false
  });

  const updateState = (newState: {
    openForm?: FormType;
    error?: boolean;
    formIsSent?: boolean;
    loading?: boolean;
  }) => setState({ ...state, ...newState });

  const toggleForm = (type: FormType) =>
    updateState({ formIsSent: false, error: false, openForm: type });

  const handleSubmit = (data: FormData) => {
    updateState({ formIsSent: false, loading: true, error: false });

    if (buttons.current && window) {
      window.scrollTo({ top: buttons.current.offsetTop });
    }

    sendForm(data)
      .then(res =>
        updateState({ formIsSent: res.ok, loading: false, error: !res.ok })
      )
      .catch(error => {
        console.error(error);
        updateState({ formIsSent: false, loading: false, error: true });
      });
  };

  const { openForm, formIsSent, loading, error } = state;

  return (
    <div className="container">
      <Header />
      <SocialMedia />

      <div ref={buttons} className="btnContainer">
        <img
          src={btnPartners}
          alt="Партнерам"
          className={`btnImg ${openForm === "partners" && "selected"}`}
          onClick={() => toggleForm("partners")}
          role="button"
          data-testid="button-partners"
        />
        <img
          src={btnAll}
          alt="Всем"
          className={`btnImg ${openForm === "all" && "selected"}`}
          onClick={() => toggleForm("all")}
          role="button"
          data-testid="button-all"
        />
      </div>

      {error && <Error />}
      {formIsSent && !error && <ThankYou />}

      {loading && (
        <div className="loading">
          <p>Отправляем...</p>
          <img className="spinner" alt="Пожалуйста, подождите" src={spinner} />
        </div>
      )}

      <Collapse isOpened={!formIsSent && !error && !loading}>
        <Form type={openForm} handleSubmit={handleSubmit} />
      </Collapse>
      <Video videos={videos} />
      <Partners />
    </div>
  );
};

export default App;

/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import { useState, useRef } from "react";
import { UnmountClosed as Collapse } from "react-collapse";
import sendForm from "./lib/sendForm";
import videos from "./lib/videos";

import {
  Error,
  Footer,
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
import { breakpoints } from "./lib/misc";

const App = () => {
  const buttonsContainer = useRef<HTMLDivElement>(null);
  const btnPartnersRef = useRef<HTMLInputElement>(null);
  const btnAllRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState({
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

    if (buttonsContainer.current && window) {
      window.scrollTo({ top: buttonsContainer.current.offsetTop });
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
    <div css={containerStyle}>
      <Header />
      <SocialMedia />

      <div ref={buttonsContainer} css={btnContainerStyle}>
        <input
          ref={btnPartnersRef}
          type="image"
          alt="Партнерам"
          src={btnPartners}
          css={btnImgStyle(openForm === "partners")}
          onClick={() => {
            toggleForm("partners");
            btnPartnersRef.current?.blur();
          }}
          data-testid="button-partners"
        />
        <input
          ref={btnAllRef}
          type="image"
          alt="Всем"
          src={btnAll}
          css={btnImgStyle(openForm === "all")}
          onClick={e => {
            toggleForm("all");
            btnAllRef.current?.blur();
          }}
          data-testid="button-all"
        />
      </div>

      {error && <Error />}
      {formIsSent && !error && <ThankYou />}

      {loading && (
        <div css={loadingStyle}>
          <p>Отправляем...</p>
          <img css={spinnerStyle} alt="Пожалуйста, подождите" src={spinner} />
        </div>
      )}

      <Collapse isOpened={!formIsSent && !error && !loading}>
        <Form type={openForm} handleSubmit={handleSubmit} />
      </Collapse>
      <Video videos={videos} />
      <Partners />
      <Footer />
    </div>
  );
};

const containerStyle = css`
  position: relative;
  text-align: center;
`;

const btnContainerStyle = css`
  text-align: center;
  margin-top: -50px;
  ${breakpoints.maxWidth1023} {
    margin-top: -20px;
  }
`;

const btnImgStyle = (selected: boolean) => css`
  width: 200px;
  cursor: pointer;
  margin: 20px;
  opacity: ${selected ? "1" : "0.5"};
  &:hover {
    opacity: ${selected ? "1" : "0.8"};
  }
  ${breakpoints.maxWidth1023} {
    width: 140px;
    margin: 10px;
  }
`;

const loadingStyle = css`
  font-size: 1.5em;
  ${breakpoints.maxWidth1023} {
    font-size: 1.3em;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinnerStyle = css`
  animation: ${spin} infinite 1s linear;
  width: 50px;
  ${breakpoints.maxWidth1023} {
    width: 30px;
  }
`;

export default App;

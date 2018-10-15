import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../css/App.css";
import { HOME_URL } from "../lib/globals";

import Header from "./Header";
import Video from "./Video";
import SocialMedia from "./SocialMedia";
import Partners from "./Partners";

import btnPartners from "../images/btn-partners.png";
import btnAll from "../images/btn-all.png";

class App extends Component {
  state = { openForm: "partners", formIframeHeight: "0px" };

  formIframe = React.createRef();

  toggleForm = type => {
    this.setState({ openForm: type });
    if (window.location.href === HOME_URL + "#btnContainer") {
      window.location.href = "#";
    }
  };

  setFormIframeHeight = () => {
    const iframeNode = ReactDOM.findDOMNode(this.formIframe.current);

    try {
      this.setState({
        formIframeHeight:
          iframeNode.contentWindow.document.body.scrollHeight + "px"
      });
    } catch (error) {
      console.error(error);
      this.setState({ formIframeHeight: "500px" });
      window.location.href = "#btnContainer";
    }
  };

  render() {
    const { openForm } = this.state;

    return (
      <div className="container">
        <Header />
        <SocialMedia />
        <div className="btnContainer" id="btnContainer">
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
        <iframe
          title="formIframe"
          className="formIframe"
          ref={this.formIframe}
          src={`/form-${openForm}`}
          style={{ height: this.state.formIframeHeight }}
          onLoad={this.setFormIframeHeight}
        />
        <Video />
        <Partners />
      </div>
    );
  }
}

export default App;

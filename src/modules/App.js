import React, { Component } from "react";
import "../css/App.css";

import Header from "./Header";
import Video from "./Video";
import SocialMedia from "./SocialMedia";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SocialMedia />
        <Video />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "../css/Error.css";

class Error extends Component {
  render() {
    return (
      <div className="error">
        Что-то пошло не так. Пожалуйста, напишите нам на почту{" "}
        <a href="mailto:zelenkanasha@gmail.com">zelenkanasha@gmail.com</a> или в{" "}
        <a
          href="https://www.facebook.com/3elenka.online/"
          target="_blank"
          rel="noopener noreferrer"
        >
          фейсбук
        </a>
        .
      </div>
    );
  }
}

export default Error;

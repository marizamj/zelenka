import * as React from "react";
import "../css/Error.css";

const Error = () => (
  <div className="error" data-testid="error">
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

export default Error;

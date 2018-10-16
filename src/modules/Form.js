import React, { Component } from "react";
import "../css/Form.css";
import formFields from "../lib/formFields.json";

class Form extends Component {
  state = {};

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { type, handleSubmit, loading, error } = this.props;

    return (
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(this.state);
        }}
      >
        <div className="formDescription">{formFields[type].description}</div>
        <p className="required">* - обязательные поля</p>
        {[...formFields.common, ...formFields[type].fields].map(field => (
          <label key={field.label}>
            <p className="formLabel">
              {field.label}
              {field.required && <span className="required">*</span>}
            </p>
            {field.type === "textarea" ? (
              <textarea
                onChange={this.handleChange}
                required={field.required}
                name={field.name}
              />
            ) : (
              <input
                onChange={this.handleChange}
                required={field.required}
                type={field.type || "text"}
                name={field.name}
              />
            )}
          </label>
        ))}
        <input
          type="submit"
          value={loading ? "Отправляем..." : "Отправить"}
          disabled={loading}
        />
        {error && (
          <div className="error">Что-то пошло не так, попробуйте еще раз.</div>
        )}
      </form>
    );
  }
}

export default Form;

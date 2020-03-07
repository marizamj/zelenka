import * as React from "react";
import "../css/Form.css";
import formFields from "../lib/formFields.json";
import { FormType } from "../types";

// TODO any
interface Props {
  type: FormType;
  handleSubmit: (...args: any[]) => any;
}

const Form = ({ type, handleSubmit }: Props) => {
  const [formState, setFormState] = React.useState({});

  return (
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(formState);
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
              onChange={({ target: { value, name } }) => {
                setFormState({ [name]: value });
              }}
              required={field.required}
              name={field.name}
            />
          ) : (
            <input
              onChange={({ target: { value, name } }) => {
                setFormState({ [name]: value });
              }}
              required={field.required}
              type={field.type || "text"}
              name={field.name}
            />
          )}
        </label>
      ))}
      <input type="submit" value="Отправить" />
    </form>
  );
};

export default Form;

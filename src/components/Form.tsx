import * as React from "react";
import "../css/Form.css";
import formFields from "../lib/formFields";
import { FormType, FormData, FormFull } from "../types";

interface Props {
  type: FormType;
  handleSubmit: (formState: FormData) => void;
}

const Form = ({ type, handleSubmit }: Props) => {
  const [formState, setFormState] = React.useState<FormFull>({} as FormFull);

  return (
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(formState);
      }}
      data-testid={`form-${type}`}
    >
      <div className="formDescription">{formFields[type].description}</div>
      <p className="required">* - обязательные поля</p>
      {formFields[type].fields.map(({ label, required, name, type }) => (
        <label key={label} htmlFor={`field-${name}`}>
          <p className="formLabel">
            {label}
            {required && <span className="required">*</span>}
          </p>
          {type === "textarea" ? (
            <textarea
              onChange={({ target: { value, name } }) => {
                setFormState({ ...formState, [name]: value });
              }}
              required={required}
              name={name}
              id={`field-${name}`}
              data-testid={`field-${name}`}
              value={formState[name] || ""}
            />
          ) : (
            <input
              onChange={({ target: { value, name } }) => {
                setFormState({ ...formState, [name]: value });
              }}
              required={required}
              type={type || "text"}
              name={name}
              id={`field-${name}`}
              data-testid={`field-${name}`}
              value={formState[name] || ""}
            />
          )}
        </label>
      ))}
      <input type="submit" value="Отправить" data-testid="submit" />
    </form>
  );
};

export default Form;

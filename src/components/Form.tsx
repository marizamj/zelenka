/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import formFields from "../lib/formFields";
import { breakpoints } from "../lib/misc";
import { FormType, FormData, FormFull } from "../types";

interface Props {
  type: FormType;
  handleSubmit: (formState: FormData) => void;
}

const Form = ({ type, handleSubmit }: Props) => {
  const [formState, setFormState] = useState<FormFull>({} as FormFull);

  return (
    <form
      css={formStyle}
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(formState);
      }}
      data-testid={`form-${type}`}
    >
      <div css={formDescriptionStyle}>{formFields[type].description}</div>
      <p css={requiredStyle}>* - обязательные поля</p>
      {formFields[type].fields.map(({ label, required, name, type }) => (
        <label key={label} htmlFor={`field-${name}`}>
          <p css={formLabelStyle}>
            {label}
            {required && <span css={requiredStyle}>*</span>}
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

const formStyle = css`
  font-size: 1.5em;
  width: 50%;
  margin-left: 25%;
  text-align: center;
  input,
  textarea {
    width: calc(100% - 20px);
    padding: 10px;
    outline: none;
    border: 1px solid lightgrey;
    border-radius: 3px;
    font-size: 0.8em;
  }
  textarea {
    height: 4em;
    resize: none;
  }
  input:focus,
  textarea:focus {
    border: 1px solid grey;
  }
  input[type="submit"] {
    cursor: pointer;
    color: dimgrey;
    font-size: 1em;
    width: auto;
    border: 1px solid lightgrey;
    border-radius: 3px;
    text-align: center;
    margin-top: 1em;
  }
  input[type="submit"]:hover {
    background: #f5f5f5;
  }
  input:disabled {
    background: lightgrey;
    cursor: default;
  }
  ${breakpoints.maxWidth1023} {
    width: 80%;
    margin: 0;
    margin-left: 10%;
    font-size: 1.3em;
  }
`;

const requiredStyle = css`
  font-size: 0.8em;
  color: #c92121;
  text-align: end;
  margin-left: 0.1em;
`;

const formDescriptionStyle = css`
  text-align: center;
`;

const formLabelStyle = css`
  color: dimgrey;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-size: 0.8em;
  text-align: start;
`;

export default Form;

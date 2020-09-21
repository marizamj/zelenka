/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, FormEvent, useRef } from "react";
import formFields from "../lib/formFields";
import { breakpoints } from "../lib/misc";
import { FormType, FormData, FormFull } from "../types";

interface Props {
  type: FormType;
  handleSubmit: (formState: FormData) => void;
}

const Form = ({ type, handleSubmit }: Props) => {
  const [formState, setFormState] = useState<FormFull>({} as FormFull);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const errorMessage = useRef<HTMLParagraphElement>(null);

  const preventDefaultInvalidField = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => e.preventDefault();

  const findFirstInvalidField = () =>
    Array.from<HTMLInputElement | HTMLTextAreaElement>(
      document.querySelectorAll("[id^=field][required]")
    ).find(el => !el.value);

  return (
    <form
      css={formStyle}
      onInvalid={e => {
        setSubmitAttempted(true);
        window.scrollTo({ top: errorMessage.current?.offsetTop });
        findFirstInvalidField()?.focus();
      }}
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(formState);
      }}
      data-testid={`form-${type}`}
    >
      <div css={formDescriptionStyle}>{formFields[type].description}</div>
      <p css={requiredStyle} ref={errorMessage}>
        * - обязательные поля
      </p>
      {submitAttempted && (
        <p css={fillRequiredFieldsStyle}>
          Пожалуйста, заполните все обязательные поля.
        </p>
      )}
      {formFields[type].fields.map(({ label, required, name, type }) => (
        <label
          css={[
            formLabelStyle,
            submitAttempted &&
              required &&
              !formState[name] &&
              formLabelErrorStyle
          ]}
          key={label}
          htmlFor={`field-${name}`}
        >
          <p>
            {label}
            {required && <span css={requiredStyle}>*</span>}
          </p>
          {type === "textarea" ? (
            <textarea
              onChange={({ target: { value, name } }) => {
                setFormState({ ...formState, [name]: value });
              }}
              onInvalid={preventDefaultInvalidField}
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
              onInvalid={preventDefaultInvalidField}
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

const fillRequiredFieldsStyle = css`
  text-align: start;
  font-size: 0.8em;
  color: #c92121;
`;

const formDescriptionStyle = css`
  text-align: center;
`;

const formLabelStyle = css`
  p {
    color: dimgrey;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    font-size: 0.8em;
    text-align: start;
  }
`;

const formLabelErrorStyle = css`
  p {
    color: #c92121;
  }
  *:focus {
    outline: none;
    box-shadow: 0 0 0 1px white, 0 0 0 4px #c92121;
    border-radius: 2px;
    transition: box-shadow 0.2s ease;
  }
`;

export default Form;

import React, { Component } from "react";
import "../css/Form.css";

class Form extends Component {
  commonFields = [
    { label: "Как вас зовут?", name: "name", required: true },
    {
      label: "Контактный e-mail",
      type: "email",
      name: "email",
      required: true
    },
    { label: "Телефон", type: "tel", name: "phone", required: true }
  ];

  partners = {
    description:
      "Если вы врач, представитель клиники или любой другой компании, связанной с медициной, мы можем сделать очередной выпуск вместе. Заполните анкету, и мы очень скоро свяжемся с вами.",
    fields: [
      { label: "Где вы работаете? Не забудьте адрес сайта.", required: true },
      {
        label: "О чем вы хотели бы рассказать в Зелёнке?",
        type: "textarea",
        required: true
      },
      { label: "Сколько денег вы готовы потратить на спонсорский выпуск?" },
      { label: "Когда хотите начать?" }
    ]
  };

  friends = {
    description:
      "Хотите что-то сказать? Предложить идею или помочь с экспертизой? Стать героем выпуска, поделившись своей историей столкновения с хирургами? Мы внимательно прочтем ваше письмо и ответим, если заинтересуемся. ",
    fields: [
      { label: "Ваша идея/предложение", type: "textarea", required: true },
      { label: "Чем вам нравится Зелёнка?", type: "textarea" },
      { label: "Что нам необходимо улучшить в своей работе?", type: "textarea" }
    ]
  };

  render() {
    const { type } = this.props;

    return !type ? null : (
      <div className="form">
        <form>
          <div className="formDescription">{this[type].description}</div>
          <p className="required">* - обязательные поля</p>
          {[...this.commonFields, ...this[type].fields].map(field => (
            <label key={field.label}>
              <p className="formLabel">
                {field.label}
                {field.required && <span className="required">*</span>}
              </p>
              {field.type === "textarea" ? (
                <textarea required={field.required} name={field.name} />
              ) : (
                <input
                  required={field.required}
                  type={field.type || "text"}
                  name={field.name}
                />
              )}
            </label>
          ))}
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}

export default Form;

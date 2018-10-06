import React, { Component } from "react";
import "../css/Form.css";

class Form extends Component {
  commonFields = ["Как вас зовут?", "Контактный e-mail", "Телефон"];

  partners = {
    description:
      "Если вы врач, представитель клиники или любой другой компании, связанной с медициной, мы можем сделать очередной выпуск вместе. Заполните анкету, и мы очень скоро свяжемся с вами.",
    fields: [
      "Где вы работаете? Не забудьте адрес сайта.",
      "О чем вы хотели бы рассказать в Зелёнке?",
      "Сколько денег вы готовы потратить на спонсорский выпуск?",
      "Когда хотите начать?"
    ]
  };

  friends = {
    description:
      "Хотите что-то сказать? Предложить идею или помочь с экспертизой? Стать героем выпуска, поделившись своей историей столкновения с хирургами? Мы внимательно прочтем ваше письмо и ответим, если заинтересуемся. ",
    fields: [
      "Ваша идея/предложение",
      "Чем вам нравится Зелёнка?",
      "Что нам необходимо улучшить в своей работе?"
    ]
  };

  render() {
    const { type } = this.props;

    return !type ? null : (
      <div className="form">
        <form>
          <div className="formDescription">{this[type].description}</div>
          {[...this.commonFields, ...this[type].fields].map(field => (
            <label>
              <p>{field}</p>
              <input type="text" />
            </label>
          ))}
          <button className="formSubmit">Отправить</button>
        </form>
      </div>
    );
  }
}

export default Form;

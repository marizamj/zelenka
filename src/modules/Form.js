import React, { Component } from "react";
import "../css/Form.css";

import { HOME_URL, HOME_EMAIL } from "../lib/globals";

class Form extends Component {
  setForm = type =>
    type === "partners"
      ? {
          __html: `<form action="https://formspree.io/${HOME_EMAIL}" method="POST">
      <div class="formDescription">Если вы врач, представитель клиники или любой другой компании, связанной с медициной, мы можем сделать очередной выпуск вместе. Заполните анкету, и мы очень скоро свяжемся с вами.</div>
      <p class="required">* - обязательные поля</p>
      <label>
        <p class="formLabel">Как вас зовут?<span class="required"> *</span></p>
        <input type="text" name="name" required />
      </label>
      <label>
        <p class="formLabel">Контактный e-mail<span class="required"> *</span></p>
        <input type="email" name="email" required />
      </label>
      <label>
        <p class="formLabel">Телефон<span class="required"> *</span></p>
        <input type="tel" name="phone" required />
      </label>
      <label>
        <p class="formLabel">Где вы работаете? Не забудьте адрес сайта.<span class="required"> *</span></p>
        <input type="text" name="workplace" required />
      </label>
      <label>
        <p class="formLabel">О чем вы хотели бы рассказать в Зелёнке?<span class="required"> *</span></p>
        <textarea name="message" required></textarea>
      </label>
      <label>
        <p class="formLabel">Сколько денег вы готовы потратить на спонсорский выпуск?</p>
        <input type="text" name="money" />
      </label>
      <label>
        <p class="formLabel">Когда хотите начать?</p>
        <input type="text" name="startDate" />
      </label>
      <input type="hidden" name="_next" value="${HOME_URL}/form-success" />
      <input type="hidden" name="_subject" value="Новое сообщение с сайта zelenka.online" />
      <input type="text" name="_gotcha" style="display:none" />
      <input type="submit" value="Отправить" />
    </form>`
        }
      : {
          __html: `<form action="https://formspree.io/${HOME_EMAIL}" method="POST">
      <div class="formDescription">Хотите что-то сказать? Предложить идею или помочь с экспертизой? Стать героем выпуска, поделившись своей историей столкновения с хирургами? Мы внимательно прочтем ваше письмо и ответим, если заинтересуемся.</div>
      <p class="required">* - обязательные поля</p>
      <label>
        <p class="formLabel">Как вас зовут?<span class="required"> *</span></p>
        <input type="text" name="name" required />
      </label>
      <label>
        <p class="formLabel">Контактный e-mail<span class="required"> *</span></p>
        <input type="email" name="email" required />
      </label>
      <label>
        <p class="formLabel">Телефон<span class="required"> *</span></p>
        <input type="tel" name="phone" required />
      </label>
      <label>
        <p class="formLabel">Ваша идея/предложение<span class="required"> *</span></p>
        <textarea name="message" required></textarea>
      </label>
      <label>
        <p class="formLabel">Чем вам нравится Зелёнка?</p>
        <textarea name="compliments"></textarea>
      </label>
      <label>
        <p class="formLabel">Что нам необходимо улучшить в своей работе?</p>
        <textarea name="recommendations"></textarea>
      </label>
      <input type="hidden" name="_next" value="${HOME_URL}/form-success" />
      <input type="hidden" name="_subject" value="Новое сообщение с сайта zelenka.online" />
      <input type="text" name="_gotcha" style="display:none" />
      <input type="submit" value="Отправить" />
    </form>`
        };

  render() {
    const { location } = this.props;

    const type = location.pathname.slice(6);

    return type === "success" ? (
      <div className="thankYouMsg">
        Спасибо! Мы ответим вам в ближайшее время. Соня и Юля
      </div>
    ) : (
      <div className="form" dangerouslySetInnerHTML={this.setForm(type)} />
    );
  }
}

export default Form;

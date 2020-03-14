import { FieldData } from "../types";

const commonFields: FieldData[] = [
  { label: "Как вас зовут?", name: "name", required: true },
  {
    label: "Контактный e-mail",
    type: "email",
    name: "email",
    required: true
  },
  { label: "Телефон", type: "tel", name: "phone", required: true }
];

const partnersFields: FieldData[] = [
  {
    label: "Где вы работаете? Не забудьте адрес сайта.",
    name: "workplace",
    required: true
  },
  {
    label: "О чем вы хотели бы рассказать в Зелёнке?",
    type: "textarea",
    name: "message",
    required: true
  },
  {
    label: "Сколько денег вы готовы потратить на спонсорский выпуск?",
    name: "money"
  },
  { label: "Когда хотите начать?", name: "startDate" }
];

const allFields: FieldData[] = [
  {
    label: "Ваша идея/предложение",
    type: "textarea",
    required: true,
    name: "messageall"
  },
  {
    label: "Чем вам нравится Зелёнка?",
    type: "textarea",
    name: "compliments"
  },
  {
    label: "Что нам необходимо улучшить в своей работе?",
    type: "textarea",
    name: "recommendations"
  }
];

export default {
  partners: {
    description:
      "Если вы врач, представитель клиники или любой другой компании, связанной с медициной, мы можем сделать очередной выпуск вместе. Заполните анкету, и мы очень скоро свяжемся с вами.",
    fields: [...commonFields, ...partnersFields]
  },
  all: {
    description:
      "Хотите что-то сказать? Предложить идею или помочь с экспертизой? Стать героем выпуска, поделившись своей историей столкновения с хирургами? Мы внимательно прочтем ваше письмо и ответим, если заинтересуемся.",
    fields: [...commonFields, ...allFields]
  }
};

// export const formFields = {
//   common: [
//     { label: "Как вас зовут?", name: "name", required: true },
//     {
//       label: "Контактный e-mail",
//       type: "email",
//       name: "email",
//       required: true
//     },
//     { label: "Телефон", type: "tel", name: "phone", required: true }
//   ],

//   partners: {
//     description:
//       "Если вы врач, представитель клиники или любой другой компании, связанной с медициной, мы можем сделать очередной выпуск вместе. Заполните анкету, и мы очень скоро свяжемся с вами.",
//     fields: [
//       {
//         label: "Где вы работаете? Не забудьте адрес сайта.",
//         name: "workplace",
//         required: true
//       },
//       {
//         label: "О чем вы хотели бы рассказать в Зелёнке?",
//         type: "textarea",
//         name: "message",
//         required: true
//       },
//       {
//         label: "Сколько денег вы готовы потратить на спонсорский выпуск?",
//         name: "money"
//       },
//       { label: "Когда хотите начать?", name: "startDate" }
//     ]
//   },

//   all: {
//     description:
//       "Хотите что-то сказать? Предложить идею или помочь с экспертизой? Стать героем выпуска, поделившись своей историей столкновения с хирургами? Мы внимательно прочтем ваше письмо и ответим, если заинтересуемся.",
//     fields: [
//       {
//         label: "Ваша идея/предложение",
//         type: "textarea",
//         required: true,
//         name: "messageall"
//       },
//       {
//         label: "Чем вам нравится Зелёнка?",
//         type: "textarea",
//         name: "compliments"
//       },
//       {
//         label: "Что нам необходимо улучшить в своей работе?",
//         type: "textarea",
//         name: "recommendations"
//       }
//     ]
//   }
// };

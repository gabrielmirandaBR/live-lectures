new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    radio: {
      required: true,
    },
    tshirtModel: {
      required: true,
    },
    abstract: {
      required: true,
      maxLength: 1000
    },
    checkbox: {
      required: true,
    },
  },
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    radio: {
      required: 'A escolha de um item é obrigatória.',
    },
    text: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    tshirtModel: {
      required: 'Este campo é obrigatório.',
    },
    abstract: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.'
    },
    checkbox: {
      required: 'Este campo é obrigatório.',
    }
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  }
});

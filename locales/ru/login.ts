export const login = {
  email: {
    label: 'Адрес электронной почты',
    placeholder: 'Введите адрес электронной почты',
    required: {
      message: 'Обязательно поле',
    },
    pattern: {
      message: 'Некоорентный email',
    },
  },
  password: {
    label: 'Пароль',
    placeholder: 'Введите пароль',
    required: {
      message: 'Обязательно поле',
    },
    length: {
      message: 'Минимальная длинна 6 символов',
    },
  },
  button: {
    text: 'Войти',
  },
  register: {
    text: 'Зарегистрироваться',
  },
}

export const login = {
  form: {
    email: {
      label: 'Адрес электронной почты',
      placeholder: 'Введите адрес электронной почты',
    },
    password: {
      label: 'Пароль',
      placeholder: 'Введите пароль',
    },
    button: {
      text: 'Войти',
      loading: 'Выполняется вход...',
    },
    register: {
      text: 'Зарегистрироваться',
    },
    errors: {
      email: {
        required: 'Обязательно поле',
        pattern: 'Некоорентный email',
      },
      password: {
        required: 'Обязательно поле',
        length: 'Минимальная длинна 6 символов',
      },
      unhandled: 'Необработанная ошибка',
    },
  },
}

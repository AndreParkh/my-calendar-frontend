export const register = {
  form: {
    firstName: {
      label: 'Имя',
      placeholder: 'Введите имя',
    },
    lastName: {
      label: 'Фамилия',
      placeholder: 'Введите фамилию',
    },
    email: {
      label: 'Адрес электронной почты',
      placeholder: 'Введите адрес электронной почты',
    },
    password: {
      label: 'Пароль',
      placeholder: 'Придумайте пароль',
    },
    button: {
      text: 'Зарегистрироваться',
      loading: 'Выполняется регистрация...',
    },
    register: {
      text: 'Уже есть аккаунт? Войти',
    },
    errors: {
      firstName: {
        required: 'Обязательно поле',
      },
      lastName: {
        required: 'Обязательно поле',
      },
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

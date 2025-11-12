import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { header, login, register, toolbar, dashboard } from '@locales/ru'

i18next.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ru: {
      header,
      login,
      register,
      toolbar,
      dashboard,
    },
  },
})

export { i18next }

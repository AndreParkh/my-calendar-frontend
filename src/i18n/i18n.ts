import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { header, login } from '@locales/ru'

i18next.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ru: {
      header,
      login,
    },
  },
})

export { i18next }

import axios from 'axios'
import { ILogin, IRegister, LoginResponse } from '@/store/types.ts'

const backend = import.meta.env.VITE_API_DOMAIN

export const API = {
  auth: {
    login: (credentials: ILogin) =>
      axios.post<LoginResponse>(`${backend}/auth/login`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    register: (data: IRegister) =>
      axios.post<LoginResponse>(`${backend}/auth/register`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    redirectYandexOAuthUrl: () => {
      return `${backend}/auth/yandex`
    },
  },
}

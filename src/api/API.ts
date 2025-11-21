import axios from 'axios'
import { IEventByDataBetween, ILogin, IRegister } from '@/store/types.ts'
import apiClient from '@/api/apiClient.ts'
import { ILoginResponse } from '@/interfaces/LoginResponse.interface.ts'

const backend = import.meta.env.VITE_API_DOMAIN

export const API = {
  auth: {
    login: (credentials: ILogin) =>
      axios.post<ILoginResponse>(`${backend}/auth/login`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    register: (data: IRegister) =>
      axios.post<ILoginResponse>(`${backend}/auth/register`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    redirectYandexOAuthUrl: () => {
      return `${backend}/auth/yandex`
    },
  },
  user: {
    getUserById: (id: number) =>
      apiClient.get(`${backend}/private/users/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    getAuthorizedUser: () =>
      apiClient.get(`${backend}/private/users/me`, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
  },
  event: {
    getByDateBetween: (dates: IEventByDataBetween) =>
      apiClient.get(`${backend}/private/events/date-between`, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          start: dates.start.toISOString().slice(0, -1),
          end: dates.end.toISOString().slice(0, -1),
        },
      }),
  },
}

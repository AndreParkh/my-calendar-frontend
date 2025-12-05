import axios from 'axios'
import { IEventByDataBetween, ILogin, IRegister } from '@/store/types.ts'
import apiClient from '@/api/apiClient.ts'
import { ILoginResponse } from '@/interfaces/LoginResponse.interface.ts'
import { sliceDateZoneIndex } from '@/functions/sliceDateZoneIndex.ts'

const backendOrigin = import.meta.env.VITE_API_DOMAIN
const authApi = `${backendOrigin}/api/auth`
const userApi = `${backendOrigin}/api/private/users`
const eventApi = `${backendOrigin}/api/private/events`

export const API = {
  auth: {
    login: (credentials: ILogin) =>
      axios.post<ILoginResponse>(`${authApi}/login`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    register: (data: IRegister) =>
      axios.post<ILoginResponse>(`${authApi}/register`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    redirectYandexOAuthUrl: () => {
      return `${authApi}/yandex`
    },
  },
  user: {
    getUserById: (id: number) =>
      apiClient.get(`${userApi}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    getAuthorizedUser: () =>
      apiClient.get(`${userApi}/me`, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
  },
  event: {
    getByDateBetween: (dates: IEventByDataBetween) =>
      apiClient.get(`${eventApi}/date-between`, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          start: sliceDateZoneIndex(dates.start.toISOString()),
          end: sliceDateZoneIndex(dates.end.toISOString()),
        },
      }),
  },
}

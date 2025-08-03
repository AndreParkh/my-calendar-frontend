import axios from 'axios'
import { ILogin, LoginResponse } from '@/store/types.ts'

const backend = import.meta.env.VITE_API_DOMAIN

export const API = {
  auth: {
    login: (credentials: ILogin) =>
      axios.post<LoginResponse>(`${backend}/auth/login`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
  },
}

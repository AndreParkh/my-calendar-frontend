import axios from 'axios'
import Cookies from 'js-cookie'
import { ILogin, LoginResponse } from '@/store/types.ts'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH_TOKEN } from '@/constants/constants.ts'
import { redirect } from 'react-router'

const api = import.meta.env.VITE_API_DOMAIN

export const login = createAsyncThunk<string, ILogin, { rejectValue: string }>(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post<LoginResponse>(
        `${api}/auth/login`,
        credentials,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const token = response.data.token
      Cookies.set(AUTH_TOKEN, token)
      redirect('app/user')
      return token
    } catch {
      return thunkAPI.rejectWithValue('Неуспешная авторизация')
    }
  },
)

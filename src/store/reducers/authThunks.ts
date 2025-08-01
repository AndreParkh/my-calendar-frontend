import axios from 'axios'
import Cookies from 'js-cookie'
import { ILoginThunk, LoginResponse } from '@/store/types.ts'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH_TOKEN } from '@/constants/constants.ts'

const api = import.meta.env.VITE_API_DOMAIN

export const login = createAsyncThunk<
  string,
  ILoginThunk,
  { rejectValue: string }
>('auth/login', async ({ credentials, navigate }, thunkAPI) => {
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
    console.log('loginThunk. token: ', token)
    Cookies.set(AUTH_TOKEN, token)
    navigate(-1)
    return token
  } catch {
    return thunkAPI.rejectWithValue('Неуспешная авторизация')
  }
})

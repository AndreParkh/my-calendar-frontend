import Cookies from 'js-cookie'
import { ILogin } from '@/store/types.ts'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH_TOKEN } from '@/constants/constants.ts'
import { redirect } from 'react-router'
import { API } from '@/api/API.ts'

export const login = createAsyncThunk<Response, ILogin, { rejectValue: string }>(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await API.auth.login(credentials)
      const token = response.data.token
      Cookies.set(AUTH_TOKEN, token)
      return redirect('/app/user')
    } catch {
      return thunkAPI.rejectWithValue('Неуспешная авторизация')
    }
  },
)

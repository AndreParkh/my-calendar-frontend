import Cookies from 'js-cookie'
import { IRegister } from '@/store/types.ts'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH_TOKEN } from '@/constants/constants.ts'
import { redirect } from 'react-router'
import { API } from '@/api/API.ts'
import { routesPaths } from '@/routes.tsx'

export const registerThunk = createAsyncThunk<
  string,
  IRegister,
  { rejectValue: string }
>('auth/login', async (registerData, thunkAPI) => {
  try {
    const response = await API.auth.register(registerData)
    const token = response.data.token
    Cookies.set(AUTH_TOKEN, token)
    redirect(routesPaths.app.dashboard)
    return token
  } catch {
    return thunkAPI.rejectWithValue('Неуспешная регистрация')
  }
})

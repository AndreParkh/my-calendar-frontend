import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { LoginResponse } from '@/store/types.ts'
import { ILogin } from '@/components/Login/Login.interface.ts'

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
      return response.data.token
    } catch {
      return thunkAPI.rejectWithValue('Неуспешная авторизация')
    }
  },
)

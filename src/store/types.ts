import { NavigateFunction } from 'react-router-dom'

export interface AuthState {
  loading: boolean
  error: string
}

export interface LoginResponse {
  token: string
}

export interface ILogin {
  email: string
  password: string
}

export interface ILoginThunk {
  credentials: ILogin
  navigate: NavigateFunction
}

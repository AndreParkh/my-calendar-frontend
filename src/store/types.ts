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

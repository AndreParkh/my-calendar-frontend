export interface AuthState {
  token: string
  loading: boolean
  error: string
}

export interface LoginResponse {
  token: string
}

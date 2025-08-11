export interface AuthState {
  token: string | null
  loading: boolean
  error: string
}

export interface SliderState {
  sliderNumber: number
  slidesCount: number
}

export interface LoginResponse {
  token: string
}

export interface ILogin {
  email: string
  password: string
}

export interface IRegister {
  firstName: string
  lastName: string
  email: string
  password: string
}

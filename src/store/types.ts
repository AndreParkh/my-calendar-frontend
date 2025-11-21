import { IEventResponse } from '@/interfaces/EventResponse.interface.ts'
import { IUserResponse } from '@/interfaces/UserResponse.interface.ts'

export interface IAuthState {
  token: string | null
  loading: boolean
  error: string
}

export interface ISliderState {
  sliderNumber: number
  slidesCount: number
}

export interface CalendarState {
  selectedDate: string | number
  shownWeek: string[]
}

export interface IEventState {
  events: IEventResponse[]
  loading: boolean
  error: string
}

export interface IUserState {
  authorizedUser: IUserResponse | null
  loading: boolean
  error: string
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
  confirmPassword: string
}

export interface IEventByDataBetween {
  start: Date
  end: Date
}

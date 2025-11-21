export interface IEventResponse {
  id: number
  title: string
  description: string
  startTime: string
  endTime: string
  createdBy: IShortUserInfo
  isRepeating: boolean
  repeatRule: string
  createdAt: string
  participants: IShortUserInfo[]
}

export interface IShortUserInfo {
  id: number
  firstName: string
  lastName: string
  avatarUrl: string
}

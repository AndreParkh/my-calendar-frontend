import type { IUserResponse } from '@/interfaces/UserResponse.interface.ts'

export const fetchUser = async (): Promise<IUserResponse> => {
  const api = import.meta.env.VITE_API_DOMAIN
  const response = await fetch(`${api}/public/user`)
  if (!response.ok) throw new Error('Ошибка получения пользователя')
  return response.json()
}

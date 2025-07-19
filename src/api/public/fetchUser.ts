import type { UserResponseInterface } from '../../interfaces/UserResponse.interface.ts'

export async function fetchUser(): Promise<UserResponseInterface> {
  const response = await fetch('http://localhost/api/public/user')
  if (!response.ok) throw new Error('Ошибка получения пользователя')
  return response.json()
}

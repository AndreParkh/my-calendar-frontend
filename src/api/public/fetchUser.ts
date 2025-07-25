import type {UserResponseInterface} from "../../interfaces/UserResponse.interface.ts";

export async function fetchUser(): Promise<UserResponseInterface> {

    const api = import.meta.env.VITE_API_DOMAIN
    const response = await fetch(`${api}/public/user`)
    if (!response.ok) throw new Error('Ошибка получения пользователя')
    return response.json()
}
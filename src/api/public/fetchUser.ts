import type {UserResponseInterface} from "../../interfaces/UserResponse.interface.ts";

export async function fetchUser(): Promise<UserResponseInterface> {
    const response = (await fetch('http://localhost:5002/api/public/user', {
        method: "GET",
    }))
    if (!response.ok) throw new Error('Ошибка получения пользователя')
    return response.json()
}
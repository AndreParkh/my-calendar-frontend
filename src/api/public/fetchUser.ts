import type {UserResponseInterface} from "../../interfaces/UserResponse.interface.ts";

export async function fetchUser(): Promise<UserResponseInterface> {
    const user = (await fetch('http://localhost:5002/api/public/user'))
    if (!user.ok) throw Error('Ошибка получения пользователя')
    return user.json()
}
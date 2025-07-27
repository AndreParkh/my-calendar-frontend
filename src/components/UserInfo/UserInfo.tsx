import './UserInfo.css'
import { use } from 'react'
import { UserResponseInterface } from '@/interfaces/UserResponse.interface.ts'

export const UserInfo = ({
  userPromise,
}: {
  userPromise: Promise<UserResponseInterface>
}) => {
  const user = use(userPromise)

  return (
    <ul className="user">
      <li>ID: {user.id}</li>
      <li>Email: {user.email}</li>
      <li>Имя: {user.firstName}</li>
      <li>Фамилия: {user.lastName}</li>
      <li>Роль: {user.role}</li>
      <li>
        Рабочее время: с {user.workStartTime.slice(0, 5)} до{' '}
        {user.workEndTime.slice(0, 5)}
      </li>
      <li>
        Отпуск: c {user.vacationStart} по {user.vacationEnd}{' '}
      </li>
      <li>Создан: {new Date(user.createdAt).toLocaleString()}</li>
      <li>Обновлен: {new Date(user.updatedAt).toLocaleString()}</li>
    </ul>
  )
}

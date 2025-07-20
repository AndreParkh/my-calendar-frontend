import './UserInfo.css'
import { use } from 'react'
import { UserResponseInterface } from '@/interfaces/UserResponse.interface.ts'

const UserInfo = ({
  userPromise,
}: {
  userPromise: Promise<UserResponseInterface>
}) => {
  const user = use(userPromise)

  return (
    <div className="user">
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Имя: {user.firstName}</p>
      <p>Фамилия: {user.lastName}</p>
      <p>Роль: {user.role}</p>
      <p>
        Рабочее время: с {user.workStartTime.slice(0, 5)} до{' '}
        {user.workEndTime.slice(0, 5)}
      </p>
      <p>
        Отпуск: c {user.vacationStart} по {user.vacationEnd}{' '}
      </p>
      <p>Создан: {new Date(user.createdAt).toLocaleString()}</p>
      <p>Обновлен: {new Date(user.updatedAt).toLocaleString()}</p>
    </div>
  )
}

export { UserInfo }

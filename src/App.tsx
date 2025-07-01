import './App.css'
import {useEffect, useState} from "react";
import type {UserResponseInterface} from "./interfaces/UserResponse.interface.ts";

function App() {
    const [user,setUser] = useState<UserResponseInterface>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<String | null>(null)

    useEffect(() => {
        fetch('http://localhost:5002/api/public/user')
            .then( response => {
                if(!response.ok) {
                    throw new Error(`Ошибка сети: ${response.status}`)
                }
                return response.json()
            })
            .then(data => {
                setUser(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <div>Загрузка...</div>
    if (error) return <div>Ошибка: {error}</div>

  return (
    <div className='user'>
        <h1>Данные пользователя</h1>
        <div>
            <p>ID: {user?.id}</p>
            <p>Email: {user?.email}</p>
            <p>Имя: {user?.firstName}</p>
            <p>Фамилия: {user?.lastName}</p>
            <p>Роль: {user?.role}</p>
            <p>Рабочее время: с {user?.workStartTime.slice(0,5)} до {user?.workEndTime.slice(0,5)}</p>
            <p>Отпуск: c {user?.vacationStart} по {user?.vacationEnd} </p>
            <p>Создан: {new Date(user!.createdAt).toLocaleString()}</p>
            <p>Обновлен: {new Date( user!.updatedAt).toLocaleString()}</p>
        </div>
    </div>
  )
}

export default App

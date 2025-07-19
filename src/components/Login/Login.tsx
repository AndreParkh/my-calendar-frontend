'use client'
import styles from './Login.module.css'
import { NavLink } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import { useNavigate } from "react-router";
import { ILogin } from "./Login.interface.ts";
import login from "../../api/auth/login.ts";
import { useState } from "react";


export default function Login() {

    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm<ILogin>()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const onSubmit: SubmitHandler<ILogin> = async (data) =>  {
        setError('')
        try {
            const response = await login(data)

            if (response.ok) {
                const token = await response.json()
                localStorage.setItem('authToken', token)
                navigate('/')

            } else if (response.status === 400) {
                throw new Error('Неверные учетные данные');
            } else {
                throw new Error(`Ошибка авторизации: ${response.status}`);
            }
        } catch (error) {
            setError('Ошибка авторизации')
            console.error('Ошибка при выполнении запроса:', error);
            throw error;
        }
    }

    const emailPattern = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')

    if (error) {
        setTimeout(() => setError(''), 3000)
    }

    return(
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={ handleSubmit(async (data) => await onSubmit(data))}>
                    <label className={styles.label}>
                        Адрес электронной почты
                        <Input
                            className={styles.input}
                            type='text'
                            placeholder='Введите адрес электронной почты'
                            error={errors.email}
                            {...register('email', {required: { value: true, message: '*обязательное поле' }, pattern: emailPattern})}
                        />
                    </label>
                    <label className={styles.label}>
                        Пароль
                        <Input
                            className={styles.input}
                            type='password'
                            placeholder='Введите пароль'
                            error={errors.password}
                            {...register('password', {required: {value: true, message: '*обязательное поле' }, minLength: 6})}
                        />
                    </label>
                <Button onSubmit={ () => clearErrors() }>Войти</Button>
                { error && <p className={styles.error} >{error}</p> }
            </form>
            <NavLink to='/register' className={styles.ref} >
                Зарегистрироваться
            </NavLink>
        </div>
    )
}
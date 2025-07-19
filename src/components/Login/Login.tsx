'use client'
import styles from './Login.module.css'
import { NavLink } from "react-router";
import {SubmitHandler, useForm} from "react-hook-form";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";

interface ILogin {
    email: string,
    password: string
}

export default function Login() {

    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm<ILogin>()
    const onSubmit: SubmitHandler<ILogin> = (data) => {
        console.log(data)
        fetch('http://localhost:5002/api/')
    }
    const emailPattern = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')

    return(
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
            </form>
            <a href='#' className={styles.ref}>Забыли пароль?</a>
            <NavLink to='/register' className={styles.ref} >
                Зарегистрироваться
            </NavLink>
        </div>
    )
}
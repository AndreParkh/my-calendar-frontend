'use client'
import styles from './Login.module.css'
import { NavLink, useNavigate } from 'react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { ILogin } from './Login.interface.ts'
import login from '@/api/auth/login.ts'
import { Button, ErrorSpan, Input } from '@/components'
import { useTranslation } from 'react-i18next'

const emailPattern = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ILogin>()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { t } = useTranslation('login')

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    setError('')

    try {
      const response = await login(data)

      if (response.ok) {
        const token = await response.json()
        localStorage.setItem('authToken', token)
        navigate('/')
      } else if (response.status === 400) {
        throw new Error('Неверные учетные данные')
      } else {
        throw new Error(`Ошибка авторизации: ${response.status}`)
      }
    } catch (error) {
      setError('Ошибка авторизации')
      console.error('Ошибка при выполнении запроса:', error)
      throw error
    }
  }

  if (error) {
    setTimeout(() => setError(''), 3000)
  }

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(async (data) => await onSubmit(data))}
      >
        <label className={styles.label}>
          {t('email.label')}
          <Input
            className={styles.input}
            type="text"
            placeholder={t('email.placeholder')}
            error={errors.email}
            {...register('email', {
              required: { value: true, message: '*обязательное поле' },
              pattern: emailPattern,
            })}
          />
        </label>
        <label className={styles.label}>
          {t('password.label')}
          <Input
            className={styles.input}
            type="password"
            placeholder={t('password.placeholder')}
            error={errors.password}
            {...register('password', {
              required: { value: true, message: '*обязательное поле' },
              minLength: 6,
            })}
          />
        </label>
        <Button onClick={() => clearErrors()}>{t('button')}</Button>
        <ErrorSpan message={error} />
      </form>
      <NavLink to="../register" className={styles.ref}>
        {t('register')}
      </NavLink>
    </div>
  )
}

export { Login }

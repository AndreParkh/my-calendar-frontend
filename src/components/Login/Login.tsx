'use client'
import styles from './Login.module.css'
import { NavLink, useNavigate } from 'react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { ILogin } from './Login.interface.ts'
import { Button, ErrorSpan, Input } from '@/components'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { login } from '@/store/reducers/actionCreators.ts'
import { clearError } from '@/store/reducers/authSlice.ts'

const emailPattern = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ILogin>()
  const navigate = useNavigate()
  const { t } = useTranslation('login')
  const dispatch = useAppDispatch()
  const { token, error } = useAppSelector((state) => state.authReducer)

  useEffect(() => {
    if (token) {
      navigate('/') // или куда нужно
    }
  }, [token, navigate])

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    clearErrors()
    dispatch(login(data))
  }

  if (error) {
    setTimeout(() => dispatch(clearError()), 3000)
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
        <Button>{t('button')}</Button>
        <ErrorSpan message={error} />
      </form>
      <NavLink to="../register" className={styles.ref}>
        {t('register')}
      </NavLink>
    </div>
  )
}

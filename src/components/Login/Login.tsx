'use client'
import styles from './Login.module.css'
import { NavLink, useNavigate, useLocation } from 'react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ILogin } from './Login.interface.ts'
import { Button, ErrorSpan, Input } from '@/components'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { login } from '@/store/reducers/actionCreators.ts'
import { clearAuthError } from '@/store/reducers/authSlice.ts'
import { selectAuthError, selectAuthToken } from '@/store/selectors.ts'
import { useEffect } from 'react'

const emailPattern = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ILogin>()
  const { t } = useTranslation('login')
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectAuthError)
  const navigate = useNavigate()
  const location = useLocation()
  const token = useAppSelector(selectAuthToken)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const returnTo = params.get('returnTo')
    if (returnTo) {
      navigate('.', {replace: true, state: {from: { pathname: returnTo }}})
    }
  }, [location.search, navigate])

  const from = location.state?.from?.pathname

  useEffect(() => {
    if (token) {
      navigate(from, {replace: true})
    }
  }, [token, navigate])

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    try {
      clearErrors()
      dispatch(login(data))
      // navigate(from, { replace: true })
    } catch (e) {

    }
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          {t('form.email.label')}
          <Input
            className={styles.input}
            type="text"
            placeholder={t('form.email.placeholder')}
            error={errors.email}
            {...register('email', {
              required: { value: true, message: t('form.email.required.message') },
              pattern: {
                value: emailPattern,
                message: t('form.email.pattern.message'),
              },
            })}
          />
        </label>
        <label className={styles.label}>
          {t('form.password.label')}
          <Input
            className={styles.input}
            type="password"
            placeholder={t('form.password.placeholder')}
            error={errors.password}
            {...register('password', {
              required: {
                value: true,
                message: t('form.password.required.message'),
              },
              minLength: { value: 6, message: t('form.password.length.message') },
            })}
          />
        </label>
        <Button>{t('form.button.text')}</Button>
        <ErrorSpan message={error} clearError={clearAuthError} />
      </form>
      <NavLink to="../register" className={styles.ref}>
        {t('form.register.text')}
      </NavLink>
    </div>
  )
}

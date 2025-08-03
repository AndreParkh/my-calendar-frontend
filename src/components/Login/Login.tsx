'use client'
import styles from './Login.module.css'
import { NavLink } from 'react-router'
import { useForm } from 'react-hook-form'
import { Button, ErrorSpan, Input } from '@/components'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { login } from '@/store/reducers/authThunks.ts'
import { clearAuthError } from '@/store/reducers/authSlice.ts'
import { selectAuthError, selectAuthLoading } from '@/store/selectors.ts'
import { ILogin } from '@/store/types.ts'

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
  const loading = useAppSelector(selectAuthLoading)
  const error = useAppSelector(selectAuthError)

  const onSubmit = (credentials: ILogin) => {
    try {
      clearErrors()
      dispatch(login(credentials))
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message)
      } else {
        console.error('Необработанная ошибка')
      }
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
              required: {
                value: true,
                message: t('form.email.required.message'),
              },
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
              minLength: {
                value: 6,
                message: t('form.password.length.message'),
              },
            })}
          />
        </label>
        <Button>
          {loading ? t('form.button.loading') : t('form.button.text')}
        </Button>
        <ErrorSpan message={error} clearError={clearAuthError} />
      </form>
      <NavLink to="../register" className={styles.ref}>
        {t('form.register.text')}
      </NavLink>
    </div>
  )
}

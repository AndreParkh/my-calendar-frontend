'use client'
import styles from './Login.module.css'
import { NavLink } from 'react-router'
import { useForm } from 'react-hook-form'
import { Button, ErrorSpan, Input } from '@/components'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { login } from '@/store/thunks/loginThunk.ts'
import { clearAuthError } from '@/store/reducers/authSlice.ts'
import { selectAuthError, selectAuthLoading } from '@/store/selectors.ts'
import { ILogin } from '@/store/types.ts'
import { EMAIL_PATTERN, MIN_PASSWORD_LENGTH } from '@/constants/constants.ts'
import { API } from '@/api/API.ts'

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
      // TODO: добавить ошибку через нотификации - https://github.com/AndreParkh/my-calendar-frontend/issues/15
      if (e instanceof Error) {
        console.error(e.message)
      } else {
        console.error(t('form.errors.unhandled'))
      }
    }
  }

  const onYandexClick = () => {
    window.location.href = API.auth.redirectYandexOAuthUrl()
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
                message: t('form.errors.email.required'),
              },
              pattern: {
                value: EMAIL_PATTERN,
                message: t('form.errors.email.pattern'),
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
                message: t('form.errors.password.required'),
              },
              minLength: {
                value: MIN_PASSWORD_LENGTH,
                message: t('form.errors.password.length'),
              },
            })}
          />
        </label>
        <Button>
          {loading ? t('form.button.loading') : t('form.button.text')}
        </Button>
        <ErrorSpan message={error} clearError={clearAuthError} />
      </form>
      <div>или</div>
      <Button className={styles.yandexButton} onClick={onYandexClick}>
        {t('form.yandex.text')}
      </Button>
      <NavLink to="../register" className={styles.ref}>
        {t('form.register.text')}
      </NavLink>
    </div>
  )
}

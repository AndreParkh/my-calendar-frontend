'use client'
import styles from './Register.module.css'
import { NavLink } from 'react-router'
import { useForm } from 'react-hook-form'
import { IRegister } from '@/store/types.ts'
import { useTranslation } from 'react-i18next'
import { Button, ErrorSpan, Input } from '@/components'
import { registerThunk } from '@/store/thunks/registerThunk.ts'
import { clearAuthError, setAuthError } from '@/store/reducers/authSlice.ts'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { selectAuthError, selectAuthLoading } from '@/store/selectors.ts'
import { EMAIL_PATTERN, MIN_PASSWORD_LENGTH } from '@/constants/constants.ts'

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<IRegister>()
  const { t } = useTranslation('register')
  const dispatch = useAppDispatch()
  const loading = useAppSelector(selectAuthLoading)
  const error = useAppSelector(selectAuthError)

  const onSubmit = (registerData: IRegister) => {
    try {
      clearErrors()
      if (registerData.password != registerData.confirmPassword) {
        dispatch(setAuthError(t('form.errors.password.mismatch')))
        return
      }
      dispatch(registerThunk(registerData))
    } catch (e) {
      // TODO: добавить ошибку через нотификации - https://github.com/AndreParkh/my-calendar-frontend/issues/15
      if (e instanceof Error) {
        console.error(e.message)
      } else {
        console.error(t('form.errors.unhandled'))
      }
    }
  }

  return (
    <div className={styles.register}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          {t('form.firstName.label')}
          <Input
            className={styles.input}
            type="text"
            placeholder={t('form.firstName.placeholder')}
            error={errors.firstName}
            {...register('firstName', {
              required: {
                value: true,
                message: t('form.errors.email.required'),
              },
            })}
          />
        </label>
        <label className={styles.label}>
          {t('form.lastName.label')}
          <Input
            className={styles.input}
            type="text"
            placeholder={t('form.lastName.placeholder')}
            error={errors.lastName}
            {...register('lastName', {
              required: {
                value: true,
                message: t('form.errors.lastname.required'),
              },
            })}
          />
        </label>
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
        <label className={styles.label}>
          {t('form.confirmPassword.label')}
          <Input
            className={styles.input}
            type="password"
            placeholder={t('form.confirmPassword.placeholder')}
            error={errors.password}
            {...register('confirmPassword', {
              required: {
                value: true,
                message: t('form.errors.confirmPassword.required'),
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
      <NavLink to="../login" className={styles.ref}>
        {t('form.register.text')}
      </NavLink>
    </div>
  )
}

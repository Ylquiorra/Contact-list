import React, { FC, memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'

import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { Input } from '@/shared/ui/Input'
import Button from '@/shared/ui/Button'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { useSelector } from 'react-redux'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  login: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className, onSuccess } = props

  const { t } = useTranslation('modal-auth')

  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername) ?? ''
  const password = useSelector(getLoginPassword) ?? ''
  const error = useSelector(getLoginError)

  const onChangeUsername = React.useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch],
  )

  const onChangePassword = React.useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch],
  )

  const onLoginClick = React.useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, username, password, onSuccess])

  return (
    <DynamicModuleLoader removeAfterAmount={false} reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text variant="error" text={t('Вы ввели невереный логин или пароль')} />}
        <Input
          value={username}
          onChange={onChangeUsername}
          autoFocus
          placeholder={t('Введите имя пользователя')}
          className={cls.input}
          type="text"
        />
        <Input
          value={password}
          onChange={onChangePassword}
          placeholder={t('Введите пароль')}
          className={cls.input}
          type="text"
        />
        <Button variant="outline" onClick={onLoginClick} className={cls.loginBtn}>
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm

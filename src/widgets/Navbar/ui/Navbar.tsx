import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'
import { memo, useCallback, useState } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/Stack'
import Button from '@/shared/ui/Button'
import { LoginModal } from '@/features/AuthByUserName'
import { useSelector } from 'react-redux'
import { getAuthData, userActions } from '@/entities/User'
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import Avatar from '@/shared/ui/Avatar'

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const [isAuthLogin, setIsAuthLogin] = useState(false)
  const isAuth = useSelector(getAuthData)

  const onClose = useCallback(() => {
    setIsAuthLogin(false)
  }, [])

  const showLoginModal = useCallback(() => {
    setIsAuthLogin(true)
  }, [])

  const logOut = useCallback(() => {
    dispatch(userActions.logOut())
  }, [dispatch])

  const headerContent = isAuth ? (
    <HStack gap="16">
      <Button variant="filled" onClick={logOut}>
        {t('Выйти')}
      </Button>
      <Avatar size={50} src={isAuth.avatar} />
    </HStack>
  ) : (
    <Button variant="filled" onClick={showLoginModal}>
      {t('Войти')}
    </Button>
  )

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <HStack>{headerContent}</HStack>
      {isAuthLogin && <LoginModal isOpen={isAuthLogin} onClose={onClose} />}
    </nav>
  )
})

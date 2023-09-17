import { useTranslation } from 'react-i18next'
import { memo } from 'react'

import cls from './AppLogo.module.scss'
import { HStack } from '../../Stack'

import AppSvgLogo from '@/shared/assets/icons/app-logo.svg'
import classNames from '@/shared/lib/classNames/classNames'

interface AppLogoProps {
  className?: string
  width?: number
  height?: number
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, width = 50, height = 50 } = props
  const { t } = useTranslation()

  return (
    <HStack max justify="center" className={classNames(cls.AppLogo, {}, [className])}>
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppSvgLogo color="black" width={width} height={height}
className={cls.appSvgLogo} />
    </HStack>
  )
})

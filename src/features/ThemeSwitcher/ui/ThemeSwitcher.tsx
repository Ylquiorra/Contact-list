import React, { JSX, memo } from 'react'
import cls from './ThemeSwitcher.module.scss'
import SwitchIcon from '@/shared/assets/icons/theme.svg'
import useTheme from '@/shared/lib/hooks/useTheme/useTheme'
import Icon from '@/shared/ui/Icon'
import classNames from '@/shared/lib/classNames/classNames'

interface IThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = memo((props: IThemeSwitcherProps): JSX.Element => {
  const { className } = props
  const { toggleTheme } = useTheme()

  return <Icon Svg={SwitchIcon} className={classNames(cls.icon, {}, [className])} onClick={toggleTheme}
clickable />
})

export default ThemeSwitcher

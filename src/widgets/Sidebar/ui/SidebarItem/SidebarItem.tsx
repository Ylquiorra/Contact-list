import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import AppLink from '@/shared/ui/AppLink'
import Icon from '@/shared/ui/Icon'
import { HStack } from '@/shared/ui/Stack'

interface SidebarItemProps {
  text: string
  path: string
  svg: React.FC<React.SVGProps<SVGSVGElement>>
  className?: string
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { text, path, svg, className } = props
  const { t } = useTranslation()

  return (
    <AppLink activeClassName={cls.active} to={path} className={classNames(cls.SidebarItem, {}, [className])}>
      <HStack align="center" gap="16">
        <Icon width={24} height={24} Svg={svg} />
        {text}
      </HStack>
    </AppLink>
  )
})

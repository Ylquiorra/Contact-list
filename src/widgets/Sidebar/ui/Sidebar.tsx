import { useTranslation } from 'react-i18next'
import cls from './Sidebar.module.scss'
import { memo, useMemo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { AppLogo } from '@/shared/ui/AppLogo'
import { VStack } from '@/shared/ui/Stack'
import { SidebarItem } from './SidebarItem/SidebarItem'
import ThemeSwitcher from '@/features/ThemeSwitcher'
import LangSwitcher from '@/features/LangSwitcher'
import { getSidebarItems } from '@/widgets/Navbar/model/selectors/getSidebarItems/getSidebarItems'
import { useSelector } from 'react-redux'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props
  const { t } = useTranslation()
  const sidebarItemsList = useSelector(getSidebarItems)

  const itemList = useMemo(
    () =>
      sidebarItemsList.map((itemList) => (
        <SidebarItem svg={itemList.Icon} key={itemList.path} path={itemList.path}
text={itemList.text} />
      )),
    [sidebarItemsList],
  )

  return (
    <aside data-testid="sidebar" className={classNames(cls.Sidebar, {}, [className])}>
      <AppLogo width={51} height={71} className={cls.appLogo} />
      <VStack role="navigation" gap="16" className={cls.itemsList}>
        {itemList}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  )
})

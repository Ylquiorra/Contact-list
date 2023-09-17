import { createSelector } from '@reduxjs/toolkit'

import HomeIcon from '@/shared/assets/icons/home.svg'
import ListIcon from '@/shared/assets/icons/article.svg'
import { SidebarItemType } from '../../types/sidebar'
import { getAuthData } from '@/entities/User'
import i18n from '@/shared/config/i18n/i18n'

export const getSidebarItems = createSelector(getAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: '/',
      Icon: HomeIcon,
      text: i18n.t('Главная'),
    },
  ]

  if (userData) {
    sidebarItemsList.push({
      path: '/list',
      Icon: ListIcon,
      text: i18n.t('Контакты'),
      authOnly: true,
    })
  }
  return sidebarItemsList
})

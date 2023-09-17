import { useTranslation } from 'react-i18next'

import classNames from '@/shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { Card } from '@/shared/ui/Card'
import Icon from '@/shared/ui/Icon'
import AddIcon from '@/shared/assets/icons/add.svg'
import CloseIcon from '@/shared/assets/icons/close.svg'
import cls from './CreateContactButton.module.scss'

interface CreateContactButtonProps {
  className?: string
  isCreateContact: boolean
  setIsCreateContact: (prev: boolean) => void
}

export const CreateContactButton = memo((props: CreateContactButtonProps) => {
  const { className, setIsCreateContact, isCreateContact } = props
  const { t } = useTranslation()

  const onClick = useCallback(() => {
    //@ts-ignore
    setIsCreateContact((prev) => !prev)
  }, [setIsCreateContact])

  return (
    <Card onClick={onClick} max className={classNames(cls.CreateContactButton, {}, [className])}>
      <Icon Svg={isCreateContact ? CloseIcon : AddIcon} />
    </Card>
  )
})

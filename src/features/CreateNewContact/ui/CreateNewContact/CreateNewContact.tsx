import { useTranslation } from 'react-i18next'

import { memo, useState } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { CreateContactButton } from '@/entities/Contact'
import { CreateNewContactForm } from '../CreateNewContactForm/CreateNewContactForm'

interface CreateNewContactProps {
  className?: string
}

export const CreateNewContact = memo((props: CreateNewContactProps) => {
  const { className } = props
  const { t } = useTranslation()

  const [isCreateContact, setIsCreateContact] = useState<boolean>(false)

  return (
    <>
      <CreateContactButton isCreateContact={isCreateContact} setIsCreateContact={setIsCreateContact} />
      {isCreateContact && <CreateNewContactForm />}
    </>
  )
})

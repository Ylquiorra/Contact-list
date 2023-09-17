import { useTranslation } from 'react-i18next'

import cls from './ContactsList.module.scss'
import { memo, useCallback, useEffect } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { ContactItem } from '@/entities/Contact'
import { VStack } from '@/shared/ui/Stack'
import { useSelector } from 'react-redux'
import { getContactList } from '../../model/selectors/getContactList/getContactList'
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchContactList } from '../../model/services/fetchContactList/fetchContactList'
import Skeleton from '@/shared/ui/Skeleton'
import { getContactLoading } from '../../model/selectors/getContactLoading/getContactLoading'
import { Text } from '@/shared/ui/Text'
import { deleteContact } from '../../model/services/deleteContact/deleteContact'
import { updateContact } from '../../model/services/updateContact/updateContact'

interface ContactsListProps {
  className?: string
}

export const ContactsList = memo((props: ContactsListProps) => {
  const { className } = props
  const { t } = useTranslation('contact-page')
  const dispatch = useAppDispatch()

  const contactsList = useSelector(getContactList)
  const isLoading = useSelector(getContactLoading)

  useEffect(() => {
    dispatch(fetchContactList())
  }, [dispatch])

  const deleteContactHandler = useCallback(
    (id: string) => {
      dispatch(deleteContact(id))
      dispatch(fetchContactList())
    },
    [dispatch],
  )

  const saveContactHandler = useCallback(
    async (
      id: string,
      contactAvatar: string,
      contactName: string,
      contactPhone: string,
      contactComment: string,
      contactAdditionalInformation: string,
    ) => {
      const contactValue = {
        id,
        avatarLink: contactAvatar,
        name: contactName,
        phoneNumber: contactPhone,
        comment: contactComment,
        additionalInformation: contactAdditionalInformation,
      }
      await dispatch(updateContact(contactValue))
      await dispatch(fetchContactList())
    },
    [dispatch],
  )

  if (isLoading) {
    return (
      <VStack gap="24" className={classNames(cls.ContactsList, {}, [className])}>
        {new Array(8).fill(new Date()).map((_, index) => (
          <Skeleton key={index} width="100%" height={146} />
        ))}
      </VStack>
    )
  }

  if (!isLoading && !contactsList?.length) {
    return <Text bold size="l" title={t('Мы не нашли совпадений')} />
  }

  if (!contactsList) {
    throw new Error()
  }

  return (
    <VStack gap="24" className={classNames(cls.ContactsList, {}, [className])}>
      {contactsList.map((contactItem) => (
        <ContactItem
          key={contactItem.id}
          comment={contactItem.comment}
          name={contactItem.name}
          avatar={contactItem.avatarLink || ''}
          phoneNumber={contactItem.phoneNumber}
          additionalInformation={contactItem.additionalInformation}
          id={contactItem.id}
          deleteContactHandler={deleteContactHandler}
          saveContactHandler={saveContactHandler}
        />
      ))}
    </VStack>
  )
})

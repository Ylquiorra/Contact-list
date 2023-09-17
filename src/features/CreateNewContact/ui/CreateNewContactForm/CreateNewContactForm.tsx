import { useTranslation } from 'react-i18next'

import { memo, useCallback } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card'
import { VStack } from '@/shared/ui/Stack'
import { Input } from '@/shared/ui/Input'
import { Text } from '@/shared/ui/Text'
import Button from '@/shared/ui/Button'

import { useSelector } from 'react-redux'

import { getCreateNewContactName } from '@/features/CreateNewContact/model/selectors/getCreateNewContactName/getCreateNewContactName'
import { getCreateNewContactPhoneNumber } from '@/features/CreateNewContact/model/selectors/getCreateNewContactPhoneNumber/getCreateNewContactPhoneNumber'
import { getCreateNewContactComment } from '@/features/CreateNewContact/model/selectors/getCreateNewContactComment/getCreateNewContactComment'
import { getCreateNewContactAdditionalInformation } from '@/features/CreateNewContact/model/selectors/getCreateNewContactAdditionalInformation/getCreateNewContactAdditionalInformation'
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { createNewContactActions } from '../../model/slice/createNewContactSlice'
import { createNewContactRequest } from '../../model/services/createNewContactRequest/createNewContactRequest'
import { getCreateNewContactAvatar } from '../../model/selectors/getCreateNewContactAvatar/getCreateNewContactAvatar'
import { fetchContactList } from '@/pages/ContactListPage/model/services/fetchContactList/fetchContactList'

interface CreateNewContactFormProps {
  className?: string
}

export const CreateNewContactForm = memo((props: CreateNewContactFormProps) => {
  const { className } = props
  const { t } = useTranslation('contact-page')
  const dispatch = useAppDispatch()

  const avatar = useSelector(getCreateNewContactAvatar)
  const name = useSelector(getCreateNewContactName)
  const phoneNumber = useSelector(getCreateNewContactPhoneNumber)
  const comment = useSelector(getCreateNewContactComment)
  const additionalInformation = useSelector(getCreateNewContactAdditionalInformation)

  const onChangeAvatar = useCallback(
    (newName: string) => {
      dispatch(createNewContactActions.setAvatar(newName))
    },
    [dispatch],
  )

  const onChangeName = useCallback(
    (newName: string) => {
      dispatch(createNewContactActions.setName(newName))
    },
    [dispatch],
  )

  const onChangePhoneNumber = useCallback(
    (newPhoneNumber: string) => {
      dispatch(createNewContactActions.setPhoneNumber(newPhoneNumber))
    },
    [dispatch],
  )

  const onChangeComment = useCallback(
    (newComment: string) => {
      dispatch(createNewContactActions.setComment(newComment))
    },
    [dispatch],
  )

  const onChangeAdditionalInformation = useCallback(
    (newAdditionalInformation: string) => {
      dispatch(createNewContactActions.setAdditionalInformation(newAdditionalInformation))
    },
    [dispatch],
  )

  const createContact = useCallback(async () => {
    await dispatch(createNewContactRequest())
    dispatch(createNewContactActions.setClearForm())
    await dispatch(fetchContactList())
  }, [dispatch])

  const isDisabledButton = name && phoneNumber && comment && additionalInformation

  return (
    <Card max padding="16" className={classNames('', {}, [className])}>
      <VStack align="normal" gap="8">
        <Text title={t('Создание нового контакта')} size="s" />
        <Input placeholder={t('Ссылка на аватар')} value={avatar} onChange={onChangeAvatar} />
        <Input placeholder={t('Имя')} value={name} onChange={onChangeName} />
        <Input placeholder={t('Номер телефона')} value={phoneNumber} onChange={onChangePhoneNumber} />
        <Input placeholder={t('Комментарий')} value={comment} onChange={onChangeComment} />
        <Input placeholder={t('Описание')} value={additionalInformation} onChange={onChangeAdditionalInformation} />
        <Button onClick={createContact} disabled={isDisabledButton ? false : true} variant="filled">
          {t('Создать')}
        </Button>
      </VStack>
    </Card>
  )
})

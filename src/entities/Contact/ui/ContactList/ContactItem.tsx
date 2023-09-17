import { useTranslation } from 'react-i18next'
import cls from './ContactItem.module.scss'
import { memo, useCallback, useState } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card'
import Avatar from '@/shared/ui/Avatar'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import DeleteIcon from '@/shared/assets/icons/delete.svg'
import EditIcon from '@/shared/assets/icons/edit.svg'
import SaveIcon from '@/shared/assets/icons/save.svg'
import Icon from '@/shared/ui/Icon'
import { Input } from '@/shared/ui/Input'

interface ContactItemProps {
  className?: string
  name: string
  avatar: string
  phoneNumber: string
  additionalInformation: string
  comment: string
  id: string
  deleteContactHandler: (id: string) => void
  saveContactHandler: (
    id: string,
    contactAvatar: string,
    contactName: string,
    contactPhone: string,
    contactComment: string,
    contactAdditionalInformation: string,
  ) => void
}

export const ContactItem = memo((props: ContactItemProps) => {
  const {
    className,
    name,
    phoneNumber,
    avatar,
    additionalInformation,
    comment,
    deleteContactHandler,
    saveContactHandler,
    id,
  } = props
  const { t } = useTranslation()
  const [isEdit, setIsEdit] = useState(false)

  const [contactAvatar, setContactAvatar] = useState(avatar)
  const [contactName, setContactName] = useState(name)
  const [contactPhone, setContactPhone] = useState(phoneNumber)
  const [contactComment, setContactComment] = useState(comment)
  const [contactAdditionalInformation, setContactAdditionalInformation] = useState(additionalInformation)

  const onEdit = useCallback(() => {
    setIsEdit(true)
  }, [])

  const onSave = useCallback(() => {
    saveContactHandler?.(id, contactAvatar, contactName, contactPhone, contactComment, contactAdditionalInformation)
    setIsEdit(false)
  }, [contactAdditionalInformation, contactAvatar, contactComment, contactName, contactPhone, id, saveContactHandler])

  const onDelete = useCallback(() => {
    deleteContactHandler?.(id)
  }, [deleteContactHandler, id])

  const onChangeContactAvatar = useCallback((value: string) => {
    setContactAvatar(value)
  }, [])

  const onChangeContactName = useCallback((value: string) => {
    setContactName(value)
  }, [])

  const onChangeContactPhone = useCallback((value: string) => {
    setContactPhone(value)
  }, [])

  const onChangeContactComment = useCallback((value: string) => {
    setContactComment(value)
  }, [])

  const onChangeContactAdditionalInformation = useCallback((value: string) => {
    setContactAdditionalInformation(value)
  }, [])

  const actionButtons = isEdit ? (
    <Icon clickable onClick={onSave} width={24}
height={24} Svg={SaveIcon} />
  ) : (
    <>
      <Icon clickable onClick={onDelete} width={24}
height={24} Svg={DeleteIcon} />
      <Icon onClick={onEdit} clickable width={24}
height={24} Svg={EditIcon} />
    </>
  )

  return (
    <Card padding="16" className={classNames(cls.ContentItem, {}, [className])}>
      <VStack align="normal" gap="24">
        <HStack gap="16">
          <div>
            <Avatar size={70} alt={contactName} src={avatar} />
          </div>
          <VStack max gap="4">
            {isEdit ? (
              <>
                <Input value={contactAvatar} onChange={onChangeContactAvatar} />
                <Input value={contactName} onChange={onChangeContactName} />
                <Input value={contactPhone} onChange={onChangeContactPhone} />
                <Input value={contactComment} onChange={onChangeContactComment} />
                <Input value={contactAdditionalInformation} onChange={onChangeContactAdditionalInformation} />
              </>
            ) : (
              <>
                <Text title={contactName} size="l" />
                <Text text={contactPhone} size="m" bold />
                <Text text={contactComment} size="s" />
                <Text text={contactAdditionalInformation} size="s" />
              </>
            )}
          </VStack>
          <VStack gap="8">{actionButtons}</VStack>
        </HStack>
      </VStack>
    </Card>
  )
})

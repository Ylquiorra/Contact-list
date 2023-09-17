import { useTranslation } from 'react-i18next'

import cls from './ContactListFilters.module.scss'
import { memo, useCallback } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { Text } from '@/shared/ui/Text'
import { VStack } from '@/shared/ui/Stack'
import { useSelector } from 'react-redux'
import { getContactSearch } from '../../model/selectors/getContactSearch/getContactSearch'
import { contactPageActions } from '../../model/slice/contactPageSlice'
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchContactList } from '../../model/services/fetchContactList/fetchContactList'
import useDebounce from '@/shared/lib/hooks/useDebounce/useDebounce'

interface ContactListFiltersProps {
  className?: string
}

export const ContactListFilters = memo((props: ContactListFiltersProps) => {
  const { className } = props
  const { t } = useTranslation('contact-page')
  const dispach = useAppDispatch()
  const searchValue = useSelector(getContactSearch)

  const fetchData = useCallback(() => {
    dispach(fetchContactList())
  }, [dispach])

  const deboucedFetchData = useDebounce(fetchData, 1000)

  const onChangeSearch = useCallback(
    (newSearchValue: string) => {
      dispach(contactPageActions.setSearch(newSearchValue))
      deboucedFetchData()
    },
    [deboucedFetchData, dispach],
  )

  return (
    <Card padding="16" className={classNames(cls.ContactListFilters, {}, [className])}>
      <VStack gap="8">
        <Text text={t('Поиск')} />
        <Input placeholder={t('Дмитрий Лебедев')} value={searchValue} onChange={onChangeSearch}
size="s" />
      </VStack>
    </Card>
  )
})

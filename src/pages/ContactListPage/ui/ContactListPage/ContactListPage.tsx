import { useTranslation } from 'react-i18next'

import cls from './ContactListPage.module.scss'
import { memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { ContactsList } from '../ContactsList/ContactsList'
import { ContactListFilters } from '../ContactListFilters/ContactListFilters'
import { VStack } from '@/shared/ui/Stack'
import { CreateNewContact, createNewContactReducer } from '@/features/CreateNewContact'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { contactPageReducer } from '../../model/slice/contactPageSlice'

interface ContactListPageProps {
  className?: string
}

const reducers: ReducersList = {
  contacts: contactPageReducer,
  createNewContact: createNewContactReducer,
}

const ContactListPage = memo((props: ContactListPageProps) => {
  const { className } = props
  const { t } = useTranslation('contact-page')

  return (
    <DynamicModuleLoader removeAfterAmount={false} reducers={reducers}>
      <main className={classNames(cls.ContactListPage, {}, [className])}>
        <VStack gap="24">
          <Text title={t('Список контактов')} />
          <ContactListFilters />
          <CreateNewContact />
          <ContactsList />
        </VStack>
      </main>
    </DynamicModuleLoader>
  )
})

export default ContactListPage

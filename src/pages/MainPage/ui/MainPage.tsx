import React, { JSX } from 'react'
import Page from '@/widgets/Page'
import { useTranslation } from 'react-i18next'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

const MainPage: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Page data-testid={'MainPage'}>
      <HStack max justify={'center'}>
        <Text
          size="l"
          title={t(
            'Привет, это основаная страница моего приложения. Чтобы попробовать функционал, пожалуйста, перейдите во вкладку «Контакты»',
          )}
        />
      </HStack>
    </Page>
  )
}

export default MainPage

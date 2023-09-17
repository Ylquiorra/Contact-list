import { FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import LangButton from '../consts/LangButton'
import Button from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'

interface ILangSwitcherProps {
  className?: string
}

const LangSwitcher: FC<ILangSwitcherProps> = memo((props) => {
  const { className } = props

  const { i18n } = useTranslation()

  function toggleLang(): void {
    i18n.changeLanguage(i18n.language == 'en' ? 'ru' : 'en')
  }

  return (
    <Button className={classNames(cls.LangSwitcher, {}, [className])} onClick={toggleLang}>
      <Text text={i18n.language == LangButton.EN ? 'RU' : 'ENG'} />
    </Button>
  )
})

export default LangSwitcher

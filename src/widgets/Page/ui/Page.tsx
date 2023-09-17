import React, { JSX } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useLocation } from 'react-router-dom'
import TestProps from '@/shared/types/tests'

interface IPageProps extends TestProps {
  className?: string
  children?: React.ReactNode
  onScrollEnd?: () => void
}

const Page: React.FC<IPageProps> = (props: IPageProps): JSX.Element => {
  const { className, children, onScrollEnd } = props
  const dispatch = useAppDispatch()

  const { pathname } = useLocation()

  return (
    <main className={classNames(cls.page, {}, [className])} data-testid={props['data-testid'] ?? 'Page'}>
      {children}
    </main>
  )
}

export default Page

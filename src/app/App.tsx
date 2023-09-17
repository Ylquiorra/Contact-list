import { FC, Suspense, useEffect } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import AppRouter from '@/app/providers/Router'
import { MainLayout } from '@/shared/layouts'
import { Sidebar } from '@/widgets/Sidebar'
import { Navbar } from '@/widgets/Navbar'
import { getUserInited, userActions } from '@/entities/User'
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import PageLoader from '@/widgets/PageLoader'

interface IAppProps {
  className?: string
}

export const App: FC<IAppProps> = (props) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const userInited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  let content = <MainLayout sidebar={<Sidebar />} header={<Navbar />} content={<AppRouter />} />

  if (!userInited) {
    content = <PageLoader />
  }

  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [className])}>{content}</div>
    </Suspense>
  )
}

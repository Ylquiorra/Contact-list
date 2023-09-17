import { RouteProps } from 'react-router-dom'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export type { AppRoutesProps }

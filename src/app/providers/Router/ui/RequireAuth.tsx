import { getAuthData } from '@/entities/User'
import { RoutePaths } from '@/shared/consts/routerPaths'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

interface RequireAuthProps {
  children: JSX.Element
}

export function RequireAuth({ children }: RequireAuthProps) {
  const auth = useSelector(getAuthData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePaths.getRouteMain()} state={{ from: location }} />
  }

  return children
}

import { MainPage } from '@/pages/MainPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { AppRoutes, RoutePaths } from '@/shared/consts/routerPaths'
import { AppRoutesProps } from '@/shared/types/router'
import NotFoundPage from '@/pages/NotFoundPage'
import { ContactListPage } from '@/pages/ContactListPage'

const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.LIST]: {
    path: RoutePaths.getRouteList(),
    element: <ContactListPage />,
    authOnly: true,
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePaths.getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
}

export { routeConfig }

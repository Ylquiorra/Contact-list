enum AppRoutes {
  MAIN = 'main',
  LIST = 'list',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

class RoutePaths {
  static getRouteMain() {
    return '/'
  }
  static getRouteList() {
    return '/list'
  }
  static getRouteForbidden() {
    return '/forbidden'
  }
}

const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [RoutePaths.getRouteMain()]: AppRoutes.MAIN,
  [RoutePaths.getRouteMain()]: AppRoutes.LIST,
  [RoutePaths.getRouteForbidden()]: AppRoutes.FORBIDDEN,
}

export { AppRoutes, RoutePaths, AppRouteByPathPattern }

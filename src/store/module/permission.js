import { asyncRouterMap, constantRouterMap } from '@/router'

function hasPermission (permissions, router) {
  if (router.meta && router.meta.permission) {
    return permissions.some(perm => router.meta.permission == perm)
  }
  return true
}

function filterAsyncRouter (routers, permissions) {
  let res = []
  routers.forEach(router => {
    let tmp = {...router}
    if (hasPermission(permissions, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, permissions)
      }
    }
    res.push(tmp)
  })
  return res
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRoutes: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRoutes = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    generateRouters ({commit}, permissions) {
      return new Promise(resolve => {
        let accessedRouters = filterAsyncRouter(asyncRouterMap, permissions)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission

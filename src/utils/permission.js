import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import { isLogin, getToken, getKeyId } from './auth'

router.beforeEach((to, from, next) => {
  if (isLogin()) {
    if (!store.getters.token) { store.commit('SET_TOKEN', getToken()) }
    if (!store.getters.keyId) { store.commit('SET_KEY_ID', getKeyId()) }
    if (to.meta.isLogin) {
      next('/')
    } else {
      if (store.getters.permissionList.length == 0) {
        store.dispatch('getUserInfo').then(() => {
          store.dispatch('generateRouters', store.getters.permissionList).then(() => {
            router.addRoutes(store.getters.addRoutes)
            next({...to, replace: true})
          })
        }).catch(error => {
          // TODO 强制退出
          Message.error(error || '验证失败，请重新登录')
          next('/login')
        })
      } else {
        next()
      }
    }
  } else if (!to.meta.isWhiteList) {
    next('/login')
  } else {
    next()
  }
})

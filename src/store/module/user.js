import { loginByUserInfo, getUserInfo } from '@/api/login'
import { setToken, setKeyId } from '@/utils/auth'

function getPermissionList (permission) {
  let permissionList = []
  permission.forEach(perm => {
    let tmp = {...perm}
    if (tmp.url) { permissionList.push(tmp.url) }
    if (tmp.children && tmp.children.length > 0) {
      let subPermList = getPermissionList(tmp.children)
      if (subPermList.length > 0) { permissionList = permissionList.concat(subPermList) }
    }
  })

  return permissionList
}

const user = {
  state: {
    token: '',
    keyId: '',
    username: '',
    userIcon: '',
    permission: {},
    permissionList: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    },
    SET_KEY_ID: (state, keyId) => {
      state.keyId = keyId
      setKeyId(keyId)
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_USER_ICON: (state, icon) => {
      state.userIcon = icon
    },
    SET_PERMISSION: (state, permission) => {
      state.permission = permission
      state.permissionList = getPermissionList(permission)
    }
  },
  actions: {
    loginByUserInfo: function ({commit}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUserInfo(username, userInfo.password).then(response => {
          commit('SET_TOKEN', response.token)
          commit('SET_KEY_ID', response.keyId)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getUserInfo: function ({commit, getters}) {
      return new Promise((resolve, reject) => {
        getUserInfo(getters.keyId).then(response => {
          commit('SET_USERNAME', response.username)
          commit('SET_USER_ICON', response.icon)
          commit('SET_PERMISSION', response.permission)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user

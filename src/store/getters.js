import { getToken, getKeyId } from '@/utils/auth'

const getters = {
  token: state => {
    return state.user.token || getToken()
  },
  keyId: state => {
    return state.user.keyId || getKeyId()
  },
  username: state => state.user.username,
  userIcon: state => state.user.userIcon,
  permission: state => state.user.permission,
  permissionList: state => state.user.permissionList,
  addRoutes: state => state.permission.addRoutes
}

export default getters

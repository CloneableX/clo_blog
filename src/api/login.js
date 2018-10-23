import request from '@/utils/request'

export function loginByUserInfo (username, password) {
  const data = {
    username,
    password
  }

  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function getUserInfo (userId) {
  const data = {
    userId
  }

  return request({
    url: '/user/getUserInfo',
    method: 'get',
    data
  })
}

export function getPermission (userId) {
  const data = {userId}
  return request({
    url: '/user/getPermission',
    method: 'get',
    data
  })
}

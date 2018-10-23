export function setToken (token) {
  localStorage.setItem('token', token)
}

export function setKeyId (keyId) {
  localStorage.setItem('keyId', keyId)
}

export function getToken () {
  return localStorage.getItem('token')
}

export function getKeyId () {
  return localStorage.getItem('keyId')
}

export function isLogin () {
  return getToken() && getKeyId()
}

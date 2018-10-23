/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  config.headers['X-Token'] = store.getters.token
  config.headers['X-KeyId'] = store.getters.keyId
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  const respData = response.data
  if (respData.code !== process.env.SYS_CODE_SUCCESS) {
    Message({
      message: respData.msg,
      type: process.env.MSG_TYPE_ERROR,
      duration: process.env.MSG_DURATION
    })
    return Promise.reject('error')
  } else {
    return respData.data
  }
}, error => {
  Message({
    message: error.message,
    type: process.env.MSG_TYPE_ERROR,
    duration: process.env.MSG_DURATION
  })
  return Promise.reject(error)
})

export default service

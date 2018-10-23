import Mock from 'mockjs'
import loginApi from './login'

Mock.mock(/\/login\/login/, 'post', loginApi.loginByUserInfo)
Mock.mock(/\/user\/getUserInfo/, 'get', loginApi.getUserInfo)

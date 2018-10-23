import Mock from 'mockjs'
import { getSuccessResp, getFailedResp } from './response'

const userArray = [
  {
    id: '640000199012018612',
    username: '123',
    password: '123',
    icon: 'https://avatars1.githubusercontent.com/u/32833878?s=40&v=4',
    permission: [
      {
        id: 1,
        type: 1,
        name: '文章管理',
        icon: 'article',
        children: [
          {
            id: 2,
            type: 2,
            name: '文章管理',
            url: '/article/manage'
          },
          {
            id: 3,
            type: 2,
            name: '写博客',
            url: '/article/blog'
          }
        ]
      },
      {
        id: 4,
        type: 1,
        name: '消息管理',
        icon: 'message',
        children: [
          {
            id: 5,
            type: 2,
            name: '收件箱',
            url: '/msg/inbox'
          }
        ]
      }
    ]
  }
]

export default {
  loginByUserInfo: config => {
    const { username, password } = JSON.parse(config.body)
    let userInfo = userArray.find(user => {
      return user.username === username && user.password === password
    })

    if (userInfo) {
      return getSuccessResp({
        keyId: userInfo.id,
        token: Mock.mock('@guid')
      })
    }

    return getFailedResp('用户名或密码错误')
  },
  getUserInfo: config => {
    const { userId } = JSON.parse(config.body)
    let userInfo = userArray.find(user => user.id == userId)
    if (userInfo) {
      return getSuccessResp({
        username: userInfo.username,
        icon: userInfo.icon,
        permission: userInfo.permission
      })
    }

    return getFailedResp('此用户不存在')
  }
}

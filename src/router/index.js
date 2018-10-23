import Vue from 'vue'
import Router from 'vue-router'
import BlogLayout from '@/views/blog-index/BlogLayout'
import Login from '@/views/login/Login'
import UserIndex from '@/views/user-index/UserIndex'
import BlogIndex from '@/views/blog-index/BlogIndex'
import ArticleManage from '@/views/article/ArticleManage'
import ArticleBlog from '@/views/article/ArticleBlog'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'BlogLayout',
    component: BlogLayout,
    meta: {isWhiteList: true},
    redirect: 'index',
    children: [
      {
        path: '/index',
        name: 'BlogIndex',
        component: BlogIndex
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {isWhiteList: true, isLogin: true}
  }
]

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/',
    name: 'BlogLayout',
    component: BlogLayout,
    meta: {isWhiteList: true},
    children: [
      {
        path: '/admin',
        name: 'UserIndex',
        component: UserIndex,
        redirect: '/article/manage',
        children: [
          {
            path: '/article/manage',
            name: 'ArticleManage',
            component: ArticleManage,
            meta: {permission: '/article/manage'}
          },
          {
            path: '/article/blog',
            name: 'ArticleBlog',
            component: ArticleBlog,
            meta: {permission: '/article/blog'}
          }
        ]
      }
    ]
  }
]

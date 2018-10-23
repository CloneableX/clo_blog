<template>
  <header class="main-header">
    <!-- Logo -->
    <router-link to="/" class="logo">
      <span class="logo-lg"><b>Cloneable </b>Blog</span>
    </router-link>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li>
            <el-row style="margin-top: 8px;">
              <router-link :to="getUserIconRoute">
                <i>
                  <img :src="userIcon" style="width: 30px; height: 30px;" v-if="isLogin"/>
                  <icon-svg icon-class="user" v-else></icon-svg>
                </i>
              </router-link>
              <el-dropdown trigger="click" style="color: #ffffff" v-if="isLogin">
                <i class="el-icon-arrow-down el-icon--right"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item disabled>登录用户: {{ username }}</el-dropdown-item>
                  <el-dropdown-item divided>个人主页</el-dropdown-item>
                  <el-dropdown-item>设置</el-dropdown-item>
                  <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-row>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { isLogin } from '@/utils/auth'
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'username',
      'userIcon'
    ]),
    getUserIconRoute: () => {
      return isLogin() ? '/admin' : '/login'
    }
  },
  methods: {
    isLogin () {
      return isLogin()
    }
  }
}
</script>

<style scoped>
  .main-header {
    position: relative;
    max-height: 100px;
    z-index: 1030;
  }

  .main-header .logo {
    background-color: #367fa9;
    color: #fff;
    border-bottom: 0 solid transparent;
  }

  .main-header .logo {
    -webkit-transition: width .3s ease-in-out;
    -o-transition: width .3s ease-in-out;
    transition: width .3s ease-in-out;
    display: block;
    float: left;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    width: 230px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 0 15px;
    font-weight: 300;
    overflow: hidden;
  }

  .main-header .logo .logo-lg {
    display: block;
  }

  .main-header .navbar {
    background-color: #3c8dbc;
  }

  .main-header .navbar {
    -webkit-transition: margin-left .3s ease-in-out;
    -o-transition: margin-left .3s ease-in-out;
    transition: margin-left .3s ease-in-out;
    margin-bottom: 0;
    margin-left: 230px;
    border: none;
    min-height: 50px;
    border-radius: 0;
  }
  .navbar-custom-menu {
    float: right;
    width: 6%;
  }
  .navbar-nav {
    float: left;
    margin: 0;
  }
  .nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .navbar-nav>li {
    position: relative;
  }
  .navbar-nav>li {
    float: left;
  }
  .nav>li {
    position: relative;
    display: block;
    height: 50px;
  }
  .navbar .nav>li>a {
    color: #fff;
  }
  .navbar-nav>li>a {
    padding-top: 10px;
    line-height: 30px;
  }
  .nav>li>a {
    position: relative;
    display: block;
    padding-left: 15px;
    padding-right: 15px;
  }
  .nav>li>a:hover, .nav>li>a:focus, .navbar .nav>.active>a {
    background: rgba(0,0,0,0.1);
    color: #f6f6f6;
  }
</style>

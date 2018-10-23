<template>
    <el-form ref="loginForm" :model="loginForm" label-width="80px">
      <el-form-item label="用户名称">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登陆</el-button>
        <el-button @click="removeAll">清除</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('loginByUserInfo', this.loginForm).then(() => {
        this.$router.push('/')
      })
    },
    removeAll () {
      console.log('remove......')
    }
  }
}
</script>

<style scoped>
form {width: 20%; margin: auto;}
</style>

<template>
  <el-container style="height: 100%;">
    <el-header style="height: 7.5%;padding: 0px">
      <Header></Header>
    </el-header>
    <el-main style="height: 92.5%;">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Header from '@/components/Layout/Header'

export default {
  name: 'BlogIndex',
  components: {Header},
  comments: {
    Header
  }
}
</script>

<style scoped>
  .el-main {padding: 0px;}
</style>

<template>
    <el-container style="height: 100%;">
      <el-aside width="260px">
        <navi></navi>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
</template>

<script>
import Navi from '@/components/Layout/Navi'
export default {
  name: 'UserIndex',
  components: {
    Navi
  }
}
</script>

<style scoped>
  .el-main {padding: 0px;}
</style>

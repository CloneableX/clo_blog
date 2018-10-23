<template>
  <el-menu style="height: 100%;" :router="isRouter" :default-active="$route.path">
    <el-submenu v-for="perm in permission" :index="perm.id + ''" :key="perm.id" v-if="perm.type == 1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{perm.name}}</span>
      </template>
      <template v-if="perm.children.length > 0">
        <el-menu-item v-for="subPerm in perm.children" :key="subPerm.id" :index="subPerm.url" v-if="subPerm.type == 2">
          {{subPerm.name}}
        </el-menu-item>
      </template>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navi',
  data () {
    return {
      isRouter: true
    }
  },
  computed: {
    ...mapGetters([
      'permission',
      'token'
    ])
  }
}
</script>

<style scoped>

</style>

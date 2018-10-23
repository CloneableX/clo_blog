// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
import '@/icons'
import store from '@/store'
import '@/utils/permission'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  require('./mock/')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

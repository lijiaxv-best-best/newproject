// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



import './assets/css/reset.css'
import './assets/js/rem.js'

import VantUI from 'vant'
Vue.use(VantUI)
import 'vant/lib/index.css'

Vue.prototype.$imgurl = 'http://localhost:3000/'

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

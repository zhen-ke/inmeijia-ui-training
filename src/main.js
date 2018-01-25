// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Normalize from 'normalize.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(MintUI);

// 配置Axios
Vue.prototype.myAxios = Axios.create({ 
  baseURL: 'http://127.0.0.1',
  timeout: 1000,
  // headers: {"X-XSRF-TOKEN":'11111'},
  withCredentials: true // 跨域cookie
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

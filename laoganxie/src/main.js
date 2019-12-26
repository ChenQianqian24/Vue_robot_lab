import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

axios.defaults.timeout = 5000 //响应时间
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8' //配置请求头
axios.defaults.baseURL = 'http://202.202.64.36' //配置接口地址

new Vue({
  render: h => h(App)
}).$mount('#app')

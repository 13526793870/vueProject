import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

//全局配置axios
axios.defaults.baseURL = "http://localhost:3000"
Vue.prototype.$axios = axios;


//自定义全局指令
// Vue.directive('rainbow', {
//   bind: function (el, binding, vnode) {
//     el.style.color = 'red'
//   }
// })

//自定义全局过滤器
// Vue.filter("to-uppercase", function (value) {
//   return value.toUpperCase();
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import router from './router'
import store from './store'
import common from './common/index'
import 'mint-ui/lib/style.css'
import App from './App'

//挂载自定义对象到全局Vue对象上
Vue.prototype.$common = common;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

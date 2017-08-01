import Vue from 'vue'
import router from './router'
import store from './store'
import common from './common/index'
import 'mint-ui/lib/style.css'
import App from './App'
import VueLazyLoad from 'vue-lazyload'

//挂载自定义对象到全局Vue对象上
Vue.prototype.$common = common;

Vue.use(VueLazyLoad, {
  loading: require('@/assets/logo.png')
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

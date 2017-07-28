import Vue from 'vue'
import Router from 'vue-router'
import Fake from '@/components/fake/Fake'
import home from './router-home.js'
import slide from './router-slide.js'

Vue.use(Router)

export default new Router({
  //定义路由列表
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Fake',
      component: Fake
    },
    ...home,
    ...slide,
    {
      path: '*',
      name: 'PageNotFound',
      component: resolve => require(['@/components/common/PageNotFound'], resolve)
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
      }
      if (to.matched.some(m => m.meta.scrollTop)) {
        position.x = 0;
        position.y = 0;
      }
      return position;
    }
  }
})

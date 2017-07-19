import Vue from 'vue'
import Router from 'vue-router'
import Fake from '@/components/fake/Fake'

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
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/components/Home'], resolve)
    },
    {
      path: '/course',
      component: resolve => require(['@/components/course/Course'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['@/components/course/CourseLearning'], resolve)
        },
        {
          path: 'learned',
          component: resolve => require(['@/components/course/CourseLearned'], resolve)
        }
      ]
    },
    {
      path: '/coursedetail/:courseid/title/:coursetitle',
      name: 'CourseDetail',
      component: resolve => require(['@/components/course/CourseDetail'], resolve)
    },
    {
      path: '/note',
      name: 'Note',
      component: resolve => require(['@/components/note/Note'], resolve)
    },
    {
      path: '/notedetail',
      name: 'NoteDetail',
      component: resolve => require(['@/components/note/NoteDetail'], resolve)
    },
    {
      path: '/addnote',
      name: 'NoteAdd',
      component: resolve => require(['@/components/note/NoteAdd'], resolve)
    },
    {
      path: '/plan',
      name: 'Plan',
      component: resolve => require(['@/components/plan/Plan'], resolve)
    },
    {
      path: '/friend',
      name: 'Friend',
      component: resolve => require(['@/components/friend/Friend'], resolve)
    },
    {
      path: '/frienddetail/:friendid',
      name: 'FriendDetail',
      component: resolve => require(['@/components/friend/FriendDetail'], resolve)
    },
    {
      path: '/homework',
      name: 'Homework',
      component: resolve => require(['@/components/homework/Homework'], resolve)
    },
    {
      path: '/homeworkdetail',
      name: 'HomeworkDetail',
      component: resolve => require(['@/components/homework/HomeworkDetail'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['@/components/login/Login'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['@/components/login/Home'], resolve)
        },
        {
          path: 'registerstep1',
          component: resolve => require(['@/components/login/RegisterStep1'], resolve)
        },
        {
          path: 'registerstep2',
          component: resolve => require(['@/components/login/RegisterStep2'], resolve)
        },
        {
          path: 'registerstep3',
          component: resolve => require(['@/components/login/RegisterStep3'], resolve)
        },
        {
          path: 'registerstep4',
          component: resolve => require(['@/components/login/RegisterStep4'], resolve)
        }
      ]
    },
    {
      path: '/setting',
      name: 'Setting',
      component: resolve => require(['@/components/setting/Setting'], resolve)
    },
    {
      path: '/userdetail',
      name: 'UserDetail',
      component: resolve => require(['@/components/user/UserDetail'], resolve)
    },
    {
      path: '/chat',
      name: 'Chat',
      component: resolve => require(['@/components/chat/Chat'], resolve)
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
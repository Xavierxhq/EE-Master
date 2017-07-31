import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import Storage from '@/common/util/storage'
import imgUrl from '@/assets/logo.png'
import course from './modules/course'
import cbroom from './modules/cbroom'
import note from './modules/note'
import plan from './modules/plan'
import friend from './modules/friend'
import homework from './modules/homework'
import chatMessage from './modules/chat-message'
import forum from './modules/forum'
import teacher from './modules/teacher'

Vue.use(Vuex)

const state = {
  menustate: false,
  user: {
    user: localStorage.getItem(Storage.user) || 2,
    userid: localStorage.getItem(Storage.userid) || 2,
    token: localStorage.getItem(Storage.token) || '0',
    email: localStorage.getItem(Storage.email) || '',
    password: localStorage.getItem(Storage.password) || '',
    name: localStorage.getItem(Storage.name) || '默认名',
    intro: localStorage.getItem(Storage.intro) || '优质学习，在线互动',
    headimg: localStorage.getItem(Storage.headimg) || imgUrl
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    course,
    note,
    plan,
    friend,
    homework,
    chatMessage,
    forum,
    teacher,
    cbroom
  }
})
import types from '@/store/types'

const state = {
  courseLearning: [],
  courseLearned: [],
  //记录当前浏览的记录
  isdone: 1
}

const getters = {
  courseLearned: state => state.courseLearned,
  courseLearning: state => state.courseLearning,
  isdone: state => state.isdone
}

const actions = {

}

const mutations = {
  //给数组添加元素
  [types.ADD_COURSE_LEARNING](state, { courses }) {
    for (let i = 0; i < courses.length; i++) {
      state.courseLearning.push(Object.freeze(courses[i]))
    }
  },
  //给数组添加元素
  [types.ADD_COURSE_LEARNED](state, { courses }) {
    for (let i = 0; i < courses.length; i++) {
      state.courseLearned.push(Object.freeze(courses[i]))
    }
  },
  //更新课程类别
  [types.UPDATE_COURSE_ISDONE](state, isdone) {
    state.isdone = isdone;
  },
  //清空数组
  [types.CLEAR_COURSE_COURSES](state) {
    state.courseLearned.splice(0,state.courseLearned.length)
    state.courseLearning.splice(0, state.courseLearning.length)
    state.isdone = 1
    console.log('课程已清除')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
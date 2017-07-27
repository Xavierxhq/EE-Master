import types from '@/store/types'

const state = {
  teachers: []
}

const getters = {
  teachers: state => state.teachers
}

const actions = {
}

const mutations = {
  //给数组添加元素
  [types.ADD_TEACHER_TEACHERS](state, data) {
    if(!state.teachers[data.submark]) {
      state.teachers[data.submark] = []
    }
    for (let i = 0; i < data.teacher.length; i++) {
      state.teachers[data.submark].push(Object.freeze(data.teacher[i]))
    }
    state.teachers.push(1)
    state.teachers.splice(state.teachers.length-1, 1)
  }  
}

export default {
  state,
  getters,
  mutations,
  actions
}
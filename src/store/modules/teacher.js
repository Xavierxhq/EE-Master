import types from '@/store/types'

const state = {
  china: [],
  math: [],
  english: [],
  physical: [],
  chemistry: [],
  biological: [],
  political: [],
  history: [],
  geography: []
}

const getters = {
  china: state => state.china,
  math: state => state.math,
  english: state => state.english,
  physical: state => state.physical,
  chemistry: state => state.chemistry,
  biological: state => state.biological,
  political: state => state.political,
  history: state => state.history,
  geography: state => state.geography,
}

const actions = {
}

const mutations = {
  //给数组添加元素
  [types.ADD_TEACHER_CHINA](state, { china }) {
    china.forEach(item => {
      state.china.push(Object.freeze(item))
    })
  },
  [types.ADD_TEACHER_MATH](state, { math }) {
    math.forEach(item => {
      state.math.push(Object.freeze(item))
    })
  },
  [types.ADD_TEACHER_ENGLISH](state, { english }) {
    english.forEach(item => {
      state.english.push(Object.freeze(item))
    })
  },
  [types.ADD_TEACHER_PHYSICAL](state, { physical }) {
    physical.forEach(item => {
      state.physical.push(Object.freeze(item))
    })
  },
  [types.ADD_TEACHER_CHEMISTRY](state, { chemistry }) {
    chemistry.forEach(item => {
      state.chemistry.push(Object.freeze(item))
    })
  },
  [types.ADD_TEACHER_BIOLOGICAL](state, { biological }) {
    biological.forEach(item => {
      state.biological.push(Object.freeze(item))
    })
  },
  [types.ADD_TEACHER_POLITICAL](state, { political }) {
    political.forEach(item => {
      state.political.push(Object.freeze(item))
    })
  },
  [types.ADD_TEACHER_HISTORY](state, { history }) {
    history.forEach(item => {
      state.history.push(Object.freeze(item))
    })
  },
  [types.ADD_TEACHER_GEOGRAPHY](state, { geography }) {
    geography.forEach(item => {
      state.geography.push(Object.freeze(item))
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
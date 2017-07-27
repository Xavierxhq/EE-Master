import types from '@/store/types'

const state = {
  say: [],
  news: []
}

const getters = {
  say: state => state.say,
  news: state => state.news
}

const actions = {
}

const mutations = {
  //给数组添加元素
  [types.ADD_FORUM_SAY](state, { say }) {
    say.forEach(item => {
      state.say.push(Object.freeze(item))
    })
  },
  [types.ADD_FORUM_NEWS](state, { news }) {
    news.forEach(item => {
      state.news.push(Object.freeze(item))
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
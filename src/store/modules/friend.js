import types from '@/store/types'

const state = {
  friends: []
}

const getters = {
  friends: state => state.friends,
}

const actions = {
}

const mutations = {
  //给数组添加元素
  [types.ADD_FRIEND_FRIENDS](state, { friends }) {
    for (let i = 0; i < friends.length; i++) {
      state.friends.push(Object.freeze(friends[i]))
    }
  },
  //修改好友备注
  [types.UPDATE_FRIEND_FRIEND](state, { friend }) {
    for (let i = 0; i < state.friends.length; i++) {
      
    }
  },
  //清空数组
  [types.CLEAR_FRIEND_FRIENDS](state) {
    state.friends.splice(0, state.friends.length)
    console.log('好友已清除')
  },
  //添加好友
  [types.UPDATE_ADD_FRIEND](state, {friend}) {
    state.friends = [friend].concat(...state.friends)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
import types from '@/store/types'
import atypes from '@/store/action-types'
import Database from '@/common/database'

const state = {
  /*
  * chat数据结构
  * {
  *   id,
  *   from,
  *   to,
  *   content,
  *   failed,
  *   unopen
  * }
  */
  chats: [],
  newchats: [],
  chatfriend: {},
  unopen: []
}

const getters = {
  chats: state => state.chats,
  newchats: state => state.newchats,
  chatfriend: state => state.chatfriend,
  unopen: state => state.unopen
}

const actions = {
  [atypes.SAVE_TO_INDEXEDDB](context, payload) {
    return new Promise((resolve, reject) => {
      //保存到本地数据库
      Database.init(true).then(() => {
        context.commit(types.SAVE_TO_INDEXEDDB, payload)
        resolve()
      }).catch(error => {
        reject('保存聊天记录出错')
      })
    })
  }
}

const mutations = {
  [types.ADD_CHAT_CHATS](state, chats) {
    //添加聊天记录（多条）
    state.chats = chats
    //将未读消息添加到unopen
    state.unopen = state.chats.filter(item => item.unopen)
  },
  [types.ADD_CHAT_CHAT](state, chat) {
    chat.id = state.chats.length > 0 ? state.chats[state.chats.length - 1].id + 1 : 1
    //添加到chats
    state.chats.push(chat)
    //添加到newchats，以便在退出的时候保存到indexedDB
    state.newchats.push(chat)
    //如果是未读消息，添加到unopen
    if (chat.unopen) {
      state.unopen.push(chat)
    }
  },
  [types.UPDATE_CHAT_CHATFRIEND](state, friend) {
    //更新当前聊天好友
    state.chatfriend = friend
  },
  [types.UPDATE_CHAT_FAILED](state, payload) {
    //更新消息发送状态
    for (let i = 0; i < state.chats.length; i++) {
      if (state.chats[i].id === payload.id) {
        state.chats[i].failed = payload.failed
        break
      }
    }
    for (let i = 0; i < state.newchats.length; i++) {
      if (state.newchats[i].id === payload.id) {
        state.newchats[i].failed = payload.failed
        return
      }
    }
  },
  [types.CLEAR_CHAT_CHATS](state) {
    state.chatfriend = null
    state.chats.splice(0, state.chats.length)
    state.newchats.splice(0, state.newchats.length)
    state.unopen.splice(0, state.unopen.length)
    console.log('聊天记录已清除')
  },
  [types.SAVE_TO_INDEXEDDB](state, payload) {
    //保存到数据库
    for (let i = 0; i < state.newchats.length; i++) {
      if ((state.newchats[i].from == payload.userid && state.newchats[i].to == payload.friendid)
        || (state.newchats[i].from == payload.friendid && state.newchats[i].to == payload.userid)) {
        console.log('该消息的id',state.newchats[i].id)
        Database.add(state.newchats[i])
        state.newchats.splice(i, 1)
        i++
      }
    }
    //标记未读消息为已读
    for (let i = 0; i < state.unopen.length; i++) {
      if (state.unopen[i].from == payload.friendid) {
        state.unopen[i].unopen = false
        Database.put(state.unopen[i])
        state.unopen.splice(i, 1)
        i--
      }
    }
    Database.close()
  },
  [types.UPDATE_CHAT_UNOPEN](state) {
    
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
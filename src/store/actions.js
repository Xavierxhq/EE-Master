import atypes from './action-types'
import types from './types'
import Rongyun from '@/common/util/rongyun'

export default {
  [atypes.LOGOUT](context) {
    return new Promise((resolve, reject) => {
      //清空内存缓存
      context.commit(types.CLEAR_COURSE_COURSES)
      context.commit(types.CLEAR_FRIEND_FRIENDS)
      context.commit(types.CLEAR_HOMEWORK_HOMEWORKS)
      context.commit(types.CLEAR_NOTE_NOTES)
      context.commit(types.CLEAR_PLAN_PLAN)
      context.commit(types.CLEAR_CHAT_CHATS)
      context.commit(types.CLEAR)
      //清空本地storage内容
      let keys = Object.getOwnPropertyNames(Storage)
      for (let i = 0; i < keys.length; i++) {
        localStorage.removeItem(Storage[keys[i]])
      }
      //断开融云连接
      Rongyun.disconnect()
      //清空聊天数据库
      Database.deleteDatabase.then(() => {
        resolve()
      }).catch(error => {
        reject()
      })
    })
  }
}
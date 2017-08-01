<template>
  <div>
    <div class="title">
      <span class="glyphicon glyphicon-align-left" aria-hidden="true" @click="showMenu"></span>
      <span class="app-name">E.E.</span>
      <span class="glyphicon glyphicon-search" aria-hidden="true" @click="search"></span>
    </div>
    <!--侧滑的菜单栏-->
    <div class="menu" v-show="$store.getters.menuState">
      <transition name="slide-right">
        <div class="menu-left" v-show="$store.getters.menuState">
          <div class="menu-head">
            <span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true" @click="hideMenu"></span>
            <router-link to="/userdetail"><img class="menu-head-img" :src="user.headimg"></router-link>
            <router-link class="user-name menu-head-a" to="/userdetail">{{ user.name }}</router-link>
            <router-link class="user-intro menu-head-a" to="/userdetail">{{ user.intro }}</router-link>
          </div>
          <div class="menu-link">
            <router-link to="/course" class="menu-link-a">
                <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>课程
            </router-link>
            <router-link to="/note" class="menu-link-a">
                <span class="glyphicon glyphicon-tags" aria-hidden="true"></span>笔记
            </router-link>
            <router-link to="/homework" class="menu-link-a">
              <span class="glyphicon glyphicon-duplicate" aria-hidden="true"></span>作业
            </router-link>
            <router-link to="/plan" class="menu-link-a">
                <span class="glyphicon glyphicon-check" aria-hidden="true"></span>学习计划
            </router-link>
            <router-link to="/friend" class="menu-link-a">
              <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
              <span class="flex-1">好友</span>
              <badge size="small" v-if="unopen.length">
                <slot slot="name">{{unopen.length}}</slot>
              </badge>
            </router-link>
            <router-link to="/favorite" class="menu-link-a">
              <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>我的收藏
            </router-link>
            <router-link to="/setting" class="menu-link-a">
              <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>设置
            </router-link>
            <p class="menu-link-a" @click="logout">
              <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>退出登录
            </p>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="$store.getters.menuState" class="menu-mask" @click="hideMenu"></div>
      </transition>
    </div>
    <!--主页面-->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app-name {
  flex-grow: 1;
  color: #FFFFFF;
}

.menu {
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  z-index: 20;
}

.menu-mask {
  flex: 1;
  background-color: #000000;
  opacity: 0.7;
}

.menu-left {
  flex: 2;
  background-color: #FFFFFF;
  opacity: 1;
  box-shadow: 0px 2px 8px #AAAAAA;
}

.glyphicon-circle-arrow-left {
  float: right;
  right: 1rem;
  top: 1rem;
  font-size: 2rem;
}

.menu-head {
  padding: 0 0 1rem 0;
  width: 100%;
  background-color: #434343;
  box-shadow: 1px 1px 6px #727272;
  color: #FFFFFF;
}

.menu-head-img {
  margin: 4rem 0 1rem 1rem;
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.menu-head-a {
  display: block;
  padding: .2rem 0 .2rem 1rem;
  margin: 0;
  color: #FFFFFF;
}

.menu-link {
  padding: 1rem 0 1rem 0;
}

.menu-link-a {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 1.2rem;
  color: #323232;
  font-size: 14px;
  transition: all .4s;
}

.flex-1 {
  flex: 1;
}

.menu-link-a:hover,.menu-link-a:click {
  background-color: #EEE;
}

.menu-link-a .glyphicon {
  margin-right: 1.2rem;
}

.user-name {
  font-size: 16px;
}

.user-intro {
  width: 100%;
  font-size: 13px;
  color: #E9E9E9;
}
</style>

<script>
import { mapGetters } from 'vuex'
import types from '@/store/types'
import atypes from '@/store/action-types'
import { Toast,Badge,MessageBox,Indicator } from 'mint-ui'
import Database from '@/common/util/database'
import BottomTab from '@/components/bottom-tab/bottom-tab'

export default {
  name: 'hello',
  data() {
    return {
      ifMenuItems: false
    }
  },
  components: {
    Badge,
    BottomTab
  },
  mounted() {
    //还没有聊天记录，进行数据库读取
    if(this.chats.length < 1) {
      Database.init().then( () => {
        Database.select().then( result => {
          this.$store.commit(types.ADD_CHAT_CHATS, result)
          Database.close()
        }).catch(error => {
          console.log(error)
          Database.close()
          Toast({
            message: '发生了一些错误，读取本地聊天记录失败',
            position: 'bottom',
            duration: 2000
          })
        })
      }).catch(error => {
        console.log(error)
        Database.close()
        Toast({
          message: '发生了一些错误，读取本地聊天记录失败',
          position: 'bottom',
          duration: 3000
        })
      })
    }
  },
  beforeRouteLeave (to, from, next) {
    //跳转前执行判断，如为登录先进行登录
    if (to.path === '/login') {
    Toast({
        message: '请先登录',
        position: 'bottom',
        duration: 1500
      })
      next()
    } else if (to.path !== '/setting' && this.user.userid === 0) {
      next('/login')
    } else {
      next()
    }
  },
  methods: {
    showMenu() {
      this.$store.commit(types.UPDATE_MENU_STATE, true)
    },
    hideMenu() {
      this.$store.commit(types.UPDATE_MENU_STATE, false)
    },
    logout() {
      if(this.user.userid!==0) {
        MessageBox.confirm('是否注销？').then(action => {
          Indicator.open({
            text: '正在清除数据...',
            spinnerType: 'fading-circle'
          })
          this.$store.dispatch(atypes.LOGOUT).then(() => {
            Indicator.close()
          }).catch(() => {
            Indicator.close()
          })
        }).catch(cancle => {

        })
      } else {
        Toast({
          message: '你还未登录! 请先登录',
          position: 'bottom',
          duration: 2000
        })
      }
    },
    search() {
      
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'chats',
      'newchats',
      'unopen'
    ]),
  }
}
</script>
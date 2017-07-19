<template>
  <div class="">
    <mt-radio 
      align="right"
      title="您的身份？"
      v-model="useriden"
      :options="['教师','学生']">
    </mt-radio>
    <input class="login-input" placeholder="邮箱" v-model="email">
    <mt-spinner class="snake" type="snake" :size="13" color="#26A2FF" v-show="!emailValid && email"></mt-spinner>
    <input class="login-input" type="password" placeholder="密码" v-model="password">
    <div class="login-button" @click="goLogin">登 录</div>
    <div class="register-button" @click="goRegister">注 册</div>
  </div>
</template>

<style scoped>
.snake {
  display: inline-block;
  margin: 0;
  padding: 0;
}

.login-button {
  padding: 8px;
  margin: 12px auto 12px auto;
  width: 80%;
  background-color: #26A2FF;
  border-radius: 4px;
  font-size: 16px;
  color: #FFFFFF;
  font-weight: bold;
  text-align: center;
}

.register-button {
  padding: 8px;
  margin: 12px auto 12px auto;
  width: 80%;
  background-color: #FEFEFE;
  border: 1px solid #26A2FF;
  border-radius: 4px;
  font-size: 16px;
  color: #26A2FF;
  font-weight: bold;
  text-align: center;
}
</style>

<script>
import { mapGetters } from 'vuex'
import { Radio,Spinner,Toast } from 'mint-ui'
import Rongyun from '@/common/rongyun'

export default {
  name: 'Login',
  data() {
    return {
      useriden: '学生',
      email: '',
      password: '',
      emailValid: false
    }
  },
  components: {
    'mtRadio':Radio,
    'mtSpinner': Spinner
  },
  created() {

  },
  methods: {
    goLogin() {
      if(this.emailValid) {
        this.$common.http.post(this.$common.api.Login, {
          user: this.user.user,
          email: this.email,
          password: this.password
        }).then(response => {
          if ('[]' != response.data) {
            this.msg = '登录成功，即将跳转到主界面~'
            localStorage.setItem('user', this.user)
            localStorage.setItem('userid', response.data.id)
            localStorage.setItem('name', response.data.name)
            localStorage.setItem('headimg', response.data.headimg)
            localStorage.setItem('email', response.data.email)
            localStorage.setItem('password', response.data.password)
            localStorage.setItem('intro', response.data.intro)
            localStorage.setItem('token', response.data.token)
            //跳转到主页面
            setTimeout(() => {
              this.$router.push('/home')
            }, 500)
						Rongyun.setListenAndconnectRongyun()
          } else {
            //联网成功但登录失败
            Toast({
              message: '登录失败.请重新登录',
              duration: 2000,
              position: 'bottom'
            })
          }
        }).catch(error => {
        })
      } else {
        Toast({
          message: '请填写正确的邮箱',
          duration: 2000,
          position: 'bottom'
        })
      }
    },
    goRegister() {
      this.$router.push('/login/registerstep1')
    }
  },
  watch: {
    email(val) {
      const regex = new RegExp('[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[a-zA-Z]+')
      this.emailValid = regex.test(val)
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>

/**
 * 挂载到Vue实例上的对象，实现一些基础需要的对象和方法
 * api:每个请求对应的接口
 * http:自定义axios对象
 * jsonUtil:对Json字符串进行长度读取的方法封装
 * timeUtil:对日期操作的方法封装
 */

import Vue from 'Vue'
import axios from 'axios'
import router from '@/router'
import store from '@/store'
import { Indicator, Toast } from 'mint-ui'
import api from './data/api'

const BASEURL = 'http://10.253.16.12:8080/ExcellentEducation/'
//自定义axios对象，使用这个进行联网
const http = axios.create({
  baseURL: BASEURL,
  timeout: 50
})
// http request 拦截器
http.interceptors.request.use(function (config) {
  console.log('拦截发送的请求')
  Indicator.open({
    spinnerType: 'fading-circle'
  })
  //发送请求之前添加token参数
  if (config.data) {
    //给每个请求添加用户登录的token
    config.data = config.data + '&token=' + (localStorage.getItem(storage.token) || '0')
  }
  return config
}, function (error) {
  //请求错误时执行
  console.log('请求有错误')
  return Promise.reject(error)
})
// http response 拦截器
http.interceptors.response.use(
  response => {
    console.log('拦截相应信息')
    Indicator.close()
    return response
  },
  error => {
    Indicator.close()
    Toast({
      message: '网络出错啦 :(',
      position: 'bottom',
      duration: 2000,
    })
    console.log('响应信息有误')
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(types.RELEASE_LOGIN)
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
      }
    }
    return Promise.reject(error.response.data)
  })
//判断JSON数据的数据元素个数
const jsonUtil = {
  jsonLength: function (json) {
    let length = 0
    for (var item in json) {
      length++
    }
    return length
  }
}
//时间操作对象
const timeUtil = {
  formatNumber(number) {
    //格式化个位数
    return number < 10 ? '0' + number : number
  },
  getDate() {
    //获取一个格式化的日期
    const time = new Date()
    return time.getFullYear() + '-' + this.formatNumber(time.getMonth() + 1) + '-' + this.formatNumber(time.getDate())
  },
  getTime() {
    //获取一个格式化的时间
    const time = new Date()
    return time.getFullYear() + '-' + this.formatNumber(time.getMonth() + 1) + '-' + this.formatNumber(time.getDate()) +
      ' ' + this.formatNumber(time.getHours()) + ':' + this.formatNumber(time.getMinutes())
  },
  formatTime(time) {
    //格式化日期
    if (undefined === time) {
      time = new Date()
    }
    return time.getFullYear() + '-' + this.formatNumber(time.getMonth() + 1) + '-' + this.formatNumber(time.getDate()) +
      ' ' + this.formatNumber(time.getHours()) + ':' + this.formatNumber(time.getMinutes())
  }
}

export default {
  api,
  http,
  jsonUtil,
  timeUtil
}
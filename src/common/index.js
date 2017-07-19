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

//服务器项目地址
const BASEURL = 'http://10.253.16.12:8080/ExcellentEducation/'
//各个servlet的api接口
const api = {
  //作业列表
  HomeworkList: 'HomeworkListServletMobile',
  //已完成的某个作业的具体详情
  HomeworkFinishInfo: 'HomeworkfinishMessageServletMobile',
  //未完成的某个作业的详情
  HomeworkUnfinishInfo: 'HomeworkunfinishMessageServletMobile',
  //增加更新/作业
  HomeworkUpdate: 'HomeworkUpdateServletMobile',
  //获取学生学习计划
  PlanInfo: 'StudyplanListServletMobile',
  //增加/更新学生学习计划
  StudyPlanUpdate: 'StudyPlanUpdateServlet',
  //获取学生课程记录列表
  StudentCourseRecordList: 'RecordcourseListServletMobile',
  //获得学生好友列表
  StudentFriendList: 'FriendListServletMobile',
  //学生笔记列表
  StudentNoteList: 'GetStudentNoteListServletMobile',
  //获取学生笔记详情
  StudentNoteInfo: 'StudenntnoteMessageServletMobile',
  //更新/添加笔记
  StudentNoteUpdate: 'StudentnoteServletMobile',
  //用户注册
  Register: 'RegisterServletMobile',
  //用户登录
  Login: 'LoginServletMobile',
  //获取个人详细信息
  UserInfo: 'GetstudentInfoMobile',
  //个人信息修改
  InfoUpdate: 'InfoUpdateServletMobile'
}
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
          store.commit(types.LOGOUT)
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
    'use strict'
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
    'use strict'
    return number < 10 ? '0' + number : number
  },
  getDate() {
    'use strict'
    //获取一个格式化的日期
    const time = new Date()
    const timeStr = time.getFullYear() + '-' + this.formatNumber(time.getMonth() + 1) + '-' + this.formatNumber(time.getDate())
    return timeStr
  },
  getTime() {
    'use strict'
    //获取一个格式化的时间
    const time = new Date()
    const timeStr = time.getFullYear() + '-' + this.formatNumber(time.getMonth() + 1) + '-' + this.formatNumber(time.getDate()) +
      ' ' + this.formatNumber(time.getHours()) + ':' + this.formatNumber(time.getMinutes())
    return timeStr
  },
  formatTime(time) {
    'use strict'
    //格式化日期
    if (undefined === time) {
      time = new Date()
    }
    const timeStr = time.getFullYear() + '-' + this.formatNumber(time.getMonth() + 1) + '-' + this.formatNumber(time.getDate()) +
      ' ' + this.formatNumber(time.getHours()) + ':' + this.formatNumber(time.getMinutes())
    return timeStr
  }
}

export default {
  api,
  http,
  jsonUtil,
  timeUtil
}
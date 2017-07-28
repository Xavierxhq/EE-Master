/**
 * 用来实现 数字:字符串 间的转换
 */

export default {
  convertSubNumber(number) {
    'use strict';
    switch (number) {
      case 1:
        return '语文'
      case 2:
        return '数学'
      case 3:
        return '英语'
      case 4:
        return '物理'
      case 5:
        return '化学'
      case 6:
        return '生物'
      case 7:
        return '政治'
      case 8:
        return '历史'
      default:
        return '地理'
    }
  },
  convertGradeNumber(number) {
    'use strict'
    switch (number) {
      case 1:
        return '小学一年级'
      case 2:
        return '小学二年级'
      case 3:
        return '小学三年级'
      case 4:
        return '小学四年级'
      case 5:
        return '小学五年级'
      case 6:
        return '小学六年级'
      case 7:
        return '初一'
      case 8:
        return '初二'
      case 9:
        return '初三'
      case 10:
        return '高一'
      case 11:
        return '高二'
      default:
        return '高三'
    }
  },
  convertMark(mark) {
    'use strict'
    if ('小学一年级' == mark || '语文' == mark) {
      return 1
    } else if ('小学二年级' == mark || '数学' == mark) {
      return 2
    } else if ('小学三年级' == mark || '英语' == mark) {
      return 3
    } else if ('小学四年级' == mark || '物理' == mark) {
      return 4
    } else if ('小学五年级' == mark || '化学' == mark) {
      return 5
    } else if ('小学六年级' == mark || '生物' == mark) {
      return 6
    } else if ('初一' == mark || '政治' == mark) {
      return 7
    } else if ('初二' == mark || '历史' == mark) {
      return 8
    } else if ('初三' == mark || '地理' == mark) {
      return 9
    } else if ('高一' == mark) {
      return 10
    } else if ("高二" == mark) {
      return 11
    } else if ('高三' == mark) {
      return 12
    }
  },
  convertGender(gender) {
    'use strict'
    return '男' === gender ? 1 : 2
  }
}
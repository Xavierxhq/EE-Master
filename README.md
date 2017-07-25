# excellent-education

> 挑战杯项目-家教平台

## Build Setup

#### 将以下代码中的 npm 替换成 cnpm(前提是你的电脑已经安装了npm并配置了淘宝镜像)
#### 这里使用到前两句就够了，会自动打开浏览器的
``` bash
# 安装依赖
npm install

# 运行项目（已配置热加载）
npm run dev

# 生成（打包）项目
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

#### 更新日志 2017-07-25
- 添加404页面

#### 更新日志 2017-07-25
- 改善聊天功能
- 改boostrap为CND方式引入
- 修改为 更多使用js原生语法

#### 更新日志 2017-07-19

- 重构项目，使用 vue+vue-loader+vuex+vue-router+axios+融云云平台 进行开发
- 功能：  
  1.登录/注册  
  2.显示信息，包括 课程/笔记/作业/计划/个人信息  
  3.聊天功能，支持本地聊天记录存储，可清空  
  4.注销功能，目前只支持对缓存、个人信息、聊天记录进行清空  
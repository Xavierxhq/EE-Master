export default [
    {
      path: '/home',
      component: resolve => require(['@/components/Home'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['@/components/bottom-tab/bottom-tab'], resolve),
          children: [
          {
            path: 'forum',
            component:resolve => require(['@/components/forum/forum'], resolve),
            children: [
            {
              path: 'forum-news',
              component:resolve => require(['@/components/forum/forum-news'], resolve),              
            },
            {
              path: 'forum-say',
              component:resolve => require(['@/components/forum/forum-say'], resolve),              
            }
            ]
          },
          {
            path: 'teacher',
            component:resolve => require(['@/components/teacher/teacher'], resolve)
          },
          {
            path: 'cbroom',
            component:resolve => require(['@/components/cbroom/cbroom'], resolve)
          }]
        }
        ]
    }
]
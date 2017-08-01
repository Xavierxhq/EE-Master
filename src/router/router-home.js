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
            component: resolve => require(['@/components/teacher/teacher'], resolve),
            children: [
              {
                path: ':teachermark',
                component:resolve => require(['@/components/teacher/teacher-list'], resolve),
              }
            ]
          },
          {
      path: '/cbroom',
      component: resolve => require(['@/components/cbroom/cbroom'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['@/components/cbroom/microlecture'], resolve)
        },
        {
          path: 'curriculum',
          component: resolve => require(['@/components/cbroom/curriculum'], resolve)
        }
      ]
    },
          {
            path: 'cbroom',
            component:resolve => require(['@/components/cbroom/cbroom'], resolve)
          }]
        }]
    },{
      path: '/newsdetail/:newsid/title/:newstitle',
      component: resolve => require(['@/components/forum/forum-news-detail'], resolve)
    },
    {
      path: '/microlecturedetail/:courseid/title/:content',
      name: 'MicrolectureDetail',
      component: resolve => require(['@/components/cbroom/microlectureDetail'], resolve)
    },
    {
      path: '/curriculumdetail/:courseid/title/:content',
      name: 'CurriculumDetail',
      component: resolve => require(['@/components/cbroom/curriculumDetail'], resolve)
    },
    {
      path: '/saysdetail/:saysid/title/:saystitle',
      component: resolve => require(['@/components/forum/forum-say-detail'], resolve)
    },{
      path: '/chinadetail/:chinaid/name/:chinaname',
      component: resolve => require(['@/components/teacher/teacher-china-detail'], resolve)
  },{
      path: '/mathdetail/:mathid/name/:mathname',
      component: resolve => require(['@/components/teacher/teacher-math-detail'], resolve)
  },{
      path: '/englishdetail/:englishid/name/:englishname',
      component: resolve => require(['@/components/teacher/teacher-english-detail'], resolve)
  },{
      path: '/physicaldetail/:physicalid/name/:physicalname',
      component: resolve => require(['@/components/teacher/teacher-physical-detail'], resolve)
  },{
      path: '/chemistrydetail/:chemistryid/name/:chemistryname',
      component: resolve => require(['@/components/teacher/teacher-chemistry-detail'], resolve)
  },{
      path: '/biologicaldetail/:biologicalid/name/:biologicalname',
      component: resolve => require(['@/components/teacher/teacher-biological-detail'], resolve)
  },{
      path: '/politicaldetail/:politicalid/name/:politicalname',
      component: resolve => require(['@/components/teacher/teacher-political-detail'], resolve)
  },{
      path: '/historydetail/:historyid/name/:historyname',
      component: resolve => require(['@/components/teacher/teacher-history-detail'], resolve)
  },{
      path: '/geographydetail/:geographyid/name/:geographyname',
      component: resolve => require(['@/components/teacher/teacher-geography-detail'], resolve)
  }
  ]
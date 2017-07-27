export default [
  {
    path: '/home',
    component: resolve => require(['@/components/Home'], resolve),
    children: [
    ]
  }
]
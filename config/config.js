export default {
  plugins: [
    ['umi-plugin-react',{
      antd: true,
      dva: true,
      locale: {
        enable: true,
        default: 'zh-CN',
        baseNavigator: true
      }
    }]
  ],
  routes: [{
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/dashboard/analysis' },
      {
        path: '/dashboard',
        routes: [{
          path: '/dashboard/analysis',
          component: './Dashboard/Analysis'
        }]
      }
    ]
  }]
}
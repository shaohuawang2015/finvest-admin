
// 注意：为了减小构建产物的大小以及提升构建速度，你不需要的页面请从路由中删除对应路由配置
// 更多路由配置参考文档 https://bigfish.alipay.com/doc/hl8woq
export default [
  {
    path: '/',
    component: '../layout/BasicLayout',
    indexRoute: {
      redirect: '/dashboard/analysis',
    },
    routes: [
      // dashboard
      {
        path: 'dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: 'analysis',
            name: 'analysis',
            component: 'Dashboard/Analysis',
          },
          {
            path: 'monitor',
            name: 'monitor',
            component: 'Dashboard/Monitor',
          },
          {
            path: 'workplace',
            name: 'workplace',
            component: 'Dashboard/Workplace',
          },
        ],
      },
      // forms
      {
        path: 'form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: 'basic-form',
            name: 'basicform',
            component: 'Forms/BasicForm',
          },
          {
            path: 'step-form',
            name: 'stepform',
            component: 'Forms/StepForm',
            hideChildrenInMenu: true,
            indexRoute: {
              redirect: '/form/step-form/info',
            },
            routes: [
              {
                path: 'info',
                name: 'info',
                component: 'Forms/StepForm/Step1',
              },
              {
                path: 'confirm',
                name: 'confirm',
                component: 'Forms/StepForm/Step2',
              },
              {
                path: 'result',
                name: 'result',
                component: 'Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: 'advanced-form',
            name: 'advancedform',
            component: 'Forms/AdvancedForm',
          },
        ],
      },
      // list
      {
        path: 'list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: 'table-list',
            name: 'searchtable',
            component: 'List/TableList',
          },
          {
            path: 'basic-list',
            name: 'basiclist',
            component: 'List/BasicList',
          },
          {
            path: 'card-list',
            name: 'cardlist',
            component: 'List/CardList',
          },
          {
            path: 'search',
            name: 'searchlist',
            component: 'List/List',
            routes: [
              {
                path: 'articles',
                name: 'articles',
                component: 'List/Articles',
              },
              {
                path: 'projects',
                name: 'projects',
                component: 'List/Projects',
              },
              {
                path: 'applications',
                name: 'applications',
                component: 'List/Applications',
              },
            ],
          },
        ],
      },
      {
        path: 'profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: 'basic',
            name: 'basic',
            component: 'Profile/BasicProfile',
          },
          {
            path: 'advanced',
            name: 'advanced',
            component: 'Profile/AdvancedProfile',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: 'result',
        routes: [
          // result
          {
            path: 'success',
            name: 'success',
            component: 'Result/Success',
          },
          { path: 'fail', name: 'fail', component: 'Result/Error' },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: 'exception',
        routes: [
          // exception
          {
            path: 'exception/part',
            name: 'auth-part',
            component: 'Exception/PartAuth',
          },
          {
            path: 'exception/route',
            name: 'auth-route',
            auth: {
              and: ['1']
            },
            component: 'Exception/RouteAuth',
          },
          {
            path: '403',
            name: 'not-permission',
            component: 'Exception/403',
          },
          {
            path: '404',
            name: 'not-find',
            component: 'Exception/404',
          },
          {
            path: '500',
            name: 'server-error',
            component: 'Exception/500',
          },
          {
            path: 'trigger',
            name: 'trigger',
            hideInMenu: true,
            component: 'Exception/TriggerException',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: 'account',
        routes: [
          {
            path: 'center',
            name: 'center',
            component: 'Account/Center/Center',
            indexRoute: {
              redirect: '/account/center/articles',
            },
            routes: [
              {
                path: 'articles',
                component: 'Account/Center/Articles',
              },
              {
                path: 'applications',
                component: 'Account/Center/Applications',
              },
              {
                path: 'projects',
                component: 'Account/Center/Projects',
              },
            ],
          },
          {
            path: 'settings',
            name: 'settings',
            component: 'Account/Settings/Info',
            indexRoute: {
              redirect: '/account/settings/base',
            },
            routes: [
              {
                path: 'settings',
                redirect: '/account/settings/base',
              },
              {
                path: 'base',
                component: 'Account/Settings/BaseView',
              },
              {
                path: 'security',
                component: 'Account/Settings/SecurityView',
              },
              {
                path: 'binding',
                component: 'Account/Settings/BindingView',
              },
              {
                path: 'notification',
                component: 'Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];

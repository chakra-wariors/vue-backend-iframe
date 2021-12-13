import Main from '@/components/main'

/**
 * 页面路由（顶部导航）
 * meta: {
 *  title: 标题
 *  src: iframe内嵌页
 * }
 */

export default [
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true
        },
        component: () => import('@/view/single-page/index')
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      title: '组件'
    },
    component: Main,
    children: [
      {
        path: 'tree_select_page',
        name: 'tree_select_page',
        meta: {
          title: '树状下拉选择器',
          src: 'https://www.yuque.com/about/organization'
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          title: '数字渐变',
          src: 'https://www.yuque.com/about/security'
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: 'drag_list_page',
        name: 'drag_list_page',
        meta: {
          title: '拖拽列表',
          src: 'https://www.yuque.com/about/organization'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/tools_methods',
    name: 'tools_methods',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'tools_methods_page',
        name: 'tools_methods_page',
        meta: {
          title: '工具方法',
          src: 'https://www.yuque.com/yuque/topics'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  }
]

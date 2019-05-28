import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('pages/index.vue')
    },
    {
      path: '/recursion',
      name: 'Recursion',
      component: () => import('pages/recursion.vue')
    }
  ]
})

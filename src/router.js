import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/components/RequiresAuthenticationResource')
    },
    {
      path: '/non-existent',
      component: () => import('@/components/NonExistentResource')
    }
  ]
})

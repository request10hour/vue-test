import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: () => import('../components/MainComponent.vue'),
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../components/ExploreComponent.vue'),
    },
    {
      path: '/send',
      name: 'send',
      component: () => import('../components/SendComponent.vue'),
    },
  ]
})

export default router

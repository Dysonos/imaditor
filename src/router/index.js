import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/crop',
      name: 'crop',
      component: () => import('../views/crop.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/privacy.vue')
    }
  ]
})

export default router

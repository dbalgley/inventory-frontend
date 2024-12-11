import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BinList from '@/components/BinList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/bins/:binId',
      name: 'Bin',
      component: () => import('../components/BinPage.vue'),
      props: route => ({ binId: Number(route.params.binId) }),
    },
    {
      path: '/locations/:locationId',
      name: 'Location',
      component: () => import('../components/BinList.vue'),
      props: route => ({ locationId: Number(route.params.locationId) }),
    }
  ]
})

export default router

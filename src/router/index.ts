import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/about',
    component: () => import ('../views/AboutPage.vue')
  },
  {
    path: '/places',
    component: () => import ('../views/PlacesPage.vue')
  },
  {
    path: '/search',
    component: () => import ('../views/SearchPage.vue')
  },
  {
    path: '/view/:cat',
    component: () => import ('../views/PreviewPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

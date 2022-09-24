import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MaterialyDoNauki from '../views/MaterialyDoNauki.vue'
import Zadania from '../views/Zadania.vue'
import GaleriaProjektow from '../views/GaleriaProjektow.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/materialydonauki',
      name: 'MaterialyDoNauki',
      component: MaterialyDoNauki
    },
    {
      path: '/zadania',
      name: 'Zadania',
      component: Zadania
    },
    {
      path: '/galeriaprojektow',
      name: '/GaleriaProjektow',
      component: GaleriaProjektow
    },
  ]
})

export default router;

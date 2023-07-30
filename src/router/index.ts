import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MaterialyDoNauki from '../views/MaterialyDoNauki.vue'
import Zadania from '../views/Zadania.vue'
import GaleriaProjektow from '../views/GaleriaProjektow.vue'
import GaleriaProjektowHome from '../views/GaleriaProjektowHome.vue'
import Gra from '../views/Gra.vue'
import Cuszima from '../views/projekty/Cuszima.vue'

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
      name: 'GaleriaProjektow',
      component: GaleriaProjektow,
      children: [    
        {
          path: '',
          name: 'GaleriaProjektow',
          component: GaleriaProjektowHome,
        },
        {
          path: 'cuszima',
          name: 'Cuszima',
          component: Cuszima,
          meta: {
            navigation: false,
            halo: 'XD'
          },
        }
      ]
    },
  {
    path: '/gra',
    name: 'Gra',
    component: Gra
  },
  ]
})

export default router;

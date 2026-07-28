import { createRouter, createWebHistory } from 'vue-router'
import TelaInicial from '@/views/TelaInicial.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TelaInicial
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
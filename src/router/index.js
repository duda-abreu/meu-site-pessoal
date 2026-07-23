import { createRouter, createWebHistory } from 'vue-router'
import TelaInicial from '@/views/TelaInicial.vue'
import MinhasExperiencias from '@/views/MinhasExperiencias.vue'
import AsTecnologias from '@/views/AsTecnologias.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TelaInicial
  },
  {
    path: '/experiencias',
    name: 'Experiencias',
    component: MinhasExperiencias
  },
  {
    path: '/skills',
    name: 'Skills',
    component: AsTecnologias
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
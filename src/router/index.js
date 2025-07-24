import { createRouter, createWebHistory } from 'vue-router';
import TelaInicial from '@/views/TelaInicial.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TelaInicial
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

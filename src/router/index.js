import { createRouter, createWebHistory } from 'vue-router';
import TelaInicial from '@/views/Tela-Inicial.vue';
import Sobre from '@/views/MinhaBio.vue';
import Certificados from '@/views/MeusCertificados.vue';
import Skills from '@/views/AsTecnologias.vue';
import Experiencias from '@/views/MinhasExperiencias.vue';

const routes = [
  { path: '/', name: 'Home', component: TelaInicial },
  { path: '/sobre', name: 'Sobre', component: Sobre },
  { path: '/certificados', name: 'Certificados', component: Certificados },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/experiencias', name: 'Experiencias', component: Experiencias }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

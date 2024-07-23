import { createApp } from 'vue';
import App from './App.vue';
import './styles.css';  // Importando o arquivo de estilos globais
import router from './router'; // Importa o roteador

const app = createApp(App);

app.use(router); // Usa o roteador

app.mount('#app');

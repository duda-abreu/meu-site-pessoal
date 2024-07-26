<template>
  <div id="app">
    <TheNavegacao />
    <div class="content">
      <router-view></router-view> <!-- Use router-view para mostrar as rotas -->
    </div>
  </div>
</template>

<script>
import TheNavegacao from './components/TheNavegacao.vue';
import './styles.css'; // Importa o CSS

export default {
  components: {
    TheNavegacao
  }
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden; /* Remove a rolagem horizontal */
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #C0C0C0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: rgb(39,30,45);
background: linear-gradient(90deg, rgba(39,30,45,1) 0%, rgba(83,49,83,1) 90%, rgba(92,58,92,1) 100%);
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column; /* Alinha os itens na vertical */
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}
</style>
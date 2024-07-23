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
import './styles.css'; // Import external CSS file

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
  color: #533153;
  background-color: #F9DBD4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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


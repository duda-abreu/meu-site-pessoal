<template>
  <div id="app">
    <TheNavegacao />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheNavegacao from './components/TheNavegacao.vue';

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
  color: #942f18;
  background-color: #F9DBD4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}
</style>

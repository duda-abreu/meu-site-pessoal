<template>
  <div id="app">
    <!-- Bola fixa de gradiente no fundo -->
    <div class="background-gradient-ball"></div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  background: radial-gradient(circle at 80% 20%, rgba(152, 103, 152, 0.6), #3e1d56 60%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  margin: 0;
}
</style>

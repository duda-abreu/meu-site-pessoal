<template>
  <div id="app">
    <SideMenu />
    <div class="background-gradient-ball"></div>
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";

export default {
  name: "App",
  components: {
    SideMenu
  }
};
</script>

<style>
body {
  background: radial-gradient(circle at 80% 20%, rgba(155, 154, 155, 0.6), #1c1c1c);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  margin: 0;
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-content {
  width: 100%;
  padding-top: 100px;
}
</style>
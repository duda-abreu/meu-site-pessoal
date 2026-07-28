<template>
  <div id="app">
    <BackgroundDecor />
    <SideMenu />
    <div class="page-content">
      <router-view />
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import BackgroundDecor from "@/components/BackgroundDecor.vue";

export default {
  name: "App",
  components: {
    SideMenu,
    SiteFooter,
    BackgroundDecor
  }
};
</script>

<style>
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
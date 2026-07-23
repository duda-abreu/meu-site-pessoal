<template>
  <div id="tela-inicial">
    <HomeSection />
  </div>
</template>

<script>
import HomeSection from '@/components/HomeSection.vue';

export default {
  name: 'TelaInicial',
  components: {
    HomeSection
  }
};
</script>

<style scoped>
#tela-inicial {
  width: 100%;
  height: calc(100vh - 100px); 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
}
</style>
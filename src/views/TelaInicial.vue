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
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  #tela-inicial {
    min-height: auto;
    padding-top: 80px;
    padding-bottom: 40px;
    overflow: visible;
  }
}
</style>
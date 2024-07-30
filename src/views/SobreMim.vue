<template>
  <div class="sobre-container">
    <ImageSection />
  </div>
</template>

<script>
import ImageSection from '@/components/ImageSection.vue';

export default {
  components: {
    ImageSection
  }
};
</script>

<style scoped>
.sobre-container {
  padding: 20px;
  text-align: center;
}

@media (max-width: 600px) {
  .sobre-container {
    padding: 10px; 
  }
}
</style>